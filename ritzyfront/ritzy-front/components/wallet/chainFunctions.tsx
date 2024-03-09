'use client'
import { Web3Button, useContractRead, useContract, useContractWrite } from "@thirdweb-dev/react";
import { NFTAddress, NFTABI } from "./RitzyNFT";
import { MarketplaceAddress, MarketplaceABI } from "./RitzyMarketplace";
import { BurnABI, BurnAddress } from "./RitzyBurnNFT";
import { utils } from "ethers";

/*                            *
 *                            *
 *  ERC 721 TOKEN FUNCTIONS   *
 *                            *
 *                            * 
 *                            */

const MintNFT = () => {
  return (
    <Web3Button
      contractAddress={NFTAddress}
      contractAbi={NFTABI}
      // Call the name of your smart contract function
      action={(contract) => contract.call("mintNFT", ["0xfdC91d0fFd95ECD7F84Bd9986befAE5BF5d7020c", "https://ipfs.io/ipfs/QmUFbUjAifv9GwJo7ufTB5sccnrNqELhDMafoEmZdPPng7"])}
    >
      Mint Rifty NFT
    </Web3Button>
  );
};

function balanceOf(address: string) { 
  const { contract } = useContract(NFTAddress, NFTABI);  
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);

  console.log(data);
  return { data, isLoading };
};

function getIDsOfAddress(address: string) { 
  const { contract } = useContract(NFTAddress, NFTABI);  
  const { data, isLoading } = useContractRead(contract, "getIDsOf", [address]);
  //console.log(data);
  return { data, isLoading };
};

function tokenURI(tokenID: number) { 
  const { contract } = useContract(NFTAddress, NFTABI);    
  const { data, isLoading } = useContractRead(contract, "tokenURI", [tokenID]);

  console.log(data);
  return { data, isLoading };
};


/*                            *
 *                            *
 *  MARKETPLACE FUNCTIONS     *
 *                            *
 *                            * 
 *                            */

// Before createMarketItem, we have to approve the transfer, make 2 transactions
function approveButton(tokenID: string) { 
    
  return (
  <Web3Button
      contractAddress={NFTAddress}
      contractAbi={NFTABI}
      // Call the name of your smart contract function
      action={(contract) => contract.call("approve", [MarketplaceAddress, tokenID])}
    >
      Approve
    </Web3Button>);
};

function createMarketItemButton(tokenID: number, price: number) { 
    
  return (
  <Web3Button
      contractAddress={MarketplaceAddress}
      contractAbi={MarketplaceABI}
      // Call the name of your smart contract function
      action={(contract) => contract.call("createMarketItem", [NFTAddress, tokenID, price])}
    >
      Sell Item
    </Web3Button>);
};


function purchaseItemButton(tokenID: number, price: string) { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "createMarketSale",
  );

  return (
  <Web3Button
      contractAddress={MarketplaceAddress}
      contractAbi={MarketplaceABI}
      // Call the name of your smart contract function
      action={() =>
        mutateAsync({
          args: [NFTAddress, tokenID],
          overrides: {
            value: utils.parseEther(price), // send 0.1 native token with the contract call
          },
        })
      }
    >
      Purchase Item
    </Web3Button>);
};

//Only admin
function setFeeButton(fee: number) { 
  return (
  <Web3Button
      contractAddress={MarketplaceAddress}
      contractAbi={MarketplaceABI}
      action={(contract) => contract.call("setFee", [fee])}
    >
      Change Fee
    </Web3Button>);
};

//Only admin
function withdrawBalanceButton(fee: number) { 
  return (
  <Web3Button
      contractAddress={MarketplaceAddress}
      contractAbi={MarketplaceABI}
      action={(contract) => contract.call("withdrawETH")}
    >
      Withdraw Balance
    </Web3Button>);
};



//  GETTERS
function fetchMarketItems() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "fetchMarketItems");

  console.log(data);
  return data;
};

function getOwner() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "owner");

  console.log(data);
  return data;
};

function getFee() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "fee");

  console.log(data);
  return data;
};

//only Admin
function getMarketplaceBalance() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "getBalance");

  console.log(data);
  return data;
};


/*                            *
 *                            *
 *  SOULBOUND NFT FUNCTIONS   *
 *                            *
 *                            * 
 *                            */
//Prior burning the NFT, we have to approve the transfer, make 2 transactions
function approveBurnButton(tokenID: string) { 
    
  return (
  <Web3Button
      contractAddress={NFTAddress}
      contractAbi={NFTABI}
      // Call the name of your smart contract function
      action={(contract) => contract.call("approve", [BurnAddress, tokenID])}
    >
      Approve
    </Web3Button>);
};

function burnNFTButton(tokenID: number) {

  return (
    <Web3Button
      contractAddress={BurnAddress}
      contractAbi={BurnABI}
      action={(contract) => contract.call("burnNFTAndMintSBT", [tokenID])}
    >
      Burn your NFT
    </Web3Button>
  );
};


function getRSBTBalance(address: String) { 
  const { contract } = useContract(BurnAddress, BurnABI);  
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);

  console.log(data);
  return data;
};

function getRSBTURI(tokenID: number) { 
  const { contract } = useContract(BurnAddress, BurnABI);  
  const { data, isLoading } = useContractRead(contract, "tokenURI", [tokenID]);

  console.log(data);
  return data;
};

function getSBTsOfAddress(address: String) { 
  const { contract } = useContract(BurnAddress, BurnABI);  
  const { data, isLoading } = useContractRead(contract, "getSBTsOfAddress", [address]);

  console.log(data);
  return data;
};


export {MintNFT, balanceOf, getIDsOfAddress, tokenURI, 
  createMarketItemButton, purchaseItemButton, approveButton, setFeeButton, withdrawBalanceButton,
  fetchMarketItems, getOwner, getFee, getMarketplaceBalance,
  approveBurnButton, burnNFTButton, getRSBTBalance, getRSBTURI, getSBTsOfAddress};