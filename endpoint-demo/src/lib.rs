//! The endpoint demo: a plain consumer of `lann:iroh/endpoint`, composed
//! with the endpoint component via `wac plug`. It exercises the surface
//! exactly the way an application protocol would: bind, connect or accept
//! by endpoint ID, one bidirectional stream, one echo each way.

use std::io::Write;
use std::time::Instant;

mod bindings {
    wit_bindgen::generate!({
        path: "wit",
        world: "iroh-demo",
        generate_all,
    });
}

use bindings::exports::lann::iroh_demo::demo::{Guest, Role, RunConfig, RunReport};
use bindings::lann::iroh::endpoint::{Connection, Endpoint, EndpointOptions};
use bindings::lann::iroh::types::{EndpointAddr, Error, PathKind, TransportAddr};
use bindings::wasi::clocks::monotonic_clock;

/// The demo's ALPN protocol.
const ALPN: &[u8] = b"iroh-demo/0";

/// Cap on one read call; the demo's payloads are tiny.
const READ_MAX: u32 = 16 * 1024;

/// Polling quantum and bound while waiting for the WebRTC upgrade.
const UPGRADE_POLL_NS: u64 = 5_000_000;
const UPGRADE_DEADLINE_POLLS: u32 = 30_000 / 5;

struct Component;

impl Guest for Component {
    async fn run(config: RunConfig) -> Result<RunReport, String> {
        let endpoint = Endpoint::bind(EndpointOptions {
            alpns: vec![ALPN.to_vec()],
            relay_url: Some(config.relay_url.clone()),
            udp_bind_addr: config.udp_bind.clone(),
            webrtc: config.webrtc,
        })
        .await
        .map_err(fail("bind"))?;

        // The driver hands this ID to the peer process.
        println!("endpoint-id {}", hex::encode(endpoint.id()));
        // And this address to a peer that should dial direct.
        if let Some(addr) = endpoint.direct_addr() {
            println!("direct-addr {addr}");
        }
        let _ = std::io::stdout().flush();

        let report = match config.role {
            Role::Client => run_client(&endpoint, &config).await?,
            Role::Server => run_server(&endpoint).await?,
        };

        endpoint.close();
        Ok(RunReport {
            endpoint_id: hex::encode(endpoint.id()),
            ..report
        })
    }
}

async fn run_client(endpoint: &Endpoint, config: &RunConfig) -> Result<RunReport, String> {
    let peer_hex = config
        .peer
        .as_ref()
        .ok_or("the client role requires the server's endpoint id (peer)")?;
    let peer = hex::decode(peer_hex).map_err(|e| format!("bad endpoint id: {e}"))?;

    let alpn = config
        .alpn
        .as_ref()
        .map(|a| a.as_bytes().to_vec())
        .unwrap_or_else(|| ALPN.to_vec());
    let peer_relay = config
        .peer_relay
        .clone()
        .unwrap_or_else(|| config.relay_url.clone());
    let mut addrs = Vec::new();
    if let Some(direct) = &config.direct {
        addrs.push(TransportAddr::Ip(direct.clone()));
    }
    if config.webrtc {
        addrs.push(TransportAddr::Webrtc(peer_relay.clone()));
    }
    addrs.push(TransportAddr::Relay(peer_relay.clone()));
    let started = Instant::now();
    let conn = endpoint
        .connect(
            EndpointAddr {
                endpoint_id: peer.clone(),
                addrs,
            },
            alpn,
        )
        .await
        .map_err(fail("connect"))?;
    let handshake_ms = started.elapsed().as_millis() as u64;

    // The upgrade runs in the background; this demo exists to exercise
    // the wire it asked for, so wait for the flip before sending.
    if config.webrtc {
        let mut polls = 0;
        while conn.path() != PathKind::Webrtc {
            polls += 1;
            if polls > UPGRADE_DEADLINE_POLLS {
                return Err("webrtc upgrade did not complete".into());
            }
            monotonic_clock::wait_for(UPGRADE_POLL_NS).await;
        }
    }

    let (send, recv) = conn.open_bi().await.map_err(fail("open-bi"))?;
    let payload = match config.payload_bytes {
        Some(bytes) => vec![0u8; bytes as usize],
        None => config.message.clone().into_bytes(),
    };
    let payload_len = payload.len();
    let sent_at = Instant::now();
    send.write(payload).await.map_err(fail("write"))?;
    send.finish().map_err(fail("finish"))?;

    let mut echoed = Vec::new();
    while let Some(chunk) = recv.read(READ_MAX).await.map_err(fail("read"))? {
        echoed.extend_from_slice(&chunk);
    }
    let roundtrip_ms = sent_at.elapsed().as_millis() as u64;
    if echoed.len() != payload_len {
        return Err(format!(
            "echo length mismatch: sent {payload_len}, got {}",
            echoed.len()
        ));
    }
    let path = path_name(conn.path());

    conn.close(0, "done");
    conn.wait_closed().await;

    let received = match config.payload_bytes {
        Some(_) => format!("{} bytes", echoed.len()),
        None => String::from_utf8_lossy(&echoed).into_owned(),
    };
    Ok(RunReport {
        endpoint_id: String::new(),
        peer_id: hex::encode(conn.peer()),
        path,
        handshake_ms,
        roundtrip_ms,
        received,
    })
}

async fn run_server(endpoint: &Endpoint) -> Result<RunReport, String> {
    let conn = endpoint.accept().await.map_err(fail("accept"))?;
    let (send, recv) = conn.accept_bi().await.map_err(fail("accept-bi"))?;

    let mut inbound = Vec::new();
    while let Some(chunk) = recv.read(READ_MAX).await.map_err(fail("read"))? {
        inbound.extend_from_slice(&chunk);
    }

    // The uppercase transform is a small-message affordance; bulk
    // payloads echo verbatim and report a summary, not megabytes.
    const SUMMARY_LIMIT: usize = 4096;
    let (echo, received) = if inbound.len() <= SUMMARY_LIMIT {
        let text = String::from_utf8_lossy(&inbound).into_owned();
        (text.to_uppercase().into_bytes(), text)
    } else {
        let summary = format!("{} bytes", inbound.len());
        (inbound, summary)
    };
    send.write(echo).await.map_err(fail("write"))?;
    send.finish().map_err(fail("finish"))?;
    let path = path_name(conn.path());

    // The client closes once it has its echo; that close is the demo's
    // natural end on this side.
    conn.wait_closed().await;

    Ok(RunReport {
        endpoint_id: String::new(),
        peer_id: hex::encode(conn.peer()),
        path,
        handshake_ms: 0,
        roundtrip_ms: 0,
        received,
    })
}

fn path_name(path: PathKind) -> String {
    match path {
        PathKind::Relay => "relay",
        PathKind::Ip => "ip",
        PathKind::Webrtc => "webrtc",
    }
    .to_string()
}

fn fail(what: &'static str) -> impl Fn(Error) -> String {
    move |err| format!("{what}: {err:?}")
}

/// Silence the unused-import lint for the connection alias the bindings
/// export; the demo touches it only through method calls.
#[allow(unused)]
fn _use(c: &Connection) {}

bindings::export!(Component with_types_in bindings);
