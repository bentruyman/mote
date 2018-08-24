/*
 * Run this script with a $HOST environment variable containing the IP address
 * of a Denon receiver:
 * $ HOST=192.168.1.5 node scripts/power-cycle.js
 */
const Denon = require('../dist');

function sleep (milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

const client = Denon.createClient(process.env.HOST);

client.connect().then(async () => {
  console.log('status', await client.power());
  console.log('turning it on...');
  await client.power('on');
  console.log('status', await client.power());
  await sleep(5000);
  console.log('going into standby...');
  await client.power('standby');
  console.log('status', await client.power());
  client.disconnect();
});
