// Host implementation of the `polymorph:webrtc-datachannels/connections` imports
// for the demo component.
//
// This is the "browser-first" host: it is written against the standard W3C
// WebRTC API (`RTCPeerConnection` / `RTCDataChannel`), so the same logic runs
// in a browser. Under Node it is backed by `node-datachannel` (Node bindings
// for libdatachannel), whose polyfill provides those W3C-compatible classes.
// It
// implements the full `connections` surface — `data-channel-options`,
// `data-channel`, and `peer-connection` (offer/answer, trickle ICE, incoming
// channels) — and is the single host module shared by the demo hosts here and
// the jco conformance adapters (`conformance/adapters/jco`), which import and
// serve it from this path; the conformance suite asserts its behavior.
//
// `jco --map` wires this module in as the component's `connections` import.
// Errors are surfaced to the guest by throwing the WIT `error` variant value
// (for example `{ tag: 'closed' }` or `{ tag: 'invalid-signaling', val }`), which
// jco lifts into the `result<_, error>` the WIT declares.

// Resolve `RTCPeerConnection` isomorphically: a browser (including headless
// Chromium) exposes the W3C class as a global; under Node it is provided by
// `node-datachannel`'s polyfill, imported lazily so the bare specifier never
// has to resolve in the browser. A missing Node dependency is surfaced with an
// actionable message rather than a bare module-resolution error.
// Whether the backend resolves `createOffer` only once the connection has
// negotiation material (true of libdatachannel, which derives descriptions
// from the media/data sections that exist); see `createOffer` below.
let offerNeedsChannel = false;

async function resolveRTCPeerConnection() {
  if (globalThis.RTCPeerConnection) return globalThis.RTCPeerConnection;
  try {
    const { RTCPeerConnection } = await import("node-datachannel/polyfill");
    offerNeedsChannel = true;
    return RTCPeerConnection;
  } catch (cause) {
    throw new Error(
      "no RTCPeerConnection available: not running in a browser and node-datachannel " +
        "could not be loaded (run `npm install` in jco-impl)",
      { cause },
    );
  }
}

const RTCPeerConnection = await resolveRTCPeerConnection();

// Keep the SCTP send buffer bounded; pause the producer when it fills.
const MAX_BUFFERED_AMOUNT = 8 * 1024 * 1024;

// How long `wait-connected` waits before failing with `error.timed-out`.
const CONNECT_TIMEOUT_MS = 20_000;

// How long `close()` keeps the underlying connection alive after the close is
// observed locally, so messages already handed to the transport flush to the
// wire before teardown discards the SCTP send queue (a reply or rendezvous
// sentinel sent just before `close()` would otherwise be lost, stranding the
// remote peer). The teardown runs as soon as every channel's `bufferedAmount`
// drains, with this as the upper bound for a peer that never drains.
const CLOSE_DRAIN_MS = 1_000;

// The default bound on buffered inbound payload bytes awaiting `receive`.
// There is no wire-level inbound backpressure (the W3C API has no read-side
// flow control), so this bound is what protects memory from a slow guest
// reader: exceeding it closes the channel and, once the buffered backlog
// drains, `receive` fails with `error.receive-buffer-overflow`.
const DEFAULT_MAX_INBOUND_BUFFERED = 8 * 1024 * 1024;

/** The configured inbound buffer bound; channels capture it at creation. */
let maxInboundBuffered = DEFAULT_MAX_INBOUND_BUFFERED;

/**
 * Set the per-channel inbound buffer bound, in payload bytes. This module
 * reads no ambient configuration (no environment variables or globals): a
 * host that offers the bound as a knob reads and validates the value itself
 * and applies it here. Channels capture the bound at creation. Throws on
 * anything but a positive finite number.
 */
export function setMaxInboundBufferBytes(bytes) {
  if (!(Number.isFinite(bytes) && bytes > 0)) {
    throw new Error(`invalid inbound buffer bound ${bytes}: expected a positive byte count`);
  }
  maxInboundBuffered = bytes;
}

/** The UTF-8 byte length of a string payload (the WIT bound counts bytes). */
const utf8 = new TextEncoder();
function utf8ByteLength(text) {
  return utf8.encode(text).byteLength;
}

/**
 * The `data-channel-options` resource: a configuration builder for a data
 * channel, mirroring `wasi:http`'s `request-options`. The guest constructs a
 * default value, adjusts fields through the setters, and hands it to
 * `peer-connection.create-data-channel`.
 */
