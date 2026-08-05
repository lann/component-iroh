//! The endpoint surface implementation: quinn-proto state shared between
//! the exported resources and one detached pump task per bound endpoint.
//!
//! Resource methods mutate the shared state directly and wait for the
//! pump's consequences by bounded polling on the clock import — never by
//! parking on a waker another task fires. Cross-task wakeups have no
//! portable channel today: wit-bindgen's `inter-task-wakeup` feature
//! signals through a guest-internal unit stream, which wasmtime delivers
//! and jco does not, and racing a clock future against a waker would
//! cancel an in-flight import subtask, which jco traps on (#6). Bounded
//! polling costs at most one quantum per wake edge and behaves
//! identically on every host. All of it runs on the component-model async
//! ABI's single cooperative thread: the `RefCell` borrows never cross an
//! await.

use std::cell::{Cell, RefCell};
use std::collections::{HashMap, HashSet, VecDeque};
use std::net::{IpAddr, Ipv6Addr, SocketAddr};
use std::pin::pin;
use std::rc::Rc;
use std::sync::Arc;

use std::time::{Duration, Instant};

use bytes::BytesMut;
use futures::future::FusedFuture;
use futures::stream::FuturesUnordered;
use futures::{select_biased, FutureExt, StreamExt};
use quinn_proto::{
    ClientConfig, Connection as QuinnConnection, ConnectionError, ConnectionHandle, DatagramEvent,
    Dir, Endpoint as QuinnEndpoint, EndpointConfig, Event, FinishError, ReadError, ReadableError,
    ServerConfig, StreamEvent, StreamId, TransportConfig, VarInt, WriteError,
};

use iroh_endpoint_core::crypto::sign::Identity;
use iroh_endpoint_core::tls;
use lann_tls_quinn::{HandshakeData, QuicClientConfig, QuicServerConfig, ResetKey, TokenKey};

use crate::bindings::exports::lann::iroh::endpoint::{
    Connection, Endpoint, EndpointOptions, Guest, GuestConnection, GuestEndpoint, GuestRecvStream,
    GuestSendStream, RecvStream, SendStream,
};
use crate::bindings::lann::iroh::types::{ConnectionState, EndpointAddr, Error, TransportAddr};
use crate::bindings::wasi::clocks::monotonic_clock;
use crate::bindings::wit_stream;
use crate::relay::RelayConn;
use crate::udp::UdpWire;
use crate::webrtc::{self, ChannelWire, SIGNAL_PREFIX};
use crate::Component;
use wit_bindgen::rt::async_support::StreamReader;

/// The pump's tick: quinn's deadlines, and the bound on how stale a
/// resource-method mutation can go unflushed.
const TICK_NS: u64 = 10_000_000;

/// Resource methods' polling quantum while waiting on pump consequences.
pub(crate) const POLL_NS: u64 = 5_000_000;

/// Bounded window for final packets after `endpoint.close`.
const LINGER: Duration = Duration::from_millis(500);

/// The transport profile shared by every wire (the issue #1 v0 ruling):
/// fixed conservative 1200-byte MTU, no discovery — the relay and the
/// data channel fragment transparently, so probing would measure
/// nothing real, and a fixed size never engages that fragmentation —
/// one datagram per transmit.
fn transport_config() -> Arc<TransportConfig> {
    let mut config = TransportConfig::default();
    config.initial_mtu(1200);
    config.mtu_discovery_config(None);
    Arc::new(config)
}

pub(crate) type Shared = Rc<RefCell<State>>;

pub(crate) struct State {
    quinn: QuinnEndpoint,
    conns: HashMap<ConnectionHandle, ConnEntry>,
    peer_to_addr: HashMap<[u8; 32], SocketAddr>,
    addr_to_peer: HashMap<SocketAddr, [u8; 32]>,
    next_host: u32,
    accept_queue: VecDeque<ConnectionHandle>,
    relay_outbound: VecDeque<([u8; 32], Vec<u8>)>,
    udp_outbound: VecDeque<(SocketAddr, Vec<u8>)>,
    /// Transmits bound for WebRTC channels, keyed by the channel's
    /// synthetic address.
    channel_outbound: VecDeque<(SocketAddr, Vec<u8>)>,
    /// Whether this endpoint dials `webrtc` entries and answers
    /// inbound signaling (`endpoint-options.webrtc`).
    webrtc_enabled: bool,
    /// Peers with an active signaling session (offerer or answerer);
    /// one session per peer at a time.
    signaling: HashSet<[u8; 32]>,
    /// Inbound signaling payloads (the JSON after the prefix byte),
    /// keyed by the relay-authenticated source. Sessions poll these.
    signal_inboxes: HashMap<[u8; 32], VecDeque<Vec<u8>>>,
    /// Open channels by synthetic address.
    channels: HashMap<SocketAddr, ChannelEntry>,
    /// Channels registered since the pump last armed receives.
    new_channels: Vec<(SocketAddr, Rc<ChannelWire>)>,
    next_channel_host: u32,
    closed: bool,
    closed_at: Option<Instant>,
    /// Set when the relay connection died; every operation fails from
    /// then on.
    dead: Option<String>,
}

struct ChannelEntry {
    wire: Rc<ChannelWire>,
    /// The relay-authenticated peer the channel was signaled with;
    /// connections accepted over it must authenticate as this identity.
    peer: [u8; 32],
}

