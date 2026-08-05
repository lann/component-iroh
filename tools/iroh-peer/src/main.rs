//! A native upstream-iroh peer for the interop gate: one echo exchange
//! with this repository's endpoint over direct UDP on loopback, relays
//! and discovery disabled.
//!
//! Speaks the endpoint demo's conventions: `endpoint-id <hex>` and
//! `direct-addr <ip:port>` on stdout after binding, the `iroh-demo/0`
//! ALPN, one bidirectional stream per run, an `OK: <role> finished.`
//! line on success. The server echoes verbatim; the client asserts the
//! endpoint-demo server's uppercasing transform.

use std::net::SocketAddr;

use anyhow::{anyhow, bail, Context, Result};
use iroh::endpoint::presets;
use iroh::{Endpoint, EndpointAddr, EndpointId};

/// The ALPN the endpoint demo speaks.
const ALPN: &[u8] = b"iroh-demo/0";

enum Role {
    Client,
    Server,
}

struct Cli {
    role: Role,
    peer: Option<String>,
    direct: Option<String>,
    message: String,
}

fn usage() -> anyhow::Error {
    anyhow!(
        "usage: iroh-peer --role <client|server> \
         [--direct <ip:port>] [--message M] [--peer <endpoint-id-hex>]"
    )
}

fn parse_args() -> Result<Cli> {
    let mut args = std::env::args().skip(1);
    let mut role = None;
    let mut peer = None;
    let mut direct = None;
    let mut message = "hello from upstream iroh".to_string();
    while let Some(flag) = args.next() {
        let mut value = || args.next().ok_or_else(usage);
        match flag.as_str() {
            "--role" => {
                role = Some(match value()?.as_str() {
                    "client" => Role::Client,
                    "server" => Role::Server,
                    _ => return Err(usage()),
                })
            }
            "--peer" => peer = Some(value()?),
            "--direct" => direct = Some(value()?),
            "--message" => message = value()?,
            _ => return Err(usage()),
        }
    }
    Ok(Cli {
        role: role.ok_or_else(usage)?,
        peer,
        direct,
        message,
    })
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = parse_args()?;

    // Loopback only, no relays, no discovery (Minimal = the mandatory
    // crypto provider and nothing else): the endpoint's address facts
    // are the bound socket and nothing else.
    let endpoint = Endpoint::builder(presets::Minimal)
        .alpns(vec![ALPN.to_vec()])
        .clear_ip_transports()
        .bind_addr("127.0.0.1:0")?
        .bind()
        .await?;

    println!("endpoint-id {}", hex::encode(endpoint.id().as_bytes()));
    let direct_addr = endpoint
        .bound_sockets()
        .first()
        .copied()
        .context("no bound socket")?;
    println!("direct-addr {direct_addr}");

    match cli.role {
        Role::Server => run_server(&endpoint).await?,
        Role::Client => run_client(&endpoint, &cli).await?,
    }
    endpoint.close().await;
    Ok(())
}

/// Serve one connection: echo the first bidirectional stream verbatim,
/// then wait for the client's close.
async fn run_server(endpoint: &Endpoint) -> Result<()> {
    let incoming = endpoint.accept().await.context("endpoint closed")?;
    let conn = incoming.await?;
    println!("accepted {}", hex::encode(conn.remote_id().as_bytes()));
    let (mut send, mut recv) = conn.accept_bi().await?;
    let echoed = tokio::io::copy(&mut recv, &mut send).await?;
    send.finish()?;
    println!("echoed {echoed} bytes");
    conn.closed().await;
    println!("OK: server finished.");
    Ok(())
}

/// Dial `--direct`, send the message, and assert the uppercased echo.
async fn run_client(endpoint: &Endpoint, cli: &Cli) -> Result<()> {
    let peer_hex = cli.peer.as_ref().ok_or_else(usage)?;
    let peer_bytes: [u8; 32] = hex::decode(peer_hex)?
        .try_into()
        .map_err(|_| anyhow!("endpoint id is not 32 bytes"))?;
    let peer = EndpointId::from_bytes(&peer_bytes)?;
    let direct: SocketAddr = cli.direct.as_ref().ok_or_else(usage)?.parse()?;

    let conn = endpoint
        .connect(EndpointAddr::new(peer).with_ip_addr(direct), ALPN)
        .await?;
    let (mut send, mut recv) = conn.open_bi().await?;
    send.write_all(cli.message.as_bytes()).await?;
    send.finish()?;
    let echoed = recv.read_to_end(64 * 1024).await?;
    let text = String::from_utf8_lossy(&echoed).into_owned();
    println!("received {text:?}");
    if text != cli.message.to_uppercase() {
        bail!("echo mismatch: sent {:?}, got {text:?}", cli.message);
    }
    conn.close(0u32.into(), b"done");
    println!("OK: client finished.");
    Ok(())
}
