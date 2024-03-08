// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RitzyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    mapping(address => uint256[]) private _addressToTokenIds;

    constructor() ERC721("Ritzy NFT", "RNFT") Ownable(msg.sender) {}
    

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        // include token ID
        _addressToTokenIds[recipient].push(newItemId);
        return newItemId;
    }

    function getIDsOf(address addr) public view returns(uint256[] memory){
        return _addressToTokenIds[addr];
    }
}