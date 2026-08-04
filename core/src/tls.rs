//! Raw-public-key TLS 1.3 configuration (RFC 7250), following upstream
//! iroh's shape: the certificate message carries the bare Ed25519 SPKI,
//! both sides authenticate with Ed25519 handshake signatures, and the
//! peer's public key *is* its identity.
//!
//! What a verified connection authenticates: possession of the private key
//! behind the presented SPKI — nothing else. The client additionally pins
//! the server's SPKI to the endpoint ID it dialed.

use std::sync::Arc;

use rustls::client::danger::{HandshakeSignatureValid, ServerCertVerified, ServerCertVerifier};
use rustls::client::AlwaysResolvesClientRawPublicKeys;
use rustls::crypto::{verify_tls13_signature_with_raw_key, WebPkiSupportedAlgorithms};
use rustls::pki_types::{CertificateDer, ServerName, SubjectPublicKeyInfoDer, UnixTime};
use rustls::server::danger::{ClientCertVerified, ClientCertVerifier};
use rustls::server::AlwaysResolvesServerRawPublicKeys;
use rustls::{DigitallySignedStruct, DistinguishedName, Error, SignatureScheme};

use crate::crypto::sign::Identity;
use crate::crypto::{provider, verify_algorithms};

/// The SNI placeholder sent on outgoing connections; identity lives in the
/// SPKI pin, not the name.
pub const SERVER_NAME: &str = "endpoint.iroh.invalid";

/// DER prefix of an Ed25519 SubjectPublicKeyInfo (RFC 8410, algorithm
/// 1.3.101.112): the 32-byte key follows it.
const ED25519_SPKI_PREFIX: [u8; 12] = [
    0x30, 0x2a, 0x30, 0x05, 0x06, 0x03, 0x2b, 0x65, 0x70, 0x03, 0x21, 0x00,
];

/// The endpoint ID inside a raw-public-key "certificate", if it is a
/// well-formed Ed25519 SPKI.
pub fn endpoint_id_from_spki(spki: &[u8]) -> Option<[u8; 32]> {
    let (prefix, key) = spki.split_at_checked(ED25519_SPKI_PREFIX.len())?;
    if prefix != ED25519_SPKI_PREFIX {
        return None;
    }
    key.try_into().ok()
}

/// A TLS 1.3 client config authenticating as `identity`, offering `alpns`,
/// and requiring the server to present exactly `expected_server`'s key.
pub fn client_config(
    identity: &Identity,
    expected_server: [u8; 32],
    alpns: Vec<Vec<u8>>,
) -> Result<rustls::ClientConfig, Error> {
    let mut config = rustls::ClientConfig::builder_with_provider(Arc::new(provider()))
        .with_protocol_versions(&[&rustls::version::TLS13])?
        .dangerous()
        .with_custom_certificate_verifier(Arc::new(ServerIdentityVerifier {
            expected_spki: spki_for(expected_server),
            algs: verify_algorithms(),
        }))
        .with_client_cert_resolver(Arc::new(AlwaysResolvesClientRawPublicKeys::new(Arc::new(
            identity.certified_key(),
        ))));
    config.alpn_protocols = alpns;
    Ok(config)
}

/// A TLS 1.3 server config authenticating as `identity`, serving `alpns`,
/// and requiring clients to present (and prove) an Ed25519 raw public key.
pub fn server_config(
    identity: &Identity,
    alpns: Vec<Vec<u8>>,
) -> Result<rustls::ServerConfig, Error> {
    let mut config = rustls::ServerConfig::builder_with_provider(Arc::new(provider()))
        .with_protocol_versions(&[&rustls::version::TLS13])?
        .with_client_cert_verifier(Arc::new(ClientIdentityVerifier {
            algs: verify_algorithms(),
        }))
        .with_cert_resolver(Arc::new(AlwaysResolvesServerRawPublicKeys::new(Arc::new(
            identity.certified_key(),
        ))));
    config.alpn_protocols = alpns;
    Ok(config)
}

