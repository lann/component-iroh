// Synthetic WASI 0.2 shim for the udp-wake probe.
//
// One module implements every wasi interface the guest imports. The
// point of the experiment lives in three places:
//
//   * `Pollable`/`poll`: async under JSPI — when nothing is ready the
//     component suspends here, and the JS event loop runs.
//   * The synthetic UDP socket: `injectDatagram()` queues a datagram from
//     JS and resolves the socket's arrival promise, which completes a
//     suspended `poll` — waking the guest's tokio reactor.
//   * `stats`: counts polls and suspensions so a busy-loop is
//     distinguishable from real parking.
//
// Everything else is the minimum for a Rust wasip2 command component:
// stdio streams, clocks, insecure-seed, and throwing TCP stubs.

import { performance } from "node:perf_hooks";

// ---------------------------------------------------------------------------
// instrumentation + host control surface (not WASI)

export const stats = {
  pollCalls: 0, // wasi:io/poll#poll invocations
  pollSuspends: 0, // polls that found nothing ready and awaited
  blocks: 0, // pollable.block invocations
  injected: 0, // datagrams pushed in from JS
  sent: 0, // datagrams the guest sent out
};

let sendListener = null;
/** Register the observer for guest-sent datagrams ({ data, remoteAddress }). */
export function onSend(cb) {
  sendListener = cb;
}

let boundResolve;
/** Resolves with the bound UdpSocket once the guest has bound it. */
export const socketBound = new Promise((r) => (boundResolve = r));

/** Push a datagram into the (single) bound socket's receive queue. */
export function injectDatagram(bytes, fromAddr) {
  const sock = theSocket;
  if (!sock || !sock.bound) throw new Error("no bound socket");
  stats.injected++;
  sock.queue.push({
    data: bytes,
    remoteAddress: fromAddr ?? {
      tag: "ipv4",
      val: { port: 9999, address: [127, 0, 0, 1] },
    },
  });
  sock.arrived(); // resolve the arrival promise -> completes a pending poll
}

// ---------------------------------------------------------------------------
// wasi:io/poll

const hrnow = () => process.hrtime.bigint();

export class Pollable {
  #readyFn;
  #waitFn;
  constructor(readyFn, waitFn) {
    this.#readyFn = readyFn;
    this.#waitFn = waitFn;
  }
  ready() {
    return this.#readyFn();
  }
  async block() {
    stats.blocks++;
    while (!this.#readyFn()) await this.#waitFn();
  }
  waitPromise() {
    return this.#waitFn();
  }
}

const READY = new Pollable(
  () => true,
  () => Promise.resolve(),
);
const NEVER = new Pollable(
  () => false,
  () => new Promise(() => {}),
);

async function pollList(list) {
  stats.pollCalls++;
  for (;;) {
    const ready = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].ready()) ready.push(i);
    }
    if (ready.length) return ready;
    stats.pollSuspends++;
    await Promise.race(list.map((p) => p.waitPromise()));
  }
}

export const poll = { Pollable, poll: pollList };

// ---------------------------------------------------------------------------
// wasi:clocks

function timerPollable(deadlineNs) {
  return new Pollable(
    () => hrnow() >= deadlineNs,
    () =>
      new Promise((r) => {
        const ms = Number(deadlineNs - hrnow()) / 1e6;
        setTimeout(r, Math.max(0, ms));
      }),
  );
}

export const monotonicClock = {
  now: () => hrnow(),
  resolution: () => 1n,
  subscribeInstant: (when) => timerPollable(when),
  subscribeDuration: (ns) => timerPollable(hrnow() + ns),
};

export const wallClock = {
  now() {
    const ms = Date.now();
    return {
      seconds: BigInt(Math.floor(ms / 1000)),
      nanoseconds: (ms % 1000) * 1e6,
    };
  },
  resolution: () => ({ seconds: 0n, nanoseconds: 1e6 }),
};

// ---------------------------------------------------------------------------
// wasi:io/error + streams (stdio only)

export class IoError {
  #msg;
  constructor(msg) {
    this.#msg = String(msg);
  }
  toDebugString() {
    return this.#msg;
  }
}
export const error = { Error: IoError };

class InputStream {
  read() {
    return new Uint8Array(0);
  }
  blockingRead() {
    return new Uint8Array(0);
  }
  subscribe() {
    return NEVER;
  }
  [Symbol.dispose]() {}
}

class OutputStream {
  #tag;
  #buf = "";
  constructor(tag) {
    this.#tag = tag;
  }
  #emit(bytes) {
    this.#buf += new TextDecoder().decode(bytes);
    for (;;) {
      const nl = this.#buf.indexOf("\n");
      if (nl === -1) break;
      const line = this.#buf.slice(0, nl);
      this.#buf = this.#buf.slice(nl + 1);
      console.log(`[${this.#tag}] ${line}`);
    }
  }
  checkWrite() {
    return 1n << 20n;
  }
  write(bytes) {
    this.#emit(bytes);
  }
  blockingWriteAndFlush(bytes) {
    this.#emit(bytes);
  }
  flush() {}
  blockingFlush() {}
  subscribe() {
    return READY;
  }
  [Symbol.dispose]() {}
}

const stdinStream = new InputStream();
const stdoutStream = new OutputStream("guest-out");
const stderrStream = new OutputStream("guest-err");

