//! The TLS 1.3 cipher-suite half of the crypto split: SHA-256, HMAC/HKDF,
//! AES-128-GCM record protection, and the QUIC packet/header-protection
//! algorithms, all in-guest via RustCrypto.
//!
//! Per-packet operations (AEAD, header protection) deliberately run here
//! rather than through the `lann:webcrypto` boundary: record keys are
//! ephemeral and per-connection, and a per-packet WIT call is a hot-path
//! cost. The identity and key-exchange half lives in the sibling modules
//! and does cross that boundary.

use aes::cipher::{BlockEncrypt, KeyInit};
use aes_gcm::{AeadInPlace, Aes128Gcm};
use hmac::Mac;
use rustls::crypto::cipher::{
    make_tls13_aad, AeadKey, InboundOpaqueMessage, InboundPlainMessage, Iv, MessageDecrypter,
    MessageEncrypter, Nonce, OutboundOpaqueMessage, OutboundPlainMessage, PrefixedPayload,
    Tls13AeadAlgorithm, UnsupportedOperationError,
};
use rustls::crypto::tls13::HkdfUsingHmac;
use rustls::crypto::{hash, hmac as rustls_hmac, CipherSuiteCommon};
use rustls::{
    quic, CipherSuite, ConnectionTrafficSecrets, ContentType, Error, ProtocolVersion,
    Tls13CipherSuite,
};
use sha2::Digest;

/// TLS_AES_128_GCM_SHA256, the QUIC-mandatory suite: the spike's only suite.
pub static TLS13_AES_128_GCM_SHA256: &Tls13CipherSuite = &Tls13CipherSuite {
    common: CipherSuiteCommon {
        suite: CipherSuite::TLS13_AES_128_GCM_SHA256,
        hash_provider: &Sha256Hash,
        confidentiality_limit: 1 << 24,
    },
    hkdf_provider: &HkdfUsingHmac(&HmacSha256),
    aead_alg: &Aes128GcmRecord,
    quic: Some(&Aes128GcmQuic),
};

// --- SHA-256 -------------------------------------------------------------

struct Sha256Hash;

impl hash::Hash for Sha256Hash {
    fn start(&self) -> Box<dyn hash::Context> {
        Box::new(Sha256Context(sha2::Sha256::new()))
    }

    fn hash(&self, data: &[u8]) -> hash::Output {
        hash::Output::new(&sha2::Sha256::digest(data)[..])
    }

    fn output_len(&self) -> usize {
        32
    }

    fn algorithm(&self) -> hash::HashAlgorithm {
        hash::HashAlgorithm::SHA256
    }
}

struct Sha256Context(sha2::Sha256);

impl hash::Context for Sha256Context {
    fn fork_finish(&self) -> hash::Output {
        hash::Output::new(&self.0.clone().finalize()[..])
    }

    fn fork(&self) -> Box<dyn hash::Context> {
        Box::new(Self(self.0.clone()))
    }

    fn finish(self: Box<Self>) -> hash::Output {
        hash::Output::new(&self.0.finalize()[..])
    }

    fn update(&mut self, data: &[u8]) {
        self.0.update(data);
    }
}

// --- HMAC-SHA-256 (drives the TLS 1.3 key schedule via HkdfUsingHmac) ----

pub(crate) struct HmacSha256;

impl rustls_hmac::Hmac for HmacSha256 {
    fn with_key(&self, key: &[u8]) -> Box<dyn rustls_hmac::Key> {
        Box::new(HmacSha256Key(
            <hmac::Hmac<sha2::Sha256> as Mac>::new_from_slice(key)
                .expect("HMAC accepts any key length"),
        ))
    }

    fn hash_output_len(&self) -> usize {
        32
    }
}

struct HmacSha256Key(hmac::Hmac<sha2::Sha256>);

impl rustls_hmac::Key for HmacSha256Key {
    fn sign_concat(&self, first: &[u8], middle: &[&[u8]], last: &[u8]) -> rustls_hmac::Tag {
        let mut mac = self.0.clone();
        mac.update(first);
        for chunk in middle {
            mac.update(chunk);
        }
        mac.update(last);
        rustls_hmac::Tag::new(&mac.finalize().into_bytes()[..])
    }

    fn tag_len(&self) -> usize {
        32
    }
}

// --- AES-128-GCM TLS record protection ------------------------------------

const GCM_TAG_LEN: usize = 16;

struct Aes128GcmRecord;

impl Tls13AeadAlgorithm for Aes128GcmRecord {
    fn encrypter(&self, key: AeadKey, iv: Iv) -> Box<dyn MessageEncrypter> {
        Box::new(RecordEncrypter {
            key: Aes128Gcm::new_from_slice(key.as_ref()).expect("16-byte AES-128 key"),
            iv,
        })
    }

    fn decrypter(&self, key: AeadKey, iv: Iv) -> Box<dyn MessageDecrypter> {
        Box::new(RecordDecrypter {
            key: Aes128Gcm::new_from_slice(key.as_ref()).expect("16-byte AES-128 key"),
            iv,
        })
    }

