//! Spike guest: two upstream-iroh endpoints in one wasip2 component —
//! relay connectivity plus WebRTC data channels as a `CustomTransport`.
//!
//! B dials A relay-only and measures echo RTT (phase 1). The upgrade to
//! the data channel is a reconnect: B closes the relay connection and
//! later dials again with only A's webrtc custom addr, learned out of
//! band (in the real design: from signaling). Phase 2 measures echo RTT
//! over the data channel.
//!
//! Upstream findings this shape works around (all verified against the
//! vendored iroh):
//!
//! - No mid-connection upgrade path exists for custom transport addrs:
//!   they are excluded from the NAT-traversal candidate exchange
//!   (SocketAddr-typed end to end), address lookup is bootstrap-only,
//!   and `insert_multiple` never schedules path opens.
//! - Once a path is selected for a remote, Initials for later dials go
//!   only to the selected path — a second `connect` cannot probe new
//!   addrs while any connection to that remote lives.
//! - A fresh dial fans the Initial out to every path iroh remembers for
//!   the remote, and the race is winner-take-all: the server drops the
//!   same-DCID Initial arriving on a second path during the handshake
//!   and the losing path is never revisited. A local relay outruns the
//!   data channel, so the webrtc addr only carries the handshake once
//!   iroh's per-remote path memory (60s idle) has expired and the dial
//!   is custom-only.

mod webrtc_transport;

use std::time::{Duration, Instant};

use iroh::{
    Endpoint, EndpointAddr, RelayMode, RelayUrl, SecretKey, TransportAddr,
    endpoint::{Connection, presets},
};

use webrtc_transport::{WebrtcTransport, to_custom_addr};

const ALPN: &[u8] = b"/iroh-relay-ws-spike/echo/1";
const ECHOES: u32 = 50;
const PAYLOAD: usize = 512;
const SELECT_TIMEOUT: Duration = Duration::from_secs(3);

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
    println!("guest: exit");
}

async fn bind_endpoint(relay_url: RelayUrl, alpns: Vec<Vec<u8>>) -> Endpoint {
    let secret_key = SecretKey::generate();
    Endpoint::builder(presets::Minimal)
        .secret_key(secret_key.clone())
        .add_custom_transport(WebrtcTransport::new(secret_key.public()))
        .relay_mode(RelayMode::custom([relay_url]))
        .clear_ip_transports()
        .clear_address_lookup()
        .alpns(alpns)
        .bind()
        .await
        .expect("bind endpoint")
}

fn selected_path(conn: &Connection) -> &'static str {
    let paths = conn.paths();
    let Some(p) = paths.iter().find(|p| p.is_selected()) else {
        return "none";
    };
    match p.remote_addr() {
        TransportAddr::Custom(a) if a.id() == webrtc_transport::WEBRTC_TRANSPORT_ID => "webrtc",
        TransportAddr::Custom(_) => "custom",
        TransportAddr::Relay(_) => "relay",
        TransportAddr::Ip(_) => "ip",
        _ => "unknown",
    }
}

fn print_paths(conn: &Connection, label: &str) {
    for p in conn.paths().iter() {
        println!(
            "guest: path [{label}] {} selected={} rtt={:?}",
            p.remote_addr(),
            p.is_selected(),
            p.rtt()
        );
    }
}

async fn echo_phase(
    conn: &Connection,
    send: &mut iroh::endpoint::SendStream,
    recv: &mut iroh::endpoint::RecvStream,
    label: &str,
) {
    let payload = vec![0xA5u8; PAYLOAD];
    let mut back = vec![0u8; PAYLOAD];
    let mut rtts = Vec::with_capacity(ECHOES as usize);
    for _ in 0..ECHOES {
        let t = Instant::now();
        send.write_all(&payload).await.expect("client write");
        recv.read_exact(&mut back).await.expect("client read");
        rtts.push(t.elapsed());
    }
    rtts.sort();
    let p = |q: f64| rtts[((rtts.len() - 1) as f64 * q) as usize];
    println!(
        "guest: echo rtt [{label}] path={}: p50={}us p90={}us max={}us ({} rounds, {} byte payload)",
        selected_path(conn),
        p(0.5).as_micros(),
        p(0.9).as_micros(),
        rtts[rtts.len() - 1].as_micros(),
        ECHOES,
        PAYLOAD
    );
}

