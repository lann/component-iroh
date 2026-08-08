//! The node identity: an Ed25519 signing key held as a `polymorph:webcrypto`
//! handle, presented to rustls as a `SigningKey`/`Signer` pair (iroh's raw
//! public key shape). The private key material never enters guest memory;
//! `sign` crosses the WIT boundary per handshake, not per packet.

use std::fmt;
use std::sync::Arc;

use polymorph_webcrypto_guest::{ed25519, SigningKeyOptions};
use rustls::pki_types::{alg_id, SubjectPublicKeyInfoDer};
use rustls::sign::{public_key_to_spki, Signer, SigningKey};
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

    /// Adopt an embedder-supplied identity: an Ed25519 signing/verifying
    /// pair as webcrypto handles.
    ///
    /// The pair is checked here — algorithm, sign permission, public-key
    /// shape, and a sign/verify probe of the halves against each other —
    /// so a bad pair fails at bind rather than as handshake failures
    /// against every peer.
    pub async fn from_injected(
        signing: polymorph_webcrypto_guest::SigningKey,
        verifying: polymorph_webcrypto_guest::VerifyingKey,
    ) -> Result<Self, String> {
        if signing.algorithm_name() != "Ed25519" {
            return Err(format!(
                "identity signing key is {}, not Ed25519",
                signing.algorithm_name()
            ));
        }
        if verifying.algorithm_name() != "Ed25519" {
            return Err(format!(
                "identity verifying key is {}, not Ed25519",
                verifying.algorithm_name()
            ));
        }
        if !signing.can_sign() {
            return Err("identity signing key does not permit sign".into());
        }
        let raw = verifying
            .export_key_raw()
            .await
            .map_err(|e| format!("export identity public key: {e}"))?;
        let endpoint_id: [u8; 32] = raw
            .as_slice()
            .try_into()
            .map_err(|_| format!("expected 32-byte Ed25519 public key, got {}", raw.len()))?;
        // The possession probe: the signature is verified locally and
        // discarded, never sent anywhere. The message is fixed and
        // matches no protocol's signing format (TLS CertificateVerify
        // and the relay challenge both frame their inputs), so the
        // probe cannot be confused with a protocol signature.
        const PROBE: &[u8] = b"polymorph:iroh endpoint identity possession probe";
        let sig = signing
            .sign(PROBE)
            .await
            .map_err(|e| format!("identity probe signature: {e}"))?;
        verifying.verify(PROBE, sig).await.map_err(|_| {
            "identity mismatch: the verifying key is not the signing key's public half".to_string()
        })?;
        let spki = public_key_to_spki(&alg_id::ED25519, raw);
        Ok(Self {
            key: Arc::new(WebcryptoEd25519 {
                key: Arc::new(signing),
                spki: spki.to_vec(),
            }),
            endpoint_id,
        })
    }

    /// The identity as a rustls signer: the webcrypto handle behind the
    /// `SigningKey` trait, reporting the Ed25519 SPKI as its public key.
    pub fn signing_key(&self) -> Arc<dyn SigningKey> {
        self.key.clone()
    }

    /// Sign `message` with the identity key (the relay handshake path;
    /// TLS signing goes through the rustls `Signer` instead).
    pub async fn sign(&self, message: &[u8]) -> Result<Vec<u8>, String> {
        self.key
            .key
            .sign(message)
            .await
            .map_err(|e| format!("webcrypto ed25519 sign: {e:?}"))
    }
}

struct WebcryptoEd25519 {
    key: Arc<polymorph_webcrypto_guest::SigningKey>,
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

struct WebcryptoEd25519Signer(Arc<polymorph_webcrypto_guest::SigningKey>);

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
