import * as express from 'express';

export default class SSE {
  _id = 0;
  connections: express.Response[] = []; // TODO: type it

  broadcast (data: object) {
    let message = `id: ${this._id}\n`;
    message += `data: ${JSON.stringify(data)}\n\n`;

    this._id++;

    console.log({ message });

    for (let connection of this.connections) {
      connection.write(message);
    }
  }

  pool (req: express.Request, res: express.Response) {
    this.connections.push(res);

    req.socket.setTimeout(0);
    req.socket.setNoDelay(true);
    req.socket.setKeepAlive(true);

    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'X-Accel-Buffering': 'no'
    });
  }
}
