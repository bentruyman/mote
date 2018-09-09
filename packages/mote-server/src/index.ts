import * as express from 'express';

import SSE from './sse';

export default class App {
  server: express.Express;
  sse: SSE;

  constructor () {
    this.server = express();
    this.sse = new SSE();

    this.server.get('/stream', this.sse.pool.bind(this.sse));

    setInterval(() => {
      this.ping();
    }, 5000);
  }

  ping () {
    console.log('ping', this.sse.connections.length);
    this.sse.broadcast({
      event: 'ping',
      data: { foo: 'bar' }
    });
  }
}
