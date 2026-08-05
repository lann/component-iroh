//! Execution-model probes: see `../wit/world.wit`.
//!
//! Probe results are parked in statics (the component-model async runtime
//! is single-threaded; the mutexes never contend) so detached tasks can
//! report to later export calls.

use std::sync::Mutex;

use futures::channel::oneshot;

mod bindings {
    wit_bindgen::generate!({
        path: "../wit",
        world: "exec-model",
        generate_all,
    });
}

use bindings::exports::polymorph::iroh_exec_model::probe::Guest;
use bindings::wasi::clocks::monotonic_clock;
use bindings::wit_stream;
use wit_bindgen::rt::async_support::StreamReader;

static PUMP_RESULT: Mutex<Option<Result<String, String>>> = Mutex::new(None);
static STREAM_OUTCOME: Mutex<Option<Result<String, String>>> = Mutex::new(None);

/// The rustls-callback shape: a synchronous function that internally
/// drives async webcrypto imports via `block_on`.
fn sync_webcrypto_probe() -> Result<String, String> {
    wit_bindgen::block_on(async {
        let (_secret, public) = polymorph_webcrypto_guest::x25519::generate_key(
            polymorph_webcrypto_guest::AgreementKeyOptions {
                derive_bits: true,
                derive_key: false,
                extractable: false,
            },
        )
        .await
        .map_err(|e| format!("x25519 generate: {e:?}"))?;
        let raw = public
            .export_key_raw()
            .await
            .map_err(|e| format!("x25519 export: {e:?}"))?;
        Ok(format!("x25519 ok, pub[0..4]={}", hex::encode(&raw[..4])))
    })
}

struct Component;

impl Guest for Component {
    async fn blockon_in_spawn() -> Result<String, String> {
        let (tx, rx) = oneshot::channel();
        wit_bindgen::spawn_local(async move {
            let result = sync_webcrypto_probe();
            let _ = tx.send(result);
        });
        rx.await
            .map_err(|_| "spawned task dropped its sender".to_string())?
            .map(|detail| format!("block_on inside spawn (export live): {detail}"))
    }

    async fn start_pump() -> Result<(), String> {
        *PUMP_RESULT.lock().unwrap() = None;
        wit_bindgen::spawn_local(async move {
            // One tick puts the bridge call unambiguously after the
            // originating export has returned.
            monotonic_clock::wait_for(50_000_000).await;
            let result = sync_webcrypto_probe()
                .map(|detail| format!("block_on in detached pump (no export live): {detail}"));
            *PUMP_RESULT.lock().unwrap() = Some(result);
        });
        Ok(())
    }

    async fn poll_pump() -> Result<String, String> {
        loop {
            if let Some(result) = PUMP_RESULT.lock().unwrap().take() {
                return result;
            }
            monotonic_clock::wait_for(10_000_000).await;
        }
    }

    async fn open_stream(total: u32, chunk: u32) -> StreamReader<u8> {
        *STREAM_OUTCOME.lock().unwrap() = None;
        let (mut writer, reader) = wit_stream::new();
        wit_bindgen::spawn_local(async move {
            let mut sent = 0u32;
            let outcome = loop {
                if sent >= total {
                    break Ok(format!("wrote all {total} bytes"));
                }
                let len = chunk.min(total - sent) as usize;
                let payload = vec![0x42u8; len];
                let remaining = writer.write_all(payload).await;
                if !remaining.is_empty() {
                    break Ok(format!(
                        "reader stopped after {} bytes ({} unwritten)",
                        sent as usize + (len - remaining.len()),
                        remaining.len()
                    ));
                }
                sent += len as u32;
                // Yield between chunks so the reader can act (and drop)
                // mid-stream.
                monotonic_clock::wait_for(10_000_000).await;
            };
            *STREAM_OUTCOME.lock().unwrap() = Some(outcome);
        });
        reader
    }

    async fn stream_outcome() -> Result<String, String> {
        loop {
            if let Some(result) = STREAM_OUTCOME.lock().unwrap().take() {
                return result;
            }
            monotonic_clock::wait_for(10_000_000).await;
        }
    }

    async fn sink_stream(mut data: StreamReader<u8>) -> Result<u32, String> {
        let mut count = 0u32;
        loop {
            let (result, buf) = data.read(Vec::with_capacity(4096)).await;
            count += buf.len() as u32;
            match result {
                wit_bindgen::StreamResult::Complete(_) => {}
                wit_bindgen::StreamResult::Dropped | wit_bindgen::StreamResult::Cancelled => {
                    return Ok(count)
                }
            }
        }
    }
}

bindings::export!(Component with_types_in bindings);
