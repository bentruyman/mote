import { Connection } from './connection';
import { MockTelnetServer } from './test/telnet_server';

import { TEST_HOST, TEST_PORT } from './test/constants';

describe('Connection', () => {
  let client: Connection;
  let server: MockTelnetServer;

  beforeAll(() => {
    server = new MockTelnetServer(TEST_HOST, TEST_PORT);
    return server.listen();
  });

  beforeEach(() => {
    client = new Connection(TEST_HOST, TEST_PORT);
    return client.connect();
  });

  afterEach(() => {
    client.disconnect();
  });

  afterAll(() => {
    return server.close();
  });

  it('emits a "data" event when data is sent from the server', done => {
    client.on('data', data => {
      expect(data).toBe('message');
      done();
    });

    server.broadcast('message');
  });
});