export const streams = { InputStream, OutputStream };
export const stdin = { getStdin: () => stdinStream, InputStream };
export const stdout = { getStdout: () => stdoutStream, OutputStream };
export const stderr = { getStderr: () => stderrStream, OutputStream };

// ---------------------------------------------------------------------------
// wasi:cli environment/exit/terminal

export const environment = {
  getEnvironment: () => [],
  getArguments: () => ["udp-wake-guest"],
  initialCwd: () => undefined,
};

export const exit = {
  exit(status) {
    if (status.tag === "err") {
      throw new Error("guest exited with failure");
    }
  },
};

export class TerminalInput {}
export class TerminalOutput {}
export const terminalInput = { TerminalInput };
export const terminalOutput = { TerminalOutput };
export const terminalStdin = { getTerminalStdin: () => undefined };
export const terminalStdout = { getTerminalStdout: () => undefined };
export const terminalStderr = { getTerminalStderr: () => undefined };

// ---------------------------------------------------------------------------
// wasi:random (std hashmap seeding only)

export const insecureSeed = {
  insecureSeed: () => [0x243f6a8885a308d3n, 0x13198a2e03707344n],
};

// ---------------------------------------------------------------------------
// wasi:sockets — the synthetic network

export class Network {
  [Symbol.dispose]() {}
}
const theNetwork = new Network();
export const network = { Network };
export const instanceNetwork = { instanceNetwork: () => theNetwork };

let theSocket = null;

class IncomingDatagramStream {
  #sock;
  constructor(sock) {
    this.#sock = sock;
  }
  receive(maxResults) {
    const n = Math.min(Number(maxResults), this.#sock.queue.length);
    return this.#sock.queue.splice(0, n);
  }
  subscribe() {
    const sock = this.#sock;
    return new Pollable(
      () => sock.queue.length > 0,
      () => sock.arrivalPromise,
    );
  }
  [Symbol.dispose]() {}
}

class OutgoingDatagramStream {
  #sock;
  constructor(sock) {
    this.#sock = sock;
  }
  checkSend() {
    return 64n;
  }
  send(datagrams) {
    for (const d of datagrams) {
      stats.sent++;
      if (sendListener) sendListener(d);
    }
    return BigInt(datagrams.length);
  }
  subscribe() {
    return READY;
  }
  [Symbol.dispose]() {}
}

export class UdpSocket {
  family;
  bound = false;
  localAddr = null;
  queue = [];
  arrivalPromise;
  arrived; // resolve current arrivalPromise, then replace it
  #pendingBind = null;

  constructor(family) {
    this.family = family;
    this.#rearm();
    theSocket = this;
  }
  #rearm() {
    let resolve;
    this.arrivalPromise = new Promise((r) => (resolve = r));
    this.arrived = () => {
      resolve();
      this.#rearm();
    };
  }

  startBind(_network, localAddress) {
    this.#pendingBind = localAddress;
  }
  finishBind() {
    if (this.#pendingBind === null) throw "not-in-progress";
    this.localAddr = this.#pendingBind;
    this.#pendingBind = null;
    this.bound = true;
    boundResolve(this);
  }
  stream(_remote) {
    return [new IncomingDatagramStream(this), new OutgoingDatagramStream(this)];
  }
  localAddress() {
    if (!this.bound) throw "invalid-state";
    return this.localAddr;
  }
  remoteAddress() {
    throw "invalid-state";
  }
  addressFamily() {
    return this.family;
  }
  unicastHopLimit() {
    return 64;
  }
  setUnicastHopLimit(_v) {}
  receiveBufferSize() {
    return 65536n;
  }
  setReceiveBufferSize(_v) {}
  sendBufferSize() {
    return 65536n;
  }
  setSendBufferSize(_v) {}
  subscribe() {
    const sock = this;
    return new Pollable(
      () => sock.queue.length > 0,
      () => sock.arrivalPromise,
    );
  }
  [Symbol.dispose]() {}
}

export const udp = { UdpSocket, IncomingDatagramStream, OutgoingDatagramStream };
export const udpCreateSocket = {
  createUdpSocket: (family) => new UdpSocket(family),
};

// TCP: linked by tokio's net feature, never called by the probe.
const nope = () => {
  throw "not-supported";
};
export class TcpSocket {
  startBind = nope;
  finishBind = nope;
  startConnect = nope;
  finishConnect = nope;
  startListen = nope;
  finishListen = nope;
  accept = nope;
  localAddress = nope;
  remoteAddress = nope;
  isListening() {
    return false;
  }
  addressFamily() {
    return "ipv4";
  }
  setListenBacklogSize = nope;
  keepAliveEnabled = nope;
  setKeepAliveEnabled = nope;
  keepAliveIdleTime = nope;
  setKeepAliveIdleTime = nope;
  keepAliveInterval = nope;
  setKeepAliveInterval = nope;
  keepAliveCount = nope;
  setKeepAliveCount = nope;
  hopLimit = nope;
  setHopLimit = nope;
  receiveBufferSize = nope;
  setReceiveBufferSize = nope;
  sendBufferSize = nope;
  setSendBufferSize = nope;
  shutdown = nope;
  subscribe() {
    return NEVER;
  }
  [Symbol.dispose]() {}
}
export const tcp = { TcpSocket };
export const tcpCreateSocket = { createTcpSocket: nope };

export { performance };
