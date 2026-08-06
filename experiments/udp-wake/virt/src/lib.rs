//! The portable virtualization layer (issue #14, PR #18): exports the wasi
//! 0.2 surface a tokio guest parks on, implemented over the host's wasi:io
//! plus one generic event source. Socket semantics live here — in guest
//! code — and every blocking path funnels into a single host
//! `wasi:io/poll#poll` call, the one import where JSPI suspension happens.
//!
//! Pollable mapping: each exported pollable is either a passthrough around
//! a host pollable (clock timers, stdio readiness), queue-backed (the
//! synthetic UDP socket: ready when the local queue has datagrams, waits
//! on the source's host pollable), always-ready (datagram send side), or
//! never-ready (TCP stubs). The exported `poll` multiplexes: return
//! locally-ready entries, else wait on the mapped host pollables.

#[allow(warnings)]
mod bindings {
    wit_bindgen::generate!({
        world: "virt",
        path: "wit",
        generate_all,
    });
}

use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;

use bindings::probe::source::events as source;
use bindings::wasi::cli::stderr as host_stderr;
use bindings::wasi::cli::stdin as host_stdin;
use bindings::wasi::cli::stdout as host_stdout;
use bindings::wasi::clocks::monotonic_clock as host_clock;
use bindings::wasi::io::poll as host_poll;
use bindings::wasi::io::streams as host_streams;

use bindings::exports::wasi::cli::stderr as xstderr;
use bindings::exports::wasi::cli::stdin as xstdin;
use bindings::exports::wasi::cli::stdout as xstdout;
use bindings::exports::wasi::clocks::monotonic_clock as xclock;
use bindings::exports::wasi::io::error as xerror;
use bindings::exports::wasi::io::poll as xpoll;
use bindings::exports::wasi::io::streams as xstreams;
use bindings::exports::wasi::sockets::instance_network as xinstnet;
use bindings::exports::wasi::sockets::network as xnet;
use bindings::exports::wasi::sockets::tcp as xtcp;
use bindings::exports::wasi::sockets::tcp_create_socket as xtcpcreate;
use bindings::exports::wasi::sockets::udp as xudp;
use bindings::exports::wasi::sockets::udp_create_socket as xudpcreate;

struct Component;

// ---------------------------------------------------------------------------
// The synthetic UDP socket's shared state: a local datagram queue fed by
// the host source, plus the source's (persistent, level-style) pollable.

struct Shared {
    queue: RefCell<VecDeque<source::Incoming>>,
    src: host_poll::Pollable,
}

impl Shared {
    fn new() -> Rc<Self> {
        Rc::new(Shared {
            queue: RefCell::new(VecDeque::new()),
            src: source::subscribe(),
        })
    }
    fn drain(&self) {
        let mut q = self.queue.borrow_mut();
        for d in source::drain() {
            q.push_back(d);
        }
    }
    fn has_data(&self) -> bool {
        if self.queue.borrow().is_empty() {
            self.drain();
        }
        !self.queue.borrow().is_empty()
    }
}

// ---------------------------------------------------------------------------
// wasi:io/error + wasi:io/poll (guest-facing)

struct VError(host_streams::Error);
impl xerror::GuestError for VError {
    fn to_debug_string(&self) -> String {
        self.0.to_debug_string()
    }
}

enum Inner {
    Host(host_poll::Pollable),
    UdpIncoming(Rc<Shared>),
    AlwaysReady,
    Never,
}

struct VPollable(Inner);

impl VPollable {
    /// Readiness knowable without waiting: local queues and constants.
    /// Host passthrough readiness is only learned through host `poll`.
    fn ready_local(&self) -> bool {
        match &self.0 {
            Inner::AlwaysReady => true,
            Inner::UdpIncoming(s) => s.has_data(),
            Inner::Host(_) | Inner::Never => false,
        }
    }
}

impl xpoll::GuestPollable for VPollable {
    fn ready(&self) -> bool {
        match &self.0 {
            Inner::AlwaysReady => true,
            Inner::Never => false,
            Inner::UdpIncoming(s) => s.has_data(),
            Inner::Host(p) => p.ready(),
        }
    }
    fn block(&self) {
        match &self.0 {
            Inner::AlwaysReady => {}
            Inner::Host(p) => p.block(),
            Inner::UdpIncoming(s) => {
                while !s.has_data() {
                    s.src.block();
                }
            }
            Inner::Never => panic!("block() on a never-ready pollable"),
        }
    }
}

impl xpoll::Guest for Component {
    type Pollable = VPollable;

