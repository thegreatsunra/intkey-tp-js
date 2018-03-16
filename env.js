const dotenv = require('dotenv')

dotenv.config()

const env = {
  validatorUrl: process.env.VALIDATOR_URL || 'tcp://localhost:4004'
}

module.exports = env
