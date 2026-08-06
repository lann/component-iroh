//! The wasi relay connection: a pre-connected websocket carried as
//! datagrams over a synthetic UDP socket (the udp-wake pattern from
//! polymorph-iroh#14 / #18).
//!
//! The host-side bridge owns the actual websocket (in browsers, the
//! polymorph-websocket host module over the W3C `WebSocket` API). The
//! guest reaches it through the well-known bridge address `127.0.0.1:1`
//! on the synthetic network:
//!
//! - guest -> bridge `0x00 <url> '\n' <proto,proto>`: open a websocket
//! - bridge -> guest `0x00 <negotiated-subprotocol>`: open acknowledged
//! - either direction `0x01 <bytes>`: one websocket binary message
//! - bridge -> guest `0x02`: the websocket closed or failed
//!
//! One datagram = one websocket message = one relay frame, so this type
//! replaces `WsBytesFramed` wholesale: it is the `BytesStreamSink` the
//! in-band relay handshake and the relay protocol codec run over. Like
//! the browser path it exports no TLS keying material, which routes the
//! handshake down the challenge-response branch.

use std::{
    io,
    net::{Ipv4Addr, SocketAddr},
    pin::Pin,
    task::{Context, Poll},
};

use bytes::Bytes;
use n0_error::{AnyError, anyerr};
use n0_future::{Sink, Stream};
use tokio::{io::ReadBuf, net::UdpSocket};
use url::Url;

use crate::ExportKeyingMaterial;

const BRIDGE: SocketAddr = SocketAddr::new(std::net::IpAddr::V4(Ipv4Addr::LOCALHOST), 1);

const TAG_CONTROL: u8 = 0x00;
const TAG_MESSAGE: u8 = 0x01;
const TAG_CLOSED: u8 = 0x02;

/// Maximum websocket message the pipe accepts (relay frames are bounded
/// well below this).
const MAX_MESSAGE: usize = 1 << 16;

#[derive(Debug)]
pub(crate) struct DatagramPipe {
    sock: UdpSocket,
    recv_buf: Vec<u8>,
    pending_send: Option<Vec<u8>>,
}

impl DatagramPipe {
    /// Opens a websocket through the bridge and returns the pipe plus the
    /// negotiated subprotocol.
    pub(crate) async fn connect(
        dial_url: &Url,
        protocols: impl Iterator<Item = &'static str>,
    ) -> io::Result<(Self, String)> {
        let sock = UdpSocket::bind((Ipv4Addr::LOCALHOST, 0)).await?;

        let protocols = protocols.collect::<Vec<_>>().join(",");
        let mut msg = vec![TAG_CONTROL];
        msg.extend_from_slice(dial_url.as_str().as_bytes());
        msg.push(b'\n');
        msg.extend_from_slice(protocols.as_bytes());
        sock.send_to(&msg, BRIDGE).await?;

        let mut buf = vec![0u8; 4096];
        loop {
            let (n, from) = sock.recv_from(&mut buf).await?;
            if from != BRIDGE || n == 0 {
                continue;
            }
            match buf[0] {
                TAG_CONTROL => {
                    let proto = String::from_utf8_lossy(&buf[1..n]).to_string();
                    return Ok((
                        Self {
                            sock,
                            recv_buf: vec![0u8; MAX_MESSAGE + 1],
                            pending_send: None,
                        },
                        proto,
                    ));
                }
                TAG_CLOSED => {
                    return Err(io::Error::other("bridge reported websocket connect failure"));
                }
                _ => continue,
            }
        }
    }
}

impl Stream for DatagramPipe {
    type Item = Result<Bytes, AnyError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        let this = self.get_mut();
        loop {
            let mut rb = ReadBuf::new(&mut this.recv_buf);
            match this.sock.poll_recv_from(cx, &mut rb) {
                Poll::Pending => return Poll::Pending,
                Poll::Ready(Err(e)) => return Poll::Ready(Some(Err(anyerr!(e)))),
                Poll::Ready(Ok(from)) => {
                    if from != BRIDGE {
                        continue;
                    }
                    let filled = rb.filled();
                    if filled.is_empty() {
                        continue;
                    }
                    match filled[0] {
                        TAG_MESSAGE => {
                            return Poll::Ready(Some(Ok(Bytes::copy_from_slice(&filled[1..]))));
                        }
                        TAG_CLOSED => return Poll::Ready(None),
                        _ => continue,
                    }
                }
            }
        }
    }
}

impl Sink<Bytes> for DatagramPipe {
    type Error = AnyError;

    fn poll_ready(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        if self.pending_send.is_some() {
            self.poll_flush(cx)
        } else {
            Poll::Ready(Ok(()))
        }
    }

    fn start_send(self: Pin<&mut Self>, item: Bytes) -> Result<(), Self::Error> {
        let this = self.get_mut();
        debug_assert!(this.pending_send.is_none(), "start_send without poll_ready");
        let mut frame = Vec::with_capacity(item.len() + 1);
        frame.push(TAG_MESSAGE);
        frame.extend_from_slice(&item);
        this.pending_send = Some(frame);
        Ok(())
    }

    fn poll_flush(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        let this = self.get_mut();
        if let Some(frame) = &this.pending_send {
            match this.sock.poll_send_to(cx, frame, BRIDGE) {
                Poll::Pending => return Poll::Pending,
                Poll::Ready(Err(e)) => return Poll::Ready(Err(anyerr!(e))),
                Poll::Ready(Ok(_)) => this.pending_send = None,
            }
        }
        Poll::Ready(Ok(()))
    }

    fn poll_close(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.poll_flush(cx)
    }
}

impl ExportKeyingMaterial for DatagramPipe {
    fn export_keying_material<T: AsMut<[u8]>>(
        &self,
        _output: T,
        _label: &[u8],
        _context: Option<&[u8]>,
    ) -> Option<T> {
        None
    }
}
