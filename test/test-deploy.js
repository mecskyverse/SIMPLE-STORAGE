const { ethers } = require("hardhat");
const { assert, expect } = require("chai");
describe("SimpleStorage", function () {
  let simplestorage, simplestoragefactory;
  beforeEach(async function () {
    simplestoragefactory = await ethers.getContractFactory("SimpleStorage");
    simplestorage = await simplestoragefactory.deploy();
  });
  it("Should start with a zero", async function () {
    const expectednumber = "0";
    const currentnumber = await simplestorage.retrieve();

    assert.equal(currentnumber.toString(), expectednumber);
  });
});
