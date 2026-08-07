// Host implementation of the `polymorph:websocket/connections` imports.
//
// This is the "browser-first" host: it is written against the standard W3C
// `WebSocket` API only — no `node:` modules, no runtime dependencies — so
// this same file loads unchanged in a browser. Node (22+ ships the
// browser-compatible `WebSocket` global; 24+ is the suite's runner for
// JSPI) is just the current runner. It is the single host module shared by
// the demo runners and the conformance jco legs
// (`conformance/driver-ct/jco`), which import and serve it from this path;
// the conformance suite asserts its behavior.
//
// `jco --map` wires this module in as the component's `connections` import.
// Errors are surfaced to the guest by throwing the WIT `error` variant
// value (for example `{ tag: 'closed' }` or `{ tag: 'invalid-url', val }`),
// which jco lifts into the `result<_, error>` the WIT declares. WIT
// `stream`s map to WHATWG `ReadableStream`s.

if (!globalThis.WebSocket) {
  throw new Error(
    "no WebSocket available: not running in a browser, and this Node version " +
      "does not provide the WebSocket global (Node 22+ required)",
  );
}

// How long `connect` waits for the handshake before failing
// `connect-failed` (the WIT leaves the bound implementation-defined).
const DEFAULT_CONNECT_TIMEOUT_MS = 30_000;

// How long a locally initiated close may wait for the peer's
// acknowledgement before the resource settles as closed anyway. The
// browser owns the underlying socket teardown; this bound is about when
// the *resource* reports closed, per the WIT close contract.
const DEFAULT_CLOSE_TIMEOUT_MS = 10_000;

// The default bound on buffered inbound payload bytes awaiting `receive`.
// There is no wire-level inbound backpressure (the W3C API has no
// read-side flow control), so this bound is what protects memory from a
// slow guest reader: exceeding it closes the connection and, once the
// buffered backlog drains, `receive` fails
// `{ tag: 'receive-buffer-overflow' }`.
const DEFAULT_MAX_INBOUND_BUFFERED = 8 * 1024 * 1024;

// Keep the browser's send buffer bounded; pause the producer while it
// drains. `WebSocket` has no `bufferedamountlow` event, so draining is
// observed by polling.
const MAX_BUFFERED_AMOUNT = 8 * 1024 * 1024;
const DRAIN_POLL_MS = 4;

// Batch size for reads from jco's own Stream objects.
const READ_BATCH = 65536;

/** The configured knobs; connections capture them at `connect`. */
let maxInboundBuffered = DEFAULT_MAX_INBOUND_BUFFERED;
let connectTimeoutMs = DEFAULT_CONNECT_TIMEOUT_MS;
let closeTimeoutMs = DEFAULT_CLOSE_TIMEOUT_MS;

/**
 * Set the per-connection inbound buffer bound, in payload bytes. This
 * module reads no ambient configuration (no environment variables or
 * globals): a host that offers the bound as a knob reads and validates the
 * value itself and applies it here. Throws on anything but a positive
 * finite number.
 */
export function setMaxInboundBufferBytes(bytes) {
  if (!(Number.isFinite(bytes) && bytes > 0)) {
    throw new Error(`invalid inbound buffer bound ${bytes}: expected a positive byte count`);
  }
  maxInboundBuffered = bytes;
}

/** Set the `connect` handshake bound, in milliseconds. */
export function setConnectTimeoutMs(ms) {
  if (!(Number.isFinite(ms) && ms > 0)) {
    throw new Error(`invalid connect timeout ${ms}: expected positive milliseconds`);
  }
  connectTimeoutMs = ms;
}

/** Set the closing-handshake bound, in milliseconds. */
export function setCloseTimeoutMs(ms) {
  if (!(Number.isFinite(ms) && ms > 0)) {
    throw new Error(`invalid close timeout ${ms}: expected positive milliseconds`);
  }
  closeTimeoutMs = ms;
}

/** The UTF-8 byte length of a string (the WIT bounds count bytes). */
const utf8 = new TextEncoder();
function utf8ByteLength(text) {
  return utf8.encode(text).byteLength;
}

/**
 * Whether `token` is a valid RFC 6455 subprotocol token (an RFC 2616
 * `token`: 1+ US-ASCII characters, no separators or control characters).
 */
