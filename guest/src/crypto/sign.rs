//! The node identity: an Ed25519 signing key held as a `lann:webcrypto`
//! handle, presented to rustls as a `SigningKey`/`Signer` pair (iroh's raw
//! public key shape). The private key material never enters guest memory;
//! `sign` crosses the WIT boundary per handshake, not per packet.

use std::fmt;
use std::sync::Arc;

use lann_webcrypto_guest::{ed25519, SigningKeyOptions};
use rustls::pki_types::{alg_id, CertificateDer, SubjectPublicKeyInfoDer};
use rustls::sign::{public_key_to_spki, CertifiedKey, Signer, SigningKey};
use rustls::{Error, SignatureAlgorithm, SignatureScheme};

/// A node identity: the webcrypto signing-key handle plus its public half.
pub struct Identity {
    key: Arc<WebcryptoEd25519>,
    /// The raw 32-byte Ed25519 public key — iroh's `EndpointID`.
    pub endpoint_id: [u8; 32],
}

impl Identity {
    /// Generate a fresh identity. The signing key is minted
    /// non-extractable: the handle can sign, nothing can read it.
    pub async fn generate() -> Result<Self, String> {
        let (signing, verifying) = ed25519::generate_key(SigningKeyOptions {
            sign: true,
            extractable: false,
        })
        .await
        .map_err(|e| format!("generate identity: {e:?}"))?;
        let raw = verifying
            .export_key_raw()
            .await
            .map_err(|e| format!("export identity public key: {e:?}"))?;
        let endpoint_id: [u8; 32] = raw
            .as_slice()
            .try_into()
            .map_err(|_| format!("expected 32-byte Ed25519 public key, got {}", raw.len()))?;
        let spki = public_key_to_spki(&alg_id::ED25519, raw);
        Ok(Self {
            key: Arc::new(WebcryptoEd25519 {
                key: Arc::new(signing),
                spki: spki.to_vec(),
            }),
            endpoint_id,
        })
    }

    /// The RFC 7250 "certificate": the bare SPKI, carried in the TLS
    /// Certificate message, with the webcrypto handle as its signer.
    pub fn certified_key(&self) -> CertifiedKey {
        CertifiedKey {
            cert: vec![CertificateDer::from(self.key.spki.clone())],
            key: self.key.clone(),
            ocsp: None,
        }
    }
}

struct WebcryptoEd25519 {
    key: Arc<lann_webcrypto_guest::SigningKey>,
    spki: Vec<u8>,
}

impl fmt::Debug for WebcryptoEd25519 {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("WebcryptoEd25519").finish_non_exhaustive()
    }
}

impl SigningKey for WebcryptoEd25519 {
    fn choose_scheme(&self, offered: &[SignatureScheme]) -> Option<Box<dyn Signer>> {
        offered
            .contains(&SignatureScheme::ED25519)
            .then(|| Box::new(WebcryptoEd25519Signer(self.key.clone())) as Box<dyn Signer>)
    }

    fn public_key(&self) -> Option<SubjectPublicKeyInfoDer<'_>> {
        Some(SubjectPublicKeyInfoDer::from(&self.spki[..]))
    }

    fn algorithm(&self) -> SignatureAlgorithm {
        SignatureAlgorithm::ED25519
    }
}

struct WebcryptoEd25519Signer(Arc<lann_webcrypto_guest::SigningKey>);

impl fmt::Debug for WebcryptoEd25519Signer {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("WebcryptoEd25519Signer")
            .finish_non_exhaustive()
    }
}

impl Signer for WebcryptoEd25519Signer {
    fn sign(&self, message: &[u8]) -> Result<Vec<u8>, Error> {
        wit_bindgen::block_on(async {
            self.0
                .sign(message)
                .await
                .map_err(|e| Error::General(format!("webcrypto ed25519 sign: {e:?}")))
        })
    }

    fn scheme(&self) -> SignatureScheme {
        SignatureScheme::ED25519
    }
}