struct ConnEntry {
    conn: QuinnConnection,
    /// The identity this connection must authenticate as, when one is
    /// known up front: the dialed identity on the client side, the
    /// relay-authenticated datagram source on relay-accepted connections.
    /// `None` on direct-path accepted connections, whose identity has no
    /// out-of-band claim — the TLS-authenticated key is adopted instead.
    expected_peer: Option<[u8; 32]>,
    /// The authenticated peer identity, set at `Connected`.
    peer: Option<[u8; 32]>,
    accepted_side: bool,
    connected: bool,
    alpn: Vec<u8>,
    error: Option<Error>,
    drained: bool,
    bi_queue: VecDeque<StreamId>,
    uni_queue: VecDeque<StreamId>,
}

impl ConnEntry {
    fn new(conn: QuinnConnection, expected_peer: Option<[u8; 32]>, accepted_side: bool) -> Self {
        Self {
            conn,
            expected_peer,
            peer: None,
            accepted_side,
            connected: false,
            alpn: Vec::new(),
            error: None,
            drained: false,
            bi_queue: VecDeque::new(),
            uni_queue: VecDeque::new(),
        }
    }
}

impl State {
    fn new(quinn: QuinnEndpoint, webrtc_enabled: bool) -> Self {
        Self {
            quinn,
            conns: HashMap::new(),
            peer_to_addr: HashMap::new(),
            addr_to_peer: HashMap::new(),
            next_host: 0,
            accept_queue: VecDeque::new(),
            relay_outbound: VecDeque::new(),
            udp_outbound: VecDeque::new(),
            channel_outbound: VecDeque::new(),
            webrtc_enabled,
            signaling: HashSet::new(),
            signal_inboxes: HashMap::new(),
            channels: HashMap::new(),
            new_channels: Vec::new(),
            next_channel_host: 0,
            closed: false,
            closed_at: None,
            dead: None,
        }
    }

    /// The stable synthetic socket address standing in for `peer` on the
    /// relay wire (the wire has no addresses; quinn wants distinct,
    /// stable ones). Drawn from `2001:db8:77::/48` — the IPv6
    /// documentation prefix is never routable, so no real peer address
    /// can collide with a standin.
    fn addr_for_peer(&mut self, peer: [u8; 32]) -> SocketAddr {
        if let Some(addr) = self.peer_to_addr.get(&peer) {
            return *addr;
        }
        self.next_host += 1;
        let addr = doc_prefix_addr(0x77, self.next_host);
        self.peer_to_addr.insert(peer, addr);
        self.addr_to_peer.insert(addr, peer);
        addr
    }

    /// True once no operation can succeed anymore; signaling sessions
    /// poll this to abandon their dance.
    pub(crate) fn is_closed_or_dead(&self) -> bool {
        self.closed || self.dead.is_some()
    }

    /// Claim the signaling slot for `peer`; one session at a time.
    pub(crate) fn begin_signaling(&mut self, peer: [u8; 32]) -> Result<(), Error> {
        if !self.signaling.insert(peer) {
            return Err(Error::ConnectFailed(
                "a webrtc signaling session with this peer is already active".into(),
            ));
        }
        Ok(())
    }

    /// Release `peer`'s signaling slot and drop its unread signals.
    pub(crate) fn end_signaling(&mut self, peer: [u8; 32]) {
        self.signaling.remove(&peer);
        self.signal_inboxes.remove(&peer);
    }

    /// Queue one signaling payload for the pump to relay to `peer`.
    pub(crate) fn push_signal_outbound(&mut self, peer: [u8; 32], payload: Vec<u8>) {
        self.relay_outbound.push_back((peer, payload));
    }

    /// The next signaling payload from `peer`, if any.
    pub(crate) fn pop_signal_inbox(&mut self, peer: [u8; 32]) -> Option<Vec<u8>> {
        self.signal_inboxes.get_mut(&peer)?.pop_front()
    }

    /// Register an open channel to `peer`: allocate its synthetic
    /// address (`2001:db8:78::/48`, same non-routable documentation
    /// prefix as the relay standins) and hand it to the pump to arm a
    /// receive. Returns the address quinn dials or accepts on. A
    /// closing endpoint refuses and closes the wire instead.
    pub(crate) fn register_channel(
        &mut self,
        peer: [u8; 32],
        wire: Rc<ChannelWire>,
    ) -> Result<SocketAddr, Error> {
        if self.is_closed_or_dead() {
            wire.close();
            return Err(Error::Closed);
        }
        self.next_channel_host += 1;
        let addr = doc_prefix_addr(0x78, self.next_channel_host);
        self.channels.insert(
            addr,
            ChannelEntry {
                wire: wire.clone(),
                peer,
            },
        );
        self.new_channels.push((addr, wire));
        Ok(addr)
    }

    fn mark_dead(&mut self, reason: &str) {
        self.dead = Some(reason.to_string());
        for entry in self.conns.values_mut() {
            if entry.error.is_none() {
                entry.error = Some(Error::Closed);
            }
        }
    }

