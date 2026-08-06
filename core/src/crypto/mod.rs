//! The identity half of the crypto split: the node's Ed25519 signing key
//! held as a `polymorph:webcrypto` handle (see `sign`).
//!
//! Everything else that was once here — the record-protection suite, key
//! exchange, verification — now comes from the `polymorph:tls` sibling's
//! curated crates (`polymorph-tls-quic`), which run those surfaces in-guest
//! under its wasm timing-class profile. Identity signing stays delegated:
//! the private key never enters guest memory.

#[cfg(target_arch = "wasm32")]
pub mod sign;
