#!/usr/bin/env bash
# One-shot dependency setup, the single source of truth shared by local
# developers and CI: the pinned toolchain and tools, sibling repositories
# checked out under .deps/ at pinned commits, and the npm trees the Node
# host needs. Idempotent; safe to re-run.
#
# Environment:
#   SKIP_NODE=1          skip the npm installs
#   WASM_TOOLS_VERSION   version of wasm-tools to install (default below)
#   JUST_VERSION         version of just to install (default below)
#   WAC_VERSION          version of wac-cli to install (default below)
set -euo pipefail
cd "$(dirname "$0")/.."

WASM_TOOLS_VERSION="${WASM_TOOLS_VERSION:-1.247.0}"
JUST_VERSION="${JUST_VERSION:-1.40.0}"
WAC_VERSION="${WAC_VERSION:-0.10.1}"

WEBRTC_REPO=https://github.com/polymorph-components/polymorph-webrtc-datachannels.git
WEBRTC_PIN=d0e1a8096cdaa36c44e0ce7d06a3b75ffbe2c0c7
WEBCRYPTO_REPO=https://github.com/polymorph-components/polymorph-webcrypto.git
WEBCRYPTO_PIN=61fbd02c55141a1c0d76eb524e7af4bb9488fc31
WEBSOCKET_REPO=https://github.com/polymorph-components/polymorph-websocket.git
WEBSOCKET_PIN=09c15e412584e14fd7b0c2b2568ed5ae5673d0ad
IROH_REPO=https://github.com/n0-computer/iroh.git
IROH_PIN=816dd70c056b813dcb5cbfb6a9a15e12d04b72b1 # v1.0.3
TLS_REPO=https://github.com/polymorph-components/polymorph-tls.git
TLS_PIN=23ceddad816f95f95e282914c8a269cb20413ce3
# The jco fork: the P3/JSPI transpiler with the async fixes this
# repository needs (lann/jco all-fixes). host-jco consumes
# packages/jco-transpile as a file: dependency, so this checkout must
# be built before host-jco's npm install resolves against it.
JCO_REPO=https://github.com/lann/jco.git
JCO_PIN=dbad4d7dd03cc022b9614fa1603f839a79f66bc0 # all-fixes: sync-start-call, future/stream transfer, concurrent task lifetimes

log() { printf '\n==> %s\n' "$1"; }

log "Installing pinned Rust toolchain and wasm targets (rust-toolchain.toml)"
rustup show active-toolchain >/dev/null 2>&1 || rustup toolchain install

log "Ensuring cargo-binstall is installed"
if command -v cargo-binstall >/dev/null 2>&1; then
    echo "cargo-binstall already present: $(cargo-binstall -V)"
else
    curl -fsSL --proto '=https' --tlsv1.2 \
        https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
fi

# Install a crate binary with cargo-binstall (prebuilt artifact when one
# exists, `cargo install` fallback otherwise). Only reached when the
# `command -v` guard fails; `--force` covers a restored cargo cache that has
# the install metadata without the binary.
binstall() {
    cargo binstall --no-confirm --locked --force "$1"
}

log "Ensuring wasm-tools ${WASM_TOOLS_VERSION} is installed"
if command -v wasm-tools >/dev/null 2>&1; then
    echo "wasm-tools already present: $(wasm-tools --version)"
else
    binstall "wasm-tools@${WASM_TOOLS_VERSION}"
fi

log "Ensuring just ${JUST_VERSION} is installed"
if command -v just >/dev/null 2>&1; then
    echo "just already present: $(just --version)"
else
    binstall "just@${JUST_VERSION}"
fi

log "Ensuring wac ${WAC_VERSION} is installed"
if command -v wac >/dev/null 2>&1; then
    echo "wac already present: $(wac --version)"
else
    binstall "wac-cli@${WAC_VERSION}"
fi

# Check out `repo` at `pin` under .deps/`name`, cloning or fetching as
# needed. An existing checkout at the pin is left untouched.
dep() {
    local name=$1 repo=$2 pin=$3
    local dir=.deps/$name
    if [ ! -e "$dir" ]; then
        git clone "$repo" "$dir"
    fi
    if [ "$(git -C "$dir" rev-parse HEAD)" != "$pin" ]; then
        git -C "$dir" fetch origin "$pin" 2>/dev/null || git -C "$dir" fetch origin
        git -C "$dir" checkout "$pin"
    fi
}

log "Checking out pinned sibling and upstream repositories under .deps/"
mkdir -p .deps
dep webrtc "$WEBRTC_REPO" "$WEBRTC_PIN"
dep webcrypto "$WEBCRYPTO_REPO" "$WEBCRYPTO_PIN"
dep websocket "$WEBSOCKET_REPO" "$WEBSOCKET_PIN"
# Upstream iroh: the stock relay server the demo runs against.
dep iroh "$IROH_REPO" "$IROH_PIN"
dep tls "$TLS_REPO" "$TLS_PIN"
dep jco "$JCO_REPO" "$JCO_PIN"

if [ "${SKIP_NODE:-}" != "1" ]; then
    log "Building the jco toolchain from the pinned fork"
    # The stamp records which pin the build products belong to; a moved
    # pin invalidates them even though the files still exist.
    JCO_STAMP=.deps/jco/.component-iroh-built-at
    if [ -f "$JCO_STAMP" ] && [ "$(cat "$JCO_STAMP")" = "$JCO_PIN" ]; then
        echo "jco toolchain already built at $JCO_PIN"
    else
        PATH="$(npm prefix -g)/bin:$PATH"
        if ! command -v pnpm >/dev/null 2>&1; then
            npm install -g pnpm
        fi
        (
            cd .deps/jco
            # The fork pins its own toolchain (stable + wasm32-wasip1)
            # in its rust-toolchain.toml.
            rustup show active-toolchain >/dev/null 2>&1 || rustup toolchain install
            pnpm install --frozen-lockfile
            cargo xtask build debug
            pnpm run --filter @bytecodealliance/jco-transpile build
            # The cargo intermediates dwarf the build products; drop them
            # so caching .deps/jco stays cheap.
            rm -rf target
        )
        echo "$JCO_PIN" > "$JCO_STAMP"
    fi

    log "Installing npm dependencies"
    # The webrtc sibling's jco host module resolves node-datachannel from
    # its own package directory.
    npm install --prefix .deps/webrtc/jco-impl
    npm install --prefix host-jco
fi

log "setup complete"