    /// Drain endpoint-bound events, application events, and transmits
    /// until quiescent; polling method futures observe the consequences.
    fn drain(&mut self) {
        let now = Instant::now();
        let State {
            quinn,
            conns,
            addr_to_peer,
            accept_queue,
            relay_outbound,
            udp_outbound,
            channel_outbound,
            channels,
            ..
        } = self;
        for (handle, entry) in conns.iter_mut() {
            let mut buf = Vec::with_capacity(1500);
            loop {
                let mut progressed = false;

                while let Some(event) = entry.conn.poll_endpoint_events() {
                    progressed = true;
                    if let Some(back) = quinn.handle_event(*handle, event) {
                        entry.conn.handle_event(back);
                    }
                }

                while let Some(event) = entry.conn.poll() {
                    progressed = true;
                    on_event(entry, *handle, event, accept_queue);
                }

                loop {
                    buf.clear();
                    match entry.conn.poll_transmit(now, 1, &mut buf) {
                        Some(transmit) => {
                            progressed = true;
                            let datagram = buf[..transmit.size].to_vec();
                            // Route by the destination's address space:
                            // relay standins, channel standins, then
                            // real addresses to the UDP socket.
                            if let Some(peer) = addr_to_peer.get(&transmit.destination) {
                                relay_outbound.push_back((*peer, datagram));
                            } else if channels.contains_key(&transmit.destination) {
                                channel_outbound.push_back((transmit.destination, datagram));
                            } else {
                                udp_outbound.push_back((transmit.destination, datagram));
                            }
                        }
                        None => break,
                    }
                }

                if !progressed {
                    break;
                }
            }
            if !entry.drained && entry.conn.is_drained() {
                entry.drained = true;
            }
        }
    }

    fn handle_relay_datagram(&mut self, source: [u8; 32], payload: Vec<u8>) {
        let addr = self.addr_for_peer(source);
        self.handle_datagram(addr, Some(source), payload);
    }

    fn handle_udp_datagram(&mut self, remote: SocketAddr, payload: Vec<u8>) {
        self.handle_datagram(remote, None, payload);
    }

    /// A datagram from a channel enters quinn under the channel's
    /// synthetic address, attributed to the signaling-authenticated
    /// peer (connections accepted over it must authenticate as that
    /// identity, like relay-accepted ones).
    fn handle_channel_datagram(&mut self, addr: SocketAddr, payload: Vec<u8>) {
        let Some(peer) = self.channels.get(&addr).map(|entry| entry.peer) else {
            return;
        };
        self.handle_datagram(addr, Some(peer), payload);
    }

    fn handle_datagram(&mut self, addr: SocketAddr, source: Option<[u8; 32]>, payload: Vec<u8>) {
        let now = Instant::now();
        let mut buf = Vec::new();
        match self.quinn.handle(
            now,
            addr,
            None,
            None,
            BytesMut::from(&payload[..]),
            &mut buf,
        ) {
            Some(DatagramEvent::ConnectionEvent(handle, event)) => {
                if let Some(entry) = self.conns.get_mut(&handle) {
                    entry.conn.handle_event(event);
                }
            }
            Some(DatagramEvent::NewConnection(incoming)) => {
                if self.closed {
                    return;
                }
                buf.clear();
                match self.quinn.accept(incoming, now, &mut buf, None) {
                    Ok((handle, conn)) => {
                        self.conns
                            .insert(handle, ConnEntry::new(conn, source, true));
                    }
                    Err(err) => {
                        if let Some(transmit) = err.response {
                            self.push_response(addr, source, &buf[..transmit.size]);
                        }
                    }
                }
            }
            Some(DatagramEvent::Response(transmit)) => {
                self.push_response(addr, source, &buf[..transmit.size]);
            }
            None => {}
        }
    }

    fn push_response(&mut self, addr: SocketAddr, source: Option<[u8; 32]>, payload: &[u8]) {
        match source {
            Some(peer) => self.relay_outbound.push_back((peer, payload.to_vec())),
            None => self.udp_outbound.push_back((addr, payload.to_vec())),
        }
    }

    fn handle_timeouts(&mut self) {
        let now = Instant::now();
        for entry in self.conns.values_mut() {
            if entry
                .conn
                .poll_timeout()
                .is_some_and(|deadline| deadline <= now)
            {
                entry.conn.handle_timeout(now);
            }
        }
    }

    fn close_all(&mut self, reason: &'static [u8]) {
        let now = Instant::now();
        for entry in self.conns.values_mut() {
            if entry.error.is_none() && !entry.drained {
                entry
                    .conn
                    .close(now, VarInt::from_u32(0), bytes::Bytes::from_static(reason));
            }
        }
    }
}

fn on_event(
    entry: &mut ConnEntry,
    handle: ConnectionHandle,
    event: Event,
    accept_queue: &mut VecDeque<ConnectionHandle>,
) {
    match event {
        Event::HandshakeDataReady => {}
        Event::Connected => {
            let session = entry.conn.crypto_session();
            if let Some(hd) = session
                .handshake_data()
                .and_then(|b| b.downcast::<HandshakeData>().ok())
            {
                entry.alpn = hd.protocol.unwrap_or_default();
            }
            let tls_peer = session
                .peer_identity()
                .and_then(|b| {
                    b.downcast::<Vec<rustls::pki_types::CertificateDer<'static>>>()
                        .ok()
                })
                .and_then(|certs| {
                    certs
                        .first()
                        .and_then(|c| tls::endpoint_id_from_spki(c.as_ref()))
                });
            match (tls_peer, entry.expected_peer) {
                (Some(id), expected) if expected.is_none() || expected == Some(id) => {
                    entry.peer = Some(id);
                    entry.connected = true;
                    if entry.accepted_side {
                        accept_queue.push_back(handle);
                    }
                }
                // The handshake authenticated a key other than the one
                // the relay authenticated as the datagram source (or the
                // one dialed): never surface the connection.
                _ => {
                    entry.error = Some(Error::ConnectFailed(
                        "authenticated key differs from the addressed peer".into(),
                    ));
                    entry.conn.close(
                        Instant::now(),
                        VarInt::from_u32(1),
                        bytes::Bytes::from_static(b"identity mismatch"),
                    );
                }
            }
        }
        Event::Stream(StreamEvent::Opened { .. }) => {
            while let Some(id) = entry.conn.streams().accept(Dir::Bi) {
                entry.bi_queue.push_back(id);
            }
            while let Some(id) = entry.conn.streams().accept(Dir::Uni) {
                entry.uni_queue.push_back(id);
            }
        }
        // Polling method futures observe readable/writable/available
        // state directly; the events carry nothing to record.
        Event::Stream(_) => {}
        Event::DatagramReceived | Event::DatagramsUnblocked => {}
        Event::ConnectionLost { reason } => {
            entry.error = Some(match &reason {
                ConnectionError::ApplicationClosed(_) | ConnectionError::LocallyClosed => {
                    Error::Closed
                }
                other => Error::Other(format!("connection lost: {other}")),
            });
        }
    }
}

