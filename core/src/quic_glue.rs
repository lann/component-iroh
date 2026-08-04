//! quinn-proto's crypto traits implemented over `rustls::quic`, with the
//! Retry-integrity AEAD in-guest via RustCrypto.
//!
//! This is quinn-proto's own rustls glue (`quinn_proto::crypto::rustls`,
//! which its feature flags tie to ring/aws-lc-rs) re-expressed against this
//! crate's provider, so quinn-proto builds with no default features and no
//! native crypto. The `Session` logic is unchanged from upstream.

use std::any::Any;
use std::io;
use std::sync::Arc;

use aes_gcm::{AeadInPlace, Aes128Gcm, KeyInit};
use bytes::BytesMut;
use quinn_proto::crypto::{
    self, CryptoError, ExportKeyingMaterialError, HeaderKey, KeyPair, Keys, UnsupportedVersion,
};
use quinn_proto::transport_parameters::TransportParameters;
use quinn_proto::{ConnectError, ConnectionId, Side, TransportError, TransportErrorCode};
use rustls::pki_types::ServerName;
use rustls::quic::{
    Connection, HeaderProtectionKey, KeyChange, PacketKey, Secrets, Suite, Version,
};

use crate::crypto::suite::TLS13_AES_128_GCM_SHA256;

fn to_rustls_side(s: Side) -> rustls::Side {
    match s {
        Side::Client => rustls::Side::Client,
        Side::Server => rustls::Side::Server,
    }
}

/// The Initial-packet suite: AES-128-GCM-SHA256, as RFC 9001 requires.
pub fn initial_suite() -> Suite {
    TLS13_AES_128_GCM_SHA256
        .quic_suite()
        .expect("the spike's suite serves QUIC")
}

/// A rustls TLS session driven through quinn-proto's `crypto::Session`.
pub struct TlsSession {
    version: Version,
    got_handshake_data: bool,
    next_secrets: Option<Secrets>,
    inner: Connection,
    suite: Suite,
}

impl TlsSession {
    fn side(&self) -> Side {
        match self.inner {
            Connection::Client(_) => Side::Client,
            Connection::Server(_) => Side::Server,
        }
    }
}

impl crypto::Session for TlsSession {
    fn initial_keys(&self, dst_cid: &ConnectionId, side: Side) -> Keys {
        initial_keys(self.version, *dst_cid, side, &self.suite)
    }

    fn handshake_data(&self) -> Option<Box<dyn Any>> {
        if !self.got_handshake_data {
            return None;
        }
        Some(Box::new(HandshakeData {
            protocol: self.inner.alpn_protocol().map(|x| x.into()),
            server_name: match self.inner {
                Connection::Client(_) => None,
                Connection::Server(ref session) => session.server_name().map(|x| x.into()),
            },
        }))
    }

    /// The `Any` payload is `Vec<rustls::pki_types::CertificateDer>`; with
    /// raw public keys the single element is the peer's SPKI.
    fn peer_identity(&self) -> Option<Box<dyn Any>> {
        self.inner.peer_certificates().map(|v| -> Box<dyn Any> {
            Box::new(
                v.iter()
                    .map(|v| v.clone().into_owned())
                    .collect::<Vec<rustls::pki_types::CertificateDer<'static>>>(),
            )
        })
    }

    fn early_crypto(&self) -> Option<(Box<dyn HeaderKey>, Box<dyn crypto::PacketKey>)> {
        let keys = self.inner.zero_rtt_keys()?;
        Some((
            Box::new(HeaderKeyAdapter(keys.header)),
            Box::new(PacketKeyAdapter(keys.packet)),
        ))
    }

    fn early_data_accepted(&self) -> Option<bool> {
        match self.inner {
            Connection::Client(ref session) => Some(session.is_early_data_accepted()),
            _ => None,
        }
    }

    fn is_handshaking(&self) -> bool {
        self.inner.is_handshaking()
    }

