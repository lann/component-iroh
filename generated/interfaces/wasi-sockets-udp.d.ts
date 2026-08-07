/** @module Interface wasi:sockets/udp@0.2.9 **/
export type Network = import('./wasi-sockets-network.js').Network;
export type IpSocketAddress = import('./wasi-sockets-network.js').IpSocketAddress;
export type ErrorCode = import('./wasi-sockets-network.js').ErrorCode;
export type Pollable = import('./wasi-io-poll.js').Pollable;
export interface IncomingDatagram {
  data: Uint8Array,
  remoteAddress: IpSocketAddress,
}
export interface OutgoingDatagram {
  data: Uint8Array,
  remoteAddress?: IpSocketAddress,
}

export class IncomingDatagramStream {
  /**
   * This type does not have a public constructor.
   */
  private constructor();
  receive(maxResults: bigint): Array<IncomingDatagram>;
  subscribe(): Pollable;
}

export class OutgoingDatagramStream {
  /**
   * This type does not have a public constructor.
   */
  private constructor();
  checkSend(): bigint;
  send(datagrams: Array<OutgoingDatagram>): bigint;
  subscribe(): Pollable;
}

export class UdpSocket {
  /**
   * This type does not have a public constructor.
   */
  private constructor();
  startBind(network: Network, localAddress: IpSocketAddress): void;
  finishBind(): void;
  stream(remoteAddress: IpSocketAddress | undefined): [IncomingDatagramStream, OutgoingDatagramStream];
  localAddress(): IpSocketAddress;
  remoteAddress(): IpSocketAddress;
  unicastHopLimit(): number;
  setUnicastHopLimit(value: number): void;
  receiveBufferSize(): bigint;
  setReceiveBufferSize(value: bigint): void;
  sendBufferSize(): bigint;
  setSendBufferSize(value: bigint): void;
  subscribe(): Pollable;
}
