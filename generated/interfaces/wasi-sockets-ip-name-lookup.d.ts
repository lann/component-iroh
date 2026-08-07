/** @module Interface wasi:sockets/ip-name-lookup@0.2.9 **/
export function resolveAddresses(network: Network, name: string): ResolveAddressStream;
export type IpAddress = import('./wasi-sockets-network.js').IpAddress;
export type ErrorCode = import('./wasi-sockets-network.js').ErrorCode;
export type Pollable = import('./wasi-io-poll.js').Pollable;
export type Network = import('./wasi-sockets-network.js').Network;

export class ResolveAddressStream {
  /**
   * This type does not have a public constructor.
   */
  private constructor();
  resolveNextAddress(): IpAddress | undefined;
  subscribe(): Pollable;
}