/// The endpoint's I/O task: relayed datagrams in and out, quinn's timers,
/// and the flush after every kick. The two long-lived import futures stay
/// pinned across iterations and are resolved before the task returns (an
/// in-flight import is a component-model subtask; jco traps on cancelling
/// one — see the spike's teardown discipline). Channel receives live in a
/// persistent set with the same discipline: closing every channel
/// resolves them before the task returns.
async fn pump(shared: Shared, relay: Rc<RelayConn>, udp: Option<Rc<UdpWire>>) {
    let mut recv = pin!(relay.recv_datagram().fuse());
    let mut udp_recv = pin!(udp_receive(udp.clone()).fuse());
    let mut tick = pin!(monotonic_clock::wait_for(TICK_NS).fuse());
    let mut channel_recvs: FuturesUnordered<ChannelRecvFuture> = FuturesUnordered::new();

    'pump: loop {
        shared.borrow_mut().drain();
        loop {
            let item = shared.borrow_mut().relay_outbound.pop_front();
            match item {
                Some((peer, datagram)) => {
                    if relay.send_datagram(&peer, &datagram).await.is_err() {
                        shared.borrow_mut().mark_dead("relay send failed");
                        break 'pump;
                    }
                }
                None => break,
            }
        }
        loop {
            let item = shared.borrow_mut().udp_outbound.pop_front();
            match (item, &udp) {
                (Some((remote, datagram)), Some(wire)) => {
                    // A send failure on UDP is datagram loss, not death.
                    let _ = wire.send(remote, &datagram).await;
                }
                (Some(_), None) => {}
                (None, _) => break,
            }
        }
        loop {
            let item = shared.borrow_mut().channel_outbound.pop_front();
            match item {
                Some((addr, datagram)) => {
                    let wire = shared
                        .borrow()
                        .channels
                        .get(&addr)
                        .map(|entry| entry.wire.clone());
                    if let Some(wire) = wire {
                        // A send failure on a channel is datagram loss,
                        // not death (the channel's own close resolves
                        // its receive, which retires it below).
                        let _ = wire.send(&datagram).await;
                    }
                }
                None => break,
            }
        }

        // Arm receives for channels registered since the last turn.
        {
            let new_channels = std::mem::take(&mut shared.borrow_mut().new_channels);
            for (addr, wire) in new_channels {
                channel_recvs.push(Box::pin(channel_receive(addr, wire)));
            }
        }

        {
            let st = shared.borrow();
            if st.dead.is_some() {
                break 'pump;
            }
            if st.closed {
                let all_drained = st.conns.values().all(|e| e.drained || e.error.is_some());
                let lingered = st
                    .closed_at
                    .map(|at| at.elapsed() >= LINGER)
                    .unwrap_or(true);
                if all_drained || lingered {
                    break 'pump;
                }
            }
        }

        select_biased! {
            received = recv => match received {
                Ok(datagram) => {
                    recv.set(relay.recv_datagram().fuse());
                    if datagram.payload.first() == Some(&SIGNAL_PREFIX) {
                        handle_signal(&shared, datagram.source, &datagram.payload[1..]);
                    } else {
                        shared
                            .borrow_mut()
                            .handle_relay_datagram(datagram.source, datagram.payload);
                    }
                }
                Err(err) => {
                    shared.borrow_mut().mark_dead(&err);
                    break 'pump;
                }
            },
            received = udp_recv => {
                if let Ok((payload, remote)) = received {
                    udp_recv.set(udp_receive(udp.clone()).fuse());
                    shared.borrow_mut().handle_udp_datagram(remote, payload);
                } else {
                    // The socket died; the relay path continues. Park the
                    // slot terminated — a pending-forever future here
                    // would hang the teardown await below (the self-wake
                    // cannot resolve it through a dead socket).
                    udp_recv.set(futures::future::Fuse::terminated());
                }
            },
            event = next_channel_event(&mut channel_recvs).fuse() => {
                let (addr, result) = event;
                match result {
                    Ok(payload) => {
                        // Re-arm before handling so the wire keeps
                        // flowing; a channel removed meanwhile stays
                        // retired.
                        let wire = shared
                            .borrow()
                            .channels
                            .get(&addr)
                            .map(|entry| entry.wire.clone());
                        if let Some(wire) = wire {
                            channel_recvs.push(Box::pin(channel_receive(addr, wire)));
                        }
                        if let Some(datagram) = payload {
                            shared.borrow_mut().handle_channel_datagram(addr, datagram);
                        }
                    }
                    Err(_) => {
                        // The channel died; its connections idle out.
                        shared.borrow_mut().channels.remove(&addr);
                    }
                }
            },
            _ = tick => {
                tick.set(monotonic_clock::wait_for(TICK_NS).fuse());
                shared.borrow_mut().handle_timeouts();
            }
        }
    }

    // Resolve the pinned imports before the task ends: close the relay
    // (its pending receive resolves with the closed error), self-wake the
    // UDP socket (a zero-length datagram to our own address resolves its
    // pending receive), close every channel (each pending receive
    // resolves with the closed error), and let the final tick fire.
    relay.close();
    if let Some(wire) = &udp {
        let _ = wire.self_wake().await;
    }
    let channel_wires: Vec<Rc<ChannelWire>> = shared
        .borrow()
        .channels
        .values()
        .map(|entry| entry.wire.clone())
        .collect();
    for wire in &channel_wires {
        wire.close();
    }
    while !recv.is_terminated() {
        select_biased! {
            received = recv => if received.is_ok() {
                recv.set(relay.recv_datagram().fuse());
            },
            _ = udp_recv => {}
            _ = next_channel_event(&mut channel_recvs).fuse() => {}
            _ = tick => tick.set(monotonic_clock::wait_for(TICK_NS).fuse()),
        }
    }
    if udp.is_some() && !udp_recv.is_terminated() {
        udp_recv.as_mut().await.ok();
    }
    while !channel_recvs.is_empty() {
        let _ = channel_recvs.next().await;
    }
    if !tick.is_terminated() {
        tick.as_mut().await;
    }
}

