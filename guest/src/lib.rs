//! `iroh-spike-guest`: one iroh-style QUIC endpoint over a WebRTC data
//! channel — the spike slice of component-iroh.
//!
//! The same component drives either side of the demo: the client (WebRTC
//! offerer, QUIC client) or the server (answerer, QUIC server). Identity
//! and handshake asymmetrics run through `lann:webcrypto`; the QUIC packet
//! path runs in-guest. See the repository README for the design this
//! slices through.

pub mod crypto;
pub mod quic_glue;

#[cfg(target_arch = "wasm32")]
pub(crate) mod bindings {
    wit_bindgen::generate!({
        path: "../wit",
        world: "iroh-spike",
        generate_all,
    });
}

#[cfg(target_arch = "wasm32")]
mod endpoint;
#[cfg(target_arch = "wasm32")]
pub mod tls;

#[cfg(target_arch = "wasm32")]
mod demo {
    use serde::{Deserialize, Serialize};

    use crate::bindings::exports::lann::iroh_spike::demo::{Guest, Role, RunConfig, RunReport};
    use crate::bindings::lann::iroh_spike::rendezvous::{Role as SignalRole, Session};
    use crate::bindings::lann::webrtc_datachannels::connections::{
        DataChannel, DataChannelOptions, PeerConnection,
    };
    use crate::bindings::lann::webrtc_datachannels::types::{
        Error as WebrtcError, IceCandidate, SdpType, SessionDescription,
    };
    use crate::crypto::sign::Identity;
    use crate::endpoint;

    pub struct Component;

    impl Guest for Component {
        async fn run(config: RunConfig) -> Result<RunReport, String> {
            let identity = Identity::generate().await?;

            let signal_role = match config.role {
                Role::Client => SignalRole::Offerer,
                Role::Server => SignalRole::Answerer,
            };
            let session = Session::open(config.server.clone(), config.room.clone(), signal_role)
                .await
                .map_err(signaling_error)?;

            // Identities travel over the signaling mailbox first: the
            // client needs the server's key before it can pin the TLS
            // connection to it.
            publish(
                &session,
                &Signal::Hello {
                    endpoint_id: hex::encode(identity.endpoint_id),
                },
            )
            .await
            .map_err(signaling_error)?;

            let (peer, channel, hello_id) = match config.role {
                Role::Client => connect_offerer(&session).await.map_err(signaling_error)?,
                Role::Server => connect_answerer(&session).await.map_err(signaling_error)?,
            };

            let endpoint_role = match config.role {
                Role::Client => endpoint::Role::Client {
                    message: config.message.clone(),
                },
                Role::Server => endpoint::Role::Server,
            };
            let outcome = endpoint::run(&identity, hello_id, &channel, endpoint_role).await?;

            // The handshake authenticated the peer's key; the mailbox only
            // *claimed* one. They must agree.
            if outcome.peer_id != hello_id {
                return Err("authenticated peer key differs from the signaled one".into());
            }

            peer.close();

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
    /// are QUIC's to handle.
    fn quic_channel_options() -> DataChannelOptions {
        let options = DataChannelOptions::new();
        options.set_label("quic");
        options.set_ordered(false);
        options.set_max_retransmits(Some(0));
        options
    }

    /// Offerer half: create the channel, drive offer/answer + trickle ICE
    /// through the mailbox, return the connected pair and the peer's
    /// claimed endpoint ID.
    async fn connect_offerer(
        session: &Session,
    ) -> Result<(PeerConnection, DataChannel, [u8; 32]), WebrtcError> {
        let peer = PeerConnection::new(None);
        let channel = peer.create_data_channel(quic_channel_options())?;

        let offer = peer.create_offer().await?;
        let offer_sdp = offer.sdp.clone();
        peer.set_local_description(offer).await?;
        publish(session, &Signal::Offer { sdp: offer_sdp }).await?;
        publish_candidates(&peer, session).await?;
        session.done().await?;

        let hello_id = consume_signaling(&peer, session).await?;

        peer.wait_connected().await?;
        let hello_id = hello_id.ok_or_else(|| WebrtcError::Other("peer sent no hello".into()))?;
        Ok((peer, channel, hello_id))
    }

    /// Answerer half: adopt the offer, answer, and take the channel the
    /// offerer created.
    async fn connect_answerer(
        session: &Session,
    ) -> Result<(PeerConnection, DataChannel, [u8; 32]), WebrtcError> {
        let peer = PeerConnection::new(None);

        let hello_id = match recv_signal(session).await? {
            Some(Signal::Hello { endpoint_id }) => parse_endpoint_id(&endpoint_id)?,
            other => {
                return Err(WebrtcError::InvalidSignaling(format!(
                    "expected hello, got {other:?}"
                )))
            }
        };
        let offer = match recv_signal(session).await? {
            Some(Signal::Offer { sdp }) => sdp,
            other => {
                return Err(WebrtcError::InvalidSignaling(format!(
                    "expected offer, got {other:?}"
                )))
            }
        };
        peer.set_remote_description(SessionDescription {
            kind: SdpType::Offer,
            sdp: offer,
        })
        .await?;

        let answer = peer.create_answer().await?;
        let answer_sdp = answer.sdp.clone();
        peer.set_local_description(answer).await?;
        publish(session, &Signal::Answer { sdp: answer_sdp }).await?;
        publish_candidates(&peer, session).await?;
        session.done().await?;

        consume_signaling(&peer, session).await?;

        peer.wait_connected().await?;

        let mut incoming = peer.incoming_data_channels();
        let (_status, batch) = incoming.read(Vec::with_capacity(1)).await;
        let channel = batch
            .into_iter()
            .next()
            .ok_or_else(|| WebrtcError::Other("no incoming data channel".into()))?;
        Ok((peer, channel, hello_id))
    }

    /// The signaling blob schema: the sibling demo's offer/answer/candidate
    /// JSON plus the identity `hello`.
    #[derive(Debug, Serialize, Deserialize)]
    #[serde(tag = "type", rename_all = "kebab-case")]
    enum Signal {
        Hello {
            endpoint_id: String,
        },
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
    }

    async fn publish(session: &Session, signal: &Signal) -> Result<(), WebrtcError> {
        let blob = serde_json::to_vec(signal)
            .map_err(|e| WebrtcError::Other(format!("encode signal: {e}")))?;
        session.send(blob).await
    }

    async fn recv_signal(session: &Session) -> Result<Option<Signal>, WebrtcError> {
        match session.recv().await? {
            Some(blob) => {
                let signal = serde_json::from_slice(&blob)
                    .map_err(|e| WebrtcError::InvalidSignaling(format!("decode signal: {e}")))?;
                Ok(Some(signal))
            }
            None => Ok(None),
        }
    }

    /// Drain local ICE candidates to the mailbox, then end-of-candidates.
    async fn publish_candidates(
        peer: &PeerConnection,
        session: &Session,
    ) -> Result<(), WebrtcError> {
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
            publish(
                session,
                &Signal::Candidate {
                    candidate: candidate.candidate,
                    sdp_mid: candidate.sdp_mid,
                    sdp_mline_index: candidate.sdp_mline_index,
                },
            )
            .await?;
        }
        publish(session, &Signal::EndOfCandidates).await
    }

