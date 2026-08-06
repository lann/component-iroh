// Probe 1: single component — the host shim implements the synthetic
// wasi:sockets/udp directly.
import { drive } from "./driver.mjs";
import { injectDatagram, socketBound } from "./shim.mjs";

const FROM = { tag: "ipv4", val: { port: 9999, address: [127, 0, 0, 1] } };

await drive({
  label: "single component: host-side synthetic sockets",
  modulePath: "./generated/udp-wake.js",
  inject: (bytes) => injectDatagram(bytes, FROM),
  ready: socketBound,
});