function isValidProtocolToken(token) {
  if (!token.length) return false;
  for (let i = 0; i < token.length; i += 1) {
    const c = token.charCodeAt(i);
    if (c <= 0x20 || c >= 0x7f) return false;
    if ('"(),/:;<=>?@[\\]{}'.includes(token[i])) return false;
  }
  return true;
}

/** Validate a connect URL per the WIT contract; throws `invalid-url`. */
function validateUrl(url) {
  if (url.includes("#")) {
    throw { tag: "invalid-url", val: "URL must not have a fragment" };
  }
  let parsed;
  try {
    parsed = new URL(url);
  } catch (err) {
    throw { tag: "invalid-url", val: `URL does not parse: ${err.message ?? err}` };
  }
  if (parsed.protocol !== "ws:" && parsed.protocol !== "wss:") {
    throw {
      tag: "invalid-url",
      val: `URL scheme must be ws or wss, not ${JSON.stringify(parsed.protocol)}`,
    };
  }
  if (!parsed.hostname) {
    throw { tag: "invalid-url", val: "URL must have a host" };
  }
  // The WHATWG WebSocket constructor rejects credentials in the URL; the
  // eager taxonomy matches that floor uniformly.
  if (parsed.username || parsed.password) {
    throw { tag: "invalid-url", val: "URL must not have userinfo" };
  }
}

/** Validate a subprotocol offer per the WIT contract; throws `invalid-argument`. */
function validateProtocols(protocols) {
  for (let i = 0; i < protocols.length; i += 1) {
    const protocol = protocols[i];
    if (!isValidProtocolToken(protocol)) {
      throw {
        tag: "invalid-argument",
        val: `subprotocol ${JSON.stringify(protocol)} is not a valid token`,
      };
    }
    if (protocols.indexOf(protocol) !== i) {
      throw {
        tag: "invalid-argument",
        val: `subprotocol ${JSON.stringify(protocol)} is offered twice`,
      };
    }
  }
}

/**
 * Validate close arguments per the WIT contract: `code` 1000 or 3000-4999,
 * `reason` at most 123 UTF-8 bytes and only alongside a code. Throws
 * `invalid-argument`.
 */
function validateCloseArgs(code, reason) {
  if (code !== undefined && code !== null) {
    if (code !== 1000 && !(code >= 3000 && code <= 4999)) {
      throw {
        tag: "invalid-argument",
        val: `close code must be 1000 or in 3000-4999, not ${code}`,
      };
    }
  } else if (reason.length) {
    throw { tag: "invalid-argument", val: "a close reason requires a close code" };
  }
  const bytes = utf8ByteLength(reason);
  if (bytes > 123) {
    throw {
      tag: "invalid-argument",
      val: `close reason must be at most 123 bytes, got ${bytes}`,
    };
  }
}

/**
 * The `websocket` resource: an open WebSocket client connection over the
 * standard browser `WebSocket` API.
 */
export class Websocket {
  #ws;
  #incoming;
  /** Set by a local `close()` (or dispose): the close is observed locally
   *  at once and the unread backlog is discarded. */
  #localClosed = false;
  /** Set once `receive-via-stream` has claimed the inbound messages. */
  #streamClaimed = false;
  /** The settled `wait-closed` value (`undefined` until settled). */
  #closeSettled = false;
  #closeInfo = undefined;
  #closeWaiters = [];
  #closeDeadline = null;

