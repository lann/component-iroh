// Driver for the udp-wake probe.
//
// Starts the guest (a JSPI-promising `wasi:cli/run#run` export), waits for
// it to bind the synthetic UDP socket, then — from plain JS timers, i.e.
// events tokio's reactor cannot see — injects datagrams and measures how
// long the parked guest takes to echo each one back. Ends with "quit",
// awaits guest exit, and reports latency percentiles plus poll-call
// counts (parking vs busy-looping is visible in the numbers).

import { performance } from "node:perf_hooks";
import {
  injectDatagram,
  onSend,
  socketBound,
  stats,
} from "./shim.mjs";

const EVENTS = Number(process.env.EVENTS ?? 200);
const IDLE_MS = Number(process.env.IDLE_MS ?? 1000);

const enc = new TextEncoder();
const dec = new TextDecoder();

// payload seq -> { t0, resolve }
const inflight = new Map();
const latencies = [];

onSend(({ data }) => {
  const text = dec.decode(data);
  const entry = inflight.get(text);
  if (!entry) {
    console.log(`[driver] unexpected echo: ${JSON.stringify(text)}`);
    return;
  }
  inflight.delete(text);
  latencies.push(performance.now() - entry.t0);
  entry.resolve();
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const FROM = { tag: "ipv4", val: { port: 9999, address: [127, 0, 0, 1] } };

function percentile(sorted, p) {
  const i = Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1);
  return sorted[Math.max(0, i)];
}

const t0 = performance.now();
const { run } = await import("./generated/udp-wake.js");
console.log(`[driver] instantiated in ${(performance.now() - t0).toFixed(1)}ms`);

const runDone = (async () => {
  await run.run();
  return performance.now();
})();

await socketBound;
console.log("[driver] guest bound the socket");

// Phase 1: burst-free injections with jitter, from JS timer callbacks.
for (let i = 0; i < EVENTS; i++) {
  await sleep(2 + Math.random() * 10);
  const payload = `evt-${i}`;
  const t = performance.now();
  const echoed = new Promise((resolve) =>
    inflight.set(payload, { t0: t, resolve }),
  );
  injectDatagram(enc.encode(payload), FROM);
  await echoed;
}
console.log(`[driver] ${EVENTS} echoes complete`);

// Phase 2: idle stretch — only the guest's 200ms interval should run.
const pollsBeforeIdle = stats.pollCalls;
await sleep(IDLE_MS);
const idlePolls = stats.pollCalls - pollsBeforeIdle;
console.log(
  `[driver] idle ${IDLE_MS}ms: ${idlePolls} poll calls (${(
    (idlePolls * 1000) /
    IDLE_MS
  ).toFixed(1)}/s)`,
);

// Phase 3: quit and drain.
injectDatagram(enc.encode("quit"), FROM);
await runDone;
console.log("[driver] guest exited");

latencies.sort((a, b) => a - b);
const fmt = (v) => `${v.toFixed(3)}ms`;
console.log(`
== udp-wake probe results ==
events            ${latencies.length}
inject->echo p50  ${fmt(percentile(latencies, 50))}
inject->echo p90  ${fmt(percentile(latencies, 90))}
inject->echo p99  ${fmt(percentile(latencies, 99))}
inject->echo max  ${fmt(percentile(latencies, 100))}
poll calls        ${stats.pollCalls} (suspended: ${stats.pollSuspends}, block(): ${stats.blocks})
datagrams         injected=${stats.injected} sent-by-guest=${stats.sent}
idle poll rate    ${((idlePolls * 1000) / IDLE_MS).toFixed(1)}/s over ${IDLE_MS}ms (expect ~${(
  1000 / 200 +
  1
).toFixed(0)}/s from the 200ms interval)
`);

if (inflight.size > 0) {
  console.error(`[driver] ERROR: ${inflight.size} echoes never arrived`);
  process.exit(1);
}
