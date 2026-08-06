use cfg_aliases::cfg_aliases;

fn main() {
    // Setup cfg aliases
    cfg_aliases! {
        // Convenience aliases
        wasm_browser: { all(target_family = "wasm", target_os = "unknown") },
        // The spike's wasi branch (see vendor/iroh-relay): relay-only
        // endpoints whose relay probes cannot use HTTP.
        wasm_wasi: { all(target_family = "wasm", target_os = "wasi") },
        with_crypto_provider: { any(feature = "tls-ring", feature = "tls-aws-lc-rs") }
    }
}
