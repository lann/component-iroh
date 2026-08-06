//! WebRTC data channels as an iroh `CustomTransport` (spike).
//!
//! The guest side is a thin poll adapter over a synthetic UDP socket: the
//! host bridge (`host/webrtc-bridge.mjs`) owns real peer connections
//! through the polymorph-webrtc-datachannels host module and moves each
//! datagram through an unreliable, unordered data channel. Addressing
//! follows the `TestTransport` convention: `CustomAddr` data is the
//! peer's `EndpointId`, so the bridge pairs channels by endpoint
//! identity.
//!
//! Bridge protocol on the synthetic network (bridge address 127.0.0.1:2,
//! tag byte first):
//!
//! - guest -> bridge `0x00 <32B own endpoint id>`: bind this socket to
//!   that identity
//! - guest -> bridge `0x01 <32B dst endpoint id> <bytes>`: one datagram
//! - bridge -> guest `0x01 <32B src endpoint id> <bytes>`: one datagram
//!
//! Datagrams to a peer whose channel is still connecting are dropped by
//! the bridge — QUIC path probes retransmit, which is exactly the
//! machinery under test.

use std::{
    io,
    net::{Ipv4Addr, SocketAddr},
    sync::Arc,
    task::{Context, Poll},
};

use iroh::endpoint::transports::{
    CustomEndpoint, CustomSender, CustomTransport, RecvInfo, Transmit,
};
use iroh::EndpointId;
use iroh_base::CustomAddr;

/// "WRTC". Spike-local; publishing it means a PR against upstream's
/// TRANSPORTS.md registry.
pub const WEBRTC_TRANSPORT_ID: u64 = 0x5752_5443;

const BRIDGE_PORT: u16 = 2;
const TAG_REGISTER: u8 = 0x00;
const TAG_DATAGRAM: u8 = 0x01;
const ID_LEN: usize = 32;

fn bridge_addr() -> SocketAddr {
    (Ipv4Addr::LOCALHOST, BRIDGE_PORT).into()
}

/// The webrtc custom address of an endpoint.
pub fn to_custom_addr(id: EndpointId) -> CustomAddr {
    CustomAddr::from_parts(WEBRTC_TRANSPORT_ID, id.as_bytes())
}

#[derive(Debug)]
pub struct WebrtcTransport {
    me: EndpointId,
}

impl WebrtcTransport {
    pub fn new(me: EndpointId) -> Arc<Self> {
        Arc::new(Self { me })
    }
}

impl CustomTransport for WebrtcTransport {
    fn bind(&self) -> io::Result<Box<dyn CustomEndpoint>> {
        let std_sock = std::net::UdpSocket::bind((Ipv4Addr::LOCALHOST, 0))?;
        // Register while the socket is still blocking-capable: `bind` is
        // synchronous, so the registration must not need the reactor.
        let mut reg = [0u8; 1 + ID_LEN];
        reg[0] = TAG_REGISTER;
        reg[1..].copy_from_slice(self.me.as_bytes());
        std_sock.send_to(&reg, bridge_addr())?;
        std_sock.set_nonblocking(true)?;
        let sock = tokio::net::UdpSocket::from_std(std_sock)?;
        Ok(Box::new(WebrtcEndpoint {
            sock: Arc::new(sock),
            me: self.me,
            addrs: n0_watcher::Watchable::new(vec![to_custom_addr(self.me)]),
            buf: vec![0u8; 2048],
        }))
    }
}

#[derive(Debug)]
struct WebrtcEndpoint {
    sock: Arc<tokio::net::UdpSocket>,
    me: EndpointId,
    addrs: n0_watcher::Watchable<Vec<CustomAddr>>,
    buf: Vec<u8>,
}

impl CustomEndpoint for WebrtcEndpoint {
    fn watch_local_addrs(&self) -> n0_watcher::Direct<Vec<CustomAddr>> {
        self.addrs.watch()
    }

    fn create_sender(&self) -> Arc<dyn CustomSender> {
        Arc::new(WebrtcSender {
            sock: self.sock.clone(),
        })
    }

    fn poll_recv(
        &mut self,
        cx: &mut Context,
        bufs: &mut [io::IoSliceMut<'_>],
        metas: &mut [noq_udp::RecvMeta],
        recv_infos: &mut [RecvInfo],
    ) -> Poll<io::Result<usize>> {
        if bufs.is_empty() {
            return Poll::Ready(Ok(0));
        }
        loop {
            let mut rb = tokio::io::ReadBuf::new(&mut self.buf);
            match self.sock.poll_recv_from(cx, &mut rb) {
                Poll::Pending => return Poll::Pending,
                Poll::Ready(Err(e)) => return Poll::Ready(Err(e)),
                Poll::Ready(Ok(_from)) => {
                    let filled = rb.filled();
                    if filled.len() <= 1 + ID_LEN || filled[0] != TAG_DATAGRAM {
                        continue;
                    }
                    let src: &[u8] = &filled[1..1 + ID_LEN];
                    let payload = &filled[1 + ID_LEN..];
                    if bufs[0].len() < payload.len() {
                        continue;
                    }
                    bufs[0][..payload.len()].copy_from_slice(payload);
                    metas[0].len = payload.len();
                    metas[0].stride = payload.len();
                    recv_infos[0] = RecvInfo::new(
                        CustomAddr::from_parts(WEBRTC_TRANSPORT_ID, src),
                        Some(to_custom_addr(self.me)),
                    );
                    return Poll::Ready(Ok(1));
                }
            }
        }
    }
}

#[derive(Debug)]
struct WebrtcSender {
    sock: Arc<tokio::net::UdpSocket>,
}

impl CustomSender for WebrtcSender {
    fn is_valid_send_addr(&self, addr: &CustomAddr) -> bool {
        addr.id() == WEBRTC_TRANSPORT_ID && addr.data().len() == ID_LEN
    }

    fn poll_send(
        &self,
        cx: &mut Context,
        dst: &CustomAddr,
        _src: Option<&CustomAddr>,
        transmit: &Transmit<'_>,
    ) -> Poll<io::Result<()>> {
        // `max_transmit_segments` is left at its default of 1, so a
        // transmit is a single datagram.
        debug_assert!(
            transmit
                .segment_size
                .is_none_or(|s| s >= transmit.contents.len()),
            "GSO batching is disabled for this transport"
        );
        let mut frame = Vec::with_capacity(1 + ID_LEN + transmit.contents.len());
        frame.push(TAG_DATAGRAM);
        frame.extend_from_slice(dst.data());
        frame.extend_from_slice(transmit.contents);
        match self.sock.poll_send_to(cx, &frame, bridge_addr()) {
            Poll::Pending => Poll::Pending,
            Poll::Ready(Ok(_)) => Poll::Ready(Ok(())),
            Poll::Ready(Err(e)) => Poll::Ready(Err(e)),
        }
    }
}