  /**
   * Open a connection (the WIT `connect` static). Resolves with a
   * `Websocket` once the handshake completes; throws the WIT `error`
   * variant on failure.
   * @param {string} url
   * @param {string[]} protocols
   */
  static async connect(url, protocols) {
    validateUrl(url);
    validateProtocols(protocols);

    let ws;
    try {
      ws = protocols.length ? new WebSocket(url, protocols) : new WebSocket(url);
    } catch (err) {
      // Eager validation covered the SyntaxError cases; anything left is a
      // platform policy refusing the connection.
      throw { tag: "connect-failed", val: String(err?.message ?? err) };
    }
    ws.binaryType = "arraybuffer";

    await new Promise((resolve, reject) => {
      let timer;
      const settle = (fn, value) => {
        clearTimeout(timer);
        ws.removeEventListener("open", onOpen);
        ws.removeEventListener("close", onClose);
        ws.removeEventListener("error", onError);
        fn(value);
      };
      const onOpen = () => settle(resolve);
      // Browsers deliberately hide connect-failure diagnostics; the close
      // code is all there is, and it is usually 1006.
      const onClose = (event) =>
        settle(reject, {
          tag: "connect-failed",
          val: event.reason || `connection failed (code ${event.code})`,
        });
      const onError = () => {
        // An `error` event is always followed by `close`; wait for it so
        // the reason (if any) rides along.
      };
      ws.addEventListener("open", onOpen, { once: true });
      ws.addEventListener("close", onClose, { once: true });
      ws.addEventListener("error", onError, { once: true });
      timer = setTimeout(() => {
        settle(reject, {
          tag: "connect-failed",
          val: `handshake timed out after ${connectTimeoutMs}ms`,
        });
        try {
          ws.close();
        } catch {
          // Nothing to reclaim.
        }
      }, connectTimeoutMs);
    });

    // The browser enforces the offer contract natively; these guards keep
    // the taxonomy identical on runtimes that are lax about it.
    if (protocols.length && !protocols.includes(ws.protocol)) {
      try {
        ws.close();
      } catch {
        // Already closing.
      }
      throw {
        tag: "connect-failed",
        val: ws.protocol
          ? `server selected subprotocol ${JSON.stringify(ws.protocol)} which was not offered`
          : "server selected no subprotocol although one was offered",
      };
    }
    if (!protocols.length && ws.protocol) {
      try {
        ws.close();
      } catch {
        // Already closing.
      }
      throw {
        tag: "connect-failed",
        val: `server selected subprotocol ${JSON.stringify(ws.protocol)} although none was offered`,
      };
    }

    return new Websocket(ws);
  }

