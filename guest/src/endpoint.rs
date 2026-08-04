//! The QUIC endpoint pump: quinn-proto driven over a datagram wire — a
//! WebRTC data channel or the relay connection.
//!
//! One task drives everything (component-model async is a single-threaded
//! cooperative loop). The two long-lived import futures — the wire
//! `receive` and a fixed 50 ms clock tick — stay pinned across iterations:
//! an in-flight import is a component-model subtask, and dropping one
//! mid-flight cancels it in the host, which can discard a datagram the
//! host already dequeued. Deadlines are serviced on the next tick rather
//! than by a precise (cancellable) timer for the same reason.

use std::net::{Ipv4Addr, SocketAddr};
use std::pin::pin;
use std::sync::Arc;
use std::time::{Duration, Instant};

use bytes::BytesMut;
use futures::future::FusedFuture;
use futures::select_biased;
use futures::FutureExt;
use quinn_proto::{
    ClientConfig, Connection, ConnectionError, ConnectionHandle, DatagramEvent, Dir, Endpoint,
    EndpointConfig, Event, ServerConfig, StreamEvent, StreamId, TransportConfig, VarInt,
};

use crate::bindings::lann::webrtc_datachannels::connections::DataChannel;
use crate::bindings::lann::webrtc_datachannels::types::Message as ChannelMessage;
use crate::bindings::wasi::clocks::monotonic_clock;
use crate::crypto::sign::Identity;
use crate::quic_glue::{
    HkdfHandshakeTokenKey, HmacSha256ResetKey, QuicClientConfig, QuicServerConfig,
};
use crate::relay::RelayConn;
use crate::tls;

/// The datagram wire QUIC runs over: one datagram per binary message on
/// either carrier.
pub enum Wire<'a> {
    /// An unreliable, unordered WebRTC data channel.
    Channel(&'a DataChannel),
    /// The relay connection: datagrams addressed by endpoint ID, relayed
    /// reliably and in order, which QUIC tolerates (it assumes neither).
    Relay {
        conn: &'a RelayConn,
        /// The peer this wire speaks to. A client sets it up front; a
        /// server learns it from the first datagram's relay-authenticated
        /// source and the wire is bound to that peer from then on.
        peer: std::cell::Cell<Option<[u8; 32]>>,
    },
}

impl Wire<'_> {
    /// The next inbound datagram; `Ok(None)` for a frame that is not one
    /// (a text message, or a relay datagram from some other peer).
    async fn receive(&self) -> Result<Option<Vec<u8>>, String> {
        match self {
            Wire::Channel(channel) => match channel.receive().await {
                Ok(ChannelMessage::Binary(datagram)) => Ok(Some(datagram)),
                Ok(ChannelMessage::String(_)) => Ok(None),
                Err(err) => Err(format!("data channel: {err:?}")),
            },
            Wire::Relay { conn, peer } => {
                let datagram = conn.recv_datagram().await?;
                match peer.get() {
                    None => {
                        peer.set(Some(datagram.source));
                        Ok(Some(datagram.payload))
                    }
                    Some(expected) if expected == datagram.source => Ok(Some(datagram.payload)),
                    Some(_) => Ok(None),
                }
            }
        }
    }

    async fn send(&self, payload: &[u8]) -> Result<(), String> {
        match self {
            Wire::Channel(channel) => channel
                .send(ChannelMessage::Binary(payload.to_vec()))
                .await
                .map_err(|err| format!("data channel: {err:?}")),
            Wire::Relay { conn, peer } => {
                let peer = peer.get().ok_or("relay wire has no peer yet")?;
                conn.send_datagram(&peer, payload).await
            }
        }
    }

    /// Initiate the wire's close (sync and idempotent on both carriers);
    /// a pending `receive` then resolves with its closed error.
    fn close(&self) {
        match self {
            Wire::Channel(channel) => channel.close(),
            Wire::Relay { conn, .. } => conn.close(),
        }
    }

    /// The peer this wire ended up bound to.
    pub fn peer(&self) -> Option<[u8; 32]> {
        match self {
            Wire::Channel(_) => None,
            Wire::Relay { peer, .. } => peer.get(),
        }
    }
}

/// The wire carries no addresses; quinn still wants distinct,
/// stable socket addresses per side.
const CLIENT_ADDR: SocketAddr =
    SocketAddr::new(std::net::IpAddr::V4(Ipv4Addr::new(10, 0, 0, 1)), 1111);
const SERVER_ADDR: SocketAddr =
    SocketAddr::new(std::net::IpAddr::V4(Ipv4Addr::new(10, 0, 0, 2)), 4433);

/// Timer tick servicing quinn's deadlines (loss detection, idle, pacing).
const TICK_NS: u64 = 50_000_000;

