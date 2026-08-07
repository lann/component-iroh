// Browser driver: the run.mjs flow without Node specifics, reporting the
// outcome on `globalThis.__spike` for the Playwright harness
// (browser-test.mjs) to await and assert on.

import { stats } from "./shim.mjs";
import { bridgeStats } from "./bridge.mjs";
import { webrtcStats } from "./webrtc-bridge.mjs";

const t0 = performance.now();
try {
  const { run } = await import("./generated/iroh-relay-ws.js");
  console.log(`[driver] instantiated in ${(performance.now() - t0).toFixed(1)}ms`);
  await run.run();
  const summary =
    `[driver] done in ${((performance.now() - t0) / 1000).toFixed(1)}s; ` +
    `polls=${stats.pollCalls} (suspended ${stats.pollSuspends}) ` +
    `datagrams in/out=${stats.datagramsIn}/${stats.datagramsOut} ` +
    `ws connections=${bridgeStats.connections} ws msgs in/out=${bridgeStats.wsIn}/${bridgeStats.wsOut} ` +
    `webrtc channels=${webrtcStats.channelsOpened} msgs in/out=${webrtcStats.in}/${webrtcStats.out} ` +
    `dropped-connecting=${webrtcStats.droppedWhileConnecting}`;
  console.log(summary);
  document.getElementById("log").textContent = summary;
  globalThis.__spike = { ok: true };
} catch (err) {
  console.error(`[driver] failed: ${err?.stack ?? err}`);
  document.getElementById("log").textContent = `failed: ${err}`;
  globalThis.__spike = { ok: false, error: String(err?.stack ?? err) };
}
