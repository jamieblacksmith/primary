const SimpleToken = artifacts.require("SimpleToken");
const SimpleCrowdsale = artifacts.require("SimpleCrowdsale");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(SimpleToken, 'Simple Token', 'SIM', '10000000000000000000000');
  const token = await SimpleToken.deployed();
  
  await deployer.deploy(SimpleCrowdsale, 1, accounts[0], token.address);
  const crowdsale = await SimpleCrowdsale.deployed();

  token.transfer(crowdsale.address, await token.totalSupply())
};
