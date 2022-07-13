require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const Goerli_RPC_URL = process.env.Goerli_RPC_URL;
const Goerli_key = process.env.Goerli_key;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: Goerli_RPC_URL,
      accounts: [Goerli_key],
      chainId: 5,
    },
  },
  solidity: "0.8.7",
};
