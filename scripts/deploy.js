//import the files
const { ethers } = require("hardhat");
//async main function
async function main() {
  const SimplestorageFactory = await ethers.getContractFactory("Simplestorage");

  console.log("Deploying the smart Contract...");
  const Simplestorage = await SimplestorageFactory.deploy();
  await Simplestorage.deployed();
}
//call the function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
