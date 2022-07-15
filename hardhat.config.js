require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
/** @type import('hardhat/config').HardhatUserConfig */

const Goerli_RPC_URL = process.env.Goerli_RPC_URL;
const Goerli_key = process.env.Goerli_key;
const Ether_api = process.env.Ether_api;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: Goerli_RPC_URL,
      accounts: [Goerli_key],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: Ether_api,
  },
  solidity: "0.8.7",
};