/// Give the final packets (CONNECTION_CLOSE, the server's last ACKs) a
/// bounded window to reach the wire before the task returns.
const LINGER: Duration = Duration::from_millis(500);

/// Hard cap on one run, so a wedged happy path fails rather than hangs.
const RUN_DEADLINE: Duration = Duration::from_secs(30);

/// What one side observed; the caller folds this into the demo report.
pub struct Outcome {
    pub peer_id: [u8; 32],
    pub handshake_ms: u64,
    pub roundtrip_ms: u64,
    pub received: String,
}

/// Which half of the demo this endpoint drives.
pub enum Role {
    /// Connect, send `message`, expect it echoed back.
    Client { message: String },
    /// Accept, read one message, echo it back uppercased.
    Server,
}

/// Transport profile for the data-channel path: fixed conservative MTU,
/// no discovery (the channel fragments transparently, so probing would
/// measure nothing real), one datagram per transmit (no GSO batching —
/// each datagram becomes exactly one channel message).
fn transport_config() -> Arc<TransportConfig> {
    let mut config = TransportConfig::default();
    config.initial_mtu(1200);
    config.mtu_discovery_config(None);
    Arc::new(config)
}

fn endpoint_config() -> Result<Arc<EndpointConfig>, String> {
    let mut reset_key = [0u8; 32];
    getrandom::fill(&mut reset_key).map_err(|e| format!("getrandom: {e}"))?;
    Ok(Arc::new(EndpointConfig::new(Arc::new(
        HmacSha256ResetKey::new(reset_key),
    ))))
}

/// Run one endpoint over `wire` until the demo completes.
///
/// `peer_endpoint_id` pins the TLS connection on the client; a server
/// authenticates whoever connects (the caller cross-checks the resulting
/// identity).
pub async fn run(
    identity: &Identity,
    peer_endpoint_id: Option<[u8; 32]>,
    wire: &Wire<'_>,
    role: Role,
) -> Result<Outcome, String> {
    let mut endpoint;
    let mut connection: Option<(ConnectionHandle, Connection)> = None;

    match &role {
        Role::Client { .. } => {
            let peer = peer_endpoint_id.ok_or("client role requires the peer's endpoint id")?;
            endpoint = Endpoint::new(endpoint_config()?, None, true, None);
            let tls = tls::client_config(identity, peer)
                .map_err(|e| format!("client tls config: {e}"))?;
            let mut config = ClientConfig::new(Arc::new(QuicClientConfig::new(Arc::new(tls))));
            config.transport_config(transport_config());
            let pair = endpoint
                .connect(Instant::now(), config, SERVER_ADDR, tls::SERVER_NAME)
                .map_err(|e| format!("connect: {e}"))?;
            connection = Some(pair);
        }
        Role::Server => {
            let tls =
                tls::server_config(identity).map_err(|e| format!("server tls config: {e}"))?;
            let mut token_master = [0u8; 32];
            getrandom::fill(&mut token_master).map_err(|e| format!("getrandom: {e}"))?;
            let mut config = ServerConfig::new(
                Arc::new(QuicServerConfig::new(Arc::new(tls))),
                Arc::new(HkdfHandshakeTokenKey::new(&token_master)),
            );
            config.transport_config(transport_config());
            endpoint = Endpoint::new(endpoint_config()?, Some(Arc::new(config)), true, None);
        }
    }

    let started = Instant::now();
    let mut app = App::new(role);
    let mut buf = Vec::with_capacity(16 * 1024);

    let mut recv = pin!(wire.receive().fuse());
    let mut tick = pin!(monotonic_clock::wait_for(TICK_NS).fuse());

    // Every exit funnels through the teardown below the block: the pinned
    // imports are in-flight component-model subtasks, and a subtask dropped
    // mid-flight is cancelled in the host — jco-transpile 0.5.2 traps on
    // that cancellation, so both futures must resolve before this function
    // returns.
    macro_rules! ok_or_break {
        ($label:lifetime, $e:expr) => {
            match $e {
                Ok(value) => value,
                Err(err) => break $label Err(err),
            }
        };
    }

    let outcome: Result<Outcome, String> = 'pump: loop {
        if started.elapsed() > RUN_DEADLINE {
            break 'pump Err("run deadline exceeded".into());
        }

        // Drain endpoint-bound events, application events, and transmits
        // until quiescent, then park on the channel or the tick.
        if let Some((handle, conn)) = connection.as_mut() {
            loop {
                let mut progressed = false;

                while let Some(event) = conn.poll_endpoint_events() {
                    progressed = true;
                    if let Some(back) = endpoint.handle_event(*handle, event) {
                        conn.handle_event(back);
                    }
                }

                while let Some(event) = conn.poll() {
                    progressed = true;
                    ok_or_break!('pump, app.handle_event(conn, event, started));
                }

                loop {
                    buf.clear();
                    match conn.poll_transmit(Instant::now(), 1, &mut buf) {
                        Some(transmit) => {
                            progressed = true;
                            ok_or_break!('pump, wire.send(&buf[..transmit.size]).await);
                        }
                        None => break,
                    }
                }

                if !progressed {
                    break;
                }
            }

            ok_or_break!('pump, app.drive(conn, started));

            if let Some(done_at) = app.done_at {
                if done_at.elapsed() >= LINGER || conn.is_drained() {
                    break 'pump app.finish(conn);
                }
            }
        }

        select_biased! {
            received = recv => match received {
                Ok(message) => {
                    recv.set(wire.receive().fuse());
                    if let Some(datagram) = message {
                        ok_or_break!('pump, handle_datagram(
                            &mut endpoint,
                            &mut connection,
                            wire,
                            &mut buf,
                            datagram,
                        )
                        .await);
                    }
                }
                // The peer tearing its side down first closes the wire
                // under us; once this side is only lingering, that is
                // completion, not failure.
                Err(err) => break 'pump match (app.done_at.is_some(), connection.as_mut()) {
                    (true, Some((_, conn))) => app.finish(conn),
                    _ => Err(err),
                },
            },
            _ = tick => {
                tick.set(monotonic_clock::wait_for(TICK_NS).fuse());
                if let Some((_, conn)) = connection.as_mut() {
                    let now = Instant::now();
                    if conn.poll_timeout().is_some_and(|deadline| deadline <= now) {
                        conn.handle_timeout(now);
                    }
                }
            }
        }
    };

    // Resolve the pinned imports: close the wire (sync, idempotent; a
    // pending `receive` then resolves with its closed error), drain `recv`
    // to its error, and let the final tick fire.
    wire.close();
    while !recv.is_terminated() {
        select_biased! {
            received = recv => if received.is_ok() {
                recv.set(wire.receive().fuse());
            },
            _ = tick => tick.set(monotonic_clock::wait_for(TICK_NS).fuse()),
        }
    }
    if !tick.is_terminated() {
        tick.as_mut().await;
    }

    outcome
}

