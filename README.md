# `component-iroh`

A portable implementation of [iroh](https://iroh.computer) as WebAssembly
components: the same endpoint logic running in browsers, on personal
devices, and on cloud providers, interconnecting wasm components across
all three — built on the
[`lann:webcrypto`](https://github.com/lann/component-webcrypto),
[`lann:webrtc-datachannels`](https://github.com/lann/component-webrtc-datachannels),
and [`lann:websocket`](https://github.com/lann/component-websocket)
packages and the
[`component-test`](https://github.com/lann/component-test) machinery.

Status: **proposal**. This README records the design research and the
rulings it produced; open questions are tracked in the
[issues](../../issues).

## What iroh is, layer by layer

Iroh's stack, per its own documentation, is a set of small layers with a
deliberately swappable bottom:

- **Transport** carries encrypted bytes: UDP by default, relay as
  fallback, explicitly pluggable (Tor, Nym, Bluetooth exist upstream).
- **QUIC + TLS 1.3** (upstream: quinn + rustls) provides end-to-end
  encryption, authentication, and stream multiplexing. Node identity is an
  Ed25519 key; TLS authenticates raw public keys, so the key *is* the
  address (`EndpointID`).
- **Endpoint** finds peers (signed DNS records published over HTTPS,
  optional Mainline DHT), traverses NATs (`n0_nat_traversal`, a QUIC
  extension inspired by the
  [QUIC NAT traversal draft](https://datatracker.ietf.org/doc/draft-seemann-quic-nat-traversal/)),
  keeps a secure WebSocket open to a home relay, and migrates paths
  transparently.
- **Router** dispatches incoming connections to protocol handlers by ALPN.
- **Protocols** (blobs, gossip, docs, yours) define what peers do once
  connected.

The transport layer being pluggable is the load-bearing fact for this
project: it is the seam where the browser gets a real peer-to-peer path.

## The architecture

### Port the protocol, not the crate

Compiling iroh itself (quinn, tokio, rustls) to a component target is the
wrong shape: tokio's WASI support is partial, quinn assumes OS sockets,
and iroh's existing browser build targets wasm-bindgen, not components.
Instead, the endpoint layer is reimplemented around a **sans-I/O QUIC
core** (`quinn-proto` is already sans-I/O), driven by a component-model
async pump, with transports and crypto injected through WIT — the same
pattern as the webrtc sibling's in-guest provider, which drives the
sans-I/O `rtc` stack over `wasi:sockets`. Iroh's *wire formats* (discovery
records, relay protocol, the NAT-traversal extension, ALPN dispatch) are
reused so that native component-iroh nodes interoperate with upstream iroh
nodes on UDP paths.

### Transports through WIT

| Path | Transport | Who serves it |
| --- | --- | --- |
| native ↔ native | UDP datagrams | `wasi:sockets`; hole punching via iroh's `n0_nat_traversal` inside the QUIC connection |
| browser ↔ anything, direct | WebRTC data channel (unreliable, unordered — a datagram carrier) | `lann:webrtc-datachannels`: browser host in the browser, Wasmtime host (webrtc-rs) on native peers, in-guest sans-I/O stack elsewhere; ICE does the hole punching on this path |
| any ↔ relay | WebSocket to the home relay | `lann:websocket` (the package created for this gap: `wasi:http` has no upgrade path) |
| discovery | HTTPS (publish + resolve signed records) | `wasi:http`; Mainline DHT lookup is native-only and optional (needs UDP) |

**QUIC runs end-to-end on every path.** This is the central design ruling.
The browser leg tunnels QUIC packets through an unreliable data channel
rather than using SCTP streams directly. The costs are real — double
encryption (DTLS+SCTP beneath QUIC), MTU shrinkage, SCTP quirks under
QUIC's congestion controller — and are accepted, because the alternative
forks the endpoint layer: two auth models, two stream semantics, and
iroh's promises (one `EndpointID`, transparent migration, end-to-end QUIC
auth) held on only one leg. With QUIC uniform, every peer speaks one
protocol; WebRTC is just a wire that appears when a browser is on one end,
and its signaling rides the relay connection both sides already hold.
Upstream iroh nodes remain reachable over plain UDP/QUIC; the WebRTC
transport extends reach beyond what upstream's browser story (relay-only
over WebSocket, no direct connections) can do.

### Crypto through `lann:webcrypto` — the split

`lann:webcrypto` serves **identity and handshake**; **record protection
runs in-guest**. Specifically:

- Node identity (Ed25519 sign/verify), discovery-record signing, the TLS
  1.3 handshake's X25519 + HKDF, and key import/generation go through the
  WIT surface. This is where the package's properties pay: platform-native
  crypto in the browser, and — once its platform-backed key storage
  direction lands — a node identity that is a *non-extractable*
  browser-resident key, a strictly better posture than upstream
  iroh-in-wasm holding the seed in linear memory.
- The derived per-connection symmetric keys are exported and QUIC packet
  protection (AEAD + header protection, per packet) runs in-guest via
  RustCrypto. A per-packet async call across the component boundary —
  through the browser host, an async `crypto.subtle` round trip — is
  a hot-path cost no batching rescues, and header protection wants raw
  AES-ECB single-block, which browser WebCrypto does not offer. The split
  concedes nothing the threat model does not already concede: record keys
  are ephemeral and per-connection, and the guest necessarily sees
  plaintext anyway.

Timing-channel class D (see the webcrypto provider's classification) is
not implicated on hosted targets: the crypto runs host-side on the
platform. The in-guest deployment inherits the provider's class A–C
export policy.

### Deployment matrix

The family's standing triangle, applied to a whole endpoint:

- **Browser**: jco-transpiled, `lann:webcrypto` and
  `lann:webrtc-datachannels` served by the browser hosts over Web Crypto
  and `RTCPeerConnection`, `lann:websocket` over the browser `WebSocket`.
- **Native / cloud**: Wasmtime, the host crates
  (`add_to_linker` + view traits) over RustCrypto, webrtc-rs, and native
  sockets; UDP directly via `wasi:sockets`.
- **Fully in-guest**: composed via `wac plug` with the in-guest providers,
  importing only `wasi:sockets`/`wasi:clocks`/`wasi:http` — the maximally
  portable, minimally trusting configuration.

One guest binary, three targets, conformance as the gate — the property
the sibling repositories exist to demonstrate, exercised here at protocol
scale.

## What this buys over upstream iroh

- **Browser peers with direct connections.** Upstream iroh in the browser
  is relay-only. ICE gives component-iroh browser↔browser and
  browser↔native direct paths.
- **One artifact across environments.** The same component runs in a
  browser tab, on a phone runtime, and in a server-side Wasmtime — the
  component model's portability promise applied to the networking stack
  itself.
- **Capability-bounded networking for components.** A wasm component gets
  peer connectivity through narrow WIT imports rather than ambient
  sockets.
- **Non-extractable node identity** on platforms with key storage.

## Open questions

Tracked as issues; the headline ones:

- QUIC-over-data-channel mechanics: MTU budget under DTLS+SCTP overhead,
  disabling SCTP's own retransmission/ordering (unreliable, unordered
  channels) so QUIC's loss recovery and congestion control see a datagram
  wire, and pacing interaction.
- Relay protocol fidelity: how much of iroh's relay wire protocol
  (QAD probes, the home-relay handshake) is reusable verbatim over
  `lann:websocket`, versus needing a component-iroh relay flavor.
- The endpoint surface as WIT: what component-iroh itself *exports* — a
  `connect`/`accept`-by-`EndpointID` interface with QUIC streams as
  component-model `stream`s, so application protocols (blobs, gossip)
  become plain consumer components composed onto the endpoint.
- Handshake latency through the WIT crypto boundary: acceptable by
  budget (a handful of round trips per connection), to be confirmed by
  measurement, not assumption.
- Whether `quinn-proto`'s crypto traits admit an external key-schedule
  cleanly, or the TLS layer needs a purpose-built raw-public-key TLS 1.3
  client/server over `lann:webcrypto` primitives.