    fn read_handshake(&mut self, buf: &[u8]) -> Result<bool, TransportError> {
        self.inner.read_hs(buf).map_err(|e| {
            if let Some(alert) = self.inner.alert() {
                TransportError {
                    code: TransportErrorCode::crypto(alert.into()),
                    frame: None,
                    reason: e.to_string(),
                }
            } else {
                TransportError {
                    code: TransportErrorCode::PROTOCOL_VIOLATION,
                    frame: None,
                    reason: format!("TLS error: {e}"),
                }
            }
        })?;
        if !self.got_handshake_data {
            let have_server_name = match self.inner {
                Connection::Client(_) => false,
                Connection::Server(ref session) => session.server_name().is_some(),
            };
            if self.inner.alpn_protocol().is_some() || have_server_name || !self.is_handshaking() {
                self.got_handshake_data = true;
                return Ok(true);
            }
        }
        Ok(false)
    }

    fn transport_parameters(&self) -> Result<Option<TransportParameters>, TransportError> {
        match self.inner.quic_transport_parameters() {
            None => Ok(None),
            Some(buf) => match TransportParameters::read(self.side(), &mut io::Cursor::new(buf)) {
                Ok(params) => Ok(Some(params)),
                Err(e) => Err(e.into()),
            },
        }
    }

    fn write_handshake(&mut self, buf: &mut Vec<u8>) -> Option<Keys> {
        let keys = match self.inner.write_hs(buf)? {
            KeyChange::Handshake { keys } => keys,
            KeyChange::OneRtt { keys, next } => {
                self.next_secrets = Some(next);
                keys
            }
        };

        Some(Keys {
            header: KeyPair {
                local: Box::new(HeaderKeyAdapter(keys.local.header)),
                remote: Box::new(HeaderKeyAdapter(keys.remote.header)),
            },
            packet: KeyPair {
                local: Box::new(PacketKeyAdapter(keys.local.packet)),
                remote: Box::new(PacketKeyAdapter(keys.remote.packet)),
            },
        })
    }

    fn next_1rtt_keys(&mut self) -> Option<KeyPair<Box<dyn crypto::PacketKey>>> {
        let secrets = self.next_secrets.as_mut()?;
        let keys = secrets.next_packet_keys();
        Some(KeyPair {
            local: Box::new(PacketKeyAdapter(keys.local)),
            remote: Box::new(PacketKeyAdapter(keys.remote)),
        })
    }

    fn is_valid_retry(&self, orig_dst_cid: &ConnectionId, header: &[u8], payload: &[u8]) -> bool {
        let tag_start = match payload.len().checked_sub(16) {
            Some(x) => x,
            None => return false,
        };

        let mut pseudo_packet =
            Vec::with_capacity(header.len() + payload.len() + orig_dst_cid.len() + 1);
        pseudo_packet.push(orig_dst_cid.len() as u8);
        pseudo_packet.extend_from_slice(orig_dst_cid);
        pseudo_packet.extend_from_slice(header);
        let tag_start = tag_start + pseudo_packet.len();
        pseudo_packet.extend_from_slice(payload);

        let (aad, tag) = pseudo_packet.split_at(tag_start);
        retry_key(self.version)
            .decrypt_in_place_detached(
                &retry_nonce(self.version).into(),
                aad,
                &mut [],
                aes_gcm::Tag::from_slice(tag),
            )
            .is_ok()
    }

    fn export_keying_material(
        &self,
        output: &mut [u8],
        label: &[u8],
        context: &[u8],
    ) -> Result<(), ExportKeyingMaterialError> {
        self.inner
            .export_keying_material(output, label, Some(context))
            .map_err(|_| ExportKeyingMaterialError)?;
        Ok(())
    }
}

const RETRY_INTEGRITY_KEY_DRAFT: [u8; 16] = [
    0xcc, 0xce, 0x18, 0x7e, 0xd0, 0x9a, 0x09, 0xd0, 0x57, 0x28, 0x15, 0x5a, 0x6c, 0xb9, 0x6b, 0xe1,
];
const RETRY_INTEGRITY_NONCE_DRAFT: [u8; 12] = [
    0xe5, 0x49, 0x30, 0xf9, 0x7f, 0x21, 0x36, 0xf0, 0x53, 0x0a, 0x8c, 0x1c,
];