    fn poll(in_: Vec<xpoll::PollableBorrow<'_>>) -> Vec<u32> {
        assert!(!in_.is_empty(), "poll on empty list");
        loop {
            // Pass 1: anything ready from local state alone?
            let ready: Vec<u32> = in_
                .iter()
                .enumerate()
                .filter(|(_, b)| b.get::<VPollable>().ready_local())
                .map(|(i, _)| i as u32)
                .collect();
            if !ready.is_empty() {
                return ready;
            }

            // Pass 2: wait on the host counterparts — the single
            // suspending call the whole composition funnels into.
            let mut host_refs: Vec<&host_poll::Pollable> = Vec::new();
            let mut back: Vec<usize> = Vec::new();
            for (i, b) in in_.iter().enumerate() {
                match &b.get::<VPollable>().0 {
                    Inner::Host(p) => {
                        host_refs.push(p);
                        back.push(i);
                    }
                    Inner::UdpIncoming(s) => {
                        host_refs.push(&s.src);
                        back.push(i);
                    }
                    Inner::AlwaysReady => unreachable!("was ready in pass 1"),
                    Inner::Never => {}
                }
            }
            assert!(
                !host_refs.is_empty(),
                "poll would block forever: only never-ready pollables"
            );
            let fired = host_poll::poll(&host_refs);

            let mut ready = Vec::new();
            for h in fired {
                let i = back[h as usize];
                match &in_[i].get::<VPollable>().0 {
                    Inner::Host(_) => ready.push(i as u32),
                    Inner::UdpIncoming(s) => {
                        if s.has_data() {
                            ready.push(i as u32);
                        }
                    }
                    _ => unreachable!(),
                }
            }
            if !ready.is_empty() {
                return ready;
            }
            // Spurious (a source fired but drained empty): wait again.
        }
    }
}

fn host_pollable(p: host_poll::Pollable) -> xpoll::Pollable {
    xpoll::Pollable::new(VPollable(Inner::Host(p)))
}

// ---------------------------------------------------------------------------
// wasi:io/streams (guest-facing): passthrough wrappers over host stdio.

fn conv_err(e: host_streams::StreamError) -> xstreams::StreamError {
    match e {
        host_streams::StreamError::LastOperationFailed(err) => {
            xstreams::StreamError::LastOperationFailed(xerror::Error::new(VError(err)))
        }
        host_streams::StreamError::Closed => xstreams::StreamError::Closed,
    }
}

struct VInput(host_streams::InputStream);
impl xstreams::GuestInputStream for VInput {
    fn read(&self, len: u64) -> Result<Vec<u8>, xstreams::StreamError> {
        self.0.read(len).map_err(conv_err)
    }
    fn blocking_read(&self, len: u64) -> Result<Vec<u8>, xstreams::StreamError> {
        self.0.blocking_read(len).map_err(conv_err)
    }
    fn skip(&self, len: u64) -> Result<u64, xstreams::StreamError> {
        self.0.skip(len).map_err(conv_err)
    }
    fn blocking_skip(&self, len: u64) -> Result<u64, xstreams::StreamError> {
        self.0.blocking_skip(len).map_err(conv_err)
    }
    fn subscribe(&self) -> xpoll::Pollable {
        host_pollable(self.0.subscribe())
    }
}

struct VOutput(host_streams::OutputStream);
impl xstreams::GuestOutputStream for VOutput {
    fn check_write(&self) -> Result<u64, xstreams::StreamError> {
        self.0.check_write().map_err(conv_err)
    }
    fn write(&self, contents: Vec<u8>) -> Result<(), xstreams::StreamError> {
        self.0.write(&contents).map_err(conv_err)
    }
    fn write_zeroes(&self, len: u64) -> Result<(), xstreams::StreamError> {
        self.0.write_zeroes(len).map_err(conv_err)
    }
    fn blocking_write_and_flush(&self, contents: Vec<u8>) -> Result<(), xstreams::StreamError> {
        self.0.blocking_write_and_flush(&contents).map_err(conv_err)
    }
    fn blocking_write_zeroes_and_flush(&self, len: u64) -> Result<(), xstreams::StreamError> {
        self.0.blocking_write_zeroes_and_flush(len).map_err(conv_err)
    }
    fn flush(&self) -> Result<(), xstreams::StreamError> {
        self.0.flush().map_err(conv_err)
    }
    fn blocking_flush(&self) -> Result<(), xstreams::StreamError> {
        self.0.blocking_flush().map_err(conv_err)
    }
    fn splice(
        &self,
        src: xstreams::InputStreamBorrow<'_>,
        len: u64,
    ) -> Result<u64, xstreams::StreamError> {
        self.0.splice(&src.get::<VInput>().0, len).map_err(conv_err)
    }
    fn blocking_splice(
        &self,
        src: xstreams::InputStreamBorrow<'_>,
        len: u64,
    ) -> Result<u64, xstreams::StreamError> {
        self.0
            .blocking_splice(&src.get::<VInput>().0, len)
            .map_err(conv_err)
    }
    fn subscribe(&self) -> xpoll::Pollable {
        host_pollable(self.0.subscribe())
    }
}

