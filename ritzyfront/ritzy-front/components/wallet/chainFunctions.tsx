'use client'
import { Web3Button, useContractRead, useContract, useContractWrite } from "@thirdweb-dev/react";
import { NFTAddress, NFTABI } from "./RitzyNFT";
import { MarketplaceAddress, MarketplaceABI } from "./RitzyMarketplace";
import { BurnABI, BurnAddress } from "./RitzyBurnNFT";
import { BigNumber, ethers, utils } from "ethers";

/*                            *
 *                            *
 *  ERC 721 TOKEN FUNCTIONS   *
 *                            *
 *                            * 
 *                            */

const MintNFT = (owner: string, objecturi:string) => {
  return (
    <Web3Button
      contractAddress={NFTAddress}
      contractAbi={NFTABI}
      // Call the name of your smart contract function
      action={(contract) => contract.call("mintNFT", [owner, objecturi])}
    >
      Mint Ritzy NFT
    </Web3Button>
  );
};

function BalanceOf(address: string) { 
  const { contract } = useContract(NFTAddress, NFTABI);  
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);
  const balance = data;
  return { balance, isLoading };
};

function GetIDsOfAddress(address: string) { 
  const { contract } = useContract(NFTAddress, NFTABI);  
  const { data, isLoading } = useContractRead(contract, "getIDsOf", [address]);
  return { data, isLoading };
};


export async function getNFTtokenUri(id: number): Promise<any> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    NFTAddress,
    NFTABI,
    provider.getSigner()
  );
  const uri = contract.tokenURI(id);
  return uri;
}

export async function getNFTOwner(id: number): Promise<any> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    NFTAddress,
    NFTABI,
    provider.getSigner()
  );
  const owner = contract.ownerOf(id);
  return owner;
}

/*                            *
 *                            *
 *  MARKETPLACE FUNCTIONS     *
 *                            *
 *                            * 
 *                            */

// Before createMarketItem, we have to approve the transfer, make 2 transactions
function approveButton(tokenID: number) { 
    
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

function createMarketItemButton(tokenID: number, price: BigNumber) { 
    
  return (
  <Web3Button
      contractAddress={MarketplaceAddress}
      contractAbi={MarketplaceABI}
      // Call the name of your smart contract function
      action={(contract) => 
        contract.call("createMarketItem", [NFTAddress, tokenID, price])}
    >
      Sell Item
    </Web3Button>);
};


/* function purchaseItemButton(tokenID: number, price: string) { 
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
}; */

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
function FetchMarketItems() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "fetchMarketItems");

  console.log(data);
  return data;
};

function GetOwner() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "owner");

  console.log(data);
  return data;
};

function GetFee() { 
  const { contract } = useContract(MarketplaceAddress, MarketplaceABI);  
  const { data, isLoading } = useContractRead(contract, "fee");

  console.log(data);
  return data;
};

//only Admin
function GetMarketplaceBalance() { 
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
function approveBurnButton(tokenID: number) { 
    
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


function GetRSBTBalance(address: String) { 
  const { contract } = useContract(BurnAddress, BurnABI);  
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);
  const isLoadingFunction = isLoading;
  const sbtbalance = data;
  return {sbtbalance, isLoadingFunction};
};

function GetRSBTURI(tokenID: number) { 
  const { contract } = useContract(BurnAddress, BurnABI);  
  const { data, isLoading } = useContractRead(contract, "tokenURI", [tokenID]);

  console.log(data);
  return data;
};

export async function getSBTtokenUri(id: number): Promise<any> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    BurnAddress,
    BurnABI,
    provider.getSigner()
  );
  const uri = contract.tokenURI(id);
  return uri;
}

function GetSBTsOfAddress(address: String) { 
  const { contract } = useContract(BurnAddress, BurnABI);  
  const { data, isLoading } = useContractRead(contract, "getSBTsOfAddress", [address]);
  const sbtdata = data;
  const isloading2 = isLoading;
  return {sbtdata, isloading2};
};


export {MintNFT, BalanceOf, GetIDsOfAddress, 
  createMarketItemButton, approveButton, setFeeButton, withdrawBalanceButton,
  FetchMarketItems, GetOwner, GetFee, GetMarketplaceBalance,
  approveBurnButton, burnNFTButton, GetRSBTBalance, GetRSBTURI, GetSBTsOfAddress};