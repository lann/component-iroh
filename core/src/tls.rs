//! Raw-public-key TLS 1.3 configuration (RFC 7250), following upstream
//! iroh's shape: the certificate message carries the bare Ed25519 SPKI,
//! both sides authenticate with Ed25519 handshake signatures, and the
//! peer's public key *is* its identity.
//!
//! What a verified connection authenticates: possession of the private key
//! behind the presented SPKI — nothing else. The client additionally pins
//! the server's SPKI to the endpoint ID it dialed.
//!
//! The mechanics live in the `polymorph:tls` sibling's rpk module (which
//! adopted them from this repository); this module binds them to the
//! webcrypto-held identity: the endpoint's own signatures are delegated
//! through the non-extractable handle, everything else is in-guest and
//! secret-free.

use polymorph_tls_profile::{public_key_from_ed25519_spki, RpkIdentity};
use rustls::Error;

use crate::crypto::sign::Identity;

/// The SNI placeholder sent on outgoing connections; identity lives in the
/// SPKI pin, not the name.
pub const SERVER_NAME: &str = "endpoint.iroh.invalid";

/// The endpoint ID inside a raw-public-key "certificate", if it is a
/// well-formed Ed25519 SPKI.
pub fn endpoint_id_from_spki(spki: &[u8]) -> Option<[u8; 32]> {
    public_key_from_ed25519_spki(spki)
}

/// A TLS 1.3 client config authenticating as `identity` and requiring the
/// server to present exactly `expected_server`'s key.
pub fn client_config(
    identity: &Identity,
    expected_server: [u8; 32],
    alpns: Vec<Vec<u8>>,
) -> Result<rustls::ClientConfig, Error> {
    let alpns: Vec<&[u8]> = alpns.iter().map(Vec::as_slice).collect();
    polymorph_tls_quinn::rpk_client_config(&rpk_identity(identity)?, &expected_server, &alpns)
}

/// A TLS 1.3 server config authenticating as `identity` and requiring
/// clients to present (and prove) an Ed25519 raw public key.
pub fn server_config(
    identity: &Identity,
    alpns: Vec<Vec<u8>>,
) -> Result<rustls::ServerConfig, Error> {
    let alpns: Vec<&[u8]> = alpns.iter().map(Vec::as_slice).collect();
    polymorph_tls_quinn::rpk_server_config(&rpk_identity(identity)?, &alpns)
}

fn rpk_identity(identity: &Identity) -> Result<RpkIdentity, Error> {
    RpkIdentity::external(identity.signing_key())
        .map_err(|e| Error::General(format!("identity is not rpk-shaped: {e}")))
}
