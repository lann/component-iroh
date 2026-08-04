//! The `lann:iroh` endpoint component: `connect`/`accept` by endpoint ID,
//! QUIC end-to-end, over the iroh relay wire.
//!
//! One `bind` mints an identity, opens the home relay connection, and
//! spawns a detached pump task that owns all I/O: relayed datagrams in and
//! out, quinn's timers, and the wake-ups for every future a resource
//! method parked. Resource methods mutate the shared quinn state directly
//! and kick the pump to flush the consequences.
//!
//! v0 narrowings (each a recorded latitude, not a design ruling): the
//! relay wire is the only path (`ip` and `custom` address entries are
//! ignored, WebRTC and UDP land as additional wires behind the same
//! surface), one relay per endpoint (dialing a peer on a different relay
//! fails `connect-failed`), and `bind` requires a relay URL.

mod endpoint_impl;
mod relay;

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
