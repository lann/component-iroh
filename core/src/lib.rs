//! The shared endpoint core: everything binding-independent that both the
//! spike demo guest and the endpoint component build on — the
//! webcrypto-held identity, the raw-public-key TLS configuration over the
//! `polymorph:tls` sibling's profile, and the iroh relay wire framing.
//!
//! The crypto split, amended after `polymorph:tls` landed: identity signing
//! goes through `polymorph:webcrypto` (the key is a non-extractable handle);
//! key exchange, verification, the key schedule, and record/packet
//! protection run in-guest via `polymorph-tls-quinn`'s wasm timing-class
//! profile. Modules that reach `polymorph:webcrypto` are wasm-only; relay
//! framing compiles natively for its known-answer tests.

pub mod crypto;
pub mod relay_frames;

#[cfg(target_arch = "wasm32")]
pub mod tls;