    fn key_len(&self) -> usize {
        16
    }

    fn extract_keys(
        &self,
        key: AeadKey,
        iv: Iv,
    ) -> Result<ConnectionTrafficSecrets, UnsupportedOperationError> {
        Ok(ConnectionTrafficSecrets::Aes128Gcm { key, iv })
    }
}

struct RecordEncrypter {
    key: Aes128Gcm,
    iv: Iv,
}

impl MessageEncrypter for RecordEncrypter {
    fn encrypt(
        &mut self,
        msg: OutboundPlainMessage<'_>,
        seq: u64,
    ) -> Result<OutboundOpaqueMessage, Error> {
        let total_len = self.encrypted_payload_len(msg.payload.len());
        let mut payload = PrefixedPayload::with_capacity(total_len);
        payload.extend_from_chunks(&msg.payload);
        payload.extend_from_slice(&msg.typ.to_array());

        let nonce = Nonce::new(&self.iv, seq).0;
        let aad = make_tls13_aad(total_len);
        let tag = self
            .key
            .encrypt_in_place_detached(&nonce.into(), &aad, payload.as_mut())
            .map_err(|_| Error::EncryptError)?;
        payload.extend_from_slice(&tag);

        Ok(OutboundOpaqueMessage::new(
            ContentType::ApplicationData,
            ProtocolVersion::TLSv1_2,
            payload,
        ))
    }

    fn encrypted_payload_len(&self, payload_len: usize) -> usize {
        payload_len + 1 + GCM_TAG_LEN
    }
}

struct RecordDecrypter {
    key: Aes128Gcm,
    iv: Iv,
}

impl MessageDecrypter for RecordDecrypter {
    fn decrypt<'a>(
        &mut self,
        mut msg: InboundOpaqueMessage<'a>,
        seq: u64,
    ) -> Result<InboundPlainMessage<'a>, Error> {
        let payload = &mut msg.payload;
        if payload.len() < GCM_TAG_LEN {
            return Err(Error::DecryptError);
        }

        let nonce = Nonce::new(&self.iv, seq).0;
        let aad = make_tls13_aad(payload.len());
        let plain_len = payload.len() - GCM_TAG_LEN;
        let (body, tag) = payload.split_at_mut(plain_len);
        self.key
            .decrypt_in_place_detached(&nonce.into(), &aad, body, aes_gcm::Tag::from_slice(tag))
            .map_err(|_| Error::DecryptError)?;

        payload.truncate(plain_len);
        msg.into_tls13_unpadded_message()
    }
}

// --- QUIC packet protection (RFC 9001) -----------------------------------

struct Aes128GcmQuic;

impl quic::Algorithm for Aes128GcmQuic {
    fn packet_key(&self, key: AeadKey, iv: Iv) -> Box<dyn quic::PacketKey> {
        Box::new(QuicPacketKey {
            key: Aes128Gcm::new_from_slice(key.as_ref()).expect("16-byte AES-128 key"),
            iv,
        })
    }

    fn header_protection_key(&self, key: AeadKey) -> Box<dyn quic::HeaderProtectionKey> {
        Box::new(QuicHeaderKey(
            aes::Aes128::new_from_slice(key.as_ref()).expect("16-byte AES-128 key"),
        ))
    }

    fn aead_key_len(&self) -> usize {
        16
    }
}

struct QuicPacketKey {
    key: Aes128Gcm,
    iv: Iv,
}

impl quic::PacketKey for QuicPacketKey {
    fn encrypt_in_place(
        &self,
        packet_number: u64,
        header: &[u8],
        payload: &mut [u8],
    ) -> Result<quic::Tag, Error> {
        let nonce = Nonce::new(&self.iv, packet_number).0;
        let tag = self
            .key
            .encrypt_in_place_detached(&nonce.into(), header, payload)
            .map_err(|_| Error::EncryptError)?;
        Ok(quic::Tag::from(tag.as_slice()))
    }

    fn decrypt_in_place<'a>(
        &self,
        packet_number: u64,
        header: &[u8],
        payload: &'a mut [u8],
    ) -> Result<&'a [u8], Error> {
        if payload.len() < GCM_TAG_LEN {
            return Err(Error::DecryptError);
        }
        let plain_len = payload.len() - GCM_TAG_LEN;
        let nonce = Nonce::new(&self.iv, packet_number).0;
        let (body, tag) = payload.split_at_mut(plain_len);
        self.key
            .decrypt_in_place_detached(&nonce.into(), header, body, aes_gcm::Tag::from_slice(tag))
            .map_err(|_| Error::DecryptError)?;
        Ok(&payload[..plain_len])
    }

    fn tag_len(&self) -> usize {
        GCM_TAG_LEN
    }

    fn confidentiality_limit(&self) -> u64 {
        1 << 23
    }

    fn integrity_limit(&self) -> u64 {
        1 << 52
    }
}

