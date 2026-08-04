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

WEBRTC_REPO=https://github.com/lann/component-webrtc-datachannels.git
WEBRTC_PIN=2f12c3136d576fd8d7d4a68f21df1c3d1a1bcf7e
WEBCRYPTO_REPO=https://github.com/lann/component-webcrypto.git
WEBCRYPTO_PIN=7110a990063076650d2c7cb3acde9b86d5b615da
WEBSOCKET_REPO=https://github.com/lann/component-websocket.git
WEBSOCKET_PIN=7b99e72f578746d74cd225d066248532d062c27b
IROH_REPO=https://github.com/n0-computer/iroh.git
IROH_PIN=816dd70c056b813dcb5cbfb6a9a15e12d04b72b1 # v1.0.3
TLS_REPO=https://github.com/lann/component-tls.git
TLS_PIN=7dd0a7b6a8750145b03eea60e3ab9902e749dcee

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

if [ "${SKIP_NODE:-}" != "1" ]; then
    log "Installing npm dependencies"
    # The webrtc sibling's jco host module resolves node-datachannel from
    # its own package directory.
    npm install --prefix .deps/webrtc/jco-impl
    npm install --prefix host-jco
fi

log "setup complete"
