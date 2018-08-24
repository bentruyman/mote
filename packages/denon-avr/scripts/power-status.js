/*
 * Run this script with a $HOST environment variable containing the IP address
 * of a Denon receiver:
 * $ HOST=192.168.1.5 node scripts/power-status.js
 */
const Denon = require('../dist');

const client = Denon.createClient(process.env.HOST);

client.connect().then(async () => {
  const status = await client.power();
  console.log({ status });
  client.disconnect();
});
