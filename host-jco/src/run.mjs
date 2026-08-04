// Driver for one peer of the QUIC-over-data-channel demo under the Node
// host: the transpiled `iroh-spike` component connects to a genuinely
// separate peer instance, signaling over the websocket sibling's
// `websocket.js` (a relay connection), with the webrtc sibling's
// `webrtc.js` (node-datachannel) as the wire and the webcrypto sibling's
// `webcrypto.js` (Web Crypto API) behind the handshake.
//
// Run two of these — a client and a server — against the same room:
//
//   iroh-spike-relayd --addr 127.0.0.1:8090 &
//   npm run start -- --role server --server ws://127.0.0.1:8090 --room demo &
//   npm run start -- --role client --server ws://127.0.0.1:8090 --room demo
import { parseArgs } from "node:util";

import { demo } from "../generated/iroh-spike.js";

const { values } = parseArgs({
  options: {
    role: { type: "string" },
    server: { type: "string" },
    room: { type: "string" },
    transport: { type: "string", default: "webrtc" },
    message: { type: "string", default: "hello over QUIC over a data channel" },
  },
});

/**
 * Unwrap jco's representation of a WIT `result<T, string>` returned by an
 * exported function — a convention, not documented API, so it is isolated
 * here and version-anchored: validated against jco-transpile 0.5.2. The ok
 * value is returned directly and the err case thrown (with a `{ tag, val }`
 * result object tolerated too); revalidate when bumping jco-transpile.
 * @param {() => Promise<unknown>} call
 */
async function unwrapResult(call) {
  let value;
  try {
    value = await call();
  } catch (err) {
    throw new Error(`returned err: ${err?.payload ?? err?.val ?? err}`);
  }
  if (typeof value === "object" && value !== null && "tag" in value) {
    if (value.tag !== "ok") {
      throw new Error(`returned err: ${value.val}`);
    }
    value = value.val;
  }
  return value;
}

async function main() {
  const { role, server, room, transport, message } = values;
  if (
    !role ||
    !server ||
    !room ||
    !["client", "server"].includes(role) ||
    !["webrtc", "relay"].includes(transport)
  ) {
    throw new Error(
      "usage: run.mjs --role <client|server> --server <url> --room <id> [--transport <webrtc|relay>] [--message M]",
    );
  }

  const report = await unwrapResult(() => demo.run({ server, room, role, transport, message }));

  console.log(
    `iroh-spike (${role}): endpoint=${report.endpointId} peer=${report.peerId} ` +
      `handshake_ms=${report.handshakeMs} roundtrip_ms=${report.roundtripMs} ` +
      `received=${JSON.stringify(report.received)}`,
  );
  console.log(`OK: ${role} finished.`);
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error("iroh-spike failed:", err);
    process.exit(1);
  },
);