fn spki_for(endpoint_id: [u8; 32]) -> Vec<u8> {
    let mut spki = ED25519_SPKI_PREFIX.to_vec();
    spki.extend_from_slice(&endpoint_id);
    spki
}

/// Pins the server's presented SPKI to the dialed endpoint ID and verifies
/// its handshake signature through the webcrypto-backed algorithm table.
#[derive(Debug)]
struct ServerIdentityVerifier {
    expected_spki: Vec<u8>,
    algs: WebPkiSupportedAlgorithms,
}

impl ServerCertVerifier for ServerIdentityVerifier {
    fn verify_server_cert(
        &self,
        end_entity: &CertificateDer<'_>,
        intermediates: &[CertificateDer<'_>],
        _server_name: &ServerName<'_>,
        _ocsp_response: &[u8],
        _now: UnixTime,
    ) -> Result<ServerCertVerified, Error> {
        if !intermediates.is_empty() {
            return Err(Error::General(
                "raw public keys carry no intermediates".into(),
            ));
        }
        if end_entity.as_ref() != self.expected_spki {
            return Err(Error::General(
                "server key does not match the dialed endpoint id".into(),
            ));
        }
        Ok(ServerCertVerified::assertion())
    }

    fn verify_tls12_signature(
        &self,
        _message: &[u8],
        _cert: &CertificateDer<'_>,
        _dss: &DigitallySignedStruct,
    ) -> Result<HandshakeSignatureValid, Error> {
        Err(Error::General("TLS 1.2 is not supported".into()))
    }

    fn verify_tls13_signature(
        &self,
        message: &[u8],
        cert: &CertificateDer<'_>,
        dss: &DigitallySignedStruct,
    ) -> Result<HandshakeSignatureValid, Error> {
        verify_tls13_signature_with_raw_key(
            message,
            &SubjectPublicKeyInfoDer::from(cert.as_ref()),
            dss,
            &self.algs,
        )
    }

    fn supported_verify_schemes(&self) -> Vec<SignatureScheme> {
        vec![SignatureScheme::ED25519]
    }

    fn requires_raw_public_keys(&self) -> bool {
        true
    }
}

/// Accepts any client presenting a well-formed Ed25519 raw public key whose
/// handshake signature verifies; the application reads the authenticated
/// key as the peer's identity after the handshake.
#[derive(Debug)]
struct ClientIdentityVerifier {
    algs: WebPkiSupportedAlgorithms,
}

impl ClientCertVerifier for ClientIdentityVerifier {
    fn root_hint_subjects(&self) -> &[DistinguishedName] {
        &[]
    }

    fn verify_client_cert(
        &self,
        end_entity: &CertificateDer<'_>,
        intermediates: &[CertificateDer<'_>],
        _now: UnixTime,
    ) -> Result<ClientCertVerified, Error> {
        if !intermediates.is_empty() {
            return Err(Error::General(
                "raw public keys carry no intermediates".into(),
            ));
        }
        if endpoint_id_from_spki(end_entity.as_ref()).is_none() {
            return Err(Error::General("client key is not an Ed25519 SPKI".into()));
        }
        Ok(ClientCertVerified::assertion())
    }

    fn verify_tls12_signature(
        &self,
        _message: &[u8],
        _cert: &CertificateDer<'_>,
        _dss: &DigitallySignedStruct,
    ) -> Result<HandshakeSignatureValid, Error> {
        Err(Error::General("TLS 1.2 is not supported".into()))
    }

    fn verify_tls13_signature(
        &self,
        message: &[u8],
        cert: &CertificateDer<'_>,
        dss: &DigitallySignedStruct,
    ) -> Result<HandshakeSignatureValid, Error> {
        verify_tls13_signature_with_raw_key(
            message,
            &SubjectPublicKeyInfoDer::from(cert.as_ref()),
            dss,
            &self.algs,
        )
    }

    fn supported_verify_schemes(&self) -> Vec<SignatureScheme> {
        vec![SignatureScheme::ED25519]
    }

    fn requires_raw_public_keys(&self) -> bool {
        true
    }
}