export class DataChannelOptions {
  #label = "";
  #ordered = true;
  #maxRetransmits = undefined;

  /** The channel label. */
  label() {
    return this.#label;
  }
  /** @param {string} label */
  setLabel(label) {
    this.#label = label;
  }

  /** Whether messages are delivered in order. */
  ordered() {
    return this.#ordered;
  }
  /** @param {boolean} ordered */
  setOrdered(ordered) {
    this.#ordered = ordered;
  }

  /** The maximum number of retransmissions, or `undefined` for reliable delivery. */
  maxRetransmits() {
    return this.#maxRetransmits;
  }
  /** @param {number | undefined} maxRetransmits */
  setMaxRetransmits(maxRetransmits) {
    this.#maxRetransmits = maxRetransmits;
  }

  /** The `RTCDataChannelInit` these options describe. */
  toInit() {
    const init = { ordered: this.#ordered };
    if (this.#maxRetransmits != null) {
      init.maxRetransmits = this.#maxRetransmits;
    }
    return init;
  }
}

/**
 * The `peer-connection-config` resource: a configuration builder with
 * fallible setters (the WIT `config-error` is thrown as `{ tag, val }`),
 * following `wasi:http`'s `request-options` precedent. This host maps the
 * accepted options straight onto the W3C `RTCConfiguration`, so both ICE
 * servers and the `relay` policy are supported; setters validate eagerly (a
 * malformed server entry throws `invalid` here, never at connection time).
 */
export class PeerConnectionConfig {
  #iceServers = [];
  #policy = "all";

  /** The ICE servers a successful `setIceServers` stored. */
  iceServers() {
    return this.#iceServers;
  }

  /** @param {Array<{urls: string[], username: string, credential: string}>} servers */
  setIceServers(servers) {
    for (const server of servers) {
      if (!server.urls.length) {
        throw { tag: "invalid", val: "ice-server has no urls" };
      }
      for (const url of server.urls) {
        if (!/^(stun|stuns|turn|turns):/.test(url)) {
          throw {
            tag: "invalid",
            val: `ice-server url ${JSON.stringify(url)} has no stun:/stuns:/turn:/turns: scheme`,
          };
        }
      }
    }
    this.#iceServers = servers;
  }

  /** The configured candidate policy. */
  iceTransportPolicy() {
    return this.#policy;
  }

  /** @param {"all" | "relay"} policy */
  setIceTransportPolicy(policy) {
    this.#policy = policy;
  }

  /** The `RTCConfiguration` these options describe. */
  toConfiguration() {
    const configuration = { iceTransportPolicy: this.#policy };
    if (this.#iceServers.length) {
      configuration.iceServers = this.#iceServers.map((server) => {
        const entry = { urls: server.urls };
        if (server.username) entry.username = server.username;
        if (server.credential) entry.credential = server.credential;
        return entry;
      });
    }
    return configuration;
  }
}

/**
 * The `data-channel` resource, implemented over an `RTCDataChannel`.
 *
 * `send`/`receive` each carry exactly one data-channel message, preserving
 * WebRTC message boundaries. A message is a variant: `{ tag: 'binary', val:
 * Uint8Array }` or `{ tag: 'string', val: string }`.
 */
export class DataChannel {
  #channel;
  #incoming;
  // Set once `receive-via-stream` has claimed the inbound messages; further
  // `receive`/`receive-via-stream` calls fail with `receiving-via-stream`.
  #streamClaimed = false;
  /** True once `close()` has been called on this resource. */
  #localClosed = false;
  /** Take-once claim for `state-changes` (the WIT contract). */
  #stateTaken = false;
  /** Wake callbacks for the `state-changes` watch (see `stateStream`). */
  #statePokes = new Set();

  constructor(channel) {
    this.#channel = channel;
    channel.binaryType = "arraybuffer";
    this.#incoming = incomingQueue(channel);
  }

  /** The negotiated channel label. */
  label() {
    return this.#channel.label;
  }

  /**
   * Send a single message on the channel, resolving once it has been handed to
   * the transport or rejecting with `{ tag: 'closed' }` if the channel closed.
   * @param {{ tag: 'binary', val: Uint8Array } | { tag: 'string', val: string }} message
   */
  async send(message) {
    await this.#waitOpen();
    await this.#waitForDrain();
    try {
      this.#channel.send(message.val);
    } catch {
      throw { tag: "closed" };
    }
  }