const RETRY_INTEGRITY_KEY_V1: [u8; 16] = [
    0xbe, 0x0c, 0x69, 0x0b, 0x9f, 0x66, 0x57, 0x5a, 0x1d, 0x76, 0x6b, 0x54, 0xe3, 0x68, 0xc8, 0x4e,
];
const RETRY_INTEGRITY_NONCE_V1: [u8; 12] = [
    0x46, 0x15, 0x99, 0xd3, 0x5d, 0x63, 0x2b, 0xf2, 0x23, 0x98, 0x25, 0xbb,
];

fn retry_key(version: Version) -> Aes128Gcm {
    let key = match version {
        Version::V1 => RETRY_INTEGRITY_KEY_V1,
        Version::V1Draft => RETRY_INTEGRITY_KEY_DRAFT,
        _ => unreachable!(),
    };
    Aes128Gcm::new_from_slice(&key).expect("16-byte retry key")
}

fn retry_nonce(version: Version) -> [u8; 12] {
    match version {
        Version::V1 => RETRY_INTEGRITY_NONCE_V1,
        Version::V1Draft => RETRY_INTEGRITY_NONCE_DRAFT,
        _ => unreachable!(),
    }
}

/// Newtype over rustls's header-protection key (quinn's `HeaderKey` and
/// rustls's key are both foreign here, so the impl needs a local type).
struct HeaderKeyAdapter(Box<dyn HeaderProtectionKey>);

impl crypto::HeaderKey for HeaderKeyAdapter {
    fn decrypt(&self, pn_offset: usize, packet: &mut [u8]) {
        let (header, sample) = packet.split_at_mut(pn_offset + 4);
        let (first, rest) = header.split_at_mut(1);
        let pn_end = Ord::min(pn_offset + 3, rest.len());
        self.0
            .decrypt_in_place(
                &sample[..self.sample_size()],
                &mut first[0],
                &mut rest[pn_offset - 1..pn_end],
            )
            .unwrap();
    }

    fn encrypt(&self, pn_offset: usize, packet: &mut [u8]) {
        let (header, sample) = packet.split_at_mut(pn_offset + 4);
        let (first, rest) = header.split_at_mut(1);
        let pn_end = Ord::min(pn_offset + 3, rest.len());
        self.0
            .encrypt_in_place(
                &sample[..self.sample_size()],
                &mut first[0],
                &mut rest[pn_offset - 1..pn_end],
            )
            .unwrap();
    }

    fn sample_size(&self) -> usize {
        self.0.sample_len()
    }
}

/// Authentication data exposed once the TLS handshake has produced it.
pub struct HandshakeData {
    /// The negotiated application protocol, if ALPN is in use.
    pub protocol: Option<Vec<u8>>,
    /// The server name the client sent; `None` on outgoing connections.
    pub server_name: Option<String>,
}

/// A QUIC-compatible TLS client configuration over a caller-built
/// `rustls::ClientConfig` (which must be TLS 1.3-only and carry a provider
/// whose AES-128-GCM-SHA256 suite serves QUIC).
pub struct QuicClientConfig {
    inner: Arc<rustls::ClientConfig>,
    initial: Suite,
}

impl QuicClientConfig {
    pub fn new(inner: Arc<rustls::ClientConfig>) -> Self {
        Self {
            inner,
            initial: initial_suite(),
        }
    }
}

impl crypto::ClientConfig for QuicClientConfig {
    fn start_session(
        self: Arc<Self>,
        version: u32,
        server_name: &str,
        params: &TransportParameters,
    ) -> Result<Box<dyn crypto::Session>, ConnectError> {
        let version = interpret_version(version)?;
        Ok(Box::new(TlsSession {
            version,
            got_handshake_data: false,
            next_secrets: None,
            inner: rustls::quic::Connection::Client(
                rustls::quic::ClientConnection::new(
                    self.inner.clone(),
                    version,
                    ServerName::try_from(server_name)
                        .map_err(|_| ConnectError::InvalidServerName(server_name.into()))?
                        .to_owned(),
                    to_vec(params),
                )
                .unwrap(),
            ),
            suite: self.initial,
        }))
    }
}

