//! The `lann:iroh` endpoint component: `connect`/`accept` by endpoint ID,
//! QUIC end-to-end, over the iroh relay wire, direct UDP, and WebRTC
//! data channels.
//!
//! One `bind` mints an identity, opens the home relay connection, binds
//! the UDP socket when asked, and spawns a detached pump task that owns
//! all I/O: relay, UDP, and channel datagrams in and out, WebRTC
//! signaling dispatch, quinn's timers, and the wake-ups for every future
//! a resource method parked. Resource methods mutate the shared quinn
//! state directly and kick the pump to flush the consequences.
//!
//! v0 narrowings (each a recorded latitude, not a design ruling): the
//! dial path is `ip` (with a bound socket) or a relay — the entry's
//! foreign relay joins a pool on demand, the home relay otherwise; no
//! racing or fallback between dial paths; a `webrtc` entry upgrades a
//! relay-dialed connection in the background (flip on channel open,
//! flip back on channel death — no quality-based selection); `custom`
//! entries are ignored; one signaling session per peer at a time; a
//! foreign relay's death starves its routes rather than failing them;
//! and `bind` requires a home relay URL.

mod endpoint_impl;
mod relay;
mod udp;
mod webrtc;

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
