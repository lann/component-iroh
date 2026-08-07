// Ping demo page: session bootstrap (QR), square canvas, ping effects
// mirrored between two browsers over an iroh connection that starts on
// a relay and live-migrates onto a WebRTC data channel (issue #26
// overlay). All demo semantics live here; the guest (a wasip2 iroh
// component) ferries opaque JSON frames and reports status.
//
// URL contract: a bare visit hosts a session and shows a QR of
// `#j=<endpoint id>&r=<relay url>`; visiting such a URL joins that
// session. `?relay=<url>` overrides the relay for both roles (local
// testing against a dev relay).

import { registerBridge, pushDatagram, stats } from "./shim.mjs";
import { beginUpgrade, overlayStats } from "./overlay.mjs";
import { qrcode } from "./vendor/qrcode.mjs";
import "./bridge.mjs";

const statusEl = document.getElementById("status");
const qrBox = document.getElementById("qrbox");
const qrCanvas = document.getElementById("qr");
const linkEl = document.getElementById("link");
const canvas = document.getElementById("view");
const ctx = canvas.getContext("2d");

// --- session parameters -----------------------------------------------------

const params = new URLSearchParams(location.search);
const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
const relayOverride = params.get("relay") ?? undefined;

// Identity persists per tab (sessionStorage): a refresh rejoins the same
// session with the same endpoint id. The host writes the join payload
// into its own fragment, so role detection is "does the fragment name
// me?" — a fresh tab on a host's URL becomes a joiner, the host's own
// tab re-hosts.
let secret = sessionStorage.getItem("ping-demo-secret");
if (!secret) {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  secret = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  sessionStorage.setItem("ping-demo-secret", secret);
}
const storedId = sessionStorage.getItem("ping-demo-id");
const fragmentPeer = hash.get("j");
const joining = Boolean(fragmentPeer) && fragmentPeer !== storedId;

globalThis.GUEST_ENV = {
  ROLE: joining ? "join" : "host",
  SECRET: secret,
  ...(joining && { PEER: fragmentPeer, PEER_RELAY: hash.get("r") }),
  ...(relayOverride && { RELAY: relayOverride }),
};

// Harness state (asserted by the Playwright test).
const demo = (globalThis.__demo = {
  role: GUEST_ENV.ROLE,
  state: "loading",
  path: "none",
  rttUs: 0,
  selfId: storedId,
  peerId: null,
  relay: null,
  joinUrl: null,
  pings: 0,
  remotePings: 0,
  lastRemotePing: null,
  overlay: overlayStats,
  shim: stats,
});

const t0 = performance.now();

function setStatus(state, text) {
  demo.state = state;
  statusEl.textContent = text;
  console.log(`[demo] t+${Math.round(performance.now() - t0)}ms state=${state}`);
}

// --- guest event channel (synthetic port 3) ---------------------------------

let guestSocket = null;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const GUEST_FROM = { tag: "ipv4", val: { port: 3, address: [127, 0, 0, 1] } };

function sendToGuest(obj) {
  if (!guestSocket) return;
  pushDatagram(guestSocket, encoder.encode(JSON.stringify(obj)), GUEST_FROM);
}

let upgrade = null;

registerBridge(3, (socket, { data }) => {
  guestSocket = socket;
  let msg;
  try {
    msg = JSON.parse(decoder.decode(data));
  } catch {
    return;
  }
  switch (msg.t) {
    case "ready": {
      demo.selfId = msg.id;
      demo.relay = msg.relay;
      if (demo.role === "host") {
        sessionStorage.setItem("ping-demo-id", msg.id);
        const url = new URL(location.href);
        url.hash = `j=${msg.id}&r=${encodeURIComponent(msg.relay)}`;
        demo.joinUrl = url.href;
        // The host's own URL carries the session: a refresh re-hosts it,
        // and the address bar is shareable as-is.
        history.replaceState(null, "", url.hash);
        showQr(url.href);
        setStatus("waiting", "scan to join");
      } else {
        setStatus("connecting", "joining session…");
      }
      break;
    }
    case "connected": {
      demo.peerId = msg.peer;
      qrBox.style.display = "none";
      setStatus("connected", "connected · relay");
      upgrade?.close();
      upgrade = beginUpgrade({
        remoteIdHex: msg.peer,
        initiator: demo.role === "host",
        sendSignal: (m) => sendToGuest({ t: "sig", m }),
        onStatus: (s) => console.log(`[overlay] ${s}`),
      });
      break;
    }
    case "sig": {
      upgrade?.signal(msg.m);
      break;
    }
    case "ping": {
      demo.remotePings++;
      demo.lastRemotePing = { x: msg.x, y: msg.y };
      ripple(msg.x, msg.y, "#f0f");
      break;
    }
    case "path": {
      demo.path = msg.path;
      demo.rttUs = msg.rtt_us;
      console.log(`[guest] path=${msg.path} rtt=${msg.rtt_us}us`);
      if (demo.state === "connected" || demo.state === "live") {
        const rtt = msg.rtt_us ? ` · ${(msg.rtt_us / 1000).toFixed(1)}ms` : "";
        setStatus("live", `connected · ${msg.path}${rtt}`);
      }
      break;
    }
    case "overlay": {
      console.log(`[guest] overlay ${msg.state}`);
      break;
    }
    case "closed": {
      demo.peerId = null;
      demo.path = "none";
      upgrade?.close();
      upgrade = null;
      if (demo.role === "host") {
        // The guest is accepting again; the same QR/URL rejoins.
        if (demo.joinUrl) showQr(demo.joinUrl);
        setStatus("closed", "peer left · scan to rejoin");
      } else {
        // The guest redials every couple of seconds.
        setStatus("closed", "peer left · reconnecting…");
      }
      break;
    }
    case "error": {
      setStatus("error", `error: ${msg.msg}`);
      break;
    }
  }
});

