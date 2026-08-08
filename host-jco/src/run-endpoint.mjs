// Driver for one peer of the endpoint echo demo under the Node host — a
// JavaScript application consuming the `polymorph:iroh/endpoint` surface
// directly (the browser-consumer shape): the endpoint component is
// transpiled alone and this script plays the role the Rust demo component
// plays in the wac composition.
//
//   iroh-relay --dev &   # serves ws on 127.0.0.1:3340
//   npm run start-endpoint -- --role server --relay http://127.0.0.1:3340 &
//   npm run start-endpoint -- --role client --relay http://127.0.0.1:3340 --peer <endpoint-id>
import { parseArgs } from "node:util";

import {
  endpoint as iroh,
  identityGenerate,
} from "../generated-endpoint/iroh-endpoint.js";

const ALPN = new TextEncoder().encode("iroh-demo/0");
const READ_MAX = 16 * 1024;

const { values } = parseArgs({
  options: {
    role: { type: "string" },
    relay: { type: "string" },
    peer: { type: "string" },
    message: { type: "string", default: "hello through the endpoint surface" },
  },
});

const hex = (bytes) =>
  Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
const unhex = (text) =>
  new Uint8Array(text.match(/.{2}/g).map((b) => parseInt(b, 16)));

async function readAll(recv) {
  const chunks = [];
  for (;;) {
    const chunk = await recv.read(READ_MAX);
    if (chunk === undefined) break;
    chunks.push(chunk);
  }
  return new TextDecoder().decode(
    chunks.reduce((acc, c) => {
      const merged = new Uint8Array(acc.length + c.length);
      merged.set(acc);
      merged.set(c, acc.length);
      return merged;
    }, new Uint8Array()),
  );
}

async function main() {
  const { role, relay, peer, message } = values;
  if (!role || !relay || !["client", "server"].includes(role)) {
    throw new Error(
      "usage: run-endpoint.mjs --role <client|server> --relay <url> [--peer <endpoint-id-hex>] [--message M]",
    );
  }

  const identity = await identityGenerate.generate();
  const options = new iroh.EndpointOptions(identity);
  options.addAlpn(ALPN);
  options.relayUrl(relay);
  const ep = await iroh.Endpoint.bind(options);
  console.log(`endpoint-id ${hex(ep.id())}`);

  let report;
  if (role === "client") {
    if (!peer) throw new Error("the client role requires --peer");
    const t0 = Date.now();
    const conn = await ep.connect(
      { endpointId: unhex(peer), addrs: [{ tag: "relay", val: relay }] },
      ALPN,
    );
    const handshakeMs = Date.now() - t0;
    const [send, recv] = await conn.openBi();
    const sentAt = Date.now();
    await send.write(new TextEncoder().encode(message));
    send.finish();
    const received = await readAll(recv);
    const roundtripMs = Date.now() - sentAt;
    conn.close(0, "done");
    await conn.waitClosed();
    report = { peer: hex(conn.peer()), handshakeMs, roundtripMs, received };
  } else {
    const conn = await ep.accept();
    const [send, recv] = await conn.acceptBi();
    const received = await readAll(recv);
    await send.write(new TextEncoder().encode(received.toUpperCase()));
    send.finish();
    await conn.waitClosed();
    report = { peer: hex(conn.peer()), handshakeMs: 0, roundtripMs: 0, received };
  }

  ep.close();
  console.log(
    `iroh-demo (${role}): endpoint=${hex(ep.id())} peer=${report.peer} ` +
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
