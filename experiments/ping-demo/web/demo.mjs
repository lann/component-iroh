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
const joining = hash.has("j");

globalThis.GUEST_ENV = {
  ROLE: joining ? "join" : "host",
  ...(joining && { PEER: hash.get("j"), PEER_RELAY: hash.get("r") }),
  ...(relayOverride && { RELAY: relayOverride }),
};

// Harness state (asserted by the Playwright test).
const demo = (globalThis.__demo = {
  role: GUEST_ENV.ROLE,
  state: "loading",
  path: "none",
  rttUs: 0,
  joinUrl: null,
  pings: 0,
  remotePings: 0,
  lastRemotePing: null,
  overlay: overlayStats,
  shim: stats,
});

function setStatus(state, text) {
  demo.state = state;
  statusEl.textContent = text;
}

// --- guest event channel (synthetic port 3) ---------------------------------

let guestSocket = null;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function sendToGuest(obj) {
  if (!guestSocket) return;
  pushDatagram(guestSocket, encoder.encode(JSON.stringify(obj)), {
    tag: "ipv4",
    val: { port: 3, address: [127, 0, 0, 1] },
  });
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
      if (demo.role === "host") {
        const url = new URL(location.href);
        url.hash = `j=${msg.id}&r=${encodeURIComponent(msg.relay)}`;
        demo.joinUrl = url.href;
        showQr(url.href);
        setStatus("waiting", "scan to join");
      } else {
        setStatus("connecting", "joining session…");
      }
      break;
    }
    case "connected": {
      qrBox.style.display = "none";
      setStatus("connected", "connected · relay");
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
      setStatus("closed", "peer left");
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
