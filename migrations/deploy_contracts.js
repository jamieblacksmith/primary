const Token = artifacts.require("Token");
const ILO = artifacts.require("ILO");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Token, 'Notifi', 'NTF', '1000000000000000000000000');
  const token = await Token.deployed();
  
  await deployer.deploy(ILO, 1, accounts[0], token.address);
  const crowdsale = await ILO.deployed();

  token.transfer(crowdsale.address, await token.totalSupply())
};
