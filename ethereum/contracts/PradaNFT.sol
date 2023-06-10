// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PradaNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;

    constructor() ERC721("NFTContract", "NFTC") {
        mintPrice = 0.5 ether;
        totalSupply = 0;
        maxSupply = 10;
    }

    function mintNFT(address recipient, string memory tokenURI) public payable returns (uint256) {
        require(msg.value >= mintPrice, "Wrong mint value");
        require(totalSupply + 1 <= maxSupply, "Sold out");

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        totalSupply++;

        return newItemId;
    }

    function getPrice() public returns (uint256) {
        return mintPrice;
    }

    function getTotalSupply() public returns (uint256) {
        return totalSupply;
    }

    function getMaxSupply() public returns (uint256) {
        return maxSupply;
    }
}