async fn handle_datagram(
    endpoint: &mut Endpoint,
    connection: &mut Option<(ConnectionHandle, Connection)>,
    wire: &Wire<'_>,
    buf: &mut Vec<u8>,
    datagram: Vec<u8>,
) -> Result<(), String> {
    let now = Instant::now();
    let remote = match connection {
        Some((_, conn)) => conn.remote_address(),
        None => CLIENT_ADDR,
    };
    buf.clear();
    match endpoint.handle(now, remote, None, None, BytesMut::from(&datagram[..]), buf) {
        Some(DatagramEvent::ConnectionEvent(handle, event)) => {
            if let Some((ours, conn)) = connection.as_mut() {
                if *ours == handle {
                    conn.handle_event(event);
                }
            }
        }
        Some(DatagramEvent::NewConnection(incoming)) => {
            if connection.is_none() {
                buf.clear();
                let pair = endpoint
                    .accept(incoming, now, buf, None)
                    .map_err(|e| format!("accept: {}", e.cause))?;
                *connection = Some(pair);
            }
        }
        Some(DatagramEvent::Response(transmit)) => {
            wire.send(&buf[..transmit.size]).await?;
        }
        None => {}
    }
    Ok(())
}

/// The demo application state machine, advanced by connection events.
struct App {
    role: Role,
    handshake_ms: Option<u64>,
    peer_id: Option<[u8; 32]>,
    stream: Option<StreamId>,
    inbound: Vec<u8>,
    /// Client: when the message was sent. Server: unused.
    sent_at: Option<Instant>,
    roundtrip_ms: u64,
    received: Option<String>,
    /// Set when this side has nothing left to do but flush and leave.
    done_at: Option<Instant>,
    close_sent: bool,
}

impl App {
    fn new(role: Role) -> Self {
        Self {
            role,
            handshake_ms: None,
            peer_id: None,
            stream: None,
            inbound: Vec::new(),
            sent_at: None,
            roundtrip_ms: 0,
            received: None,
            done_at: None,
            close_sent: false,
        }
    }

