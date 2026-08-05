# The single entry point for building and checking this repository; run
# `just` to list recipes. CI (once it exists) runs the same recipes.

_default:
    @just --list

# One-shot dependency setup (sibling + iroh checkouts, npm installs).
setup:
    ./scripts/setup.sh

# Build every guest component and compose the endpoint demo.
build-components:
    cargo build -p iroh-spike-guest -p iroh-endpoint -p iroh-endpoint-demo -p iroh-exec-model-guest --target wasm32-wasip2 --release
    mkdir -p target/components
    wac plug target/wasm32-wasip2/release/iroh_endpoint_demo.wasm --plug target/wasm32-wasip2/release/iroh_endpoint.wasm -o target/components/iroh-demo.wasm

# Build the Wasmtime host binaries and the native interop peer.
build-hosts:
    cargo build -p iroh-spike-host-wasmtime -p iroh-peer --release

# Build the stock upstream relay server (used by the matrix and demos).
relay-build:
    cd .deps/iroh && cargo build --release -p iroh-relay --features server --bin iroh-relay

# Transpile the guest components for the Node host.
transpile: build-components
    cd host-jco && npm run transpile
    cd host-jco && npm run transpile-endpoint

build: build-components build-hosts

# Native tests: the crypto/framing known answers.
test:
    cargo test -p iroh-endpoint-core -p iroh-spike-guest

fmt-check:
    cargo fmt --all --check

clippy:
    cargo clippy --all-targets
    cargo clippy -p iroh-peer --all-targets
    cargo clippy -p iroh-spike-guest -p iroh-endpoint -p iroh-endpoint-demo -p iroh-exec-model-guest --target wasm32-wasip2

validate-wit:
    wasm-tools component wit wit/ > /dev/null
    wasm-tools component wit guest/wit/ > /dev/null
    wasm-tools component wit endpoint-demo/wit/ > /dev/null
    wasm-tools component wit experiments/exec-model/wit/ > /dev/null

# The execution-model probes on both hosts.
probes: build build-components
    cargo build -p iroh-exec-model-guest --target wasm32-wasip2 --release
    target/release/exec-model target/wasm32-wasip2/release/iroh_exec_model_guest.wasm
    cd host-jco && npm run transpile-exec && timeout 120 node --experimental-wasm-jspi src/run-exec.mjs

# The cross-host pairing matrix: every demo pairing asserted in one run.
matrix: build transpile relay-build
    ./scripts/matrix.sh

# The measured-claims gate: per-wire latency/throughput medians and the
# webcrypto boundary call counts, asserted against budgets (issue #4).
bench: build transpile relay-build
    ./scripts/bench.sh

# The endpoint against n0's production relays over wss (issue #2).
# Internet-dependent by nature, so manual: not part of `ci`.
interop-prod: build
    ./scripts/interop-prod.sh

# The full gate.
ci: fmt-check clippy validate-wit test probes matrix bench
