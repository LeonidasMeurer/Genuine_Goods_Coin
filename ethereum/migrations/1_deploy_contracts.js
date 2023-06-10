const GoodsNFT = artifacts.require("./GoodsNFT.sol");
const Market = artifacts.require("./Market.sol");
const PradaNFT = artifacts.require("./PradaNFT.sol");



module.exports = function (deployer) {
  deployer.deploy(GoodsNFT);
  deployer.deploy(Market);
  deployer.deploy(PradaNFT)
};