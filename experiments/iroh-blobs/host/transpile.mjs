// Transpile the spike guest with the repo's pinned jco fork: blocking WASI
// imports suspend via JSPI (asyncWasiImports) and `wasi:cli/run#run` is a
// promising export (asyncWasiExports). Every wasi interface maps to the
// shim next to this script.
import { transpile, writeFiles } from "@bytecodealliance/jco-transpile";

const SHIM = "../shim.mjs"; // relative to generated/iroh-relay-ws.js

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
  "wasi:filesystem/types@0.2.9": "types",
  "wasi:filesystem/preopens@0.2.9": "preopens",
  "wasi:io/error@0.2.9": "error",
  "wasi:io/poll@0.2.9": "poll",
  "wasi:io/streams@0.2.9": "streams",
  "wasi:random/random@0.2.9": "random",
  "wasi:random/insecure-seed@0.2.9": "insecureSeed",
  "wasi:sockets/network@0.2.9": "network",
  "wasi:sockets/instance-network@0.2.9": "instanceNetwork",
  "wasi:sockets/ip-name-lookup@0.2.9": "ipNameLookup",
  "wasi:sockets/udp@0.2.9": "udp",
  "wasi:sockets/udp-create-socket@0.2.9": "udpCreateSocket",
  "wasi:sockets/tcp@0.2.9": "tcp",
  "wasi:sockets/tcp-create-socket@0.2.9": "tcpCreateSocket",
};

const map = Object.fromEntries(
  Object.entries(IFACES).map(([iface, name]) => [iface, `${SHIM}#${name}`]),
);

const { files } = await transpile(
  "../guest/target/wasm32-wasip2/release/iroh-blobs-guest.wasm",
  {
    name: "iroh-blobs",
    asyncMode: "jspi",
    asyncWasiImports: true,
    asyncWasiExports: true,
    map,
    outDir: "generated",
  },
);
await writeFiles(files);
console.log(`transpiled iroh-blobs: ${Object.keys(files).length} files`);
