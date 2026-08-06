//! `iroh-spike-guest`: one iroh-style QUIC endpoint over a WebRTC data
//! channel — the spike slice of component-iroh.
//!
//! The same component drives either side of the demo: the client (WebRTC
//! offerer, QUIC client) or the server (answerer, QUIC server). Identity
//! and handshake asymmetrics run through `polymorph:webcrypto`; the QUIC packet
//! path runs in-guest. See the repository README for the design this
//! slices through.

#[cfg(target_arch = "wasm32")]
pub(crate) mod bindings {
    wit_bindgen::generate!({
        path: "wit",
        world: "iroh-spike",
        generate_all,
        // The websocket interfaces are bound once in iroh-endpoint-core,
        // whose relay client this component shares; webrtc's structurally
        // equal `stream-message` is then the only stream payload generated
        // in this crate — two in one generation collide under wit-bindgen
        // 0.59's structural canonicalization of stream payloads.
        with: {
            "polymorph:websocket/types@0.1.0": iroh_endpoint_core::bindings::polymorph::websocket::types,
            "polymorph:websocket/connections@0.1.0": iroh_endpoint_core::bindings::polymorph::websocket::connections,
        },
    });
}

#[cfg(target_arch = "wasm32")]
mod endpoint;

#[cfg(target_arch = "wasm32")]
mod demo {
    use std::cell::Cell;
    use std::io::Write;

    use serde::{Deserialize, Serialize};

    use crate::bindings::exports::polymorph::iroh_spike::demo::{
        Guest, Role, RunConfig, RunReport, Transport,
    };
    use crate::bindings::polymorph::webrtc_datachannels::connections::{
        DataChannel, DataChannelOptions, PeerConnection,
    };
    use crate::bindings::polymorph::webrtc_datachannels::types::{
        DataChannelState, IceCandidate, SdpType, SessionDescription,
    };
    use crate::endpoint;
    use iroh_endpoint_core::crypto::sign::Identity;
    use iroh_endpoint_core::relay::RelayConn;

    pub struct Component;

    impl Guest for Component {
        async fn run(config: RunConfig) -> Result<RunReport, String> {
            let identity = Identity::generate().await?;

            // The driver hands this ID to the peer process (iroh pairing
            // is by endpoint ID; discovery does this in the design).
            println!("endpoint-id {}", hex::encode(identity.endpoint_id));
            let _ = std::io::stdout().flush();

            let peer_arg = match &config.peer {
                Some(text) => Some(parse_endpoint_id(text)?),
                None => None,
            };
            if matches!(config.role, Role::Client) && peer_arg.is_none() {
                return Err("the client role requires the server's endpoint id (peer)".into());
            }

            let relay = RelayConn::connect(&config.server, &identity).await?;

            // The WebRTC wire needs the offer/answer/ICE dance, carried as
            // signal datagrams through the relay; the relay wire needs no
            // signaling at all.
            let mut webrtc = None;
            let mut signaled_peer = None;
            if config.transport == Transport::Webrtc {
                let signaling = Signaling {
                    relay: &relay,
                    peer: Cell::new(peer_arg),
                };
                let pair = match config.role {
                    Role::Client => connect_offerer(&signaling).await?,
                    Role::Server => connect_answerer(&signaling).await?,
                };
                signaled_peer = Some(
                    signaling
                        .peer
                        .get()
                        .ok_or("signaling completed without a peer")?,
                );
                webrtc = Some(pair);
            }

            let wire = match &webrtc {
                Some((_, channel)) => endpoint::Wire::Channel(channel),
                None => endpoint::Wire::Relay {
                    conn: &relay,
                    peer: Cell::new(peer_arg),
                },
            };

            let endpoint_role = match config.role {
                Role::Client => endpoint::Role::Client {
                    message: config.message.clone(),
                },
                Role::Server => endpoint::Role::Server,
            };
            let outcome = endpoint::run(&identity, peer_arg, &wire, endpoint_role).await?;

            // The handshake authenticated the peer’s key; the relay only
            // authenticated who *relayed frames* to us. They must agree.
            let expected = peer_arg
                .or(signaled_peer)
                .or_else(|| wire.peer())
                .ok_or("finished without an expected peer identity")?;
            if outcome.peer_id != expected {
                return Err(
                    "authenticated peer key differs from the relay-authenticated one".into(),
                );
            }

            if let Some((peer, _)) = &webrtc {
                peer.close();
            }
            relay.close();

            Ok(RunReport {
                endpoint_id: hex::encode(identity.endpoint_id),
                peer_id: hex::encode(outcome.peer_id),
                handshake_ms: outcome.handshake_ms,
                roundtrip_ms: outcome.roundtrip_ms,
                received: outcome.received,
            })
        }
    }

