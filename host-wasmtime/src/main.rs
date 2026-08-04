//! `iroh-spike-host`: runs one peer of the QUIC-over-data-channel demo under
//! Wasmtime.
//!
//! It loads the `iroh-spike` component (one role of a demo run) and
//! provisions its imports:
//!
//!   * `wasi:*@0.2` via `wasmtime_wasi::p2` (the guest's Rust `std` lowers to
//!     these) and `wasi:clocks@0.3` via `wasmtime_wasi::p3` (the guest's
//!     endpoint timer),
//!   * the `connections`/`types` surface via [`wasmtime_webrtc_datachannels`]
//!     (a real `webrtc-rs` peer connection),
//!   * the `lann:webcrypto` surface via [`lann_webcrypto_wasmtime`]
//!     (RustCrypto), and
//!   * the demo `rendezvous` signaling mailbox, implemented natively here
//!     with an HTTP client speaking `conformance-signalingd`'s protocol.
//!
//! Run two instances — a client and a server — pointed at the same room on
//! the same signaling server:
//!
//! ```sh
//! conformance-signalingd --host 127.0.0.1 --port 8080 &
//! iroh-spike-host <component.wasm> --role server --server http://127.0.0.1:8080 --room demo &
//! iroh-spike-host <component.wasm> --role client --server http://127.0.0.1:8080 --room demo
//! ```

use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;

use lann_webcrypto_wasmtime::{WasiWebcryptoCtx, WasiWebcryptoCtxView, WasiWebcryptoView};
use wasmtime::component::{Accessor, Component, HasData, Linker, Resource, ResourceTable};
use wasmtime::{Config, Engine, Result, Store};
use wasmtime_wasi::{WasiCtx, WasiCtxView, WasiView};
use wasmtime_webrtc_datachannels::{
    self as webrtc_host, WasiWebrtcCtx, WasiWebrtcCtxView, WasiWebrtcView,
};

mod bindings {
    wasmtime::component::bindgen!({
        path: "../wit",
        world: "iroh-spike",
        imports: {
            default: async | store | trappable,
        },
        exports: {
            default: async,
        },
        with: {
            "lann:webrtc-datachannels/connections.data-channel-options":
                wasmtime_webrtc_datachannels::DataChannelOptions,
            "lann:webrtc-datachannels/connections.peer-connection-config":
                wasmtime_webrtc_datachannels::PeerConnectionConfig,
            "lann:webrtc-datachannels/connections.data-channel":
                wasmtime_webrtc_datachannels::DataChannel,
            "lann:webrtc-datachannels/connections.peer-connection":
                wasmtime_webrtc_datachannels::PeerConnection,
            "lann:iroh-spike/rendezvous.session": crate::RendezvousSession,
        },
    });
}

use bindings::exports::lann::iroh_spike::demo::{Role as DemoRole, RunConfig};
use bindings::lann::iroh_spike::rendezvous::{self, Role as RendezvousRole};
use bindings::lann::webrtc_datachannels::types::Error;

struct Ctx {
    wasi: WasiCtx,
    webrtc: WasiWebrtcCtx,
    webcrypto: WasiWebcryptoCtx,
    table: ResourceTable,
}

impl HasData for Ctx {
    type Data<'a> = &'a mut Self;
}

impl WasiView for Ctx {
    fn ctx(&mut self) -> WasiCtxView<'_> {
        WasiCtxView {
            ctx: &mut self.wasi,
            table: &mut self.table,
        }
    }
}

impl WasiWebrtcView for Ctx {
    fn webrtc(&mut self) -> WasiWebrtcCtxView<'_> {
        WasiWebrtcCtxView {
            ctx: &mut self.webrtc,
            table: &mut self.table,
        }
    }
}

impl WasiWebcryptoView for Ctx {
    fn webcrypto(&mut self) -> WasiWebcryptoCtxView<'_> {
        WasiWebcryptoCtxView {
            ctx: &mut self.webcrypto,
            table: &mut self.table,
        }
    }
}

/// The component model with component-model async enabled (the guest's
/// imports and its `run` export use the async ABI).
fn engine() -> Result<Engine> {
    let mut config = Config::new();
    config.wasm_component_model(true);
    config.wasm_component_model_async(true);
    Engine::new(&config)
}

/// The WebRTC context, honoring the demo hosts' `WEBRTC_INCLUDE_LOOPBACK`
/// convention (same-host peers need loopback ICE candidates to pair).
fn webrtc_ctx() -> WasiWebrtcCtx {
    let mut ctx = WasiWebrtcCtx::new();
    if std::env::var_os("WEBRTC_INCLUDE_LOOPBACK").is_some() {
        ctx.set_setting_engine_hook(|engine| {
            engine.set_include_loopback_candidate(true);
        });
    }
    ctx
}