type ChannelRecvFuture =
    futures::future::LocalBoxFuture<'static, (SocketAddr, Result<Option<Vec<u8>>, String>)>;

/// One channel receive, tagged with the channel's synthetic address.
async fn channel_receive(
    addr: SocketAddr,
    wire: Rc<ChannelWire>,
) -> (SocketAddr, Result<Option<Vec<u8>>, String>) {
    let result = wire.receive().await;
    (addr, result)
}

/// The next completed channel receive, or pending-forever while no
/// channel exists (the select needs an arm either way). The set owns
/// the in-flight import futures; this wrapper only polls it, so
/// dropping the wrapper between select turns cancels nothing.
async fn next_channel_event(
    set: &mut FuturesUnordered<ChannelRecvFuture>,
) -> (SocketAddr, Result<Option<Vec<u8>>, String>) {
    if set.is_empty() {
        std::future::pending().await
    } else {
        set.next().await.expect("a non-empty set yields an item")
    }
}

/// Inbound signaling: file the payload in the peer's inbox, spawning an
/// answerer session for a peer without one. Discarded entirely when the
/// WebRTC wire is disabled or the endpoint is closing.
fn handle_signal(shared: &Shared, source: [u8; 32], payload: &[u8]) {
    /// Unread-signal cap per peer; a flooding peer loses signals, not us.
    const INBOX_CAP: usize = 64;
    let spawn_answerer = {
        let mut st = shared.borrow_mut();
        if !st.webrtc_enabled || st.is_closed_or_dead() {
            return;
        }
        // Claim the slot synchronously with the decision, so a second
        // datagram cannot spawn a second session.
        let spawn_answerer = st.signaling.insert(source);
        let inbox = st.signal_inboxes.entry(source).or_default();
        if inbox.len() < INBOX_CAP {
            inbox.push_back(payload.to_vec());
        }
        spawn_answerer
    };
    if spawn_answerer {
        wit_bindgen::spawn_local(webrtc::answer(shared.clone(), source));
    }
}

/// The next UDP datagram, or pending-forever without a socket (the pump's
/// select needs one future shape either way).
async fn udp_receive(
    udp: Option<Rc<UdpWire>>,
) -> Result<(Vec<u8>, SocketAddr), crate::bindings::wasi::sockets::types::ErrorCode> {
    match udp {
        Some(wire) => wire.receive().await,
        None => std::future::pending().await,
    }
}

fn other(detail: impl std::fmt::Display) -> Error {
    Error::Other(detail.to_string())
}

/// A synthetic socket address under the IPv6 documentation prefix
/// (RFC 3849, `2001:db8::/32`): `2001:db8:<space>::<hi>:<lo>`, port
/// 4433. Documentation addresses are never routable, so synthetic
/// spaces cannot collide with real peers.
fn doc_prefix_addr(space: u16, host: u32) -> SocketAddr {
    SocketAddr::new(
        IpAddr::V6(Ipv6Addr::new(
            0x2001,
            0xdb8,
            space,
            0,
            0,
            0,
            (host >> 16) as u16,
            host as u16,
        )),
        4433,
    )
}

/// Poll `check` against the shared state until it produces a value,
/// sleeping one quantum between attempts. Each sleep is a clock import
/// awaited to completion — never cancelled mid-flight.
async fn wait_until<R>(shared: &Shared, mut check: impl FnMut(&mut State) -> Option<R>) -> R {
    loop {
        if let Some(result) = check(&mut shared.borrow_mut()) {
            return result;
        }
        monotonic_clock::wait_for(POLL_NS).await;
    }
}

// --- exported resources --------------------------------------------------

