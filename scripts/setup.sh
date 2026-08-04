#!/usr/bin/env bash
# One-shot dependency setup for the spike: sibling repositories checked out
# under .deps/ at pinned commits, plus the npm trees the Node host needs.
# Idempotent; safe to re-run. Assumes Rust (with the wasm32-wasip2 target,
# see rust-toolchain.toml) and Node 24+ are already present.
#
# Set SKIP_NODE=1 to skip the npm installs.
set -euo pipefail
cd "$(dirname "$0")/.."

WEBRTC_REPO=https://github.com/lann/component-webrtc-datachannels.git
WEBRTC_PIN=2f12c3136d576fd8d7d4a68f21df1c3d1a1bcf7e
WEBCRYPTO_REPO=https://github.com/lann/component-webcrypto.git
WEBCRYPTO_PIN=7110a990063076650d2c7cb3acde9b86d5b615da
WEBSOCKET_REPO=https://github.com/lann/component-websocket.git
WEBSOCKET_PIN=7b99e72f578746d74cd225d066248532d062c27b

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

mkdir -p .deps
dep webrtc "$WEBRTC_REPO" "$WEBRTC_PIN"
dep webcrypto "$WEBCRYPTO_REPO" "$WEBCRYPTO_PIN"
dep websocket "$WEBSOCKET_REPO" "$WEBSOCKET_PIN"

if [ "${SKIP_NODE:-}" != "1" ]; then
    # The webrtc sibling's jco host module resolves node-datachannel from
    # its own package directory.
    npm install --prefix .deps/webrtc/jco-impl
    npm install --prefix host-jco
fi

echo "setup complete"
