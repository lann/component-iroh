// The `lann:iroh-spike/rendezvous` host for the jco demo: a `fetch`-based
// client for the HTTP signaling mailbox protocol served by
// `conformance-signalingd` (see the webrtc sibling's
// `conformance/signaling/PROTOCOL.md`).
//
// jco wires this module in as the component's `rendezvous` import. Blob
// payloads are opaque here; the guest owns the encoding. Failures are thrown
// as the WIT `error` variant (`{ tag: 'other', val }`), which jco lifts into
// the `result<_, error>` the rendezvous interface declares.

/** Build a WIT `error.other` value carrying `detail`. */
function rendezvousError(detail) {
  return { tag: "other", val: `rendezvous: ${detail}` };
}

/**
 * A joined rendezvous session for one `{room}` and `{role}` on one server. It
 * publishes to its own role's mailbox and consumes the peer's mailbox in
 * publish order, tracking the next sequence number to fetch. Reads are
 * sequence-numbered and idempotent, so a fetch may be retried after a timeout.
 */
export class Session {
  #base;
  #room;
  #role;
  #recvSeq = 0;

  constructor(base, room, role) {
    this.#base = base.replace(/\/+$/, "");
    this.#room = room;
    this.#role = role;
  }

  /**
   * Join (creating implicitly) `room` on the signaling server at `server` as
   * `asRole`.
   * @param {string} server
   * @param {string} room
   * @param {'offerer' | 'answerer'} asRole
   */
  static async open(server, room, asRole) {
    return new Session(server, room, asRole);
  }

  /** The peer's role path segment (the mailbox this session consumes). */
  #peerRole() {
    return this.#role === "offerer" ? "answerer" : "offerer";
  }

  /**
   * Publish the next opaque blob to this session's own mailbox.
   * @param {Uint8Array} blob
   */
  async send(blob) {
    const url = `${this.#base}/rooms/${this.#room}/${this.#role}`;
    let resp;
    try {
      resp = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/octet-stream" },
        body: blob,
      });
    } catch (err) {
      throw rendezvousError(`send: ${err}`);
    }
    if (!resp.ok) {
      throw rendezvousError(`send status ${resp.status}`);
    }
  }

  /**
   * Fetch the next opaque blob published by the peer, long-polling and
   * retrying `304` until a blob arrives (returned as a `Uint8Array`) or the
   * peer marks its mailbox done (`undefined`).
   */
  async recv() {
    for (;;) {
      const url = `${this.#base}/rooms/${this.#room}/${this.#peerRole()}?seq=${this.#recvSeq}&wait=10000`;
      let resp;
      try {
        resp = await fetch(url);
      } catch (err) {
        throw rendezvousError(`recv: ${err}`);
      }
      switch (resp.status) {
        // A blob is available: advance our read cursor and return it.
        case 200: {
          const bytes = new Uint8Array(await resp.arrayBuffer());
          this.#recvSeq += 1;
          return bytes;
        }
        // The peer marked its mailbox done at or before this seq.
        case 204:
          return undefined;
        // Not yet available; retry the same seq.
        case 304:
          continue;
        default:
          throw rendezvousError(`recv status ${resp.status}`);
      }
    }
  }

  /** Mark this session's own mailbox as done. */
  async done() {
    const url = `${this.#base}/rooms/${this.#room}/${this.#role}/done`;
    let resp;
    try {
      resp = await fetch(url, { method: "POST" });
    } catch (err) {
      throw rendezvousError(`done: ${err}`);
    }
    if (!resp.ok) {
      throw rendezvousError(`done status ${resp.status}`);
    }
  }
}
