// Driver for one peer of the endpoint echo demo under the Node host —
// the wac-composed endpoint+demo component (the same artifact the
// wasmtime rows run), transpiled with jco and driven through its one
// export, `demo.run`. The single-export shape keeps every async step
// inside one component-model task tree.
//
//   iroh-relay --dev &   # serves ws on 127.0.0.1:3340
//   npm run start-endpoint-demo -- --role server --relay http://127.0.0.1:3340 &
//   npm run start-endpoint-demo -- --role client --relay http://127.0.0.1:3340 --peer <endpoint-id>
import { parseArgs } from "node:util";

import { demo } from "../generated-endpoint-demo/iroh-demo.js";

const { values } = parseArgs({
  options: {
    role: { type: "string" },
    relay: { type: "string" },
    peer: { type: "string" },
    alpn: { type: "string" },
    "udp-bind": { type: "string" },
    direct: { type: "string" },
    message: { type: "string", default: "hello through the endpoint surface" },
  },
});

async function main() {
  const { role, relay, peer, alpn, message } = values;
  if (!role || !relay || !["client", "server"].includes(role)) {
    throw new Error(
      "usage: run-endpoint-demo.mjs --role <client|server> --relay <url> " +
        "[--peer <endpoint-id-hex>] [--alpn A] [--udp-bind <ip:port>] " +
        "[--direct <ip:port>] [--message M]",
    );
  }

  const report = await demo.run({
    relayUrl: relay,
    role,
    peer,
    alpn,
    udpBind: values["udp-bind"],
    direct: values.direct,
    message,
  });

  console.log(
    `iroh-demo (${role}): endpoint=${report.endpointId} peer=${report.peerId} ` +
      `handshake_ms=${report.handshakeMs} roundtrip_ms=${report.roundtripMs} ` +
      `received=${JSON.stringify(report.received)}`,
  );
  console.log(`OK: ${role} finished.`);
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error("iroh-demo failed:", err);
    process.exit(1);
  },
);