/// A QUIC-compatible TLS server configuration; see [`QuicClientConfig`].
pub struct QuicServerConfig {
    inner: Arc<rustls::ServerConfig>,
    initial: Suite,
}

impl QuicServerConfig {
    pub fn new(inner: Arc<rustls::ServerConfig>) -> Self {
        Self {
            inner,
            initial: initial_suite(),
        }
    }
}

impl crypto::ServerConfig for QuicServerConfig {
    fn start_session(
        self: Arc<Self>,
        version: u32,
        params: &TransportParameters,
    ) -> Box<dyn crypto::Session> {
        // `start_session()` is never called if `initial_keys()` rejected
        // `version`.
        let version = interpret_version(version).unwrap();
        Box::new(TlsSession {
            version,
            got_handshake_data: false,
            next_secrets: None,
            inner: rustls::quic::Connection::Server(
                rustls::quic::ServerConnection::new(self.inner.clone(), version, to_vec(params))
                    .unwrap(),
            ),
            suite: self.initial,
        })
    }

    fn initial_keys(
        &self,
        version: u32,
        dst_cid: &ConnectionId,
    ) -> Result<Keys, UnsupportedVersion> {
        let version = interpret_version(version)?;
        Ok(initial_keys(version, *dst_cid, Side::Server, &self.initial))
    }

    fn retry_tag(&self, version: u32, orig_dst_cid: &ConnectionId, packet: &[u8]) -> [u8; 16] {
        let version = interpret_version(version).unwrap();
        let mut pseudo_packet = Vec::with_capacity(packet.len() + orig_dst_cid.len() + 1);
        pseudo_packet.push(orig_dst_cid.len() as u8);
        pseudo_packet.extend_from_slice(orig_dst_cid);
        pseudo_packet.extend_from_slice(packet);

        let tag = retry_key(version)
            .encrypt_in_place_detached(&retry_nonce(version).into(), &pseudo_packet, &mut [])
            .expect("AES-GCM seal over empty plaintext");
        let mut result = [0; 16];
        result.copy_from_slice(tag.as_slice());
        result
    }
}

fn to_vec(params: &TransportParameters) -> Vec<u8> {
    let mut bytes = Vec::new();
    params.write(&mut bytes);
    bytes
}

pub(crate) fn initial_keys(
    version: Version,
    dst_cid: ConnectionId,
    side: Side,
    suite: &Suite,
) -> Keys {
    let keys = suite.keys(&dst_cid, to_rustls_side(side), version);
    Keys {
        header: KeyPair {
            local: Box::new(HeaderKeyAdapter(keys.local.header)),
            remote: Box::new(HeaderKeyAdapter(keys.remote.header)),
        },
        packet: KeyPair {
            local: Box::new(PacketKeyAdapter(keys.local.packet)),
            remote: Box::new(PacketKeyAdapter(keys.remote.packet)),
        },
    }
}

/// Newtype over rustls's packet key (see [`HeaderKeyAdapter`]).
struct PacketKeyAdapter(Box<dyn PacketKey>);

impl crypto::PacketKey for PacketKeyAdapter {
    fn encrypt(&self, packet: u64, buf: &mut [u8], header_len: usize) {
        let (header, payload_tag) = buf.split_at_mut(header_len);
        let (payload, tag_storage) = payload_tag.split_at_mut(payload_tag.len() - self.tag_len());
        let tag = self.0.encrypt_in_place(packet, &*header, payload).unwrap();
        tag_storage.copy_from_slice(tag.as_ref());
    }

    fn decrypt(
        &self,
        packet: u64,
        header: &[u8],
        payload: &mut BytesMut,
    ) -> Result<(), CryptoError> {
        let plain = self
            .0
            .decrypt_in_place(packet, header, payload.as_mut())
            .map_err(|_| CryptoError)?;
        let plain_len = plain.len();
        payload.truncate(plain_len);
        Ok(())
    }

