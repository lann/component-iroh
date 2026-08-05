// The spike driver with the webcrypto boundary instrumented: every
// function, static method, and instance method on the shim's interface
// objects is wrapped with a call counter and a wall-clock accumulator
// before the transpiled component loads (its module body destructures
// free functions at import time, so wrapping must come first — hence
// the dynamic import). After the run, one `crypto <name> calls=N
// total_ms=X` line per touched operation.
//
// This measures the #4 boundary: the guest's crypto call sequence is a
// property of the guest code path, so the counts gated here hold on
// every host; the per-call wall-clock is this host's (Node WebCrypto).
import { parseArgs } from "node:util";

import * as webcrypto from "../../.deps/webcrypto/js/jco/webcrypto.js";

const counters = new Map();

function wrapFn(name, fn) {
  const wrapped = function (...args) {
    const started = performance.now();
    const record = () => {
      const c = counters.get(name) ?? { calls: 0, ms: 0 };
      c.calls += 1;
      c.ms += performance.now() - started;
      counters.set(name, c);
    };
    const out = fn.apply(this, args);
    if (out && typeof out.then === "function") {
      return out.finally(record);
    }
    record();
    return out;
  };
  Object.defineProperty(wrapped, "name", { value: fn.name });
  return wrapped;
}

/** Wrap the value-properties of `holder` (skipping getters/setters). */
function wrapMethods(prefix, holder, skip = []) {
  for (const key of Object.getOwnPropertyNames(holder)) {
    if (skip.includes(key)) continue;
    const desc = Object.getOwnPropertyDescriptor(holder, key);
    if (!desc || !desc.value || typeof desc.value !== "function" || !desc.writable) continue;
    holder[key] = wrapFn(`${prefix}${key}`, desc.value);
  }
}

/** Instrument one interface export: free functions, class statics, and
 * class prototype methods. Constructors stay unwrapped (replacing the
 * class would break the identities the transpiled module captured). */
function instrument(ifaceName, iface) {
  for (const [key, value] of Object.entries(iface)) {
    if (typeof value !== "function") continue;
    const isClass = /^[A-Z]/.test(key);
    if (isClass) {
      wrapMethods(`${ifaceName}.${key}.`, value, ["prototype", "name", "length"]);
      wrapMethods(`${ifaceName}.${key}#`, value.prototype, ["constructor"]);
    } else {
      iface[key] = wrapFn(`${ifaceName}.${key}`, value);
    }
  }
}

// The spike's webcrypto surface (checked against the transpiled
// imports): identity operations only, per the crypto split.
instrument("ed25519-sign", webcrypto.ed25519Sign);
instrument("signature", webcrypto.signature);

const { demo } = await import("../generated/iroh-spike.js");

const { values } = parseArgs({
  options: {
    role: { type: "string" },
    server: { type: "string" },
    peer: { type: "string" },
    transport: { type: "string", default: "relay" },
    message: { type: "string", default: "bench" },
  },
});

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
  if (!role || !server || !["client", "server"].includes(role)) {
    throw new Error(
      "usage: run-bench.mjs --role <client|server> --server <url> [--peer <hex>] [--transport T] [--message M]",
    );
  }

  const report = await unwrapResult(() => demo.run({ server, role, transport, peer, message }));

  console.log(
    `iroh-spike (${role}): endpoint=${report.endpointId} peer=${report.peerId} ` +
      `handshake_ms=${report.handshakeMs} roundtrip_ms=${report.roundtripMs} ` +
      `received=${JSON.stringify(report.received)}`,
  );
  let totalCalls = 0;
  let totalMs = 0;
  for (const [name, c] of [...counters.entries()].sort()) {
    console.log(`crypto ${name} calls=${c.calls} total_ms=${c.ms.toFixed(2)}`);
    totalCalls += c.calls;
    totalMs += c.ms;
  }
  console.log(`crypto-total calls=${totalCalls} total_ms=${totalMs.toFixed(2)}`);
  console.log(`OK: ${role} finished.`);
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error("iroh-spike failed:", err);
    process.exit(1);
  },
);
