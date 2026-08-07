//! Ping-demo guest: one iroh endpoint per page.
//!
//! The page (demo.mjs) owns all demo semantics; the guest is the
//! networking core. It binds an endpoint, connects host and joiner over
//! the relay, then ferries opaque frames between the page and the peer
//! over one bi stream. The webrtc upgrade is the synthetic-address
//! overlay from the iroh-relay-ws spike (issue #26): the page's bridge
//! assigns this endpoint a synthetic address and reports readiness once
//! the data channel opens; the guest hands the address to iroh, which
//! advertises it in-band and migrates the live connection.
//!
//! Environment (via the shim's GUEST_ENV):
//! - `ROLE`: "host" or "join"
//! - `PEER`, `PEER_RELAY`: the host's endpoint id and home relay (join)
//! - `RELAY`: optional relay override for both roles (local testing;
//!   default is the n0 public relay map)
//!
//! Page protocol (synthetic port 3, one JSON object per datagram):
//! frames whose `t` the guest owns are status events ("ready",
//! "connected", "path", "closed", "error"); every other frame from the
//! page is forwarded verbatim to the peer, and peer frames are
//! delivered verbatim to the page. Stream framing: u16 BE length +
//! bytes.
//!
//! Overlay control protocol (synthetic port 2): see the page bridge
//! (overlay.mjs); identical to the iroh-relay-ws spike.

use std::net::{Ipv4Addr, SocketAddr};
use std::sync::Arc;
use std::time::Duration;

use iroh::{
    Endpoint, EndpointAddr, EndpointId, RelayMode, RelayUrl, SecretKey, TransportAddr,
    endpoint::{Connection, presets},
};

const ALPN: &[u8] = b"/polymorph/ping-demo/1";
const PAGE_ADDR: (Ipv4Addr, u16) = (Ipv4Addr::LOCALHOST, 3);
const OVERLAY_ADDR: (Ipv4Addr, u16) = (Ipv4Addr::LOCALHOST, 2);
const TAG_REGISTER: u8 = 0x00;
const TAG_ASSIGNED: u8 = 0x01;
const TAG_READY: u8 = 0x02;
const MAX_FRAME: usize = 16 * 1024;

fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
        .with_writer(std::io::stderr)
        .init();
    let rt = tokio::runtime::Builder::new_current_thread()
        .enable_all()
        .build()
        .expect("build runtime");
    rt.block_on(run());
}

/// Page channel: JSON datagrams to/from demo.mjs on synthetic port 3.
#[derive(Clone)]
struct Page(Arc<tokio::net::UdpSocket>);

impl Page {
    async fn bind() -> Page {
        let sock = tokio::net::UdpSocket::bind((Ipv4Addr::LOCALHOST, 0))
            .await
            .expect("bind page socket");
        Page(Arc::new(sock))
    }

    async fn send_raw(&self, bytes: &[u8]) {
        self.0.send_to(bytes, PAGE_ADDR).await.expect("page send");
    }

    /// Sends a guest status event. `fields` must already be valid JSON
    /// fragments ("key":value); only guest-controlled values pass through
    /// here (hex ids, relay URLs, numbers).
    async fn event(&self, t: &str, fields: &[String]) {
        let mut msg = format!("{{\"t\":\"{t}\"");
        for f in fields {
            msg.push(',');
            msg.push_str(f);
        }
        msg.push('}');
        self.send_raw(msg.as_bytes()).await;
    }

    async fn recv(&self, buf: &mut [u8]) -> usize {
        let (n, _) = self.0.recv_from(buf).await.expect("page recv");
        n
    }
}

/// The overlay control client (see module docs; identical to the spike).
struct Overlay {
    sock: tokio::net::UdpSocket,
    external_addr: SocketAddr,
}

impl Overlay {
    async fn register(endpoint: &Endpoint) -> Overlay {
        let udp_port = endpoint
            .bound_sockets()
            .iter()
            .find(|a| a.is_ipv4())
            .expect("an ipv4 UDP socket")
            .port();
        let sock = tokio::net::UdpSocket::bind((Ipv4Addr::LOCALHOST, 0))
            .await
            .expect("bind overlay control socket");
        let mut frame = [0u8; 1 + 32 + 2];
        frame[0] = TAG_REGISTER;
        frame[1..33].copy_from_slice(endpoint.id().as_bytes());
        frame[33..35].copy_from_slice(&udp_port.to_be_bytes());
        sock.send_to(&frame, OVERLAY_ADDR)
            .await
            .expect("send overlay register");
        let mut buf = [0u8; 64];
        loop {
            let (n, _) = sock.recv_from(&mut buf).await.expect("overlay recv");
            if n >= 7 && buf[0] == TAG_ASSIGNED {
                let ip = Ipv4Addr::new(buf[1], buf[2], buf[3], buf[4]);
                let port = u16::from_be_bytes([buf[5], buf[6]]);
                return Overlay {
                    sock,
                    external_addr: SocketAddr::from((ip, port)),
                };
            }
        }
    }

    async fn ready(&self) {
        let mut buf = [0u8; 64];
        loop {
            let (n, _) = self.sock.recv_from(&mut buf).await.expect("overlay recv");
            if n >= 1 && buf[0] == TAG_READY {
                return;
            }
        }
    }
}

fn env_var(name: &str) -> Option<String> {
    std::env::var(name).ok().filter(|v| !v.is_empty())
}

