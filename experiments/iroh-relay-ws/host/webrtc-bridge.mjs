// The WebRTC bridge: pairs guest endpoints over real data channels
// through the polymorph-webrtc-datachannels host module (W3C
// RTCPeerConnection — node-datachannel's polyfill under Node, the
// browser global in a browser), and moves the guest's synthetic
// datagrams through them. Counterpart of the guest's
// `webrtc_transport.rs` (bridge address 127.0.0.1:2, tag byte first):
//
//   guest -> bridge  0x00 <32B own endpoint id>          register socket
//   guest -> bridge  0x01 <32B dst endpoint id> <bytes>  one datagram
//   bridge -> guest  0x01 <32B src endpoint id> <bytes>  one datagram
//
// Channels are unreliable and unordered (a datagram carrier); pairing is
// eager at registration, with in-process loopback signaling (both peers
// live behind this bridge — in the real design signaling rides the
// relay). Eager pairing keeps the channel open before iroh's first dial
// probe: the dial race is winner-take-all, so a channel still in ICE
// loses the race by construction. Lazy pairing on first send remains as
// a fallback, buffering datagrams until the channel opens.

import {
  DataChannelOptions,
  PeerConnection,
  PeerConnectionConfig,
} from "../../../.deps/webrtc/jco-impl/webrtc.js";
import { registerBridge, pushDatagram } from "./shim.mjs";

const WEBRTC_FROM = { tag: "ipv4", val: { port: 2, address: [127, 0, 0, 1] } };
const TAG_REGISTER = 0x00;
const TAG_DATAGRAM = 0x01;
const ID_LEN = 32;

export const webrtcStats = {
  channelsOpened: 0,
  droppedWhileConnecting: 0,
  in: 0,
  out: 0,
};

/** id hex -> { socket, idBytes } */
const peers = new Map();
/** sorted "a|b" key -> { state: 'connecting'|'open'|'failed', send(fromHex, bytes) } */
const links = new Map();

const hex = (bytes) =>
  Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");

function linkKey(a, b) {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

const t0 = Date.now();
const ts = () => `t+${Date.now() - t0}ms`;

registerBridge(2, (socket, { data }) => {
  if (data.length === 0) return;
  switch (data[0]) {
    case TAG_REGISTER: {
      const id = hex(data.subarray(1, 1 + ID_LEN));
      peers.set(id, { socket, idBytes: data.slice(1, 1 + ID_LEN) });
      socket.webrtcId = id;
      console.log(`[webrtc-bridge] ${ts()} register ${id.slice(0, 8)} (peers=${peers.size})`);
      for (const other of peers.keys()) {
        if (other === id) continue;
        const key = linkKey(id, other);
        if (!links.has(key)) {
          const link = { state: "connecting", send: null, backlog: [] };
          links.set(key, link);
          console.log(`[webrtc-bridge] ${ts()} eager pairing ${key.slice(0, 17)}`);
          void establish(key, link, id, other);
        }
      }
      break;
    }
    case TAG_DATAGRAM: {
      const src = socket.webrtcId;
      if (!src) {
        console.error("[webrtc-bridge] datagram before register; dropping");
        return;
      }
      const dst = hex(data.subarray(1, 1 + ID_LEN));
      const payload = data.subarray(1 + ID_LEN);
      const key = linkKey(src, dst);
      let link = links.get(key);
      if (!link) {
        link = { state: "connecting", send: null, backlog: [] };
        links.set(key, link);
        console.log(`[webrtc-bridge] ${ts()} lazy pairing ${key.slice(0, 17)} (datagram before register pairing?)`);
        void establish(key, link, src, dst);
      }
      if (link.state === "open") {
        webrtcStats.out++;
        link.send(src, payload.slice());
      } else if (link.state === "connecting" && link.backlog.length < 64) {
        // Buffer until the channel opens: iroh probes a path when it
        // learns the addr and does not retry a failed validation until
        // new addr information arrives, so the probe must survive ICE.
        link.backlog.push([src, payload.slice()]);
      } else {
        webrtcStats.droppedWhileConnecting++;
      }
      break;
    }
    default:
      console.error(`[webrtc-bridge] unknown tag ${data[0]}`);
  }
});

/** Drain a ReadableStream of ICE candidates into the peer connection. */
function trickle(from, into) {
  void (async () => {
    const reader = from.getReader();
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      await into.addIceCandidate(value);
    }
  })().catch((err) =>
    console.error(`[webrtc-bridge] trickle failed: ${JSON.stringify(err) ?? err}`),
  );
}

