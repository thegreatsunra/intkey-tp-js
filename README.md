# intkey-tp-js

> An implementation of the intkey transaction family using the Hyperledger Sawtooth Javascript SDK

## Getting started

```bash
git clone git@github.com:thegreatsunra/intkey-tp-js.git

cd intkey-tp-js

npm install
```

## Usage

```bash
# start your sawtooth validator:
sawtooth-validator

# start your transaction processor:
cd intkey-tp-js

# this will listen automatically at tcp://localhost:4004
node index.js

# pass an argument to index.js to listen at a different address/port:
node index.js tcp://192.168.1.1:4000

# in another terminal window, send transactions to your validator:
intkey create_batch

intkey load
```

## Notes

Instead of the `intkey` CLI, you can also use [intkey-client-js](https://github.com/thegreatsunra/intkey-client-js) to send transactions to your intkey transaction processor

Consider using pm2 (`npm install -g pm2`) for starting intkey-tp-js as a long-running process
