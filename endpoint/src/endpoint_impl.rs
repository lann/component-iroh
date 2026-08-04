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
use std::collections::{HashMap, VecDeque};
use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::pin::pin;
use std::rc::Rc;
use std::sync::Arc;

use std::time::{Duration, Instant};

use bytes::BytesMut;
use futures::future::FusedFuture;
use futures::{select_biased, FutureExt};
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
use crate::Component;
use wit_bindgen::rt::async_support::StreamReader;

/// The pump's tick: quinn's deadlines, and the bound on how stale a
/// resource-method mutation can go unflushed.
const TICK_NS: u64 = 10_000_000;

/// Resource methods' polling quantum while waiting on pump consequences.
const POLL_NS: u64 = 5_000_000;

/// Bounded window for final packets after `endpoint.close`.
const LINGER: Duration = Duration::from_millis(500);

/// Transport profile for relayed paths: fixed conservative MTU, no
/// discovery (the relay fragments transparently, so probing would measure
/// nothing real), one datagram per transmit.
fn transport_config() -> Arc<TransportConfig> {
    let mut config = TransportConfig::default();
    config.initial_mtu(1200);
    config.mtu_discovery_config(None);
    Arc::new(config)
}

type Shared = Rc<RefCell<State>>;

struct State {
    quinn: QuinnEndpoint,
    conns: HashMap<ConnectionHandle, ConnEntry>,
    peer_to_addr: HashMap<[u8; 32], SocketAddr>,
    addr_to_peer: HashMap<SocketAddr, [u8; 32]>,
    next_host: u32,
    accept_queue: VecDeque<ConnectionHandle>,
    relay_outbound: VecDeque<([u8; 32], Vec<u8>)>,
    udp_outbound: VecDeque<(SocketAddr, Vec<u8>)>,
    closed: bool,
    closed_at: Option<Instant>,
    /// Set when the relay connection died; every operation fails from
    /// then on.
    dead: Option<String>,
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
    fn new(quinn: QuinnEndpoint) -> Self {
        Self {
            quinn,
            conns: HashMap::new(),
            peer_to_addr: HashMap::new(),
            addr_to_peer: HashMap::new(),
            next_host: 0,
            accept_queue: VecDeque::new(),
            relay_outbound: VecDeque::new(),
            udp_outbound: VecDeque::new(),
            closed: false,
            closed_at: None,
            dead: None,
        }
    }

    /// The stable fake socket address standing in for `peer` (the relay
    /// wire has no addresses; quinn wants distinct, stable ones).
    ///
    /// Hazard: the fake space is `10.77.x.y:4433`. `drain()` routes
    /// transmits to the relay by fake-addr lookup, so a real peer that
    /// is genuinely reachable at such an address would be misrouted.
    /// Loopback and public-internet peers cannot collide; a 10/8
    /// deployment could.
    fn addr_for_peer(&mut self, peer: [u8; 32]) -> SocketAddr {
        if let Some(addr) = self.peer_to_addr.get(&peer) {
            return *addr;
        }
        self.next_host += 1;
        let host = self.next_host;
        let addr = SocketAddr::new(
            IpAddr::V4(Ipv4Addr::new(10, 77, (host >> 8) as u8, host as u8)),
            4433,
        );
        self.peer_to_addr.insert(peer, addr);
        self.addr_to_peer.insert(addr, peer);
        addr
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
                            match addr_to_peer.get(&transmit.destination) {
                                Some(peer) => {
                                    relay_outbound.push_back((*peer, buf[..transmit.size].to_vec()))
                                }
                                None => udp_outbound.push_back((
                                    transmit.destination,
                                    buf[..transmit.size].to_vec(),
                                )),
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
/// one — see the spike's teardown discipline).
async fn pump(shared: Shared, relay: Rc<RelayConn>, udp: Option<Rc<UdpWire>>) {
    let mut recv = pin!(relay.recv_datagram().fuse());
    let mut udp_recv = pin!(udp_receive(udp.clone()).fuse());
    let mut tick = pin!(monotonic_clock::wait_for(TICK_NS).fuse());

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
                    shared
                        .borrow_mut()
                        .handle_relay_datagram(datagram.source, datagram.payload);
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
            _ = tick => {
                tick.set(monotonic_clock::wait_for(TICK_NS).fuse());
                shared.borrow_mut().handle_timeouts();
            }
        }
    }

    // Resolve the pinned imports before the task ends: close the relay
    // (its pending receive resolves with the closed error), self-wake the
    // UDP socket (a zero-length datagram to our own address resolves its
    // pending receive), and let the final tick fire.
    relay.close();
    if let Some(wire) = &udp {
        let _ = wire.self_wake().await;
    }
    while !recv.is_terminated() {
        select_biased! {
            received = recv => if received.is_ok() {
                recv.set(relay.recv_datagram().fuse());
            },
            _ = udp_recv => {}
            _ = tick => tick.set(monotonic_clock::wait_for(TICK_NS).fuse()),
        }
    }
    if udp.is_some() && !udp_recv.is_terminated() {
        udp_recv.as_mut().await.ok();
    }
    if !tick.is_terminated() {
        tick.as_mut().await;
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

        let shared = Rc::new(RefCell::new(State::new(quinn)));
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
        // The direct path wins when it exists: the first parseable `ip`
        // entry, dialed over our bound socket. No racing yet — a
        // direct-dialed peer that never answers fails by timeout rather
        // than falling back to the relay.
        let mut direct: Option<SocketAddr> = None;
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
                TransportAddr::Custom(_) => {}
            }
        }

        let tls_config = tls::client_config(&self.identity, peer, vec![alpn]).map_err(other)?;
        let quic_tls = QuicClientConfig::try_from(Arc::new(tls_config))
            .map_err(|e| Error::Other(format!("client quic config: {e}")))?;
        let mut config = ClientConfig::new(Arc::new(quic_tls));
        config.transport_config(transport_config());

        let handle = {
            let mut st = self.shared.borrow_mut();
            if st.dead.is_some() || st.closed {
                return Err(Error::Closed);
            }
            let remote = match direct {
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
