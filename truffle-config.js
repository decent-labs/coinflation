require('chai/register-should');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.SEED, process.env.ROPSTEN_PROVIDER_URL),
      network_id: 3,
      gas: 5500000,
      gasPrice: 5000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.5.2",
    }
  }
}