pub struct EndpointRes {
    shared: Shared,
    identity: Rc<Identity>,
    relay_url: String,
    udp: Option<Rc<UdpWire>>,
}

impl Drop for EndpointRes {
    fn drop(&mut self) {
        let mut st = self.shared.borrow_mut();
        if !st.closed {
            st.closed = true;
            st.closed_at = Some(Instant::now());
            st.close_all(b"endpoint dropped");
        }
    }
}

pub struct ConnectionRes {
    shared: Shared,
    handle: ConnectionHandle,
}

pub struct SendStreamRes {
    shared: Shared,
    handle: ConnectionHandle,
    id: StreamId,
}

pub struct RecvStreamRes {
    shared: Shared,
    handle: ConnectionHandle,
    id: StreamId,
    streaming: Cell<bool>,
}

impl Guest for Component {
    type Endpoint = EndpointRes;
    type Connection = ConnectionRes;
    type SendStream = SendStreamRes;
    type RecvStream = RecvStreamRes;
}

impl GuestEndpoint for EndpointRes {
    async fn bind(options: EndpointOptions) -> Result<Endpoint, Error> {
        let relay_url = options.relay_url.clone().ok_or(Error::InvalidArgument(
            "bind requires a relay-url (the relay wire is the only path yet)".into(),
        ))?;
        if options.alpns.is_empty() {
            return Err(Error::InvalidArgument(
                "bind requires at least one alpn".into(),
            ));
        }

        let identity = Identity::generate().await.map_err(other)?;
        let relay = RelayConn::connect(&relay_url, &identity)
            .await
            .map_err(Error::ConnectFailed)?;

        let mut reset_key = [0u8; 32];
        getrandom::fill(&mut reset_key).map_err(other)?;
        let mut token_master = [0u8; 32];
        getrandom::fill(&mut token_master).map_err(other)?;

        let server_tls = tls::server_config(&identity, options.alpns.clone()).map_err(other)?;
        let server_quic_tls = QuicServerConfig::try_from(Arc::new(server_tls))
            .map_err(|e| Error::Other(format!("server quic config: {e}")))?;
        let mut server_config = ServerConfig::new(
            Arc::new(server_quic_tls),
            Arc::new(TokenKey::new(&token_master)),
        );
        server_config.transport_config(transport_config());
        let quinn = QuinnEndpoint::new(
            Arc::new(EndpointConfig::new(Arc::new(ResetKey::new(&reset_key)))),
            Some(Arc::new(server_config)),
            true,
            None,
        );

        let udp = match &options.udp_bind_addr {
            Some(bind_addr) => Some(Rc::new(
                UdpWire::bind(bind_addr).map_err(Error::InvalidArgument)?,
            )),
            None => None,
        };

        let shared = Rc::new(RefCell::new(State::new(quinn, options.webrtc)));
        wit_bindgen::spawn_local(pump(shared.clone(), Rc::new(relay), udp.clone()));

        Ok(Endpoint::new(EndpointRes {
            shared,
            identity: Rc::new(identity),
            relay_url,
            udp,
        }))
    }

    fn id(&self) -> Vec<u8> {
        self.identity.endpoint_id.to_vec()
    }

    fn direct_addr(&self) -> Option<String> {
        self.udp.as_ref().map(|wire| wire.local_addr().to_string())
    }

    async fn connect(&self, addr: EndpointAddr, alpn: Vec<u8>) -> Result<Connection, Error> {
        let peer: [u8; 32] = addr
            .endpoint_id
            .as_slice()
            .try_into()
            .map_err(|_| Error::InvalidArgument("endpoint id is not 32 bytes".into()))?;
        // One path is dialed, by fixed precedence: `ip` (with a bound
        // socket), then `webrtc` (when enabled), then the relay. No
        // racing — a chosen path that never answers fails by timeout
        // rather than falling back.
        let webrtc_enabled = self.shared.borrow().webrtc_enabled;
        let mut direct: Option<SocketAddr> = None;
        let mut webrtc_path = false;
        for entry in &addr.addrs {
            match entry {
                TransportAddr::Relay(url) => {
                    if url.trim_end_matches('/') != self.relay_url.trim_end_matches('/') {
                        return Err(Error::ConnectFailed(
                            "cross-relay dialing is not implemented yet".into(),
                        ));
                    }
                }
                TransportAddr::Ip(text) => {
                    if direct.is_none() && self.udp.is_some() {
                        direct = text.parse().ok();
                    }
                }
                TransportAddr::Webrtc(url) if webrtc_enabled => {
                    if url.trim_end_matches('/') != self.relay_url.trim_end_matches('/') {
                        return Err(Error::ConnectFailed(
                            "webrtc signaling through a foreign relay is not implemented yet"
                                .into(),
                        ));
                    }
                    webrtc_path = true;
                }
                TransportAddr::Webrtc(_) => {}
                TransportAddr::Custom(_) => {}
            }
        }

        let tls_config = tls::client_config(&self.identity, peer, vec![alpn]).map_err(other)?;
        let quic_tls = QuicClientConfig::try_from(Arc::new(tls_config))
            .map_err(|e| Error::Other(format!("client quic config: {e}")))?;
        let mut config = ClientConfig::new(Arc::new(quic_tls));
        config.transport_config(transport_config());

        // The WebRTC dance happens before quinn dials: the wire must be
        // open for the first flight (issue #8).
        let remote = match (direct, webrtc_path) {
            (Some(real), _) => Some(real),
            (None, true) => {
                let wire = webrtc::dial(&self.shared, peer).await?;
                Some(self.shared.borrow_mut().register_channel(peer, wire)?)
            }
            (None, false) => None,
        };

        let handle = {
            let mut st = self.shared.borrow_mut();
            if st.dead.is_some() || st.closed {
                return Err(Error::Closed);
            }
            let remote = match remote {
                Some(real) => real,
                None => st.addr_for_peer(peer),
            };
            let (handle, conn) = st
                .quinn
                .connect(Instant::now(), config, remote, tls::SERVER_NAME)
                .map_err(|e| Error::ConnectFailed(e.to_string()))?;
            st.conns
                .insert(handle, ConnEntry::new(conn, Some(peer), false));
            handle
        };

        wait_until(&self.shared, |st| {
            let entry = st.conns.get_mut(&handle).expect("connection entry");
            if let Some(err) = &entry.error {
                return Some(Err(err.clone()));
            }
            if entry.connected {
                return Some(Ok(()));
            }
            None
        })
        .await?;

        Ok(Connection::new(ConnectionRes {
            shared: self.shared.clone(),
            handle,
        }))
    }