/** First channel announced by the remote side. */
async function firstIncomingChannel(pc) {
  const reader = pc.incomingDataChannels().getReader();
  const { value, done } = await reader.read();
  reader.releaseLock();
  if (done) throw new Error("peer connection closed before a channel arrived");
  return value;
}

/** Pump channel messages to the owning guest socket, tagged with the peer. */
function pumpChannel(channel, ownerHex, peerIdBytes) {
  void (async () => {
    for (;;) {
      let message;
      try {
        message = await channel.receive();
      } catch (err) {
        console.log(
          `[webrtc-bridge] channel to ${ownerHex.slice(0, 8)} closed: ${JSON.stringify(err)}`,
        );
        return;
      }
      webrtcStats.in++;
      const bytes =
        message.tag === "binary" ? message.val : new TextEncoder().encode(message.val);
      const frame = new Uint8Array(1 + ID_LEN + bytes.length);
      frame[0] = TAG_DATAGRAM;
      frame.set(peerIdBytes, 1);
      frame.set(bytes, 1 + ID_LEN);
      const peer = peers.get(ownerHex);
      if (peer) pushDatagram(peer.socket, frame, WEBRTC_FROM);
    }
  })();
}

async function establish(key, link, a, b) {
  try {
    // Deterministic initiator avoids glare when both sides send first.
    const [ini, resp] = a < b ? [a, b] : [b, a];
    const pcI = new PeerConnection(new PeerConnectionConfig());
    const pcR = new PeerConnection(new PeerConnectionConfig());

    const options = new DataChannelOptions();
    options.setLabel("quic");
    options.setOrdered(false);
    options.setMaxRetransmits(0);
    const chI = pcI.createDataChannel(options);

    const offer = await pcI.createOffer();
    await pcI.setLocalDescription(offer);
    await pcR.setRemoteDescription(offer);
    const answer = await pcR.createAnswer();
    await pcR.setLocalDescription(answer);
    await pcI.setRemoteDescription(answer);

    // Candidate streams buffer from connection creation, so starting the
    // pumps only now (with both remote descriptions set) loses nothing —
    // and avoids InvalidState from candidates arriving pre-description.
    trickle(pcI.localIceCandidates(), pcR);
    trickle(pcR.localIceCandidates(), pcI);

    const chR = await firstIncomingChannel(pcR);
    await pcI.waitConnected();
    await pcR.waitConnected();

    const chans = { [ini]: chI, [resp]: chR };
    pumpChannel(chI, ini, peers.get(resp).idBytes);
    pumpChannel(chR, resp, peers.get(ini).idBytes);

    const sendChains = { [ini]: Promise.resolve(), [resp]: Promise.resolve() };
    link.send = (fromHex, bytes) => {
      const channel = chans[fromHex];
      sendChains[fromHex] = sendChains[fromHex]
        .then(() => channel.send({ tag: "binary", val: bytes }))
        .catch((err) =>
          console.error(`[webrtc-bridge] send failed: ${JSON.stringify(err)}`),
        );
    };
    link.state = "open";
    webrtcStats.channelsOpened++;
    console.log(
      `[webrtc-bridge] ${ts()} channel open ${a.slice(0, 8)} <-> ${b.slice(0, 8)}; flushing ${link.backlog.length} buffered`,
    );
    for (const [fromHex, bytes] of link.backlog.splice(0)) {
      webrtcStats.out++;
      link.send(fromHex, bytes);
    }
  } catch (err) {
    link.state = "failed";
    console.error(
      `[webrtc-bridge] pairing failed for ${key.slice(0, 17)}: ${err?.message ?? JSON.stringify(err)}`,
    );
  }
}