impl xstreams::Guest for Component {
    type InputStream = VInput;
    type OutputStream = VOutput;
}

impl xerror::Guest for Component {
    type Error = VError;
}

// ---------------------------------------------------------------------------
// wasi:clocks/monotonic-clock + wasi:cli stdio (guest-facing passthrough)

impl xclock::Guest for Component {
    fn now() -> u64 {
        host_clock::now()
    }
    fn resolution() -> u64 {
        host_clock::resolution()
    }
    fn subscribe_instant(when: u64) -> xpoll::Pollable {
        host_pollable(host_clock::subscribe_instant(when))
    }
    fn subscribe_duration(when: u64) -> xpoll::Pollable {
        host_pollable(host_clock::subscribe_duration(when))
    }
}

impl xstdin::Guest for Component {
    fn get_stdin() -> xstreams::InputStream {
        xstreams::InputStream::new(VInput(host_stdin::get_stdin()))
    }
}
impl xstdout::Guest for Component {
    fn get_stdout() -> xstreams::OutputStream {
        xstreams::OutputStream::new(VOutput(host_stdout::get_stdout()))
    }
}
impl xstderr::Guest for Component {
    fn get_stderr() -> xstreams::OutputStream {
        xstreams::OutputStream::new(VOutput(host_stderr::get_stderr()))
    }
}

// ---------------------------------------------------------------------------
// wasi:sockets (guest-facing): the synthetic UDP socket over the source.

struct VNetwork;
impl xnet::GuestNetwork for VNetwork {}
impl xnet::Guest for Component {
    type Network = VNetwork;
}
impl xinstnet::Guest for Component {
    fn instance_network() -> xinstnet::Network {
        xinstnet::Network::new(VNetwork)
    }
}

enum BindState {
    Unbound,
    InProgress(xnet::IpSocketAddress),
    Bound(xnet::IpSocketAddress),
}

struct VUdp {
    state: RefCell<BindState>,
    shared: Rc<Shared>,
}

impl xudp::GuestUdpSocket for VUdp {
    fn start_bind(
        &self,
        _network: xudp::NetworkBorrow<'_>,
        local_address: xnet::IpSocketAddress,
    ) -> Result<(), xnet::ErrorCode> {
        *self.state.borrow_mut() = BindState::InProgress(local_address);
        Ok(())
    }
    fn finish_bind(&self) -> Result<(), xnet::ErrorCode> {
        let addr = match *self.state.borrow() {
            BindState::InProgress(a) => a,
            _ => return Err(xnet::ErrorCode::NotInProgress),
        };
        *self.state.borrow_mut() = BindState::Bound(addr);
        Ok(())
    }
    fn stream(
        &self,
        _remote: Option<xnet::IpSocketAddress>,
    ) -> Result<(xudp::IncomingDatagramStream, xudp::OutgoingDatagramStream), xnet::ErrorCode>
    {
        Ok((
            xudp::IncomingDatagramStream::new(VIncoming(self.shared.clone())),
            xudp::OutgoingDatagramStream::new(VOutgoing),
        ))
    }
    fn local_address(&self) -> Result<xnet::IpSocketAddress, xnet::ErrorCode> {
        match *self.state.borrow() {
            BindState::Bound(a) => Ok(a),
            _ => Err(xnet::ErrorCode::InvalidState),
        }
    }
    fn remote_address(&self) -> Result<xnet::IpSocketAddress, xnet::ErrorCode> {
        Err(xnet::ErrorCode::InvalidState)
    }
    fn unicast_hop_limit(&self) -> Result<u8, xnet::ErrorCode> {
        Ok(64)
    }
    fn set_unicast_hop_limit(&self, _value: u8) -> Result<(), xnet::ErrorCode> {
        Ok(())
    }
    fn receive_buffer_size(&self) -> Result<u64, xnet::ErrorCode> {
        Ok(65536)
    }
    fn set_receive_buffer_size(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Ok(())
    }
    fn send_buffer_size(&self) -> Result<u64, xnet::ErrorCode> {
        Ok(65536)
    }
    fn set_send_buffer_size(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Ok(())
    }
    fn address_family(&self) -> xnet::IpAddressFamily {
        xnet::IpAddressFamily::Ipv4
    }
    fn subscribe(&self) -> xpoll::Pollable {
        xpoll::Pollable::new(VPollable(Inner::UdpIncoming(self.shared.clone())))
    }
}