    async fn accept(&self) -> Result<Connection, Error> {
        let handle = wait_until(&self.shared, |st| {
            if let Some(handle) = st.accept_queue.pop_front() {
                return Some(Ok(handle));
            }
            if st.dead.is_some() || st.closed {
                return Some(Err(Error::Closed));
            }
            None
        })
        .await?;
        Ok(Connection::new(ConnectionRes {
            shared: self.shared.clone(),
            handle,
        }))
    }

    fn close(&self) {
        let mut st = self.shared.borrow_mut();
        if !st.closed {
            st.closed = true;
            st.closed_at = Some(Instant::now());
            st.close_all(b"endpoint closed");
        }
    }
}

impl ConnectionRes {
    fn with_entry<R>(&self, f: impl FnOnce(&mut ConnEntry) -> R) -> R {
        let mut st = self.shared.borrow_mut();
        let entry = st.conns.get_mut(&self.handle).expect("connection entry");
        f(entry)
    }

    async fn open_stream(&self, dir: Dir) -> Result<StreamId, Error> {
        let handle = self.handle;
        wait_until(&self.shared, |st| {
            let entry = st.conns.get_mut(&handle).expect("connection entry");
            if let Some(err) = &entry.error {
                return Some(Err(err.clone()));
            }
            entry.conn.streams().open(dir).map(Ok)
        })
        .await
    }

    async fn accept_stream(&self, dir: Dir) -> Result<StreamId, Error> {
        let handle = self.handle;
        wait_until(&self.shared, |st| {
            let entry = st.conns.get_mut(&handle).expect("connection entry");
            let queue = match dir {
                Dir::Bi => &mut entry.bi_queue,
                Dir::Uni => &mut entry.uni_queue,
            };
            if let Some(id) = queue.pop_front() {
                return Some(Ok(id));
            }
            entry.error.as_ref().map(|err| Err(err.clone()))
        })
        .await
    }

    fn stream_pair(&self, id: StreamId) -> (SendStream, RecvStream) {
        (
            SendStream::new(SendStreamRes {
                shared: self.shared.clone(),
                handle: self.handle,
                id,
            }),
            RecvStream::new(RecvStreamRes {
                shared: self.shared.clone(),
                handle: self.handle,
                id,
                streaming: Cell::new(false),
            }),
        )
    }
}

impl GuestConnection for ConnectionRes {
    fn peer(&self) -> Vec<u8> {
        self.with_entry(|e| e.peer.map(|p| p.to_vec()).unwrap_or_default())
    }

    fn alpn(&self) -> Vec<u8> {
        self.with_entry(|e| e.alpn.clone())
    }

    fn state(&self) -> ConnectionState {
        self.with_entry(|e| {
            if e.drained || e.error.is_some() {
                ConnectionState::Closed
            } else if e.connected {
                ConnectionState::Open
            } else {
                ConnectionState::Connecting
            }
        })
    }

    async fn open_bi(&self) -> Result<(SendStream, RecvStream), Error> {
        let id = self.open_stream(Dir::Bi).await?;
        Ok(self.stream_pair(id))
    }

    async fn open_uni(&self) -> Result<SendStream, Error> {
        let id = self.open_stream(Dir::Uni).await?;
        Ok(SendStream::new(SendStreamRes {
            shared: self.shared.clone(),
            handle: self.handle,
            id,
        }))
    }

    async fn accept_bi(&self) -> Result<(SendStream, RecvStream), Error> {
        let id = self.accept_stream(Dir::Bi).await?;
        Ok(self.stream_pair(id))
    }

    async fn accept_uni(&self) -> Result<RecvStream, Error> {
        let id = self.accept_stream(Dir::Uni).await?;
        Ok(RecvStream::new(RecvStreamRes {
            shared: self.shared.clone(),
            handle: self.handle,
            id,
            streaming: Cell::new(false),
        }))
    }

    fn close(&self, code: u32, reason: String) {
        let mut st = self.shared.borrow_mut();
        let entry = st.conns.get_mut(&self.handle).expect("connection entry");
        if entry.error.is_none() && !entry.drained {
            entry.conn.close(
                Instant::now(),
                VarInt::from_u32(code),
                bytes::Bytes::from(reason.into_bytes()),
            );
        }
    }