// --- native rendezvous host ---------------------------------------------------

/// A joined rendezvous session: an HTTP client bound to one `{room}` and
/// `{role}` on the signaling server. `Arc`-backed so a handle can be cloned
/// out of the resource table and its async methods driven without holding
/// the store borrow across `.await`.
#[derive(Clone)]
pub struct RendezvousSession {
    client: reqwest::Client,
    base: String,
    room: String,
    role: RendezvousRole,
    /// The next sequence number to fetch from the peer's mailbox.
    recv_seq: Arc<AtomicUsize>,
}

impl RendezvousSession {
    /// This session's own role path segment.
    fn own_role(&self) -> &'static str {
        match self.role {
            RendezvousRole::Offerer => "offerer",
            RendezvousRole::Answerer => "answerer",
        }
    }

    /// The peer's role path segment (the mailbox this session consumes).
    fn peer_role(&self) -> &'static str {
        match self.role {
            RendezvousRole::Offerer => "answerer",
            RendezvousRole::Answerer => "offerer",
        }
    }
}

/// Map any host-side rendezvous failure to the guest-visible `error.other`.
fn rendezvous_error(detail: impl std::fmt::Display) -> Error {
    Error::Other(format!("rendezvous: {detail}"))
}

impl rendezvous::Host for Ctx {}

impl rendezvous::HostSession for Ctx {}

impl rendezvous::HostSessionWithStore<Ctx> for Ctx {
    async fn open(
        accessor: &Accessor<Ctx, Ctx>,
        server: String,
        room: String,
        as_role: RendezvousRole,
    ) -> wasmtime::Result<std::result::Result<Resource<RendezvousSession>, Error>> {
        let session = RendezvousSession {
            client: reqwest::Client::new(),
            base: server.trim_end_matches('/').to_string(),
            room,
            role: as_role,
            recv_seq: Arc::new(AtomicUsize::new(0)),
        };
        accessor.with(|mut access| {
            let resource = access.get().table.push(session)?;
            Ok(Ok(resource))
        })
    }

    async fn send(
        accessor: &Accessor<Ctx, Ctx>,
        self_: Resource<RendezvousSession>,
        blob: Vec<u8>,
    ) -> wasmtime::Result<std::result::Result<(), Error>> {
        let session = accessor
            .with(|mut access| Ok::<_, wasmtime::Error>(access.get().table.get(&self_)?.clone()))?;
        let url = format!(
            "{}/rooms/{}/{}",
            session.base,
            session.room,
            session.own_role()
        );
        Ok(match session.client.post(&url).body(blob).send().await {
            Ok(resp) if resp.status().is_success() => Ok(()),
            Ok(resp) => Err(rendezvous_error(format!(
                "publish status {}",
                resp.status()
            ))),
            Err(err) => Err(rendezvous_error(err)),
        })
    }

    async fn recv(
        accessor: &Accessor<Ctx, Ctx>,
        self_: Resource<RendezvousSession>,
    ) -> wasmtime::Result<std::result::Result<Option<Vec<u8>>, Error>> {
        let session = accessor
            .with(|mut access| Ok::<_, wasmtime::Error>(access.get().table.get(&self_)?.clone()))?;
        Ok(fetch_next(&session).await)
    }

    async fn done(
        accessor: &Accessor<Ctx, Ctx>,
        self_: Resource<RendezvousSession>,
    ) -> wasmtime::Result<std::result::Result<(), Error>> {
        let session = accessor
            .with(|mut access| Ok::<_, wasmtime::Error>(access.get().table.get(&self_)?.clone()))?;
        let url = format!(
            "{}/rooms/{}/{}/done",
            session.base,
            session.room,
            session.own_role()
        );
        Ok(match session.client.post(&url).send().await {
            Ok(resp) if resp.status().is_success() => Ok(()),
            Ok(resp) => Err(rendezvous_error(format!("done status {}", resp.status()))),
            Err(err) => Err(rendezvous_error(err)),
        })
    }

    async fn drop(
        accessor: &Accessor<Ctx, Ctx>,
        rep: Resource<RendezvousSession>,
    ) -> wasmtime::Result<()> {
        accessor.with(|mut access| {
            access.get().table.delete(rep)?;
            Ok(())
        })
    }
}

