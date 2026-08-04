//! The rustls `CryptoProvider` implementing the design's crypto split:
//! identity (Ed25519) and key exchange (X25519) delegated through
//! `lann:webcrypto`; hashing, the TLS 1.3 key schedule, record protection,
//! and QUIC packet protection in-guest via RustCrypto.

pub mod suite;

#[cfg(target_arch = "wasm32")]
pub mod kx;
#[cfg(target_arch = "wasm32")]
pub mod sign;
#[cfg(target_arch = "wasm32")]
pub mod verify;

#[cfg(target_arch = "wasm32")]
pub use wasm::{provider, verify_algorithms};

#[cfg(target_arch = "wasm32")]
mod wasm {
    use rustls::crypto::{
        CryptoProvider, GetRandomFailed, KeyProvider, SecureRandom, WebPkiSupportedAlgorithms,
    };
    use rustls::pki_types::SignatureVerificationAlgorithm;
    use rustls::{SignatureScheme, SupportedCipherSuite};

    use super::{kx, suite, verify};

    static ALL_VERIFY_ALGORITHMS: &[&dyn SignatureVerificationAlgorithm] =
        &[&verify::ED25519_WEBCRYPTO];
    static VERIFY_MAPPING: &[(SignatureScheme, &[&dyn SignatureVerificationAlgorithm])] =
        &[(SignatureScheme::ED25519, ALL_VERIFY_ALGORITHMS)];

    /// The signature-verification table: Ed25519 only, delegated through
    /// `lann:webcrypto`.
    pub fn verify_algorithms() -> WebPkiSupportedAlgorithms {
        WebPkiSupportedAlgorithms {
            all: ALL_VERIFY_ALGORITHMS,
            mapping: VERIFY_MAPPING,
        }
    }

    /// Build the spike's provider. One cipher suite (the QUIC-mandatory
    /// AES-128-GCM-SHA256), one key-exchange group (X25519 through
    /// webcrypto), Ed25519-only signatures.
    pub fn provider() -> CryptoProvider {
        CryptoProvider {
            cipher_suites: vec![SupportedCipherSuite::Tls13(suite::TLS13_AES_128_GCM_SHA256)],
            kx_groups: vec![&kx::WEBCRYPTO_X25519],
            signature_verification_algorithms: verify_algorithms(),
            secure_random: &WasiRandom,
            key_provider: &UnusedKeyProvider,
        }
    }

    /// `wasi:random` through getrandom's native wasip2 backend.
    #[derive(Debug)]
    struct WasiRandom;

    impl SecureRandom for WasiRandom {
        fn fill(&self, buf: &mut [u8]) -> Result<(), GetRandomFailed> {
            getrandom::fill(buf).map_err(|_| GetRandomFailed)
        }
    }

    /// Key loading from DER never happens: identity keys are webcrypto
    /// handles installed via resolvers, so this provider hook is a stub.
    #[derive(Debug)]
    struct UnusedKeyProvider;

    impl KeyProvider for UnusedKeyProvider {
        fn load_private_key(
            &self,
            _key_der: rustls::pki_types::PrivateKeyDer<'static>,
        ) -> Result<std::sync::Arc<dyn rustls::sign::SigningKey>, rustls::Error> {
            Err(rustls::Error::General(
                "identity keys are webcrypto handles, not DER".into(),
            ))
        }
    }
}