fn selected_path(conn: &Connection) -> (&'static str, u64) {
    let paths = conn.paths();
    let Some(p) = paths.iter().find(|p| p.is_selected()) else {
        return ("none", 0);
    };
    let rtt = p.rtt().as_micros() as u64;
    match p.remote_addr() {
        TransportAddr::Relay(_) => ("relay", rtt),
        TransportAddr::Ip(_) => ("direct", rtt),
        _ => ("other", rtt),
    }
}

async fn run() {
    let page = Page::bind().await;

    let role = env_var("ROLE").unwrap_or_else(|| "host".into());
    let relay_mode = match env_var("RELAY") {
        Some(url) => RelayMode::custom([url.parse::<RelayUrl>().expect("RELAY url")]),
        None => RelayMode::Default,
    };

    let endpoint = Endpoint::builder(presets::Minimal)
        .secret_key(SecretKey::generate())
        .relay_mode(relay_mode)
        .clear_address_lookup()
        .alpns(if role == "host" {
            vec![ALPN.to_vec()]
        } else {
            vec![]
        })
        .bind()
        .await
        .expect("bind endpoint");

    let overlay = Overlay::register(&endpoint).await;
    endpoint.online().await;

    let relay_url = endpoint
        .addr()
        .addrs
        .iter()
        .find_map(|a| match a {
            TransportAddr::Relay(url) => Some(url.to_string()),
            _ => None,
        })
        .unwrap_or_default();
    page.event(
        "ready",
        &[
            format!("\"id\":\"{}\"", endpoint.id()),
            format!("\"relay\":\"{relay_url}\""),
        ],
    )
    .await;

    // Establish the session over the relay.
    let conn: Connection = if role == "host" {
        let incoming = endpoint.accept().await.expect("accept");
        let conn = incoming.await.expect("incoming handshake");
        // One session only: turn later arrivals away.
        let busy = endpoint.clone();
        tokio::spawn(async move {
            while let Some(incoming) = busy.accept().await {
                if let Ok(conn) = incoming.await {
                    conn.close(1u32.into(), b"session full");
                }
            }
        });
        conn
    } else {
        let peer: EndpointId = env_var("PEER")
            .expect("PEER required to join")
            .parse()
            .expect("parse PEER");
        let peer_relay: RelayUrl = env_var("PEER_RELAY")
            .expect("PEER_RELAY required to join")
            .parse()
            .expect("parse PEER_RELAY");
        let addr = EndpointAddr::from_parts(peer, [TransportAddr::Relay(peer_relay)]);
        endpoint.connect(addr, ALPN).await.expect("connect")
    };

    let remote = conn.remote_id();
    page.event("connected", &[format!("\"peer\":\"{remote}\"")])
        .await;

    // The joiner opens the ferry stream; the host accepts it. An empty
    // frame makes the fresh stream visible to the acceptor — QUIC streams
    // do not exist on the remote until bytes flow.
    let (mut stream_send, mut stream_recv) = if role == "host" {
        conn.accept_bi().await.expect("accept_bi")
    } else {
        let (mut send, recv) = conn.open_bi().await.expect("open_bi");
        send.write_all(&0u16.to_be_bytes())
            .await
            .expect("stream hello");
        (send, recv)
    };

    // Overlay readiness (the page bridge reports the channel open) gates
    // handing iroh the synthetic address; iroh does the rest in-band.
    {
        let endpoint = endpoint.clone();
        let page = page.clone();
        tokio::spawn(async move {
            overlay.ready().await;
            endpoint.add_external_addr(overlay.external_addr).await;
            page.event("overlay", &[format!("\"state\":\"added\"")]).await;
        });
    }

    // Peer -> page: length-framed stream to raw datagrams.
    let reader = {
        let page = page.clone();
        tokio::spawn(async move {
            let mut len = [0u8; 2];
            let mut buf = vec![0u8; MAX_FRAME];
            loop {
                if stream_recv.read_exact(&mut len).await.is_err() {
                    break;
                }
                let n = u16::from_be_bytes(len) as usize;
                if n > MAX_FRAME || stream_recv.read_exact(&mut buf[..n]).await.is_err() {
                    break;
                }
                page.send_raw(&buf[..n]).await;
            }
        })
    };

    // Path watcher: report the selected path whenever it changes.
    {
        let conn = conn.clone();
        let page = page.clone();
        tokio::spawn(async move {
            let mut last = ("", 0u64);
            loop {
                let (path, rtt) = selected_path(&conn);
                if path != last.0 || rtt.abs_diff(last.1) > 500 {
                    last = (path, rtt);
                    page.event(
                        "path",
                        &[
                            format!("\"path\":\"{path}\""),
                            format!("\"rtt_us\":{rtt}"),
                        ],
                    )
                    .await;
                }
                tokio::time::sleep(Duration::from_millis(500)).await;
            }
        });
    }

    // Page -> peer: raw datagrams to length-framed stream, until the
    // connection or the reader ends.
    let mut buf = vec![0u8; MAX_FRAME];
    loop {
        tokio::select! {
            n = page.recv(&mut buf) => {
                let frame = &buf[..n];
                if stream_send.write_all(&(n as u16).to_be_bytes()).await.is_err()
                    || stream_send.write_all(frame).await.is_err()
                {
                    break;
                }
            }
            _ = conn.closed() => break,
        }
    }

    reader.abort();
    page.event("closed", &[]).await;
    endpoint.close().await;
}
