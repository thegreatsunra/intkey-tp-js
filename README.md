# intkey-tp-js

> An implementation of the intkey transaction processor using the Hyperledger Sawtooth Javascript SDK

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
node index.js

# in another terminal window, send transactions to your validator:
intkey create_batch

intkey load
```

### Configuring the Sawtooth Validator URL

By default, the intkey transaction processor will attempt to connect to a Sawtooth Validator at `tcp://localhost:4004`.

To connect to a Validator at a different URL:

1. Make a copy of the file `.env.example` and name it `.env`
1. Edit `.env` and change the value of `VALIDATOR_URL` to the location of your Sawtooth Validator
1. The next time you run `node index.js` the URL you specified in `.env` will be used automatically 

## Notes

Instead of the Python-based Sawtooth `intkey` CLI, you can also use [intkey-client-js](https://github.com/thegreatsunra/intkey-client-js) to send transactions to your intkey transaction processor

Consider using [pm2](https://github.com/Unitech/pm2) (`npm install -g pm2`) for starting intkey-tp-js as a long-running process

## License

The Apache License, Version 2.0

Copyright (c) 2018 Dane Petersen