  /**
   * Receive a single message, resolving with the next inbound `message` variant
   * or rejecting with `{ tag: 'closed' }` once the channel closes (or with
   * `{ tag: 'receiving-via-stream' }` once `receiveViaStream` has claimed the
   * inbound messages).
   */
  async receive() {
    if (this.#localClosed) throw { tag: "closed" };
    if (this.#streamClaimed) throw { tag: "receiving-via-stream" };
    return this.#incoming.next();
  }

  /**
   * Send a stream of messages whose payloads are each streamed as bytes.
   * `messages` is a `ReadableStream` of `stream-message` records whose `data`
   * is a byte `ReadableStream`. Rejects with the WIT `send-via-stream-error`
   * record `{ error, sent }` if the channel closes early or a message's
   * payload does not match its declared `length`.
   * @param {ReadableStream<{ kind: 'binary'|'string', length: number, data: ReadableStream }>} messages
   */
  async sendViaStream(messages) {
    let sent = 0n;
    try {
      for await (const item of streamItems(messages)) {
        const bytes = await collectByteStream(item.data);
        if (bytes.length !== item.length) {
          throw {
            tag: "other",
            val: `stream-message payload was ${bytes.length} bytes but length declared ${item.length}`,
          };
        }
        const message =
          item.kind === "string"
            ? { tag: "string", val: new TextDecoder().decode(bytes) }
            : { tag: "binary", val: bytes };
        await this.send(message);
        sent += 1n;
      }
    } catch (error) {
      throw { error: typeof error?.tag === "string" ? error : { tag: "closed" }, sent };
    }
  }

  /**
   * Take over the channel's inbound messages, delivering each as a
   * `stream-message` whose payload is a byte `ReadableStream`. Once-only: a
   * second call (or any later `receive`) throws
   * `{ tag: 'receiving-via-stream' }`, and any pending `receive` is resolved
   * with it. The stream ends when the channel closes.
   */
  receiveViaStream() {
    if (this.#localClosed) throw { tag: "closed" };
    if (this.#streamClaimed) throw { tag: "receiving-via-stream" };
    this.#streamClaimed = true;
    const incoming = this.#incoming;
    incoming.rejectWaiters({ tag: "receiving-via-stream" });
    return new ReadableStream({
      async pull(controller) {
        let message;
        try {
          message = await incoming.next();
        } catch {
          // The channel closed (or its inbound buffer overflowed): the
          // stream simply ends, per the WIT contract.
          controller.close();
          return;
        }
        const bytes =
          message.tag === "string" ? new TextEncoder().encode(message.val) : message.val;
        controller.enqueue({
          kind: message.tag,
          length: bytes.length,
          data: bytesToStream(bytes),
        });
      },
    });
  }

  /** Resolve once the channel is open, or reject `{ tag: 'closed' }` if it closes. */
  #waitOpen() {
    const channel = this.#channel;
    if (channel.readyState === "open") return Promise.resolve();
    if (channel.readyState === "closing" || channel.readyState === "closed") {
      return Promise.reject({ tag: "closed" });
    }
    return new Promise((resolve, reject) => {
      channel.addEventListener("open", () => resolve(), { once: true });
      channel.addEventListener("close", () => reject({ tag: "closed" }), { once: true });
      channel.addEventListener("error", () => reject({ tag: "closed" }), { once: true });
    });
  }

  /**
   * Close the data channel. The close is observed locally at once — pending
   * and later operations fail `closed`, the unread inbound backlog is
   * discarded per the WIT contract — while the native graceful close (which
   * still transmits already-buffered data) runs the closing procedure;
   * `state-changes` reports `closed` when it completes. Idempotent.
   */
  close() {
    if (this.#localClosed) return;
    this.#localClosed = true;
    this.#incoming.discard();
    try {
      this.#channel.close();
    } catch {
      // Already closed.
    }
    for (const poke of this.#statePokes) poke();
  }

  /**
   * A stream of lifecycle states: a coalescing watch whose first element
   * reflects the state at the first read, ending after `closed` (see the WIT
   * contract). Take-once: later calls return a stream that ends immediately.
   */
  stateChanges() {
    if (this.#stateTaken) return emptyStream();
    this.#stateTaken = true;
    return stateStream(
      () => this.#channel.readyState,
      (wake) => {
        for (const event of ["open", "closing", "close", "error"]) {
          this.#channel.addEventListener(event, wake);
        }
        this.#statePokes.add(wake);
      },
      (state) => state === "closed",
    );
  }

  /**
   * Dispose hook jco invokes when the guest drops the resource: dropping
   * without `close` implies `close`, per the WIT contract.
   */
  [Symbol.dispose]() {
    try {
      this.close();
    } catch {
      // Already closed.
    }
  }

  /** Apply backpressure so a fast producer cannot overrun the SCTP buffer. */
  #waitForDrain() {
    const channel = this.#channel;
    if (channel.bufferedAmount <= MAX_BUFFERED_AMOUNT) return Promise.resolve();
    return new Promise((resolve) => {
      channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT / 2;
      const onLow = () => {
        channel.removeEventListener("bufferedamountlow", onLow);
        resolve();
      };
      channel.addEventListener("bufferedamountlow", onLow);
    });
  }
}

/**
 * A single WebRTC peer connection driving the full `RTCPeerConnection`-style
 * signaling surface: offer/answer, trickle ICE, and in-band data channels.
 */
export class PeerConnection {
  #pc;
  #candidates;
  #channels;
  /** Latched true once the connection has ever reached `connected`. */
  #everConnected = false;
  /** True once `close()` has been called. */
  #closed = false;
  /** True once the connection reached the terminal `failed` state. */
  #failed = false;
  /** Take-once claims for the resource's two streams (see the WIT contract). */
  #candidatesTaken = false;
  #channelsTaken = false;
  /**
   * Pending `waitConnected` rejecters, woken by a local `close()` — the W3C
   * `close()` transitions the state without firing `connectionstatechange`,
   * so a pending waiter would otherwise hang to its timeout.
   */
  #closeHooks = new Set();
  /**
   * Every underlying `RTCDataChannel` this connection created or adopted, so
   * `close()` can close them all at once (see its doc).
   */
  #ownedChannels = new Set();
  /** Take-once claim for `state-changes` (the WIT contract). */
  #stateTaken = false;
  /** Wake callbacks for the `state-changes` watch (see `stateStream`). */
  #statePokes = new Set();

  /** @param {PeerConnectionConfig | undefined} config */
  constructor(config) {
    // Every option a supplied config carries was accepted by its setters, so
    // it maps straight onto the W3C configuration; `undefined` leaves the
    // browser defaults.
    this.#pc = new RTCPeerConnection(config ? config.toConfiguration() : undefined);

    // Latch `connected` as soon as it is reached, independent of any
    // `waitConnected` caller: the WIT contract keeps reporting a
    // once-connected connection as connected even after a later close.
    // Latch `failed` the same way: a failed connection is terminally over
    // per the WIT contract, so it makes the same observations `close()`
    // makes — pending waiters are woken and the resource's streams end.
    const latch = () => {
      if (this.#isConnectedNow()) this.#everConnected = true;
      if (!this.#failed && this.#isFailedNow()) {
        this.#failed = true;
        for (const hook of this.#closeHooks) hook();
        this.#closeHooks.clear();
        this.#candidates.end();
        this.#channels.end();
        for (const poke of this.#statePokes) poke();
      }
    };
    this.#pc.addEventListener("connectionstatechange", latch);
    this.#pc.addEventListener("iceconnectionstatechange", latch);

    // Local ICE candidates. End-of-candidates has two W3C signals — a `null`
    // (or empty) candidate in the `icecandidate` event, and `iceGatheringState`
    // reaching `"complete"` — and backends differ in which they emit, so the
    // stream ends on whichever arrives first. The node-datachannel backend
    // emits only the gathering-state transition, and can be observed in the
    // `"complete"` state before its trickled `icecandidate` events dispatch;
    // the local description contains every gathered candidate by then, so the
    // full set is recovered from it at that point (deduplicated against the
    // trickled events, whose stragglers are dropped by the ended stream).
    this.#candidates = eventStream((push, end) => {
      const seen = new Set();
      const pushCandidate = (candidate, sdpMid, sdpMlineIndex) => {
        // Normalize to the W3C `candidate:…` attribute form (some backends
        // report the raw SDP line, `a=candidate:…`).
        const normalized = candidate.trim().replace(/^a=/, "");
        if (seen.has(normalized)) return;
        seen.add(normalized);
        push({ candidate: normalized, sdpMid, sdpMlineIndex });
      };
      this.#pc.addEventListener("icecandidate", ({ candidate }) => {
        if (candidate == null || candidate.candidate === "") {
          end();
          return;
        }
        pushCandidate(
          candidate.candidate,
          candidate.sdpMid ?? undefined,
          candidate.sdpMLineIndex ?? undefined,
        );
      });
      this.#pc.addEventListener("icegatheringstatechange", () => {
        if (this.#pc.iceGatheringState !== "complete") return;
        for (const c of sdpCandidates(this.#pc.localDescription?.sdp)) {
          pushCandidate(c.candidate, c.sdpMid, c.sdpMlineIndex);
        }
        end();
      });
    });

    // Data channels opened by the remote peer.
    this.#channels = eventStream((push) => {
      this.#pc.addEventListener("datachannel", ({ channel }) => {
        this.#ownedChannels.add(channel);
        push(new DataChannel(channel));
      });
    });
  }