/// AES-based header protection: the mask is one AES-ECB block over the
/// ciphertext sample (RFC 9001, section 5.4.3), applied per section 5.4.1.
struct QuicHeaderKey(aes::Aes128);

const HEADER_SAMPLE_LEN: usize = 16;

impl QuicHeaderKey {
    fn xor_in_place(
        &self,
        sample: &[u8],
        first: &mut u8,
        packet_number: &mut [u8],
        masked: bool,
    ) -> Result<(), Error> {
        if sample.len() != HEADER_SAMPLE_LEN {
            return Err(Error::General("sample of invalid length".into()));
        }
        let mut block = aes::Block::clone_from_slice(sample);
        self.0.encrypt_block(&mut block);
        let (first_mask, pn_mask) = block.split_first().expect("nonempty mask");

        if packet_number.len() > pn_mask.len() {
            return Err(Error::General("packet number too long".into()));
        }

        const LONG_HEADER_FORM: u8 = 0x80;
        let bits = match *first & LONG_HEADER_FORM == LONG_HEADER_FORM {
            true => 0x0f,
            false => 0x1f,
        };
        let first_plain = match masked {
            true => *first ^ (first_mask & bits),
            false => *first,
        };
        let pn_len = (first_plain & 0x03) as usize + 1;

        *first ^= first_mask & bits;
        for (dst, m) in packet_number.iter_mut().zip(pn_mask).take(pn_len) {
            *dst ^= m;
        }
        Ok(())
    }
}

impl quic::HeaderProtectionKey for QuicHeaderKey {
    fn encrypt_in_place(
        &self,
        sample: &[u8],
        first: &mut u8,
        packet_number: &mut [u8],
    ) -> Result<(), Error> {
        self.xor_in_place(sample, first, packet_number, false)
    }

    fn decrypt_in_place(
        &self,
        sample: &[u8],
        first: &mut u8,
        packet_number: &mut [u8],
    ) -> Result<(), Error> {
        self.xor_in_place(sample, first, packet_number, true)
    }

    fn sample_len(&self) -> usize {
        HEADER_SAMPLE_LEN
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use rustls::quic::{Keys, Version};
    use rustls::Side;

    /// RFC 9001, appendix A: client Initial keys derived from the published
    /// destination connection ID. Exercises the whole in-guest derivation
    /// path (HKDF over HMAC-SHA-256, AES-128-GCM packet key, AES header
    /// protection) against known answers.
    #[test]
    fn rfc9001_client_initial_keys() {
        let dcid = hex::decode("8394c8f03e515708").unwrap();
        let keys = Keys::initial(
            Version::V1,
            TLS13_AES_128_GCM_SHA256,
            TLS13_AES_128_GCM_SHA256.quic.unwrap(),
            &dcid,
            Side::Client,
        );

        // The key and IV are not directly observable through the trait
        // objects; verify behaviorally with A.2's header-protection step:
        // sample d1b1... yields mask 437b9aec36, so the unprotected first
        // byte 0xc3 and packet number 00000002 protect to 0xc0 / 7b9aec34.
        let mut first: u8 = 0xc3;
        let mut pn = [0x00u8, 0x00, 0x00, 0x02];
        let sample = hex::decode("d1b1c98dd7689fb8ec11d242b123dc9b").unwrap();
        keys.local
            .header
            .encrypt_in_place(&sample, &mut first, &mut pn)
            .unwrap();
        assert_eq!(first, 0xc0);
        assert_eq!(pn, [0x7b, 0x9a, 0xec, 0x34]);

        keys.local
            .header
            .decrypt_in_place(&sample, &mut first, &mut pn)
            .unwrap();
        assert_eq!(first, 0xc3);
        assert_eq!(pn, [0x00, 0x00, 0x00, 0x02]);
    }

    /// Packet-key seal/open roundtrip over the derived Initial keys: the
    /// client's local key must open under the server's remote key.
    #[test]
    fn initial_packet_key_roundtrip() {
        let dcid = hex::decode("8394c8f03e515708").unwrap();
        let client = Keys::initial(
            Version::V1,
            TLS13_AES_128_GCM_SHA256,
            TLS13_AES_128_GCM_SHA256.quic.unwrap(),
            &dcid,
            Side::Client,
        );
        let server = Keys::initial(
            Version::V1,
            TLS13_AES_128_GCM_SHA256,
            TLS13_AES_128_GCM_SHA256.quic.unwrap(),
            &dcid,
            Side::Server,
        );

        let header = b"fake header";
        let mut payload = b"hello initial".to_vec();
        let tag = client
            .local
            .packet
            .encrypt_in_place(0, header, &mut payload)
            .unwrap();
        payload.extend_from_slice(tag.as_ref());
        let plain = server
            .remote
            .packet
            .decrypt_in_place(0, header, &mut payload)
            .unwrap();
        assert_eq!(plain, b"hello initial");
    }
}
