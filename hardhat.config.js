require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */

const Goerli_RPC_URL = process.env.Goerli_RPC_URL;
const Goerli_key = process.env.Goerli_key;
const Ether_api = process.env.Ether_api;
const Coinmarketapi_KEY = process.env.coinmarketapi;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: Goerli_RPC_URL,
      accounts: [Goerli_key],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      //thanks hardhart for accounts
    },
  },
  etherscan: {
    apiKey: Ether_api,
  },
  solidity: "0.8.7",
  gasReporter: {
    enabled: true,
    // outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: Coinmarketapi_KEY,
  },
};
