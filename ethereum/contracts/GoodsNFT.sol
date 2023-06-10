// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GoodsNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct NFT {
        address owner;
        uint256 price;
        string tokenURI;
    }

    mapping(uint256 => NFT) private _nfts;

    constructor() ERC721("NFTContract", "NFTC") {}

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _nfts[newItemId] = NFT(recipient, 0, tokenURI);
        return newItemId;
    }

    function getNFT(uint256 tokenId) public view returns (address owner, uint256 price, string memory tokenURI) {
        require(_exists(tokenId), "NFT does not exist");
        NFT storage nft = _nfts[tokenId];
        return (nft.owner, nft.price, nft.tokenURI);
    }
}
