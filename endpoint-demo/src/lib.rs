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
use bindings::lann::iroh::types::{EndpointAddr, Error, TransportAddr};

/// The demo's ALPN protocol.
const ALPN: &[u8] = b"iroh-demo/0";

/// Cap on one read call; the demo's payloads are tiny.
const READ_MAX: u32 = 16 * 1024;

struct Component;

impl Guest for Component {
    async fn run(config: RunConfig) -> Result<RunReport, String> {
        let endpoint = Endpoint::bind(EndpointOptions {
            alpns: vec![ALPN.to_vec()],
            relay_url: Some(config.relay_url.clone()),
            udp_bind_addr: config.udp_bind.clone(),
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
    let mut addrs = Vec::new();
    if let Some(direct) = &config.direct {
        addrs.push(TransportAddr::Ip(direct.clone()));
    }
    addrs.push(TransportAddr::Relay(config.relay_url.clone()));
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

    let (send, recv) = conn.open_bi().await.map_err(fail("open-bi"))?;
    let sent_at = Instant::now();
    send.write(config.message.clone().into_bytes())
        .await
        .map_err(fail("write"))?;
    send.finish().map_err(fail("finish"))?;

    let mut echoed = Vec::new();
    while let Some(chunk) = recv.read(READ_MAX).await.map_err(fail("read"))? {
        echoed.extend_from_slice(&chunk);
    }
    let roundtrip_ms = sent_at.elapsed().as_millis() as u64;

    conn.close(0, "done");
    conn.wait_closed().await;

    Ok(RunReport {
        endpoint_id: String::new(),
        peer_id: hex::encode(conn.peer()),
        handshake_ms,
        roundtrip_ms,
        received: String::from_utf8_lossy(&echoed).into_owned(),
    })
}

async fn run_server(endpoint: &Endpoint) -> Result<RunReport, String> {
    let conn = endpoint.accept().await.map_err(fail("accept"))?;
    let (send, recv) = conn.accept_bi().await.map_err(fail("accept-bi"))?;

    let mut inbound = Vec::new();
    while let Some(chunk) = recv.read(READ_MAX).await.map_err(fail("read"))? {
        inbound.extend_from_slice(&chunk);
    }
    let text = String::from_utf8_lossy(&inbound).into_owned();

    let echo = text.to_uppercase();
    send.write(echo.clone().into_bytes())
        .await
        .map_err(fail("write"))?;
    send.finish().map_err(fail("finish"))?;

    // The client closes once it has its echo; that close is the demo's
    // natural end on this side.
    conn.wait_closed().await;

    Ok(RunReport {
        endpoint_id: String::new(),
        peer_id: hex::encode(conn.peer()),
        handshake_ms: 0,
        roundtrip_ms: 0,
        received: text,
    })
}

fn fail(what: &'static str) -> impl Fn(Error) -> String {
    move |err| format!("{what}: {err:?}")
}

/// Silence the unused-import lint for the connection alias the bindings
/// export; the demo touches it only through method calls.
#[allow(unused)]
fn _use(c: &Connection) {}

bindings::export!(Component with_types_in bindings);