  /** @param {WebSocket} ws an OPEN browser WebSocket */
  constructor(ws) {
    this.#ws = ws;
    this.#incoming = incomingQueue(ws, () => this.#transportClosing());
    ws.addEventListener("close", (event) => this.#settleClosed(event), { once: true });
    // `error` without `close` does not happen per spec; the close listener
    // is the single settle point.
    ws.addEventListener("error", () => {}, { once: true });
  }

  /** The negotiated subprotocol, or the empty string. */
  protocol() {
    return this.#ws.protocol;
  }

  /**
   * Send one message. Resolves once the message is handed to the
   * transport; throws `{ tag: 'closed' }` once a close was initiated
   * (locally or by the peer) — messages are never silently discarded.
   * @param {{ tag: 'binary', val: Uint8Array } | { tag: 'string', val: string }} message
   */
  async send(message) {
    for (;;) {
      if (this.#localClosed || this.#ws.readyState !== WebSocket.OPEN) {
        throw { tag: "closed" };
      }
      if (this.#ws.bufferedAmount <= MAX_BUFFERED_AMOUNT) break;
      // No `bufferedamountlow` on WebSocket: poll the drain.
      await new Promise((resolve) => setTimeout(resolve, DRAIN_POLL_MS));
    }
    try {
      this.#ws.send(message.val);
    } catch (err) {
      throw { tag: "other", val: String(err?.message ?? err) };
    }
  }

  /**
   * Receive one message; throws the WIT `error` variant once the
   * connection closes (see the WIT close contract).
   */
  async receive() {
    if (this.#localClosed) throw { tag: "closed" };
    if (this.#streamClaimed) throw { tag: "receiving-via-stream" };
    return this.#incoming.next();
  }

  /**
   * Send a stream of messages whose payloads are each streamed as bytes.
   * Rejects with the WIT `send-via-stream-error` record `{ error, sent }`.
   * @param {ReadableStream<{ kind: 'binary'|'string', length: number, data: ReadableStream }>} messages
   */
  async sendViaStream(messages) {
    let sent = 0n;
    try {
      for await (const item of streamItems(messages)) {
        // Buffering is bounded by the declared length; bytes past it are
        // counted, not stored, so a mis-declared length cannot grow host
        // memory without bound.
        const { bytes, excess } = await collectByteStream(item.data, item.length);
        if (excess > 0 || bytes.length !== item.length) {
          throw {
            tag: "other",
            val: `stream-message payload was ${bytes.length + excess} bytes but length declared ${item.length}`,
          };
        }
        let message;
        if (item.kind === "string") {
          // The payload must be valid UTF-8, per the streaming contract; a
          // lossy decode would silently send mangled text.
          let text;
          try {
            text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
          } catch {
            throw {
              tag: "other",
              val: "string stream-message payload is not valid UTF-8",
            };
          }
          message = { tag: "string", val: text };
        } else {
          message = { tag: "binary", val: bytes };
        }
        await this.send(message);
        sent += 1n;
      }
    } catch (error) {
      // A WIT error variant passes through; anything else is a host-side
      // failure and must not masquerade as a normal close.
      throw {
        error:
          typeof error?.tag === "string" ? error : { tag: "other", val: String(error) },
        sent,
      };
    }
  }

  /**
   * Take over the connection's inbound messages, delivering each as a
   * `stream-message` whose payload is a byte `ReadableStream`. Once-only:
   * a second call (or any later `receive`) throws
   * `{ tag: 'receiving-via-stream' }`, and any pending `receive` is
   * resolved with it. The stream ends when the connection closes.
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
          // The connection closed (or its inbound buffer overflowed): the
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

  /**
   * The connection's current lifecycle state: `'open' | 'closing' |
   * 'closed'`. `closed` is terminal and latched.
   */
  state() {
    return this.#currentState();
  }

  /**
   * Resolve once the connection is closed, with the peer's close frame
   * (`{ code, reason }`) or `undefined` for an abnormal closure. Latched:
   * every call resolves with the same value.
   */
  async waitClosed() {
    if (this.#closeSettled) return this.#closeInfo;
    return new Promise((resolve) => this.#closeWaiters.push(resolve));
  }

  /**
   * Close the connection (the WIT `close`): validate eagerly, then
   * initiate the closing handshake and return. Idempotent after the first
   * accepted call.
   * @param {number | undefined} code
   * @param {string} reason
   */
  close(code, reason) {
    validateCloseArgs(code, reason);
    if (this.#localClosed) return;
    this.#localClosed = true;
    this.#incoming.discard();
    // The resource settles as closed within the close bound even when the
    // peer never acknowledges; the browser owns the socket's own fate.
    this.#closeDeadline = setTimeout(() => this.#settleClosed(null), closeTimeoutMs);
    try {
      if (code === undefined || code === null) {
        this.#ws.close();
      } else if (reason.length) {
        this.#ws.close(code, reason);
      } else {
        this.#ws.close(code);
      }
    } catch {
      // Validation covered the argument errors; per the WIT contract the
      // close result reflects arguments only, and the deadline above
      // already bounds the teardown, so a platform throw past this point
      // must not surface.
    }
  }

  /**
   * Dispose hook jco invokes when the guest drops the resource: dropping
   * without `close` implies `close(none, "")`, per the WIT contract.
   */
  [Symbol.dispose]() {
    try {
      this.close(undefined, "");
    } catch {
      // Already closed.
    }
  }

  /**
   * A close was initiated below the resource (an inbound-buffer overflow):
   * bound the teardown and wake the state watch. Unlike a guest-initiated
   * `close`, the receivable backlog is kept — overflow readers drain it
   * before observing the overflow error.
   */
  #transportClosing() {
    if (!this.#closeSettled && this.#closeDeadline === null) {
      this.#closeDeadline = setTimeout(() => this.#settleClosed(null), closeTimeoutMs);
    }
  }

  #currentState() {
    if (this.#closeSettled) return "closed";
    if (this.#localClosed) return "closing";
    switch (this.#ws.readyState) {
      case WebSocket.CLOSING:
        return "closing";
      case WebSocket.CLOSED:
        return "closed";
      default:
        return "open";
    }
  }

  /**
   * Settle the close outcome. `event` is the browser `CloseEvent`, or
   * `null` when the close bound expired first. Codes 1006 (abnormal) and
   * 1015 (TLS failure) are synthesized by the platform, never carried by a
   * frame, so they map to "no close-info", per the WIT close contract.
   */
  #settleClosed(event) {
    if (this.#closeSettled) return;
    this.#closeSettled = true;
    if (this.#closeDeadline !== null) {
      clearTimeout(this.#closeDeadline);
      this.#closeDeadline = null;
    }
    // A settle without a close event (the deadline path) must still end
    // the inbound queue, or a pending receive would hang past the close.
    this.#incoming.end();
    if (event && event.code !== 1006 && event.code !== 1015) {
      this.#closeInfo = { code: event.code, reason: event.reason ?? "" };
    } else {
      this.#closeInfo = undefined;
    }
    const waiters = this.#closeWaiters;
    this.#closeWaiters = [];
    for (const resolve of waiters) resolve(this.#closeInfo);
  }
}

// ----- helpers ---------------------------------------------------------------

/**
 * Build a per-message inbound queue over `ws`. Each received message is
 * tagged as a `message` variant. `next()` resolves with the next message,
 * or rejects with the WIT end error once the connection closes with no
 * more messages pending.
 *
 * Buffering is bounded (in payload bytes): a message that would exceed the
 * bound closes the connection — reported through `onOverflowClose` so the
 * owning resource can bound the teardown — and discards that and any later
 * messages; the pre-overflow backlog stays deliverable, after which
 * `next()` rejects with `{ tag: 'receive-buffer-overflow' }`.
 */
function incomingQueue(ws, onOverflowClose) {
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

  ws.addEventListener("message", ({ data }) => {
    if (overflowed) return;
    // Account string payloads in UTF-8 bytes (the WIT bound counts payload
    // bytes; `.length` would count UTF-16 code units).
    const size = typeof data === "string" ? utf8ByteLength(data) : data.byteLength;
    // The bound applies to queued bytes: a pending waiter implies an empty
    // queue (`buffered` is 0), so this reduces to `size > limit` then — a
    // single message larger than the whole bound overflows even when a
    // receiver is waiting for it, matching the wasmtime host.
    if (buffered + size > limit) {
      // The bounded inbound buffer overflowed: close the connection and
      // discard this and any later messages. Buffered messages stay
      // deliverable.
      overflowed = true;
      try {
        ws.close();
      } catch {
        // Already closing.
      }
      onOverflowClose();
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
  ws.addEventListener("close", end);
  ws.addEventListener("error", end);

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
     * End the queue: pending and future reads past the backlog fail with
     * the end error (overflow-aware). Idempotent; used by the deadline
     * settle path, where no browser close event ever fires.
     */
    end,
    /**
     * Discard the unread backlog and fail pending and future reads
     * `closed` (a local `close`, per the WIT contract).
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

/**
 * Iterate a guest-provided WIT stream: jco hands the host its own
 * async-iterable `Stream` object (a web `ReadableStream` is also
 * tolerated). Yields one stream element per iteration.
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
 * Coerce one chunk of a WIT byte stream (a number, an array of numbers, or
 * a typed array, depending on how the runtime batched the read) to a
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

/**
 * Collect a WIT byte stream into one `Uint8Array`, storing at most `limit`
 * bytes; bytes past the limit are consumed and counted in `excess`, never
 * buffered.
 */
async function collectByteStream(stream, limit) {
  const chunks = [];
  let total = 0;
  let excess = 0;
  const push = (value) => {
    if (value === undefined || value === null) return;
    let chunk = toByteChunk(value);
    if (!chunk.length) return;
    const room = limit - total;
    if (chunk.length > room) {
      excess += chunk.length - Math.max(room, 0);
      if (room <= 0) return;
      chunk = chunk.subarray(0, room);
    }
    chunks.push(chunk);
    total += chunk.length;
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
      const { value, done } = await stream.read({ count: READ_BATCH });
      push(value);
      if (done) break;
    }
  } else {
    for await (const value of stream) {
      push(value);
    }
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }
  return { bytes: out, excess };
}

// The interface-shaped aggregate export: jco's `--map
// 'polymorph:websocket/*@0.1.0=websocket.js#*'` resolves each imported
// interface to a named export of this module, so transpiled components
// (the componentize round-trip legs) import `{ connections }` rather than
// the module namespace the instantiation-mode adapters pass explicitly.
export const connections = { Websocket };