    /// The channel configuration QUIC needs from the wire: a datagram
    /// carrier. Unordered, zero retransmissions — losses and reordering
    /// are QUIC’s to handle.
    fn quic_channel_options() -> DataChannelOptions {
        let options = DataChannelOptions::new();
        options.set_label("quic");
        options.set_ordered(false);
        options.set_max_retransmits(Some(0));
        options
    }

    /// WebRTC signaling carried as relay datagrams: one JSON signal per
    /// datagram, marked by a leading zero byte (never a valid first byte
    /// of a QUIC packet, whose fixed bit is set), addressed to — and
    /// filtered by — the relay-authenticated peer.
    struct Signaling<'a> {
        relay: &'a RelayConn,
        /// The signaling peer: preset on the client, learned from the
        /// first signal’s source on the server.
        peer: Cell<Option<[u8; 32]>>,
    }

    const SIGNAL_PREFIX: u8 = 0x00;

    impl Signaling<'_> {
        async fn publish(&self, signal: &Signal) -> Result<(), String> {
            let peer = self.peer.get().ok_or("no signaling peer yet")?;
            let mut payload = vec![SIGNAL_PREFIX];
            serde_json::to_writer(&mut payload, signal)
                .map_err(|e| format!("encode signal: {e}"))?;
            self.relay.send_datagram(&peer, &payload).await
        }

        /// The peer’s next signal; `none` once the peer sends `done`.
        async fn recv(&self) -> Result<Option<Signal>, String> {
            loop {
                let datagram = self.relay.recv_datagram().await?;
                match self.peer.get() {
                    None => self.peer.set(Some(datagram.source)),
                    Some(expected) if expected == datagram.source => {}
                    Some(_) => continue,
                }
                let Some((&SIGNAL_PREFIX, json)) = datagram.payload.split_first() else {
                    continue;
                };
                let signal =
                    serde_json::from_slice(json).map_err(|e| format!("decode signal: {e}"))?;
                match signal {
                    Signal::Done => return Ok(None),
                    other => return Ok(Some(other)),
                }
            }
        }
    }

    /// Offerer half: create the channel, drive offer/answer + trickle ICE
    /// through the relay, return the connected pair.
    async fn connect_offerer(
        signaling: &Signaling<'_>,
    ) -> Result<(PeerConnection, DataChannel), String> {
        let peer = PeerConnection::new(None);
        let channel = peer
            .create_data_channel(quic_channel_options())
            .map_err(rtc)?;
        // Take the once-only state stream before anything can transition.
        let mut states = channel.state_changes();

        let offer = peer.create_offer().await.map_err(rtc)?;
        let offer_sdp = offer.sdp.clone();
        peer.set_local_description(offer).await.map_err(rtc)?;
        signaling.publish(&Signal::Offer { sdp: offer_sdp }).await?;
        publish_candidates(&peer, signaling).await?;
        signaling.publish(&Signal::Done).await?;

        consume_signaling(&peer, signaling).await?;

        peer.wait_connected().await.map_err(rtc)?;

        // The first flight must not race the answerer's still-forming
        // channel: wait for `open`, not ICE-connected, or the Initial
        // is lost and recovered by a loss probe (issue #8).
        loop {
            let (status, batch) = states.read(Vec::with_capacity(1)).await;
            if batch.contains(&DataChannelState::Open) {
                break;
            }
            if batch.contains(&DataChannelState::Closed)
                || matches!(
                    status,
                    wit_bindgen::StreamResult::Dropped | wit_bindgen::StreamResult::Cancelled
                )
            {
                return Err("data channel closed before opening".into());
            }
        }
        Ok((peer, channel))
    }

    /// Answerer half: adopt the offer, answer, and take the channel the
    /// offerer created.
    async fn connect_answerer(
        signaling: &Signaling<'_>,
    ) -> Result<(PeerConnection, DataChannel), String> {
        let peer = PeerConnection::new(None);

        let offer = match signaling.recv().await? {
            Some(Signal::Offer { sdp }) => sdp,
            other => return Err(format!("expected offer, got {other:?}")),
        };
        peer.set_remote_description(SessionDescription {
            kind: SdpType::Offer,
            sdp: offer,
        })
        .await
        .map_err(rtc)?;

        let answer = peer.create_answer().await.map_err(rtc)?;
        let answer_sdp = answer.sdp.clone();
        peer.set_local_description(answer).await.map_err(rtc)?;
        signaling
            .publish(&Signal::Answer { sdp: answer_sdp })
            .await?;
        publish_candidates(&peer, signaling).await?;
        signaling.publish(&Signal::Done).await?;

        consume_signaling(&peer, signaling).await?;

        peer.wait_connected().await.map_err(rtc)?;

        let mut incoming = peer.incoming_data_channels();
        let (_status, batch) = incoming.read(Vec::with_capacity(1)).await;
        let channel = batch.into_iter().next().ok_or("no incoming data channel")?;
        Ok((peer, channel))
    }

    /// The signaling schema, one JSON signal per datagram: the sibling
    /// demo’s offer/answer/candidate JSON plus a `done` sentinel marking
    /// the end of this side’s signals. Identities travel in no signal:
    /// the relay authenticates each datagram’s source.
    #[derive(Debug, Serialize, Deserialize)]
    #[serde(tag = "type", rename_all = "kebab-case")]
    enum Signal {
        Offer {
            sdp: String,
        },
        Answer {
            sdp: String,
        },
        Candidate {
            candidate: String,
            #[serde(default)]
            sdp_mid: Option<String>,
            #[serde(default)]
            sdp_mline_index: Option<u16>,
        },
        EndOfCandidates,
        Done,
    }

    /// Drain local ICE candidates to the relay, then end-of-candidates.
    async fn publish_candidates(
        peer: &PeerConnection,
        signaling: &Signaling<'_>,
    ) -> Result<(), String> {
        let mut stream = peer.local_ice_candidates();
        let mut candidates = Vec::new();
        loop {
            let (status, batch) = stream.read(Vec::with_capacity(4)).await;
            candidates.extend(batch);
            if matches!(
                status,
                wit_bindgen::StreamResult::Dropped | wit_bindgen::StreamResult::Cancelled
            ) {
                break;
            }
        }
        for candidate in candidates {
            signaling
                .publish(&Signal::Candidate {
                    candidate: candidate.candidate,
                    sdp_mid: candidate.sdp_mid,
                    sdp_mline_index: candidate.sdp_mline_index,
                })
                .await?;
        }
        signaling.publish(&Signal::EndOfCandidates).await
    }

    /// Consume the peer’s signals to its `done`, applying an answer and
    /// each trickled candidate.
    async fn consume_signaling(
        peer: &PeerConnection,
        signaling: &Signaling<'_>,
    ) -> Result<(), String> {
        while let Some(signal) = signaling.recv().await? {
            match signal {
                Signal::Answer { sdp } => peer
                    .set_remote_description(SessionDescription {
                        kind: SdpType::Answer,
                        sdp,
                    })
                    .await
                    .map_err(rtc)?,
                Signal::Offer { .. } => {
                    return Err("unexpected second offer".into());
                }
                Signal::Candidate {
                    candidate,
                    sdp_mid,
                    sdp_mline_index,
                } => peer
                    .add_ice_candidate(IceCandidate {
                        candidate,
                        sdp_mid,
                        sdp_mline_index,
                    })
                    .await
                    .map_err(rtc)?,
                Signal::EndOfCandidates => {}
                Signal::Done => unreachable!("recv maps done to none"),
            }
        }
        Ok(())
    }

    fn parse_endpoint_id(text: &str) -> Result<[u8; 32], String> {
        let bytes = hex::decode(text).map_err(|e| format!("bad endpoint id: {e}"))?;
        bytes
            .as_slice()
            .try_into()
            .map_err(|_| "endpoint id is not 32 bytes".to_string())
    }

    fn rtc(err: crate::bindings::polymorph::webrtc_datachannels::types::Error) -> String {
        format!("webrtc: {err:?}")
    }

    crate::bindings::export!(Component with_types_in crate::bindings);
}
