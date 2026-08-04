//! X25519 key exchange delegated to `lann:webcrypto`.
//!
//! The ephemeral secret is a webcrypto handle; the shared secret returns to
//! guest memory through `derive-bits` because rustls's `SharedSecret` is a
//! byte value — the key schedule built on it runs in-guest either way (see
//! `crypto::suite`).
//!
//! The synchronous trait methods bridge to the async imports with
//! `wit_bindgen::block_on`; that is legal only under an async-lifted
//! export task, which the demo's `run` export provides.

use lann_webcrypto_guest::{x25519, AgreementKeyOptions, AgreementSecretKey};
use rustls::crypto::{ActiveKeyExchange, SharedSecret, SupportedKxGroup};
use rustls::{Error, NamedGroup};

/// The provider's only key-exchange group.
pub static WEBCRYPTO_X25519: WebcryptoX25519 = WebcryptoX25519;

/// X25519 whose scalar lives behind the `lann:webcrypto` boundary.
#[derive(Debug)]
pub struct WebcryptoX25519;

impl SupportedKxGroup for WebcryptoX25519 {
    fn start(&self) -> Result<Box<dyn ActiveKeyExchange>, Error> {
        wit_bindgen::block_on(async {
            let (secret, public) = x25519::generate_key(AgreementKeyOptions {
                derive_bits: true,
                derive_key: false,
                extractable: false,
            })
            .await
            .map_err(webcrypto_error)?;
            let pub_bytes = public.export_key_raw().await.map_err(webcrypto_error)?;
            Ok(Box::new(ActiveX25519 { secret, pub_bytes }) as Box<dyn ActiveKeyExchange>)
        })
    }

    fn name(&self) -> NamedGroup {
        NamedGroup::X25519
    }
}

struct ActiveX25519 {
    secret: AgreementSecretKey,
    pub_bytes: Vec<u8>,
}

impl ActiveKeyExchange for ActiveX25519 {
    fn complete(self: Box<Self>, peer_pub_key: &[u8]) -> Result<SharedSecret, Error> {
        let peer_pub_key = peer_pub_key.to_vec();
        wit_bindgen::block_on(async move {
            let peer = x25519::import_public_key_raw(peer_pub_key)
                .await
                .map_err(webcrypto_error)?;
            let shared = self.secret.agree(&peer).await.map_err(webcrypto_error)?;
            let bytes = shared
                .derive_bits(Some(256))
                .await
                .map_err(webcrypto_error)?;
            Ok(SharedSecret::from(&bytes[..]))
        })
    }

    fn pub_key(&self) -> &[u8] {
        &self.pub_bytes
    }

    fn group(&self) -> NamedGroup {
        NamedGroup::X25519
    }
}

fn webcrypto_error(err: lann_webcrypto_guest::Error) -> Error {
    Error::General(format!("webcrypto x25519: {err:?}"))
}
