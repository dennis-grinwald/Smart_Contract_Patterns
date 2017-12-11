var SelfDestruct = artifacts.require("./SelfDestruct.sol");
var ContractFactory = artifacts.require("./ContractFactory.sol");
var NameRegistry = artifacts.require("./NameRegistry.sol");

module.exports = function(deployer) {

  deployer.deploy(SelfDestruct);

  // Pass the argument. 5 assets with price 100 will be created
  deployer.deploy(ContractFactory,5,100);

  deployer.deploy(NameRegistry);

};
