const GoodsNFT = artifacts.require("./GoodsNFT.sol");
const Market = artifacts.require("./Market.sol");


module.exports = function (deployer) {
  deployer.deploy(GoodsNFT);
  deployer.deploy(Market);
};