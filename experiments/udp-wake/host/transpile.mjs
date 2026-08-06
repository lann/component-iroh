// Transpile the probe guest with the repo's pinned jco fork, marking the
// blocking WASI imports (`wasi:io/poll#poll`, `pollable.block`, blocking
// stream writes) as JSPI-suspending and `wasi:cli/run#run` as an async
// export — the `asyncWasiImports` porcelain. Every wasi interface maps to
// the synthetic shim next to this script.
import { transpile, writeFiles } from "@bytecodealliance/jco-transpile";

const SHIM = "../shim.mjs"; // relative to generated/udp-wake.js

// interface -> camelCase export name in shim.mjs
const IFACES = {
  "wasi:cli/environment@0.2.9": "environment",
  "wasi:cli/exit@0.2.9": "exit",
  "wasi:cli/stdin@0.2.9": "stdin",
  "wasi:cli/stdout@0.2.9": "stdout",
  "wasi:cli/stderr@0.2.9": "stderr",
  "wasi:cli/terminal-input@0.2.9": "terminalInput",
  "wasi:cli/terminal-output@0.2.9": "terminalOutput",
  "wasi:cli/terminal-stdin@0.2.9": "terminalStdin",
  "wasi:cli/terminal-stdout@0.2.9": "terminalStdout",
  "wasi:cli/terminal-stderr@0.2.9": "terminalStderr",
  "wasi:clocks/monotonic-clock@0.2.9": "monotonicClock",
  "wasi:clocks/wall-clock@0.2.9": "wallClock",
  "wasi:io/error@0.2.9": "error",
  "wasi:io/poll@0.2.9": "poll",
  "wasi:io/streams@0.2.9": "streams",
  "wasi:random/insecure-seed@0.2.9": "insecureSeed",
  "wasi:sockets/network@0.2.9": "network",
  "wasi:sockets/instance-network@0.2.9": "instanceNetwork",
  "wasi:sockets/udp@0.2.9": "udp",
  "wasi:sockets/udp-create-socket@0.2.9": "udpCreateSocket",
  "wasi:sockets/tcp@0.2.9": "tcp",
  "wasi:sockets/tcp-create-socket@0.2.9": "tcpCreateSocket",
};

const map = Object.fromEntries(
  Object.entries(IFACES).map(([iface, name]) => [iface, `${SHIM}#${name}`]),
);
// The composed probe's generic event source (unused by the single probe).
map["probe:source/events@0.0.1"] = `${SHIM}#sourceEvents`;

const targets = [
  {
    input: "../guest/target/wasm32-wasip2/release/iroh-udp-wake-guest.wasm",
    name: "udp-wake",
    outDir: "generated",
  },
  {
    input: "../composed.wasm",
    name: "udp-wake-composed",
    outDir: "generated-composed",
  },
];

for (const t of targets) {
  const { files } = await transpile(t.input, {
    name: t.name,
    asyncMode: "jspi",
    asyncWasiImports: true,
    asyncWasiExports: true,
    map,
    outDir: t.outDir,
  });
  await writeFiles(files);
  console.log(`transpiled ${t.name}: ${Object.keys(files).length} files`);
}
