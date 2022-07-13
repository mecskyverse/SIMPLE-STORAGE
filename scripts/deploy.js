//import the files
const { ethers, run, network } = require("hardhat");
require("dotenv").config();
//async main function
async function main() {
  const SimplestorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying the smart Contract...");
  const Simplestorage = await SimplestorageFactory.deploy();
  await Simplestorage.deployed();

  console.log(`Deployed smart contract at ${Simplestorage.address}`);
  if (network.config.chainId === 5 && process.env.Ether_api) {
    await Simplestorage.deployTransaction.wait(6);
    await verify(Simplestorage.address, []);
  }

  const currentvalue = await Simplestorage.retrieve();
  console.log(`Current value of the contract is:${currentvalue}`);

  //updating the current value
  const newnumber = await Simplestorage.store(7);
  await newnumber.wait(1);
  const updatedvalue = await Simplestorage.retrieve();
  console.log(`Updated value is: ${updatedvalue}`);
}

//verifying function so that we don't need to manually verify after deploying the smart contract

async function verify(contractAddress, args) {
  console.log("Verifying Contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("already Verified");
    } else {
      console.log(e);
    }
  }
}

//call the function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
