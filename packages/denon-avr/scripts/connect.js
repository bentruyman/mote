/*
 * Run this script with a $HOST environment variable containing the IP address
 * of a Denon receiver:
 * $ HOST=192.168.1.5 node scripts/connect.js
 *
 * Once connected, try adjusting the volume of the receiver and see the output
 * generated from this script
 */
const { Connection } = require('../dist/connection');

const connection = new Connection(process.env.HOST);

connection.on('data', (data) => {
  console.log('receiver sent us:', data);
});

connection.connect().then(() => { console.log('connected'); });
