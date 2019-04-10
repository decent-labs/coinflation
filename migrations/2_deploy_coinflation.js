const Coinflation = artifacts.require("Coinflation");

module.exports = function(deployer) {
  deployer.deploy(Coinflation, process.env.NAME, process.env.SYMBOL, process.env.DECIMALS);
};