  /**
   * Throw `{ tag: 'closed' }` when the connection is terminally over, per the
   * WIT contract for method calls made after `close` (the gate precedes any
   * input handling, so a malformed argument after close is still `closed`).
   */
  #requireOpen() {
    if (this.#closed || this.#failed || this.#isFailedNow() || this.#pc.connectionState === "closed") {
      throw { tag: "closed" };
    }
  }

  #isConnectedNow() {
    return (
      this.#pc.connectionState === "connected" ||
      this.#pc.iceConnectionState === "connected" ||
      this.#pc.iceConnectionState === "completed"
    );
  }

  #isFailedNow() {
    return (
      this.#pc.connectionState === "failed" || this.#pc.iceConnectionState === "failed"
    );
  }

  /**
   * Create a data channel negotiated in-band with the peer.
   * @param {DataChannelOptions} options
   */
  createDataChannel(options) {
    this.#requireOpen();
    try {
      const channel = this.#pc.createDataChannel(options.label(), options.toInit());
      this.#ownedChannels.add(channel);
      return new DataChannel(channel);
    } catch (err) {
      throw { tag: "other", val: String(err) };
    }
  }

  /**
   * A stream of data channels opened by the remote peer. Take-once per the
   * WIT contract: later calls return a stream that ends immediately, and
   * channels are never re-delivered.
   */
  incomingDataChannels() {
    if (this.#channelsTaken) return emptyStream();
    this.#channelsTaken = true;
    return this.#channels.stream;
  }

  /** Produce an SDP offer describing the local peer. */
  async createOffer() {
    this.#requireOpen();
    try {
      // A channel-less offer never resolves when the backend needs
      // negotiation material, so give it an SCTP section: a pre-negotiated
      // probe channel is invisible to the remote peer (never announced
      // in-band; the WIT options surface cannot collide with its id). The id
      // sits at the top of libdatachannel's default stream range, far above
      // the in-band ids assigned from zero.
      if (offerNeedsChannel && this.#ownedChannels.size === 0) {
        this.#pc.createDataChannel("", { negotiated: true, id: 1023 });
      }
      const offer = await this.#pc.createOffer();
      return { kind: "offer", sdp: offer.sdp };
    } catch (err) {
      // Map to a WIT error rather than letting the rejection escape as a trap.
      throw { tag: "other", val: String(err) };
    }
  }

  /** Produce an SDP answer in response to a previously set remote offer. */
  async createAnswer() {
    this.#requireOpen();
    try {
      const answer = await this.#pc.createAnswer();
      return { kind: "answer", sdp: answer.sdp };
    } catch (err) {
      // Map to a WIT error rather than letting the rejection escape as a trap.
      throw { tag: "other", val: String(err) };
    }
  }

  /**
   * Apply a local description produced by `createOffer`/`createAnswer`.
   * @param {{ kind: string, sdp: string }} description
   */
  async setLocalDescription(description) {
    this.#requireOpen();
    try {
      await this.#pc.setLocalDescription({ type: description.kind, sdp: description.sdp });
    } catch (err) {
      throw { tag: "invalid-signaling", val: String(err) };
    }
  }

  /**
   * Apply the remote peer's description.
   * @param {{ kind: string, sdp: string }} description
   */
  async setRemoteDescription(description) {
    this.#requireOpen();
    try {
      await this.#pc.setRemoteDescription({ type: description.kind, sdp: description.sdp });
    } catch (err) {
      throw { tag: "invalid-signaling", val: String(err) };
    }
  }

  /**
   * A stream of locally gathered ICE candidates to trickle to the peer.
   * Take-once per the WIT contract: later calls return a stream that ends
   * immediately, and candidates are never re-delivered. End-of-candidates is
   * the stream ending.
   */
  localIceCandidates() {
    if (this.#candidatesTaken) return emptyStream();
    this.#candidatesTaken = true;
    return this.#candidates.stream;
  }

  /**
   * Add an ICE candidate received from the remote peer.
   * @param {{ candidate: string, sdpMid?: string, sdpMlineIndex?: number }} candidate
   */
  async addIceCandidate(candidate) {
    this.#requireOpen();
    try {
      await this.#pc.addIceCandidate({
        candidate: candidate.candidate,
        sdpMid: candidate.sdpMid ?? null,
        sdpMLineIndex: candidate.sdpMlineIndex ?? null,
      });
    } catch (err) {
      throw { tag: "invalid-signaling", val: String(err) };
    }
  }

  /**
   * A stream of lifecycle states: a coalescing watch whose first element
   * reflects the state at the first read, ending after a terminal state
   * (`failed` or `closed` — see the WIT contract). The local `#closed` and
   * `#failed` latches win over the live `connectionState`, so nothing is
   * ever observed after a terminal state. Take-once: later calls return a
   * stream that ends immediately.
   */
  stateChanges() {
    if (this.#stateTaken) return emptyStream();
    this.#stateTaken = true;
    return stateStream(
      () => {
        if (this.#closed) return "closed";
        if (this.#failed) return "failed";
        return this.#pc.connectionState;
      },
      (wake) => {
        this.#pc.addEventListener("connectionstatechange", wake);
        this.#pc.addEventListener("iceconnectionstatechange", wake);
        this.#statePokes.add(wake);
      },
      (state) => state === "failed" || state === "closed",
    );
  }

  /**
   * Resolve once the connection reaches `connected`.
   *
   * `connected` is latched per the WIT contract: once the connection has ever
   * connected this resolves immediately — including after a later `close` —
   * and may be awaited repeatedly. If the connection closes or fails without
   * ever having connected it rejects `{ tag: 'closed' }`; a handshake that
   * can never complete (for example with no remote peer) rejects
   * `{ tag: 'timed-out' }` after `CONNECT_TIMEOUT_MS`.
   */
  async waitConnected() {
    const pc = this.#pc;
    const isFailed = () => this.#isFailedNow() || pc.connectionState === "closed";

    if (this.#isConnectedNow()) this.#everConnected = true;
    if (this.#everConnected) return;
    if (this.#closed || isFailed()) throw { tag: "closed" };
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        cleanup();
        reject({ tag: "timed-out" });
      }, CONNECT_TIMEOUT_MS);
      const check = () => {
        if (this.#isConnectedNow()) {
          this.#everConnected = true;
          cleanup();
          resolve();
        } else if (isFailed()) {
          cleanup();
          reject({ tag: "closed" });
        }
      };
      const onClose = () => {
        cleanup();
        reject({ tag: "closed" });
      };
      const cleanup = () => {
        clearTimeout(timer);
        this.#closeHooks.delete(onClose);
        pc.removeEventListener("connectionstatechange", check);
        pc.removeEventListener("iceconnectionstatechange", check);
      };
      this.#closeHooks.add(onClose);
      pc.addEventListener("connectionstatechange", check);
      pc.addEventListener("iceconnectionstatechange", check);
    });
  }

  /**
   * Close the peer connection and any of its data channels. Idempotent; wakes
   * pending `waitConnected` callers (the W3C `close()` transitions the state
   * without firing events).
   *
   * The close is observed **locally** at once — methods fail `closed`, the
   * resource's streams end, and every owned channel is closed (its graceful
   * W3C `close()` still transmits already-buffered data) — but the
   * connection-level teardown is deferred until every channel's
   * `bufferedAmount` drains, bounded by `CLOSE_DRAIN_MS`: an immediate
   * `pc.close()` discards the SCTP send queue, so a message sent just before
   * `close()` (for example a rendezvous sentinel the remote peer still needs)
   * would be lost.
   */
  close() {
    if (this.#closed) return;
    this.#closed = true;
    for (const hook of this.#closeHooks) hook();
    this.#closeHooks.clear();
    this.#candidates.end();
    this.#channels.end();
    for (const poke of this.#statePokes) poke();
    // Close the channels now (keeping the post-close contract observable at
    // once), then tear the connection down once their send buffers drain.
    for (const channel of this.#ownedChannels) {
      try {
        channel.close();
      } catch {
        // Already closed.
      }
    }
    const deadline = Date.now() + CLOSE_DRAIN_MS;
    const drained = () =>
      [...this.#ownedChannels].every((channel) => channel.bufferedAmount === 0);
    const tick = setInterval(() => {
      if (drained() || Date.now() >= deadline) {
        clearInterval(tick);
        this.#pc.close();
      }
    }, 10);
    // Under Node, do not hold an exiting process open for the drain: process
    // exit already flushed-or-lost everything this timer could affect.
    tick.unref?.();
  }

  /**
   * Dispose hook jco invokes when the guest drops the resource: close the
   * connection so `node-datachannel` tears down its native ICE/DTLS/SCTP
   * threads and sockets even if the guest never called `close`.
   */
  [Symbol.dispose]() {
    try {
      this.close();
    } catch {
      // Already closed.
    }
  }
}

/**
 * A `ReadableStream` fed by an event source. `setup(push, end)` wires the source
 * to `push` each value and `end` to close the stream; values pushed before the
 * stream starts pulling are buffered.
 */
function eventStream(setup) {
  let controller;
  let ended = false;
  const buffer = [];
  const stream = new ReadableStream({
    start(c) {
      controller = c;
      for (const item of buffer) c.enqueue(item);
      buffer.length = 0;
      if (ended) c.close();
    },
  });
  const push = (item) => {
    if (ended) return;
    if (controller) controller.enqueue(item);
    else buffer.push(item);
  };
  const end = () => {
    if (ended) return;
    ended = true;
    if (controller) {
      try {
        controller.close();
      } catch {
        // Already closed.
      }
    }
  };
  setup(push, end);
  return { stream, end };
}

/** A `ReadableStream` that ends immediately without yielding anything. */
function emptyStream() {
  return new ReadableStream({
    start(controller) {
      controller.close();
    },
  });
}

/**
 * Extract the ICE candidates from an SDP description as
 * `{ candidate, sdpMid, sdpMlineIndex }` records in the W3C trickle shape
 * (`candidate` carries the attribute value without the `a=` prefix).
 */
function sdpCandidates(sdp) {
  if (!sdp) return [];
  const out = [];
  let sdpMid;
  let sdpMlineIndex = -1;
  for (const line of sdp.split(/\r?\n/)) {
    if (line.startsWith("m=")) {
      sdpMlineIndex += 1;
      sdpMid = undefined;
    } else if (line.startsWith("a=mid:")) {
      sdpMid = line.slice("a=mid:".length).trim();
    } else if (line.startsWith("a=candidate:")) {
      out.push({
        candidate: line.slice("a=".length).trim(),
        sdpMid,
        sdpMlineIndex: sdpMlineIndex >= 0 ? sdpMlineIndex : undefined,
      });
    }
  }
  return out;
}

/**
 * Iterate a guest-provided WIT stream: jco hands the host its own async-iterable
 * `Stream` object (a web `ReadableStream` is also tolerated). Yields one stream
 * element per iteration.
 */
async function* streamItems(stream) {
  if (globalThis.ReadableStream && stream instanceof ReadableStream) {
    const reader = stream.getReader();
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }
  for await (const value of stream) {
    // A batched read yields an array of elements.
    if (Array.isArray(value)) {
      yield* value;
    } else {
      yield value;
    }
  }
}

/**
 * Coerce one chunk of a WIT byte stream (a number, an array of numbers, or a
 * typed array, depending on how the runtime batched the read) to a
 * `Uint8Array`.
 */
function toByteChunk(value) {
  if (typeof value === "number") return Uint8Array.of(value);
  if (value instanceof Uint8Array) return value;
  return Uint8Array.from(value);
}

/** A single-chunk byte `ReadableStream` over `bytes`. */
function bytesToStream(bytes) {
  return new ReadableStream({
    start(controller) {
      if (bytes.length) controller.enqueue(bytes);
      controller.close();
    },
  });
}

/** Collect every byte of a WIT byte stream into one `Uint8Array`. */
async function collectByteStream(stream) {
  const chunks = [];
  let total = 0;
  const push = (value) => {
    if (value === undefined || value === null) return;
    const chunk = toByteChunk(value);
    if (chunk.length) {
      chunks.push(chunk);
      total += chunk.length;
    }
  };
  if (globalThis.ReadableStream && stream instanceof ReadableStream) {
    const reader = stream.getReader();
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        push(value);
      }
    } finally {
      reader.releaseLock();
    }
  } else if (typeof stream.read === "function") {
    // jco's own Stream object: read in batches rather than per element.
    for (;;) {
      const { value, done } = await stream.read({ count: 65536 });
      push(value);
      if (done) break;
    }
  } else {
    for await (const value of stream) {
      push(value);
    }
  }
  return concatChunks(chunks, total);
}

/** Concatenate `chunks` (totalling `total` bytes) into one `Uint8Array`. */
function concatChunks(chunks, total) {
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }
  return out;
}

/**
 * Build a per-message inbound queue over `channel`. Each received message is
 * tagged as a `message` variant (`{ tag: 'binary', val: Uint8Array }` for binary
 * frames, `{ tag: 'string', val: string }` for text frames). `next()` resolves
 * with the next message, or rejects with `{ tag: 'closed' }` once the channel
 * closes with no more messages pending.
 *
 * Buffering is bounded by the configured inbound bound in payload bytes: a message that
 * would exceed it closes the channel and discards that and any later messages;
 * the pre-overflow backlog stays deliverable, after which `next()` rejects with
 * `{ tag: 'receive-buffer-overflow' }`.
 */
/**
 * A pull-based coalescing state watch backing the `state-changes` streams:
 * each element is `current()` at the time it is produced (the first element
 * reflects the state at the first read), consecutive elements are distinct,
 * and the stream closes after a terminal state. `subscribe` registers a
 * wake callback for potential state changes and is called once.
 *
 * @param {() => string} current
 * @param {(wake: () => void) => void} subscribe
 * @param {(state: string) => boolean} isTerminal
 */
function stateStream(current, subscribe, isTerminal) {
  let delivered;
  let notify = null;
  subscribe(() => {
    if (notify) {
      const wake = notify;
      notify = null;
      wake();
    }
  });
  return new ReadableStream({
    async pull(controller) {
      for (;;) {
        // Arm the wake before checking, so a transition between the check
        // and the wait is not missed.
        const woken = new Promise((resolve) => {
          notify = resolve;
        });
        const state = current();
        if (state !== delivered) {
          delivered = state;
          controller.enqueue(state);
          if (isTerminal(state)) controller.close();
          return;
        }
        if (isTerminal(state)) {
          controller.close();
          return;
        }
        await woken;
      }
    },
  });
}

function incomingQueue(channel) {
  const limit = maxInboundBuffered;
  const messages = [];
  const waiters = [];
  let buffered = 0;
  let overflowed = false;
  let closed = false;

  const push = (message, size) => {
    const waiter = waiters.shift();
    if (waiter) {
      waiter.resolve(message);
    } else {
      buffered += size;
      messages.push({ message, size });
    }
  };

  channel.addEventListener("message", ({ data }) => {
    if (overflowed) return;
    // Account string payloads in UTF-8 bytes (the WIT bound counts payload
    // bytes; `.length` would count UTF-16 code units).
    const size = typeof data === "string" ? utf8ByteLength(data) : data.byteLength;
    if (buffered + size > limit && !waiters.length) {
      // The bounded inbound buffer overflowed: close the channel and discard
      // this and any later messages. Already-buffered messages stay deliverable.
      overflowed = true;
      channel.close();
      return;
    }
    const message =
      typeof data === "string"
        ? { tag: "string", val: data }
        : { tag: "binary", val: new Uint8Array(data) };
    push(message, size);
  });

  const endError = () => (overflowed ? { tag: "receive-buffer-overflow" } : { tag: "closed" });
  const end = () => {
    if (closed) return;
    closed = true;
    while (waiters.length) {
      waiters.shift().reject(endError());
    }
  };
  channel.addEventListener("close", end);
  channel.addEventListener("error", end);

  return {
    next() {
      if (messages.length) {
        const { message, size } = messages.shift();
        buffered -= size;
        return Promise.resolve(message);
      }
      if (overflowed) return Promise.reject({ tag: "receive-buffer-overflow" });
      if (closed) return Promise.reject({ tag: "closed" });
      return new Promise((resolve, reject) => waiters.push({ resolve, reject }));
    },
    /** Reject every pending waiter with `error` (a WIT `error` variant value). */
    rejectWaiters(error) {
      while (waiters.length) {
        waiters.shift().reject(error);
      }
    },
    /**
     * Discard the unread backlog and fail pending and future reads `closed`
     * (a local `close`, per the WIT contract).
     */
    discard() {
      messages.length = 0;
      buffered = 0;
      closed = true;
      while (waiters.length) {
        waiters.shift().reject({ tag: "closed" });
      }
    },
  };
}
