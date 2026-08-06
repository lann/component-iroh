// Shared driver for both probes (single-component and composed): start the
// guest, wait until it is receiving, inject EVENTS payloads from JS timer
// callbacks measuring inject->echo latency, hold an idle stretch (only the
// guest's own 200ms interval should poll), then quit and report.

import { performance } from "node:perf_hooks";
import { onSend, stats } from "./shim.mjs";

const EVENTS = Number(process.env.EVENTS ?? 200);
const IDLE_MS = Number(process.env.IDLE_MS ?? 1000);

const enc = new TextEncoder();
const dec = new TextDecoder();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function percentile(sorted, p) {
  const i = Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1);
  return sorted[Math.max(0, i)];
}

export async function drive({ label, modulePath, inject, ready }) {
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

  const t0 = performance.now();
  const { run } = await import(modulePath);
  console.log(`[driver] instantiated in ${(performance.now() - t0).toFixed(1)}ms`);

  const runDone = (async () => {
    await run.run();
  })();

  await ready;
  console.log("[driver] guest is receiving");

  for (let i = 0; i < EVENTS; i++) {
    await sleep(2 + Math.random() * 10);
    const payload = `evt-${i}`;
    const t = performance.now();
    const echoed = new Promise((resolve) => inflight.set(payload, { t0: t, resolve }));
    inject(enc.encode(payload));
    await echoed;
  }
  console.log(`[driver] ${EVENTS} echoes complete`);

  const pollsBeforeIdle = stats.pollCalls;
  await sleep(IDLE_MS);
  const idlePolls = stats.pollCalls - pollsBeforeIdle;

  inject(enc.encode("quit"));
  await runDone;
  console.log("[driver] guest exited");

  latencies.sort((a, b) => a - b);
  const fmt = (v) => `${v.toFixed(3)}ms`;
  console.log(`
== udp-wake probe results (${label}) ==
events            ${latencies.length}
inject->echo p50  ${fmt(percentile(latencies, 50))}
inject->echo p90  ${fmt(percentile(latencies, 90))}
inject->echo p99  ${fmt(percentile(latencies, 99))}
inject->echo max  ${fmt(percentile(latencies, 100))}
poll calls        ${stats.pollCalls} (suspended: ${stats.pollSuspends}, block(): ${stats.blocks})
datagrams         injected=${stats.injected} sent-by-guest=${stats.sent}
idle poll rate    ${((idlePolls * 1000) / IDLE_MS).toFixed(1)}/s over ${IDLE_MS}ms (expect ~6/s from the 200ms interval)
`);

  if (inflight.size > 0) {
    console.error(`[driver] ERROR: ${inflight.size} echoes never arrived`);
    process.exit(1);
  }
}
