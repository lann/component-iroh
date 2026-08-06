//! Probe guest: a tokio current-thread runtime on wasm32-wasip2 whose only
//! wake sources are (a) the time driver and (b) a UDP socket served by a
//! synthetic host-side shim. The host injects datagrams while the guest is
//! parked in `wasi:io/poll#poll`; the guest echoes each datagram back
//! through a cross-task mpsc channel (exercising the io waker, the channel
//! waker, and `tokio::spawn` together). "quit" ends the run.
//!
//! Everything is printed to stdout so the host can assert on ordering:
//! ticks must keep appearing while idle (timer path), echoes must appear
//! promptly after injections (io wake path).

use std::net::{Ipv4Addr, SocketAddr, SocketAddrV4};
use std::sync::Arc;
use std::time::Duration;

const BIND: SocketAddrV4 = SocketAddrV4::new(Ipv4Addr::LOCALHOST, 7777);

fn main() {
    let rt = tokio::runtime::Builder::new_current_thread()
        .enable_all()
        .build()
        .expect("build runtime");
    rt.block_on(run());
    println!("guest: exit");
}

async fn run() {
    println!("guest: start");
    let sock = Arc::new(
        tokio::net::UdpSocket::bind(SocketAddr::V4(BIND))
            .await
            .expect("bind"),
    );
    println!("guest: bound {}", sock.local_addr().expect("local_addr"));

    // Receive on a spawned task, echo from the main task: a datagram wake
    // must propagate recv-task -> channel -> main-task within one park
    // cycle for the echo to be prompt.
    let (tx, mut rx) = tokio::sync::mpsc::channel::<(Vec<u8>, SocketAddr)>(64);
    let recv_sock = sock.clone();
    let recv_task = tokio::spawn(async move {
        let mut buf = vec![0u8; 2048];
        loop {
            let (n, from) = recv_sock.recv_from(&mut buf).await.expect("recv_from");
            if &buf[..n] == b"quit" {
                break;
            }
            tx.send((buf[..n].to_vec(), from))
                .await
                .expect("channel send");
        }
    });

    let mut ticks = 0u32;
    let mut echoed = 0u32;
    let mut interval = tokio::time::interval(Duration::from_millis(200));
    loop {
        tokio::select! {
            msg = rx.recv() => match msg {
                Some((data, from)) => {
                    sock.send_to(&data, from).await.expect("send_to");
                    echoed += 1;
                }
                // recv task saw "quit" and dropped the sender.
                None => break,
            },
            _ = interval.tick() => {
                ticks += 1;
                println!("guest: tick {ticks}");
            }
        }
    }
    recv_task.await.expect("join recv task");

    // One plain sleep after the fact: the one-shot timer path, with no
    // pending I/O interest at all.
    let t0 = std::time::Instant::now();
    tokio::time::sleep(Duration::from_millis(50)).await;
    println!(
        "guest: final sleep 50ms took {}ms",
        t0.elapsed().as_millis()
    );
    println!("guest: done echoed={echoed} ticks={ticks}");
}
