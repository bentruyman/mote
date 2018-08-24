import { EventEmitter } from 'events';
import { Socket } from 'net';

const ENCODING_TYPE = 'ascii';
const RETURN = '\r';

/**
 * Connection is a thin wrapper around net.Socket with a more Promise-friendly
 * API
 */
export class Connection extends EventEmitter {
  /**
   * Host address of the server
   */
  host: string;
  /**
   * Port of the server
   */
  port: number;

  protected _socket: Socket;

  /**
   * Creates an instance of Connection
   */
  constructor (host: string, port = 23) {
    super();

    this.host = host;
    this.port = port;
    this._socket = this._createSocket();
  }

  /**
   * Establishes a connection to the server
   */
  connect (): Promise<void> {
    return new Promise((resolve, reject) => {
      // TODO: need to handle connection errors by using a one-time event error
      // listener here
      this._socket.once('connect', () => {
        resolve();
        this._socket.removeListener('error', reject);
      });

      this._socket.once('error', error => {
        reject(error);
      });

      this._socket.connect(this.port, this.host, () => {
        resolve();
      });
    });
  }

  /**
   * Ends the socket's connection
   */
  disconnect () {
    this._socket.end();
  }

  /**
   * Writes a string of data to the open socket
   */
  write (message: string): Promise<void> {
    return new Promise(resolve => {
      this._socket.write(`${message}${RETURN}`, ENCODING_TYPE, resolve);
    });
  }

  private _createSocket (): Socket {
    const socket = new Socket();
    socket.on('data', this._handleData);
    socket.on('error', this._handleError);
    socket.setEncoding(ENCODING_TYPE);

    return socket;
  }

  private _handleData = (data: string) => {
    this.emit('data', data);
  }

  private _handleError = (err: number) => {
    this.emit('error', err);
  }
}
