//! The shared endpoint core: everything binding-independent that both the
//! spike demo guest and the endpoint component build on — the rustls
//! `CryptoProvider` implementing the crypto split, quinn-proto's crypto
//! glue, the raw-public-key TLS configuration, and the iroh relay wire
//! framing.
//!
//! Modules that reach `lann:webcrypto` (identity, key exchange,
//! verification, and the TLS configs built on them) are wasm-only; the
//! record-protection suite, quinn glue, and relay framing compile natively
//! for their known-answer tests.

pub mod crypto;
pub mod quic_glue;
pub mod relay_frames;

#[cfg(target_arch = "wasm32")]
pub mod tls;
