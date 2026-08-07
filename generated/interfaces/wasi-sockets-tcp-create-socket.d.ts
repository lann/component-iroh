/** @module Interface wasi:sockets/tcp-create-socket@0.2.9 **/
export function createTcpSocket(addressFamily: IpAddressFamily): TcpSocket;
export type IpAddressFamily = import('./wasi-sockets-network.js').IpAddressFamily;
export type TcpSocket = import('./wasi-sockets-tcp.js').TcpSocket;
export type ErrorCode = import('./wasi-sockets-network.js').ErrorCode;