async fn run() {
    let relay_url: RelayUrl = "http://127.0.0.1:3340".parse().expect("relay url");
    println!("guest: start relay={relay_url}");

    let a = bind_endpoint(relay_url.clone(), vec![ALPN.to_vec()]).await;
    let b = bind_endpoint(relay_url.clone(), vec![]).await;
    println!("guest: a={} b={}", a.id(), b.id());

    a.online().await;
    b.online().await;
    println!("guest: both online (home relay up)");

    // A: accept one connection per phase, echoing one bi stream each.
    let a2 = a.clone();
    let server = tokio::spawn(async move {
        for phase in 1..=2 {
            let incoming = a2.accept().await.expect("accept incoming");
            let conn = incoming.await.expect("incoming handshake");
            println!("guest: a accepted conn {phase} from {}", conn.remote_id());
            let (mut send, mut recv) = conn.accept_bi().await.expect("accept_bi");
            let mut buf = vec![0u8; PAYLOAD];
            for _ in 0..ECHOES {
                recv.read_exact(&mut buf).await.expect("server read");
                send.write_all(&buf).await.expect("server write");
            }
            send.finish().expect("finish");
            conn.closed().await;
        }
    });

    // Phase 1: relay-only dial; the webrtc addr is not yet known.
    let addr = EndpointAddr::from_parts(a.id(), [TransportAddr::Relay(relay_url)]);
    let t_dial = Instant::now();
    let conn = b.connect(addr, ALPN).await.expect("connect");
    println!(
        "guest: b connected to a in {}ms (path: {})",
        t_dial.elapsed().as_millis(),
        selected_path(&conn)
    );
    let (mut send, mut recv) = conn.open_bi().await.expect("open_bi");
    echo_phase(&conn, &mut send, &mut recv, "phase 1").await;
    send.finish().expect("client finish");

    // The upgrade is a reconnect (see module docs). The wait covers
    // ACTOR_MAX_IDLE_TIMEOUT (60s): while iroh's per-remote actor lives it
    // remembers the relay path, the redial fans out to it, and the relay
    // wins the winner-take-all Initial race against the data channel. The
    // actor only idles once nothing references the old connection, so drop
    // everything first.
    let t_gap = Instant::now();
    conn.close(0u32.into(), b"phase 1 done");
    drop((send, recv, conn));
    println!("guest: waiting 62s for iroh's per-remote path memory to expire");
    tokio::time::sleep(Duration::from_secs(62)).await;

    let upgrade_addr =
        EndpointAddr::from_parts(a.id(), [TransportAddr::Custom(to_custom_addr(a.id()))]);
    let conn2 = b.connect(upgrade_addr, ALPN).await.expect("upgrade connect");
    println!(
        "guest: b reconnected with webrtc addr in {}ms gap (path: {})",
        t_gap.elapsed().as_millis(),
        selected_path(&conn2)
    );

    // Evidence that the custom path carries the connection from the first
    // moment (it is the only path the fresh dial knows).
    let t_select = Instant::now();
    loop {
        if selected_path(&conn2) == "webrtc" {
            println!(
                "guest: webrtc selected {}ms after reconnect",
                t_select.elapsed().as_millis()
            );
            break;
        }
        if t_select.elapsed() > SELECT_TIMEOUT {
            println!(
                "guest: WARNING webrtc not selected within {SELECT_TIMEOUT:?} (selected: {})",
                selected_path(&conn2)
            );
            break;
        }
        tokio::time::sleep(Duration::from_millis(50)).await;
    }
    print_paths(&conn2, "post-reconnect");

    // Phase 2: on the reconnected path.
    let (mut send2, mut recv2) = conn2.open_bi().await.expect("open_bi phase 2");
    echo_phase(&conn2, &mut send2, &mut recv2, "phase 2").await;
    send2.finish().expect("client finish phase 2");

    conn2.close(0u32.into(), b"done");
    server.await.expect("server task");

    a.close().await;
    b.close().await;
    tokio::time::sleep(Duration::from_millis(50)).await;
    println!("guest: done");
}
