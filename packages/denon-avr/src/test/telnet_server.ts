import { EventEmitter } from 'events';
import * as net from 'net';

/**
 * A mock telnet server
 *
 * @class MockTelnetServer
 */
export class MockTelnetServer extends EventEmitter {
  host: string;
  port: number;

  /**
   * Collection of connections to the server. Generally, this will only consist
   * of a single connection.
   */
  private _connections: Set<net.Socket>;
  private _messages: string[] = [];
  private _server: net.Server;

  constructor (host: string, port: number) {
    super();

    this.host = host;
    this.port = port;

    this._connections = new Set();

    this._server = net.createServer(connection => {
      this._handleConnection(connection);
    });
  }

  /**
   * Sends a string of data to all connections
   *
   * @param {string} data Text to send to all connections
   */
  broadcast (data: string) {
    this._connections.forEach(connection => {
      connection.write(Buffer.from(data));
    });
  }

  /**
   * Closes down the server
   */
  close (): Promise<void> {
    return new Promise(resolve => {
      this._connections.forEach(conn => {
        this._destroyConnection(conn);
      });

      this._server.close(() => {
        resolve();
      });
    });
  }

  /**
   * Starts the server listening for connections
   *
   * @param {number} port Port to listen on
   * @returns Promise<
   */
  listen (): Promise<void> {
    return new Promise(resolve => {
      this._server.listen(this.port, this.host, resolve);
    });
  }

  /**
   * List of messages received from clients
   */
  get messages (): string[] {
    return this._messages;
  }

  private _destroyConnection (connection: net.Socket) {
    connection.removeAllListeners();
    connection.destroy();
    this._connections.delete(connection);
  }

  private _handleConnection (connection: net.Socket) {
    this._connections.add(connection);

    connection.on('data', this._handleData);
    connection.on('end', this._handleEnd);
  }

  private _handleData = (data: Buffer) => {
    const str: string = data.toString();

    this._messages.push(str);
    this.emit('data', str);
  }

  private _handleEnd = (connection: net.Socket) => {
    this._connections.delete(connection);
  }
}
