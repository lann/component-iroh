// Driver: wire the bridge, start the guest, and let it run its
// two-endpoint relay echo. The guest prints its own results; this driver
// adds a watchdog and the shim/bridge counters.

import { performance } from "node:perf_hooks";
import { stats } from "./shim.mjs";
import { bridgeStats } from "./bridge.mjs";

const WATCHDOG_MS = Number(process.env.WATCHDOG_MS ?? 120_000);

const watchdog = setTimeout(() => {
  console.error(`[driver] watchdog: guest did not finish in ${WATCHDOG_MS}ms`);
  console.error(`[driver] stats: ${JSON.stringify({ ...stats, ...bridgeStats })}`);
  process.exit(1);
}, WATCHDOG_MS);

const t0 = performance.now();
const { run } = await import("./generated/iroh-relay-ws.js");
console.log(`[driver] instantiated in ${(performance.now() - t0).toFixed(1)}ms`);

await run.run();
clearTimeout(watchdog);

console.log(
  `[driver] done in ${((performance.now() - t0) / 1000).toFixed(1)}s; ` +
    `polls=${stats.pollCalls} (suspended ${stats.pollSuspends}) ` +
    `datagrams in/out=${stats.datagramsIn}/${stats.datagramsOut} ` +
    `ws connections=${bridgeStats.connections} ws msgs in/out=${bridgeStats.wsIn}/${bridgeStats.wsOut}`,
);
