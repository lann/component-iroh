// Driver for one peer of the QUIC-over-data-channel demo under the Node
// host: the transpiled `iroh-spike` component connects to a genuinely
// separate peer instance, signaling over the websocket sibling's
// `websocket.js` (a relay connection), with the webrtc sibling's
// `webrtc.js` (node-datachannel) as the wire and the webcrypto sibling's
// `webcrypto.js` (Web Crypto API) behind the handshake.
//
// Run two of these — a server, then a client handed the server's printed
// endpoint ID — against the same stock iroh-relay server:
//
//   iroh-relay --dev &   # serves ws on 127.0.0.1:3340
//   npm run start -- --role server --server http://127.0.0.1:3340 &
//   npm run start -- --role client --server http://127.0.0.1:3340 --peer <endpoint-id>
import { parseArgs } from "node:util";

import { demo } from "../generated/iroh-spike.js";

const { values } = parseArgs({
  options: {
    role: { type: "string" },
    server: { type: "string" },
    peer: { type: "string" },
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
  const { role, server, peer, transport, message } = values;
  if (
    !role ||
    !server ||
    !["client", "server"].includes(role) ||
    !["webrtc", "relay"].includes(transport)
  ) {
    throw new Error(
      "usage: run.mjs --role <client|server> --server <url> [--peer <endpoint-id-hex>] [--transport <webrtc|relay>] [--message M]",
    );
  }

  const report = await unwrapResult(() => demo.run({ server, role, transport, peer, message }));

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
