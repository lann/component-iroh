// Probe 2: composed — the guest-side virtualization component implements
// wasi:sockets/poll over the host's wasi:io plus the generic probe:source;
// the host has no socket semantics at all. Verifies JSPI suspension
// unwinding through a `wac plug` composition boundary.
import { drive } from "./driver.mjs";
import { injectSource, sourceReady } from "./shim.mjs";

await drive({
  label: "composed: guest-side virt sockets over generic source",
  modulePath: "./generated-composed/udp-wake-composed.js",
  inject: (bytes) => injectSource(bytes, 9999),
  ready: sourceReady,
});
