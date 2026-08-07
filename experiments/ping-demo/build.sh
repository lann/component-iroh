#!/usr/bin/env bash
# Builds the ping demo into web/site/: guest component (cargo), jco/JSPI
# transpile, and the static page with every dependency vendored — the
# site must be self-contained (GitHub Pages, and COEP blocks anything
# cross-origin without CORP anyway). The shim and relay bridge are the
# iroh-relay-ws spike's, copied in (the bridge's .deps import rewritten
# to the vendored copy).
set -euo pipefail
cd "$(dirname "$0")"

SPIKE_HOST=../iroh-relay-ws/host
DEPS=../../.deps
SITE=web/site

(cd guest && cargo build --release)

rm -rf "$SITE"
mkdir -p "$SITE/vendor"

(cd web && npm run --silent transpile)

cp web/index.html web/demo.mjs web/overlay.mjs "$SITE/"
cp web/vendor/qrcode.mjs "$SITE/vendor/"
cp "$SPIKE_HOST/shim.mjs" "$SITE/"
sed 's|"../../../.deps/websocket/js/jco/websocket.js"|"./vendor/websocket.js"|' \
    "$SPIKE_HOST/bridge.mjs" > "$SITE/bridge.mjs"
cp "$DEPS/websocket/js/jco/websocket.js" "$SITE/vendor/websocket.js"
cp "$DEPS/webrtc/jco-impl/webrtc.js" "$SITE/vendor/webrtc.js"
# Pages runs Jekyll by default, which drops directories it dislikes.
touch "$SITE/.nojekyll"

echo "site assembled in $SITE ($(du -sh "$SITE" | cut -f1))"