/// Fetch the next blob from the peer's mailbox, long-polling and retrying
/// `304` until a blob arrives (`some`) or the peer marks its mailbox done
/// (`none`).
async fn fetch_next(session: &RendezvousSession) -> std::result::Result<Option<Vec<u8>>, Error> {
    loop {
        let seq = session.recv_seq.load(Ordering::SeqCst);
        let url = format!(
            "{}/rooms/{}/{}?seq={}&wait=10000",
            session.base,
            session.room,
            session.peer_role(),
            seq
        );
        let resp = session
            .client
            .get(&url)
            .send()
            .await
            .map_err(rendezvous_error)?;
        match resp.status().as_u16() {
            // A blob is available: advance our read cursor and return it.
            200 => {
                let bytes = resp.bytes().await.map_err(rendezvous_error)?.to_vec();
                session.recv_seq.store(seq + 1, Ordering::SeqCst);
                return Ok(Some(bytes));
            }
            // The peer marked its mailbox done at or before this seq.
            204 => return Ok(None),
            // Not yet available; retry the same seq.
            304 => continue,
            other => return Err(rendezvous_error(format!("fetch status {other}"))),
        }
    }
}

// --- host entry point ----------------------------------------------------------

struct Cli {
    component: String,
    role: DemoRole,
    server: String,
    room: String,
    message: String,
}

fn usage() -> wasmtime::Error {
    wasmtime::Error::msg(
        "usage: iroh-spike-host <component.wasm> --role <client|server> \
         --server <base-url> --room <room> [--message M]",
    )
}

fn parse_args() -> Result<Cli> {
    let mut args = std::env::args().skip(1);
    let component = args.next().ok_or_else(usage)?;
    let mut role = None;
    let mut server = None;
    let mut room = None;
    let mut message = "hello over QUIC over a data channel".to_string();
    while let Some(flag) = args.next() {
        let mut value = || args.next().ok_or_else(usage);
        match flag.as_str() {
            "--role" => {
                role = Some(match value()?.as_str() {
                    "client" => DemoRole::Client,
                    "server" => DemoRole::Server,
                    _ => return Err(usage()),
                })
            }
            "--server" => server = Some(value()?),
            "--room" => room = Some(value()?),
            "--message" => message = value()?,
            _ => return Err(usage()),
        }
    }
    Ok(Cli {
        component,
        role: role.ok_or_else(usage)?,
        server: server.ok_or_else(usage)?,
        room: room.ok_or_else(usage)?,
        message,
    })
}

#[tokio::main]
async fn main() -> Result<()> {
    let _ = env_logger::try_init();
    let cli = parse_args()?;

    let engine = engine()?;
    let component = Component::from_file(&engine, &cli.component)?;
    let mut linker: Linker<Ctx> = Linker::new(&engine);
    wasmtime_wasi::p2::add_to_linker_async(&mut linker)?;
    // Serves the guest's `wasi:clocks@0.3` timer alongside the p3 surface.
    wasmtime_wasi::p3::add_to_linker(&mut linker)?;
    webrtc_host::add_to_linker(&mut linker)?;
    lann_webcrypto_wasmtime::add_to_linker(&mut linker)?;
    rendezvous::add_to_linker::<Ctx, Ctx>(&mut linker, |c| c)?;

    let mut wasi = WasiCtx::builder();
    wasi.inherit_stdio().inherit_env();
    let mut store = Store::new(
        &engine,
        Ctx {
            wasi: wasi.build(),
            webrtc: webrtc_ctx(),
            webcrypto: WasiWebcryptoCtx::new(),
            table: ResourceTable::new(),
        },
    );
    let demo = bindings::IrohSpike::instantiate_async(&mut store, &component, &linker).await?;

    let role = cli.role;
    let config = RunConfig {
        server: cli.server,
        room: cli.room,
        role,
        message: cli.message,
    };
    let report = store
        .run_concurrent(async move |accessor: &Accessor<Ctx>| {
            demo.lann_iroh_spike_demo().call_run(accessor, config).await
        })
        .await??;

    match report {
        Ok(report) => {
            let role = match role {
                DemoRole::Client => "client",
                DemoRole::Server => "server",
            };
            println!(
                "iroh-spike ({role}): endpoint={} peer={} handshake_ms={} roundtrip_ms={} received={:?}",
                report.endpoint_id,
                report.peer_id,
                report.handshake_ms,
                report.roundtrip_ms,
                report.received
            );
            println!("OK: {role} finished.");
        }
        Err(err) => {
            return Err(wasmtime::Error::msg(format!(
                "iroh-spike returned error: {err}"
            )))
        }
    }
    Ok(())
}
