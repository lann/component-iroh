//! Ed25519 handshake-signature verification delegated to `lann:webcrypto`,
//! as a `SignatureVerificationAlgorithm` the RPK verifiers consult.

use rustls::pki_types::{
    alg_id, AlgorithmIdentifier, InvalidSignature, SignatureVerificationAlgorithm,
};

/// The provider's only verification algorithm.
pub static ED25519_WEBCRYPTO: Ed25519Webcrypto = Ed25519Webcrypto;

/// Ed25519 verification through the webcrypto import. The minting
/// interface pins strict (`verify_strict`-equivalent) semantics, matching
/// upstream iroh's ed25519-dalek verification.
#[derive(Debug)]
pub struct Ed25519Webcrypto;

impl SignatureVerificationAlgorithm for Ed25519Webcrypto {
    fn verify_signature(
        &self,
        public_key: &[u8],
        message: &[u8],
        signature: &[u8],
    ) -> Result<(), InvalidSignature> {
        let public_key = public_key.to_vec();
        let signature = signature.to_vec();
        wit_bindgen::block_on(async move {
            let key = lann_webcrypto_guest::ed25519::import_verifying_key_raw(public_key)
                .await
                .map_err(|_| InvalidSignature)?;
            key.verify(message, signature)
                .await
                .map_err(|_| InvalidSignature)
        })
    }

    fn public_key_alg_id(&self) -> AlgorithmIdentifier {
        alg_id::ED25519
    }

    fn signature_alg_id(&self) -> AlgorithmIdentifier {
        alg_id::ED25519
    }
}