    /// Consume the peer's mailbox to its end, applying an answer and each
    /// trickled candidate; returns the peer's hello identity if it sent
    /// one on this mailbox.
    async fn consume_signaling(
        peer: &PeerConnection,
        session: &Session,
    ) -> Result<Option<[u8; 32]>, WebrtcError> {
        let mut hello_id = None;
        while let Some(signal) = recv_signal(session).await? {
            match signal {
                Signal::Hello { endpoint_id } => {
                    hello_id = Some(parse_endpoint_id(&endpoint_id)?);
                }
                Signal::Answer { sdp } => {
                    peer.set_remote_description(SessionDescription {
                        kind: SdpType::Answer,
                        sdp,
                    })
                    .await?
                }
                Signal::Offer { .. } => {
                    return Err(WebrtcError::InvalidSignaling(
                        "unexpected second offer".to_string(),
                    ));
                }
                Signal::Candidate {
                    candidate,
                    sdp_mid,
                    sdp_mline_index,
                } => {
                    peer.add_ice_candidate(IceCandidate {
                        candidate,
                        sdp_mid,
                        sdp_mline_index,
                    })
                    .await?
                }
                Signal::EndOfCandidates => {}
            }
        }
        Ok(hello_id)
    }

    fn parse_endpoint_id(text: &str) -> Result<[u8; 32], WebrtcError> {
        let bytes = hex::decode(text)
            .map_err(|e| WebrtcError::InvalidSignaling(format!("bad endpoint id: {e}")))?;
        bytes
            .as_slice()
            .try_into()
            .map_err(|_| WebrtcError::InvalidSignaling("endpoint id is not 32 bytes".into()))
    }

    fn signaling_error(err: WebrtcError) -> String {
        format!("signaling: {err:?}")
    }

    crate::bindings::export!(Component with_types_in crate::bindings);
}
