//! The `lann:iroh` endpoint component: `connect`/`accept` by endpoint ID,
//! QUIC end-to-end, over the iroh relay wire and direct UDP.
//!
//! One `bind` mints an identity, opens the home relay connection, binds
//! the UDP socket when asked, and spawns a detached pump task that owns
//! all I/O: relay and UDP datagrams in and out, quinn's timers, and the
//! wake-ups for every future a resource method parked. Resource methods
//! mutate the shared quinn state directly and kick the pump to flush the
//! consequences.
//!
//! v0 narrowings (each a recorded latitude, not a design ruling): the
//! wires are the relay and, when `udp-bind-addr` is set, direct UDP —
//! `connect` dials the first parseable `ip` entry when a socket exists,
//! with no relay fallback or racing; `custom` entries are ignored;
//! WebRTC lands as another wire behind the same surface; one relay per
//! endpoint (dialing a peer on a different relay fails `connect-failed`);
//! and `bind` requires a relay URL.

mod endpoint_impl;
mod relay;
mod udp;

pub(crate) mod bindings {
    wit_bindgen::generate!({
        path: "../wit",
        world: "iroh-endpoint",
        generate_all,
        // The websocket streaming methods are unused here and cannot
        // currently be generated alongside the webrtc package: the two
        // packages' `stream-message` records are structurally equal, and
        // wit-bindgen 0.59 canonicalizes stream payloads by structure
        // while still generating one Rust type per interface, so only one
        // of the two gets its `StreamPayload` impl.
        skip: [
            "[method]websocket.send-via-stream",
            "[method]websocket.receive-via-stream",
        ],
    });
}

bindings::export!(Component with_types_in bindings);

pub(crate) struct Component;
