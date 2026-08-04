//! `iroh-spike-relayd`: the spike's relay server.
//!
//! Two peers join a room — `ws://host:port/rooms/{room}/{a|b}` — and every
//! text or binary frame one sends is forwarded to the other, so the same
//! connection carries the demo's signaling (text) and, on the relay
//! transport, its QUIC datagrams (binary). Frames sent before the peer has
//! joined are buffered up to a bound; past it the oldest buffered frame is
//! dropped (the payloads are datagrams to QUIC, retryable JSON to
//! signaling — a bounded queue beats an unbounded one for both).
//!
//! This is a rendezvous relay for the spike, not iroh's relay protocol:
//! one shared server, room-scoped pairing, no per-peer authentication.
//! Relay protocol fidelity is tracked in issue #2.

use std::collections::HashMap;
use std::collections::VecDeque;
use std::net::SocketAddr;
use std::sync::{Arc, Mutex};

use anyhow::{bail, Context, Result};
use futures::{SinkExt, StreamExt};
use tokio::net::{TcpListener, TcpStream};
use tokio::sync::mpsc;
use tokio_tungstenite::tungstenite::handshake::server::{Request, Response};
use tokio_tungstenite::tungstenite::Message;

/// Frames buffered per direction while the destination peer is absent.
const MAX_QUEUED_FRAMES: usize = 1024;

/// The two slots of a room. The role only names the slot; the relay treats
/// both identically.
#[derive(Clone, Copy, PartialEq, Eq, Hash, Debug)]
enum Role {
    A,
    B,
}

impl Role {
    fn other(self) -> Role {
        match self {
            Role::A => Role::B,
            Role::B => Role::A,
        }
    }

    fn parse(s: &str) -> Option<Role> {
        match s {
            "a" => Some(Role::A),
            "b" => Some(Role::B),
            _ => None,
        }
    }
}

/// One direction's delivery state: a live peer's sender, or a bounded
/// queue holding frames until that peer joins.
enum Slot {
    Absent(VecDeque<Message>),
    Live(mpsc::UnboundedSender<Message>),
}

impl Default for Slot {
    fn default() -> Self {
        Slot::Absent(VecDeque::new())
    }
}

#[derive(Default)]
struct Room {
    /// Delivery slot per role: frames *destined for* that role.
    slots: HashMap<Role, Slot>,
    /// Roles that have joined at least once, for room teardown.
    joined: HashMap<Role, bool>,
    /// Live connections.
    live: usize,
}

type Registry = Arc<Mutex<HashMap<String, Room>>>;

/// Deliver `frame` to `to` in `room`: forward if the peer is live, buffer
/// (bounded, dropping the oldest) if not.
fn deliver(registry: &Registry, room: &str, to: Role, frame: Message) {
    let mut rooms = registry.lock().unwrap();
    let Some(room) = rooms.get_mut(room) else {
        return;
    };
    match room.slots.entry(to).or_default() {
        Slot::Live(tx) => {
            // A send failure means the reader saw the peer disconnect but
            // its slot is not yet cleared; the frame is dropped like any
            // frame to an absent peer past its buffer.
            let _ = tx.send(frame);
        }
        Slot::Absent(queue) => {
            if queue.len() >= MAX_QUEUED_FRAMES {
                queue.pop_front();
            }
            queue.push_back(frame);
        }
    }
}

/// Register `role` in `room` as live, returning the receiver its writer
/// drains and any frames buffered while it was absent.
fn join(
    registry: &Registry,
    room: &str,
    role: Role,
) -> (mpsc::UnboundedReceiver<Message>, Vec<Message>) {
    let (tx, rx) = mpsc::unbounded_channel();
    let mut rooms = registry.lock().unwrap();
    let room = rooms.entry(room.to_string()).or_default();
    let backlog = match room.slots.insert(role, Slot::Live(tx)) {
        Some(Slot::Absent(queue)) => queue.into(),
        _ => Vec::new(),
    };
    room.joined.insert(role, true);
    room.live += 1;
    (rx, backlog)
}

/// Mark `role` in `room` absent again; tear the room down once both roles
/// have joined and neither is live.
fn leave(registry: &Registry, room_name: &str, role: Role) {
    let mut rooms = registry.lock().unwrap();
    let Some(room) = rooms.get_mut(room_name) else {
        return;
    };
    room.slots.insert(role, Slot::default());
    room.live -= 1;
    if room.live == 0 && room.joined.len() == 2 {
        rooms.remove(room_name);
    }
}

/// Serve one connection: upgrade, join its room slot, then pump frames
/// both ways until either side ends.
// The header callback's Result shape (large ErrorResponse) is fixed by
// tungstenite's Callback trait.
#[allow(clippy::result_large_err)]
async fn serve(registry: Registry, stream: TcpStream) -> Result<()> {
    let mut path = None;
    let ws = tokio_tungstenite::accept_hdr_async(stream, |req: &Request, resp: Response| {
        path = Some(req.uri().path().to_string());
        Ok(resp)
    })
    .await
    .context("websocket handshake")?;

    let path = path.context("handshake captured no path")?;
    let (room, role) = match path.trim_matches('/').split('/').collect::<Vec<_>>()[..] {
        ["rooms", room, role] if !room.is_empty() => match Role::parse(role) {
            Some(parsed) => (room.to_string(), parsed),
            None => bail!("unknown role in {path:?} (expected a or b)"),
        },
        _ => bail!("unroutable path {path:?} (expected /rooms/{{room}}/{{a|b}})"),
    };

    let (mut sink, mut source) = ws.split();
    let (mut rx, backlog) = join(&registry, &room, role);
    for frame in backlog {
        if sink.send(frame).await.is_err() {
            leave(&registry, &room, role);
            return Ok(());
        }
    }

    loop {
        tokio::select! {
            outbound = rx.recv() => match outbound {
                Some(frame) => {
                    if sink.send(frame).await.is_err() {
                        break;
                    }
                }
                None => break,
            },
            inbound = source.next() => match inbound {
                Some(Ok(frame @ (Message::Text(_) | Message::Binary(_)))) => {
                    deliver(&registry, &room, role.other(), frame);
                }
                Some(Ok(Message::Close(_))) | Some(Err(_)) | None => break,
                Some(Ok(_)) => {}
            },
        }
    }

    leave(&registry, &room, role);
    let _ = sink.close().await;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    let mut addr: SocketAddr = "127.0.0.1:8090".parse().unwrap();
    let mut args = std::env::args().skip(1);
    while let Some(arg) = args.next() {
        match arg.as_str() {
            "--addr" => {
                let value = args.next().context("--addr needs a value")?;
                addr = value.parse().context("parsing --addr")?;
            }
            other => {
                bail!("unknown argument {other:?} (usage: iroh-spike-relayd [--addr IP:PORT])")
            }
        }
    }

    let listener = TcpListener::bind(addr).await.context("binding")?;
    // The LISTENING line is the startup contract drivers scrape.
    println!("LISTENING ws://{}", listener.local_addr()?);

    let registry: Registry = Arc::new(Mutex::new(HashMap::new()));
    loop {
        let (stream, _) = listener.accept().await?;
        let registry = registry.clone();
        tokio::spawn(async move {
            if let Err(err) = serve(registry, stream).await {
                eprintln!("relayd: connection ended: {err:#}");
            }
        });
    }
}