struct VIncoming(Rc<Shared>);
impl xudp::GuestIncomingDatagramStream for VIncoming {
    fn receive(&self, max_results: u64) -> Result<Vec<xudp::IncomingDatagram>, xnet::ErrorCode> {
        self.0.drain();
        let mut q = self.0.queue.borrow_mut();
        let n = (max_results as usize).min(q.len());
        Ok(q.drain(..n)
            .map(|d| xudp::IncomingDatagram {
                data: d.payload,
                remote_address: xnet::IpSocketAddress::Ipv4(xnet::Ipv4SocketAddress {
                    port: d.port,
                    address: (127, 0, 0, 1),
                }),
            })
            .collect())
    }
    fn subscribe(&self) -> xpoll::Pollable {
        xpoll::Pollable::new(VPollable(Inner::UdpIncoming(self.0.clone())))
    }
}

struct VOutgoing;
impl xudp::GuestOutgoingDatagramStream for VOutgoing {
    fn check_send(&self) -> Result<u64, xnet::ErrorCode> {
        Ok(64)
    }
    fn send(&self, datagrams: Vec<xudp::OutgoingDatagram>) -> Result<u64, xnet::ErrorCode> {
        let n = datagrams.len() as u64;
        for d in datagrams {
            let port = match d.remote_address {
                Some(xnet::IpSocketAddress::Ipv4(a)) => a.port,
                Some(xnet::IpSocketAddress::Ipv6(a)) => a.port,
                None => 0,
            };
            source::send(&d.data, port);
        }
        Ok(n)
    }
    fn subscribe(&self) -> xpoll::Pollable {
        xpoll::Pollable::new(VPollable(Inner::AlwaysReady))
    }
}

impl xudp::Guest for Component {
    type UdpSocket = VUdp;
    type IncomingDatagramStream = VIncoming;
    type OutgoingDatagramStream = VOutgoing;
}

impl xudpcreate::Guest for Component {
    fn create_udp_socket(
        _address_family: xnet::IpAddressFamily,
    ) -> Result<xudpcreate::UdpSocket, xnet::ErrorCode> {
        Ok(xudpcreate::UdpSocket::new(VUdp {
            state: RefCell::new(BindState::Unbound),
            shared: Shared::new(),
        }))
    }
}

// TCP: linked by tokio's `net` feature, never used by the probe.
struct VTcp;
impl xtcp::GuestTcpSocket for VTcp {
    fn start_bind(
        &self,
        _network: xtcp::NetworkBorrow<'_>,
        _local_address: xnet::IpSocketAddress,
    ) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn finish_bind(&self) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn start_connect(
        &self,
        _network: xtcp::NetworkBorrow<'_>,
        _remote_address: xnet::IpSocketAddress,
    ) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn finish_connect(
        &self,
    ) -> Result<(xstreams::InputStream, xstreams::OutputStream), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn start_listen(&self) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn finish_listen(&self) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn accept(
        &self,
    ) -> Result<(xtcp::TcpSocket, xstreams::InputStream, xstreams::OutputStream), xnet::ErrorCode>
    {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn local_address(&self) -> Result<xnet::IpSocketAddress, xnet::ErrorCode> {
        Err(xnet::ErrorCode::InvalidState)
    }
    fn remote_address(&self) -> Result<xnet::IpSocketAddress, xnet::ErrorCode> {
        Err(xnet::ErrorCode::InvalidState)
    }
    fn is_listening(&self) -> bool {
        false
    }
    fn set_listen_backlog_size(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn keep_alive_enabled(&self) -> Result<bool, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_keep_alive_enabled(&self, _value: bool) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn keep_alive_idle_time(&self) -> Result<u64, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_keep_alive_idle_time(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn keep_alive_interval(&self) -> Result<u64, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_keep_alive_interval(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn keep_alive_count(&self) -> Result<u32, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_keep_alive_count(&self, _value: u32) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn hop_limit(&self) -> Result<u8, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_hop_limit(&self, _value: u8) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn receive_buffer_size(&self) -> Result<u64, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_receive_buffer_size(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn send_buffer_size(&self) -> Result<u64, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn set_send_buffer_size(&self, _value: u64) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
    fn address_family(&self) -> xnet::IpAddressFamily {
        xnet::IpAddressFamily::Ipv4
    }
    fn subscribe(&self) -> xpoll::Pollable {
        xpoll::Pollable::new(VPollable(Inner::Never))
    }
    fn shutdown(&self, _shutdown_type: xtcp::ShutdownType) -> Result<(), xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
}

impl xtcp::Guest for Component {
    type TcpSocket = VTcp;
}

impl xtcpcreate::Guest for Component {
    fn create_tcp_socket(
        _address_family: xnet::IpAddressFamily,
    ) -> Result<xtcpcreate::TcpSocket, xnet::ErrorCode> {
        Err(xnet::ErrorCode::NotSupported)
    }
}

bindings::export!(Component with_types_in bindings);
