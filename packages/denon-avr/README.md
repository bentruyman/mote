# denon-avr

> Denon AVR control client for Node.js

## Overview

Most modern Denon AV receivers implement a text-based telnet API to control a
significant number of features (e.g. switching inputs, changing volume,
managing power, etc.). This library implements a Promise-based API along with
several methods for invoking the various commands supported by these Denon AV
receivers.

Based on [DENON AVR control protocol 7.6.0](http://openrb.com/wp-content/uploads/2012/02/AVR3312CI_AVR3312_PROTOCOL_V7.6.0.pdf).

## Usage

<!-- TODO: look into doc generators for TypeScript -->
<!-- TODO: maybe we just manually inline the convenience functions -->

```javascript
const Denon = require('denon-avr');
const client = Denon.createClient('192.168.1.5');

client.connect()
  .then(async () => {
    await client.input('game');
    await client.masterVolume(50);
    await client.mode('direct');
  });
```

## Alternatives

Below are a couple of alternative libraries which also provide a client
interface for the Denon AVR control protocol:

- [lmoe/node-denon-client](https://github.com/lmoe/node-denon-client)
- [phillipsnick/denon-avr](https://github.com/phillipsnick/denon-avr)

## License

MIT @ [Ben Truyman](https://bentruyman.com/)
