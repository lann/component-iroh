// Synthetic WASI 0.2 shim for the iroh-relay-ws spike.
//
// Descendant of the udp-wake probe's shim (PR #18), extended for a real
// iroh guest: multiple synthetic UDP sockets (one per relay connection
// pipe), `wasi:random/random` (QUIC/TLS keys), filesystem and
// ip-name-lookup stubs, and RUST_LOG passthrough. The websocket bridge
// (bridge.mjs) drives the socket hooks exported at the bottom.

import { performance } from "node:perf_hooks";
import { randomFillSync } from "node:crypto";

// ---------------------------------------------------------------------------
// instrumentation

export const stats = {
  pollCalls: 0,
  pollSuspends: 0,
  blocks: 0,
  datagramsIn: 0, // bridge -> guest
  datagramsOut: 0, // guest -> bridge
};

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
  // RUST_LOG passes through so guest tracing is steerable from the driver.
  getEnvironment: () =>
    process.env.RUST_LOG ? [["RUST_LOG", process.env.RUST_LOG]] : [],
  getArguments: () => ["iroh-relay-ws-guest"],
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
// wasi:random

export const insecureSeed = {
  insecureSeed: () => [0x243f6a8885a308d3n, 0x13198a2e03707344n],
};

export const random = {
  getRandomBytes(len) {
    const out = new Uint8Array(Number(len));
    randomFillSync(out);
    return out;
  },
  getRandomU64() {
    const buf = new BigUint64Array(1);
    randomFillSync(buf);
    return buf[0];
  },
};

// ---------------------------------------------------------------------------
// wasi:filesystem (nothing real: no preopens, descriptor methods unreachable)

export class Descriptor {}
export class DirectoryEntryStream {}
export const types = {
  Descriptor,
  DirectoryEntryStream,
  filesystemErrorCode: () => undefined,
};
export const preopens = { getDirectories: () => [] };

// ---------------------------------------------------------------------------
// wasi:sockets — the synthetic network (multi-socket)

export class Network {
  [Symbol.dispose]() {}
}
const theNetwork = new Network();
export const network = { Network };
export const instanceNetwork = { instanceNetwork: () => theNetwork };

/** The relay-ws bridge's well-known synthetic address (see datagram_pipe.rs). */
export const BRIDGE_ADDR = {
  tag: "ipv4",
  val: { port: 1, address: [127, 0, 0, 1] },
};

let nextEphemeralPort = 0xc000;

/** Bridges by well-known destination port (1 = relay ws, 2 = webrtc control). */
const bridges = new Map();

/** Bridge hook: claim every guest datagram sent to the given port. */
export function registerBridge(port, cb) {
  bridges.set(port, cb);
}

/**
 * Overlay routes by full destination address ("a.b.c.d:port"), consulted
 * before the port bridges: synthetic peer addresses assigned by a bridge
 * route here, whatever socket the guest sends from.
 */
const addrRoutes = new Map();

const addrKey = (remoteAddress) =>
  `${remoteAddress.val.address.join(".")}:${remoteAddress.val.port}`;

/** Bridge hook: claim guest datagrams to one synthetic address. */
export function registerAddrRoute(address, port, cb) {
  addrRoutes.set(`${address.join(".")}:${port}`, cb);
}

/** All bound sockets by assigned local port (for bridge-initiated delivery). */
const socketsByPort = new Map();

/** Bridge hook: find a guest socket by its bound local port. */
export function socketByLocalPort(port) {
  return socketsByPort.get(port);
}

/** Bridge hook: deliver a datagram to a socket, from the given address. */
export function pushDatagram(socket, bytes, fromAddr = BRIDGE_ADDR) {
  stats.datagramsIn++;
  socket.queue.push({ data: bytes, remoteAddress: fromAddr });
  socket.arrived();
}

class IncomingDatagramStream {
  #sock;
  constructor(sock) {
    this.#sock = sock;
  }
  receive(maxResults) {
    const q = this.#sock.queue;
    return q.splice(0, Math.min(Number(maxResults), q.length));
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

/** Unroutable destinations already reported (e.g. net_report QAD probes
 * toward the relay's UDP port — unreachable through the pipe by design). */
const unbridgedLogged = new Set();

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
      stats.datagramsOut++;
      const route = d.remoteAddress?.val ? addrRoutes.get(addrKey(d.remoteAddress)) : undefined;
      if (route) {
        route(this.#sock, d);
        continue;
      }
      const port = d.remoteAddress?.val?.port;
      const bridge = bridges.get(port);
      if (bridge) {
        bridge(this.#sock, d);
      } else {
        const key = d.remoteAddress?.val ? addrKey(d.remoteAddress) : String(port);
        if (!unbridgedLogged.has(key)) {
          unbridgedLogged.add(key);
          console.error(`[shim] datagrams to unbridged ${key}; dropping (reported once)`);
        }
      }
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
  arrived;
  #pendingBind = null;

  constructor(family) {
    this.family = family;
    this.#rearm();
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
    let addr = this.#pendingBind;
    this.#pendingBind = null;
    if (addr.val.port === 0) {
      addr = {
        tag: addr.tag,
        val: { ...addr.val, port: nextEphemeralPort++ },
      };
    }
    this.localAddr = addr;
    this.bound = true;
    socketsByPort.set(addr.val.port, this);
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
    return 262144n;
  }
  setReceiveBufferSize(_v) {}
  sendBufferSize() {
    return 262144n;
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

// TCP + name lookup: linked, never functional.
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

export class ResolveAddressStream {
  resolveNextAddress() {
    throw "permanent-resolver-failure";
  }
  subscribe() {
    return READY;
  }
  [Symbol.dispose]() {}
}
export const ipNameLookup = {
  ResolveAddressStream,
  resolveAddresses: () => {
    throw "permanent-resolver-failure";
  },
};

export { performance };
