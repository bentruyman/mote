import * as express from 'express';

export default class App {
  server: express.Express;

  constructor () {
    this.server = express();
  }
}
