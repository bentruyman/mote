import * as http from 'http';
import * as path from 'path';

import * as pupetteer from 'puppeteer';
import { Server } from 'node-static';

const DEFAULT_SERVER_PORT = 7357; // TODO: make configurable
const WEB_ROOT = path.join(__dirname, '..', '..', 'dist');

function _createServer (): http.Server {
  const file = new Server(WEB_ROOT);

  return http.createServer((request, response) => {
    request.addListener('end', () => {
      file.serve(request, response);
    }).resume();
  });
}

export class StaticServer {
  port: number;

  private _server: http.Server;

  constructor (port: number) {
    this._server = _createServer();
    this.port = port;
  }

  close () {
    return new Promise(resolve => {
      this._server.close(resolve);
    });
  }

  listen () {
    return new Promise(resolve => {
      this._server.listen(this.port, resolve);
    });
  }
}

export function createBrowser (): Promise<pupetteer.Browser> {
  return pupetteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
}

export function createServer (port = DEFAULT_SERVER_PORT): StaticServer {
  return new StaticServer(port);
}
