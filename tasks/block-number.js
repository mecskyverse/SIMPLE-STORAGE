const { task } = require("hardhat/config");

task("block-number", "Prints the current Block-number").setAction(
  async (taskArgs, hre) => {
    const blocknumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Block Number = ${blocknumber}`);
  }
);
