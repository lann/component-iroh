// Execution-model probe runner (Node 24+, JSPI): the jco leg of the
// exec-model experiment. Prints one `PROBE <name>: <outcome>` line per
// probe; see ../../experiments/exec-model/wit/world.wit.
import { probe } from "../generated-exec/exec-model.js";

function print(name, outcome) {
  console.log(`PROBE ${name}: ${outcome}`);
}

/** Count items from a ReadableStream chunk (jco may deliver numbers or
 * typed-array chunks; report what it was). */
function chunkLen(value) {
  if (typeof value === "number") return 1;
  if (value && typeof value.length === "number") return value.length;
  return 1;
}

async function main() {
  try {
    print("blockon-in-spawn", `ok: ${await probe.blockonInSpawn()}`);
  } catch (err) {
    print("blockon-in-spawn", `FAILED: ${err}`);
  }

  try {
    await probe.startPump();
    print("blockon-in-detached-pump", `ok: ${await probe.pollPump()}`);
  } catch (err) {
    print("blockon-in-detached-pump", `FAILED: ${err}`);
  }

  try {
    const stream = await probe.openStream(5000, 1000);
    let count = 0;
    let kind = "?";
    let reads = 0;
    for (;;) {
      const { done, value } = await stream.read({ count: 4096 });
      if (value !== undefined) {
        kind = value?.constructor?.name ?? typeof value;
        count += chunkLen(value);
      }
      reads += 1;
      if (done) break;
    }
    const outcome = await probe.streamOutcome();
    print(
      "export-stream-complete",
      `ok: host read ${count} in ${reads} reads (${kind}), guest: ${outcome}`,
    );
  } catch (err) {
    print("export-stream-complete", `FAILED: ${err}`);
  }

  try {
    const stream = await probe.openStream(100000, 1000);
    let count = 0;
    while (count < 2500) {
      const { done, value } = await stream.read({ count: 1024 });
      if (value !== undefined) count += chunkLen(value);
      if (done) break;
    }
    await stream.return();
    const outcome = await probe.streamOutcome();
    print("export-stream-reader-drop", `ok: host read ${count}, guest: ${outcome}`);
  } catch (err) {
    print("export-stream-reader-drop", `FAILED: ${err}`);
  }

  try {
    // Small on purpose: jco 0.5.2 pumps host-provided iterables one
    // element per write (see the timing this prints).
    const total = 500;
    const t0 = Date.now();
    function* bytes() {
      for (let i = 0; i < total; i++) yield 0x33;
    }
    const counted = await probe.sinkStream(bytes());
    print("import-stream-sink", `ok: guest counted ${counted} bytes in ${Date.now() - t0} ms`);
  } catch (err) {
    print("import-stream-sink", `FAILED: ${err}`);
  }

  console.log("exec-model probes complete");
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error("exec-model failed:", err);
    process.exit(1);
  },
);
