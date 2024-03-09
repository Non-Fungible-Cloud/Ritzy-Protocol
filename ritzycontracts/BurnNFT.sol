// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Soulbound is ERC721URIStorage, Ownable {

    uint256 private _tokenIdCounter;
    ERC721 ritzyNFT;

    mapping(address => uint256[]) private _addressToTokenIds;

    constructor(address _ritzyNFT) ERC721("Ritzy SoulBound", "RSBT") Ownable(msg.sender) {
        ritzyNFT = ERC721(_ritzyNFT);
        
    }

    function burnNFTAndMintSBT(uint256 _tokenId) external {
        require(ritzyNFT.ownerOf(_tokenId) == msg.sender, "You must be the owner of the NFT");
        // Burn the ERC721 token by transfering it to this smart contract
        ritzyNFT.transferFrom(msg.sender, address(this), _tokenId);
        string memory URI = ritzyNFT.tokenURI(_tokenId);
        // Mint SBT to the burner
        safeMint(msg.sender, URI);
    }

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721)
        returns (address)
    {
        address from = _ownerOf(tokenId);
        if (from != address(0)) {
            revert("Soulbound transfer failed");
        }
        return super._update(to, tokenId, auth);
    }

    function safeMint(address to, string memory tokenURI) internal {
        _tokenIdCounter += 1;
        _safeMint(to, _tokenIdCounter);
        _setTokenURI(_tokenIdCounter, tokenURI);
        _addressToTokenIds[to].push(_tokenIdCounter);
    }

    function getSBTsOfAddress(address addr) public view returns(uint256[] memory){
        return _addressToTokenIds[addr];
    }

}