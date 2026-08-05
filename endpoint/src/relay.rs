//! A client connection to an iroh relay server over `polymorph:websocket`:
//! connect, authenticate, then exchange relayed datagrams addressed by
//! endpoint ID.
//!
//! Authentication uses the relay handshake's challenge path — the same
//! path browsers use, since the TLS keying-material shortcut needs an
//! exporter the WebSocket surface does not carry. The challenge signature
//! is produced by the webcrypto identity handle.

use std::cell::RefCell;
use std::collections::VecDeque;

use crate::bindings::polymorph::websocket::connections::Websocket;
use crate::bindings::polymorph::websocket::types::Message as WsMessage;
use iroh_endpoint_core::crypto::sign::Identity;
use iroh_endpoint_core::relay_frames::{self as frames, tag};

/// A connected, authenticated relay client.
pub struct RelayConn {
    ws: Websocket,
    /// Datagrams decoded but not yet delivered (a batch frame carries
    /// several).
    pending: RefCell<VecDeque<frames::Datagram>>,
}

impl RelayConn {
    /// Connect to the relay at `server` (an `http(s)` or `ws(s)` base URL)
    /// and run the authentication handshake as `identity`.
    pub async fn connect(server: &str, identity: &Identity) -> Result<Self, String> {
        let url = relay_url(server)?;
        let protocols = frames::SUBPROTOCOLS.iter().map(|p| p.to_string()).collect();
        let ws = Websocket::connect(url, protocols)
            .await
            .map_err(|e| format!("relay connect: {e:?}"))?;

        loop {
            let frame = match ws.receive().await {
                Ok(WsMessage::Binary(frame)) => frame,
                Ok(WsMessage::String(_)) => continue,
                Err(e) => return Err(format!("relay handshake: {e:?}")),
            };
            let (frame_tag, payload) =
                frames::split_tag(&frame).ok_or("relay handshake: empty frame")?;
            match frame_tag {
                tag::SERVER_CHALLENGE => {
                    let challenge: &[u8; 16] = payload
                        .try_into()
                        .map_err(|_| "relay handshake: malformed challenge")?;
                    let message = blake3::derive_key(frames::CHALLENGE_DOMAIN, challenge);
                    let signature: [u8; 64] = identity
                        .sign(&message)
                        .await?
                        .as_slice()
                        .try_into()
                        .map_err(|_| "identity produced a non-64-byte signature")?;
                    let auth = frames::encode_client_auth(&identity.endpoint_id, &signature);
                    ws.send(WsMessage::Binary(auth))
                        .await
                        .map_err(|e| format!("relay handshake: {e:?}"))?;
                }
                tag::SERVER_CONFIRMS_AUTH => break,
                tag::SERVER_DENIES_AUTH => {
                    return Err(format!(
                        "relay denied auth: {}",
                        frames::decode_denial_reason(payload)
                    ));
                }
                other => return Err(format!("relay handshake: unexpected frame type {other}")),
            }
        }

        Ok(Self {
            ws,
            pending: RefCell::new(VecDeque::new()),
        })
    }

    /// Send one datagram to `dst` through the relay.
    pub async fn send_datagram(&self, dst: &[u8; 32], payload: &[u8]) -> Result<(), String> {
        let frame = frames::encode_client_datagram(dst, payload);
        self.ws
            .send(WsMessage::Binary(frame))
            .await
            .map_err(|e| format!("relay send: {e:?}"))
    }

    /// The next relayed datagram and its relay-authenticated sender.
    /// Pings are answered and status frames skipped internally.
    pub async fn recv_datagram(&self) -> Result<frames::Datagram, String> {
        loop {
            if let Some(datagram) = self.pending.borrow_mut().pop_front() {
                return Ok(datagram);
            }
            let frame = match self.ws.receive().await {
                Ok(WsMessage::Binary(frame)) => frame,
                Ok(WsMessage::String(_)) => continue,
                Err(e) => return Err(format!("relay: {e:?}")),
            };
            let Some((frame_tag, payload)) = frames::split_tag(&frame) else {
                continue;
            };
            match frame_tag {
                tag::RELAY_TO_CLIENT_DATAGRAM | tag::RELAY_TO_CLIENT_DATAGRAM_BATCH => {
                    let batch = frame_tag == tag::RELAY_TO_CLIENT_DATAGRAM_BATCH;
                    let Some(datagrams) = frames::decode_relay_datagrams(payload, batch) else {
                        continue;
                    };
                    self.pending.borrow_mut().extend(datagrams);
                }
                tag::PING => {
                    if let Ok(ping) = <&[u8; 8]>::try_from(payload) {
                        self.ws
                            .send(WsMessage::Binary(frames::encode_pong(ping)))
                            .await
                            .map_err(|e| format!("relay pong: {e:?}"))?;
                    }
                }
                // Status, restarting, pongs, and departed-peer notes carry
                // nothing the happy path acts on.
                _ => {}
            }
        }
    }

    /// Initiate the connection's close (idempotent); a pending
    /// `recv_datagram` then resolves with its closed error.
    pub fn close(&self) {
        let _ = self.ws.close(None, "");
    }
}

/// The websocket URL for `server`'s relay endpoint: scheme mapped onto
/// `ws`/`wss` (mirroring upstream's http→ws mapping), path `/relay`.
fn relay_url(server: &str) -> Result<String, String> {
    let (scheme, rest) = server
        .split_once("://")
        .ok_or_else(|| format!("relay url {server:?} has no scheme"))?;
    let ws_scheme = match scheme {
        "http" | "ws" => "ws",
        _ => "wss",
    };
    let host = rest.split('/').next().unwrap_or(rest);
    if host.is_empty() {
        return Err(format!("relay url {server:?} has no host"));
    }
    Ok(format!("{ws_scheme}://{host}{}", frames::RELAY_PATH))
}
