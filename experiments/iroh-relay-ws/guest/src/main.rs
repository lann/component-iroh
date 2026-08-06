//! Spike guest: two upstream-iroh endpoints in one wasip2 component, relay
//! connectivity only. The relay websocket lives host-side (the
//! polymorph-websocket host module); iroh-relay's wasi patch carries it as
//! datagrams on a synthetic UDP socket, so the unmodified tokio reactor
//! parks and wakes exactly as in the udp-wake probes.
//!
//! Endpoint B dials endpoint A by (EndpointId, relay URL), then runs ECHOES
//! request/response rounds on one bi stream, measuring in-guest RTT
//! through relay-server forwarding. QUIC (noq + rustls/ring) runs
//! end-to-end in-guest; the relay never holds connection keys.

use std::time::{Duration, Instant};

use iroh::{Endpoint, EndpointAddr, RelayMode, RelayUrl, endpoint::presets};
use n0_watcher::Watcher;

const ALPN: &[u8] = b"/iroh-relay-ws-spike/echo/1";
const ECHOES: u32 = 50;
const PAYLOAD: usize = 512;

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
    Endpoint::builder(presets::Minimal)
        .relay_mode(RelayMode::custom([relay_url]))
        .clear_ip_transports()
        .clear_address_lookup()
        .alpns(alpns)
        .bind()
        .await
        .expect("bind endpoint")
}

async fn run() {
    let relay_url: RelayUrl = "http://127.0.0.1:3340".parse().expect("relay url");
    println!("guest: start relay={relay_url}");

    let a = bind_endpoint(relay_url.clone(), vec![ALPN.to_vec()]).await;
    let b = bind_endpoint(relay_url.clone(), vec![]).await;
    println!("guest: a={} b={}", a.id(), b.id());

    // Both endpoints hold a home-relay connection before dialing.
    a.online().await;
    println!("guest: a online (home relay up)");
    b.online().await;
    println!("guest: b online (home relay up)");

    // A: accept one connection, echo everything on its bi stream.
    let a2 = a.clone();
    let server = tokio::spawn(async move {
        let incoming = a2.accept().await.expect("accept incoming");
        let conn = incoming.await.expect("incoming handshake");
        println!("guest: a accepted from {}", conn.remote_id());
        let (mut send, mut recv) = conn.accept_bi().await.expect("accept_bi");
        let mut buf = vec![0u8; PAYLOAD];
        for _ in 0..ECHOES {
            recv.read_exact(&mut buf).await.expect("server read");
            send.write_all(&buf).await.expect("server write");
        }
        send.finish().expect("finish");
        conn.closed().await;
    });

    // B: dial A through the relay.
    let addr = EndpointAddr::new(a.id()).with_relay_url(relay_url);
    let t_dial = Instant::now();
    let conn = b.connect(addr, ALPN).await.expect("connect via relay");
    println!(
        "guest: b connected to a in {}ms (path: relay)",
        t_dial.elapsed().as_millis()
    );

    let (mut send, mut recv) = conn.open_bi().await.expect("open_bi");
    let payload = vec![0xA5u8; PAYLOAD];
    let mut back = vec![0u8; PAYLOAD];
    let mut rtts = Vec::with_capacity(ECHOES as usize);
    for i in 0..ECHOES {
        let t = Instant::now();
        send.write_all(&payload).await.expect("client write");
        recv.read_exact(&mut back).await.expect("client read");
        rtts.push(t.elapsed());
        if i == 0 {
            println!("guest: first echo rtt {}us", rtts[0].as_micros());
        }
    }
    send.finish().expect("client finish");
    conn.close(0u32.into(), b"done");
    server.await.expect("server task");

    rtts.sort();
    let p = |q: f64| rtts[((rtts.len() - 1) as f64 * q) as usize];
    println!(
        "guest: echo rtt over relay: p50={}us p90={}us max={}us ({} rounds, {} byte payload)",
        p(0.5).as_micros(),
        p(0.9).as_micros(),
        rtts[rtts.len() - 1].as_micros(),
        ECHOES,
        PAYLOAD
    );

    a.close().await;
    b.close().await;
    // Leave a beat for closes to flush through the relay.
    tokio::time::sleep(Duration::from_millis(50)).await;
    println!("guest: done");
}