    fn tag_len(&self) -> usize {
        self.0.tag_len()
    }

    fn confidentiality_limit(&self) -> u64 {
        self.0.confidentiality_limit()
    }

    fn integrity_limit(&self) -> u64 {
        self.0.integrity_limit()
    }
}

fn interpret_version(version: u32) -> Result<Version, UnsupportedVersion> {
    match version {
        0xff00_001d..=0xff00_0020 => Ok(Version::V1Draft),
        0x0000_0001 | 0xff00_0021..=0xff00_0022 => Ok(Version::V1),
        _ => Err(UnsupportedVersion),
    }
}

/// quinn's reset-token HMAC (HMAC-SHA-256; reset tokens use the first 16
/// bytes of the 32-byte tag).
pub struct HmacSha256ResetKey([u8; 32]);

impl HmacSha256ResetKey {
    pub fn new(key: [u8; 32]) -> Self {
        Self(key)
    }
}

impl crypto::HmacKey for HmacSha256ResetKey {
    fn sign(&self, data: &[u8], signature_out: &mut [u8]) {
        use hmac::Mac;
        let mut mac = <hmac::Hmac<sha2::Sha256> as Mac>::new_from_slice(&self.0)
            .expect("HMAC accepts any key length");
        mac.update(data);
        signature_out.copy_from_slice(&mac.finalize().into_bytes()[..signature_out.len().min(32)]);
    }

    fn signature_len(&self) -> usize {
        32
    }

    fn verify(&self, data: &[u8], signature: &[u8]) -> Result<(), CryptoError> {
        use hmac::Mac;
        let mut mac = <hmac::Hmac<sha2::Sha256> as Mac>::new_from_slice(&self.0)
            .expect("HMAC accepts any key length");
        mac.update(data);
        mac.verify_slice(signature).map_err(|_| CryptoError)
    }
}

/// quinn's retry/NEW_TOKEN sealing key: HKDF-SHA-256 expand of the random
/// input, keying AES-256-GCM with a zero nonce (one random input per seal,
/// matching upstream's ring-based semantics).
pub struct HkdfHandshakeTokenKey(hkdf::Hkdf<sha2::Sha256>);

impl HkdfHandshakeTokenKey {
    pub fn new(master_key: &[u8]) -> Self {
        Self(hkdf::Hkdf::<sha2::Sha256>::new(None, master_key))
    }
}

impl crypto::HandshakeTokenKey for HkdfHandshakeTokenKey {
    fn aead_from_hkdf(&self, random_bytes: &[u8]) -> Box<dyn crypto::AeadKey> {
        let mut key = [0u8; 32];
        self.0
            .expand(random_bytes, &mut key)
            .expect("32 bytes is a valid HKDF-SHA256 output length");
        Box::new(TokenAeadKey(
            aes_gcm::Aes256Gcm::new_from_slice(&key).expect("32-byte AES-256 key"),
        ))
    }
}

struct TokenAeadKey(aes_gcm::Aes256Gcm);

impl crypto::AeadKey for TokenAeadKey {
    fn seal(&self, data: &mut Vec<u8>, additional_data: &[u8]) -> Result<(), CryptoError> {
        let nonce = [0u8; 12];
        let tag = self
            .0
            .encrypt_in_place_detached(&nonce.into(), additional_data, data)
            .map_err(|_| CryptoError)?;
        data.extend_from_slice(tag.as_slice());
        Ok(())
    }

    fn open<'a>(
        &self,
        data: &'a mut [u8],
        additional_data: &[u8],
    ) -> Result<&'a mut [u8], CryptoError> {
        if data.len() < 16 {
            return Err(CryptoError);
        }
        let plain_len = data.len() - 16;
        let nonce = [0u8; 12];
        let (body, tag) = data.split_at_mut(plain_len);
        self.0
            .decrypt_in_place_detached(
                &nonce.into(),
                additional_data,
                body,
                aes_gcm::Tag::from_slice(tag),
            )
            .map_err(|_| CryptoError)?;
        Ok(&mut data[..plain_len])
    }
}