    fn handle_event(
        &mut self,
        conn: &mut Connection,
        event: Event,
        started: Instant,
    ) -> Result<(), String> {
        match event {
            Event::HandshakeDataReady => {}
            Event::Connected => {
                self.handshake_ms = Some(started.elapsed().as_millis() as u64);
                self.peer_id = Some(peer_endpoint_id(conn)?);
                if let Role::Client { message } = &self.role {
                    let message = message.clone();
                    let id = conn
                        .streams()
                        .open(Dir::Bi)
                        .ok_or("no bidirectional stream credit")?;
                    self.stream = Some(id);
                    let mut send = conn.send_stream(id);
                    let wrote = send
                        .write(message.as_bytes())
                        .map_err(|e| format!("stream write: {e}"))?;
                    if wrote != message.len() {
                        return Err("demo message did not fit the stream window".into());
                    }
                    send.finish().map_err(|e| format!("stream finish: {e}"))?;
                    self.sent_at = Some(Instant::now());
                }
            }
            Event::Stream(StreamEvent::Opened { dir: Dir::Bi }) => {
                if matches!(self.role, Role::Server) && self.stream.is_none() {
                    self.stream = conn.streams().accept(Dir::Bi);
                    // Data that arrived before the accept raises no
                    // `Readable`; the first read is on us.
                    if let Some(id) = self.stream {
                        self.read_stream(conn, id)?;
                    }
                }
            }
            Event::Stream(StreamEvent::Readable { id }) => {
                if Some(id) == self.stream {
                    self.read_stream(conn, id)?;
                }
            }
            Event::Stream(_) => {}
            Event::DatagramReceived | Event::DatagramsUnblocked => {}
            Event::ConnectionLost { reason } => match reason {
                // The peer closing after the exchange is the happy path's
                // natural end on the server side.
                ConnectionError::ApplicationClosed(_) if self.received.is_some() => {
                    self.done_at.get_or_insert_with(Instant::now);
                }
                other => return Err(format!("connection lost: {other}")),
            },
        }
        Ok(())
    }

    /// Read whatever is available on `id`; on FIN, complete this side's
    /// half of the exchange.
    fn read_stream(&mut self, conn: &mut Connection, id: StreamId) -> Result<(), String> {
        let mut finished = false;
        {
            let mut recv = conn.recv_stream(id);
            let mut chunks = match recv.read(true) {
                Ok(chunks) => chunks,
                // The stream was already reset or fully read.
                Err(_) => return Ok(()),
            };
            loop {
                match chunks.next(usize::MAX) {
                    Ok(Some(chunk)) => self.inbound.extend_from_slice(&chunk.bytes),
                    Ok(None) => {
                        finished = true;
                        break;
                    }
                    Err(quinn_proto::ReadError::Blocked) => break,
                    Err(e) => return Err(format!("stream read: {e}")),
                }
            }
            let _ = chunks.finalize();
        }

        if !finished {
            return Ok(());
        }
        let text = String::from_utf8_lossy(&self.inbound).into_owned();
        self.received = Some(text.clone());

        match &self.role {
            Role::Client { .. } => {
                self.roundtrip_ms = self
                    .sent_at
                    .map(|at| at.elapsed().as_millis() as u64)
                    .unwrap_or(0);
            }
            Role::Server => {
                let echo = text.to_uppercase();
                let mut send = conn.send_stream(id);
                let wrote = send
                    .write(echo.as_bytes())
                    .map_err(|e| format!("echo write: {e}"))?;
                if wrote != echo.len() {
                    return Err("echo did not fit the stream window".into());
                }
                send.finish().map_err(|e| format!("echo finish: {e}"))?;
            }
        }
        Ok(())
    }

    /// Role-specific progression that is not event-driven: the client
    /// closes once it has its echo.
    fn drive(&mut self, conn: &mut Connection, _started: Instant) -> Result<(), String> {
        if let Role::Client { .. } = self.role {
            if self.received.is_some() && !self.close_sent {
                conn.close(
                    Instant::now(),
                    VarInt::from_u32(0),
                    bytes::Bytes::from_static(b"done"),
                );
                self.close_sent = true;
                self.done_at = Some(Instant::now());
            }
        }
        Ok(())
    }

    fn finish(&mut self, _conn: &mut Connection) -> Result<Outcome, String> {
        Ok(Outcome {
            peer_id: self.peer_id.ok_or("finished without a peer identity")?,
            handshake_ms: self.handshake_ms.ok_or("finished without a handshake")?,
            roundtrip_ms: self.roundtrip_ms,
            received: self.received.clone().ok_or("finished without a payload")?,
        })
    }
}

/// The authenticated peer identity: the raw-public-key "certificate chain"
/// is one SPKI, and the Ed25519 key inside it is the endpoint ID.
fn peer_endpoint_id(conn: &Connection) -> Result<[u8; 32], String> {
    let identity = conn
        .crypto_session()
        .peer_identity()
        .ok_or("peer presented no identity")?;
    let certs = identity
        .downcast::<Vec<rustls::pki_types::CertificateDer<'static>>>()
        .map_err(|_| "unexpected peer identity type")?;
    let spki = certs.first().ok_or("empty peer certificate list")?;
    tls::endpoint_id_from_spki(spki.as_ref()).ok_or_else(|| "peer key is not Ed25519".into())
}