// --- QR ----------------------------------------------------------------------

function showQr(url) {
  const qr = qrcode(0, "L");
  qr.addData(url);
  qr.make();
  const n = qr.getModuleCount();
  const scale = Math.max(2, Math.floor(220 / n));
  const size = (n + 8) * scale;
  qrCanvas.width = qrCanvas.height = size;
  const qctx = qrCanvas.getContext("2d");
  qctx.fillStyle = "#fff";
  qctx.fillRect(0, 0, size, size);
  qctx.fillStyle = "#000";
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (qr.isDark(r, c)) qctx.fillRect((c + 4) * scale, (r + 4) * scale, scale, scale);
    }
  }
  linkEl.href = url;
  linkEl.textContent = url.length > 60 ? `${url.slice(0, 57)}…` : url;
  qrBox.style.display = "flex";
}

// --- canvas + ping effects ---------------------------------------------------

const ripples = [];

function resize() {
  const side = Math.min(window.innerWidth, window.innerHeight) - 16;
  const dpr = window.devicePixelRatio || 1;
  canvas.style.width = canvas.style.height = `${side}px`;
  canvas.width = canvas.height = Math.round(side * dpr);
}
window.addEventListener("resize", resize);
resize();

function ripple(x, y, color) {
  ripples.push({ x, y, color, t0: performance.now() });
}

canvas.addEventListener("pointerdown", (ev) => {
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) / rect.width;
  const y = (ev.clientY - rect.top) / rect.height;
  demo.pings++;
  ripple(x, y, "#0ff");
  sendToGuest({ t: "ping", x, y });
});

function frame(now) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const side = canvas.width;
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    const age = (now - r.t0) / 1000;
    if (age > 1) {
      ripples.splice(i, 1);
      continue;
    }
    ctx.beginPath();
    ctx.arc(r.x * side, r.y * side, age * side * 0.35 + side * 0.01, 0, 2 * Math.PI);
    ctx.strokeStyle = r.color;
    ctx.globalAlpha = 1 - age;
    ctx.lineWidth = Math.max(2, side * 0.006) * (1 - age);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// --- lifecycle ---------------------------------------------------------------

// A real departure (navigation, tab close, bfcache entry) sends a
// best-effort bye so the peer learns immediately; task switches only fire
// visibilitychange and keep the session alive. When the guest cannot
// flush the close in time, the peer's QUIC idle timeout (8s) is the
// backstop. An empty datagram is the guest's bye control frame.
window.addEventListener("pagehide", () => {
  if (guestSocket) pushDatagram(guestSocket, new Uint8Array(0), GUEST_FROM);
});
// A bfcache-restored page holds a frozen guest whose session is long
// dead; reboot — the persisted identity and fragment rejoin by themselves.
window.addEventListener("pageshow", (ev) => {
  if (ev.persisted) location.reload();
});

// --- debug panel ---------------------------------------------------------------

const debugBtn = document.getElementById("debug-toggle");
const debugEl = document.getElementById("debug");
let debugTimer = null;

function renderDebug() {
  const o = demo.overlay;
  const s = demo.shim;
  debugEl.textContent = [
    `role      ${demo.role}`,
    `state     ${demo.state}`,
    `self      ${demo.selfId ?? "…"}`,
    `peer      ${demo.peerId ?? "—"}`,
    `relay     ${demo.relay ?? "…"}`,
    `path      ${demo.path}${demo.rttUs ? ` (${(demo.rttUs / 1000).toFixed(1)}ms)` : ""}`,
    `channel   in=${o.in} out=${o.out} dropped=${o.droppedWhileConnecting}`,
    `datagrams in=${s.datagramsIn} out=${s.datagramsOut}`,
    `pings     sent=${demo.pings} received=${demo.remotePings}`,
  ].join("\n");
}

debugBtn.addEventListener("click", () => {
  const visible = debugEl.style.display === "block";
  debugEl.style.display = visible ? "none" : "block";
  if (debugTimer) {
    clearInterval(debugTimer);
    debugTimer = null;
  }
  if (!visible) {
    renderDebug();
    debugTimer = setInterval(renderDebug, 1000);
  }
});

// --- boot --------------------------------------------------------------------

setStatus("loading", "loading component…");
try {
  const { run } = await import("./generated/ping-demo.js");
  setStatus("starting", "starting endpoint…");
  run.run().catch((err) => setStatus("error", `guest failed: ${err}`));
} catch (err) {
  const jspi = typeof WebAssembly.Suspending === "function";
  setStatus(
    "error",
    jspi
      ? `failed to load: ${err}`
      : "this browser has no WebAssembly JSPI — use Chrome/Edge (desktop or Android)",
  );
}
