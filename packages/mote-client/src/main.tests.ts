import * as pupetteer from 'puppeteer';

import { createBrowser, createServer, StaticServer } from './test/helpers';

let browser: pupetteer.Browser;
let server: StaticServer;

beforeEach(async () => { browser = await createBrowser(); });
afterEach(async () => { await browser.close(); browser = null; });

beforeAll(() => { server = createServer(); return server.listen(); });
afterAll(() => server.close());

test('functional test', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:7357/');
  await page.waitForSelector('#app');

  const html = await page.$eval('#app', e => e.innerHTML);
  expect(html).toBe('');
});