    async fn wait_closed(&self) {
        let handle = self.handle;
        wait_until(&self.shared, |st| {
            let entry = st.conns.get_mut(&handle).expect("connection entry");
            (entry.drained || entry.error.is_some()).then_some(())
        })
        .await
    }
}

/// Write all of `bytes`, polling through flow control as needed.
async fn write_all(
    shared: &Shared,
    handle: ConnectionHandle,
    id: StreamId,
    bytes: Vec<u8>,
) -> Result<(), Error> {
    let mut offset = 0usize;
    wait_until(shared, move |st| {
        let entry = st.conns.get_mut(&handle).expect("connection entry");
        if let Some(err) = &entry.error {
            return Some(Err(err.clone()));
        }
        loop {
            match entry.conn.send_stream(id).write(&bytes[offset..]) {
                Ok(written) => {
                    offset += written;
                    if offset == bytes.len() {
                        return Some(Ok(()));
                    }
                    if written == 0 {
                        return None;
                    }
                }
                Err(WriteError::Blocked) => return None,
                Err(WriteError::Stopped(code)) => {
                    return Some(Err(Error::Reset(code.to_string())));
                }
                Err(WriteError::ClosedStream) => return Some(Err(Error::Closed)),
            }
        }
    })
    .await
}

/// Read up to `max` bytes; `Ok(None)` at FIN.
async fn read_some(
    shared: &Shared,
    handle: ConnectionHandle,
    id: StreamId,
    max: u32,
) -> Result<Option<Vec<u8>>, Error> {
    wait_until(shared, move |st| {
        let entry = st.conns.get_mut(&handle).expect("connection entry");
        if let Some(err) = &entry.error {
            // A cleanly closed connection still ends streams cleanly.
            if matches!(err, Error::Closed) {
                return Some(Ok(None));
            }
            return Some(Err(err.clone()));
        }
        let mut recv = entry.conn.recv_stream(id);
        let mut chunks = match recv.read(true) {
            Ok(chunks) => chunks,
            // Already fully read or reset-and-consumed.
            Err(ReadableError::ClosedStream) => return Some(Ok(None)),
            Err(ReadableError::IllegalOrderedRead) => {
                return Some(Err(other("illegal ordered read")))
            }
        };
        let result = chunks.next(max as usize);
        let _ = chunks.finalize();
        match result {
            Ok(Some(chunk)) => Some(Ok(Some(chunk.bytes.to_vec()))),
            Ok(None) => Some(Ok(None)),
            Err(ReadError::Blocked) => None,
            Err(ReadError::Reset(code)) => Some(Err(Error::Reset(code.to_string()))),
        }
    })
    .await
}

impl GuestSendStream for SendStreamRes {
    async fn write(&self, bytes: Vec<u8>) -> Result<(), Error> {
        write_all(&self.shared, self.handle, self.id, bytes).await
    }

    fn finish(&self) -> Result<(), Error> {
        let mut st = self.shared.borrow_mut();
        let entry = st.conns.get_mut(&self.handle).expect("connection entry");
        if let Some(err) = &entry.error {
            return Err(err.clone());
        }
        match entry.conn.send_stream(self.id).finish() {
            Ok(()) => Ok(()),
            Err(FinishError::Stopped(code)) => Err(Error::Reset(code.to_string())),
            Err(FinishError::ClosedStream) => Err(Error::Closed),
        }
    }

    fn reset(&self, code: u32) {
        let mut st = self.shared.borrow_mut();
        let entry = st.conns.get_mut(&self.handle).expect("connection entry");
        let _ = entry
            .conn
            .send_stream(self.id)
            .reset(VarInt::from_u32(code));
    }

    async fn write_via_stream(&self, mut data: StreamReader<u8>) -> Result<(), Error> {
        loop {
            let (result, buf) = data.read(Vec::with_capacity(16 * 1024)).await;
            if !buf.is_empty() {
                write_all(&self.shared, self.handle, self.id, buf).await?;
            }
            match result {
                wit_bindgen::StreamResult::Complete(_) => {}
                wit_bindgen::StreamResult::Dropped | wit_bindgen::StreamResult::Cancelled => break,
            }
        }
        self.finish()
    }
}

impl GuestRecvStream for RecvStreamRes {
    async fn read(&self, max: u32) -> Result<Option<Vec<u8>>, Error> {
        if self.streaming.get() {
            return Err(other("the stream's bytes were taken by read-via-stream"));
        }
        if max == 0 {
            return Ok(Some(Vec::new()));
        }
        read_some(&self.shared, self.handle, self.id, max).await
    }

    fn stop(&self, code: u32) {
        let mut st = self.shared.borrow_mut();
        let entry = st.conns.get_mut(&self.handle).expect("connection entry");
        let _ = entry.conn.recv_stream(self.id).stop(VarInt::from_u32(code));
    }

    fn read_via_stream(&self) -> Result<StreamReader<u8>, Error> {
        if self.streaming.replace(true) {
            return Err(other("read-via-stream may be called once"));
        }
        let (mut writer, reader) = wit_stream::new();
        let shared = self.shared.clone();
        let handle = self.handle;
        let id = self.id;
        wit_bindgen::spawn_local(async move {
            while let Ok(Some(bytes)) = read_some(&shared, handle, id, 16 * 1024).await {
                let remaining = writer.write_all(bytes).await;
                if !remaining.is_empty() {
                    break;
                }
            }
            // Dropping the writer ends the stream.
        });
        Ok(reader)
    }
}
