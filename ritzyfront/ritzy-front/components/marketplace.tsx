'use client';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "./ui/header"
import { useRouter } from 'next/navigation';
import { fetchMarketItems, getNFTtokenUri } from "./wallet/chainFunctions";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";


export class MarketplaceItem {
  itemId!: number;
  tokenId!: number;
  price!: number;
  tokenUri?: string;
  name!: string;
  description!: string;
  image!: string;
}

export function Marketplace() {

  function clickOnItem(id:number) {
    router.push('/marketplace/'+ id);
}

  function MapNfts(items: MarketplaceItem[]) {
    return items.map((nft) => {
      return (
        <Card onClick={
          (e) => {
            e.preventDefault();
            const id = nft.tokenId;
            clickOnItem(id);
          }
        } className="cursor-pointer">
          <img
            alt="Artwork"
            className=" object-cover rounded-t-lg"
            height={200}
            src={nft.image}
            width={300}
          />
          <CardContent className="pb-4">
            <CardTitle className="text-base font-semibold">{nft.name} </CardTitle>
            <CardDescription className="text-sm">{nft.description}</CardDescription>
            <div className="flex items-center gap-2">
              <div className="font-semibold">CFX</div>
            </div>
          </CardContent>
        </Card>
      );
    });
  }
  
  const router = useRouter();
  const address = useAddress();

  const  data = fetchMarketItems();
  
  const [isLoading, setIsLoading] = useState(true);
  const [NFTs, setNFTs] = useState<MarketplaceItem[]>([]);

  useEffect(() => {
    const NFTarray: MarketplaceItem[] = [];
    if(data != undefined){
      data.forEach((item: MarketplaceItem)  => {
        const NFT:MarketplaceItem = new MarketplaceItem();
        NFT.itemId = item.itemId;
        NFT.price = item.price;
        NFT.tokenId = item.tokenId; 
        getNFTtokenUri(item.tokenId).then((uri:string) => {
          console.log("uriii "+ uri)
          NFT.tokenUri = uri;
          fetch(uri).then(response => response.json()).then((res) => {
            console.log(res);
            NFT.name = res.name;
            console.log("name "+ NFT.name)
            NFT.description = res.description;
            NFT.image = res.image;
            NFTarray.push(NFT);
            console.log("added item")
            console.log(NFTarray.length + " " + data.length)
            if(NFTarray.length == data.length){
              setNFTs(NFTarray);
            }
          });          
        });
  
    });
    }
  }, [data]);

    useEffect(() => {
      if(NFTs.length != 0){
        console.log("our nfts ");
        console.log(NFTs);
        setIsLoading(false);
      }
    }, [NFTs]);
  
  fetchMarketItems();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 grid gap-8 ml-10 md:gap-12 md:p-6">
        <section className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid items-center gap-2">
              <h1 className="font-semibold text-4xl">Featured Collections</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {!isLoading ? (<>{MapNfts(NFTs)}</>) : (<></>)}
            </div>
          </div>
        </section>
        <section className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid items-center gap-2">
              <h1 className="font-semibold text-4xl">User Posted</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card onClick={
                (e) => {
                  e.preventDefault();
                  const id = '1';
                  clickOnItem(id);
                }
              } className="cursor-pointer">

                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/raquetdrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Racket Nadal</CardTitle>
                  <CardDescription className="text-sm">Rafael Nadal</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.3 CFX</div>
                  </div>
                </CardContent>
              </Card>

              <Card onClick={
                (e) => {
                  e.preventDefault();
                  const id = '1';
                  clickOnItem(id);
                }
              } className="cursor-pointer">
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.041 CFX</div>
                  </div>
                </CardContent>
              </Card>

              <Card onClick={
                (e) => {
                  e.preventDefault();
                  const id = '1';
                  clickOnItem(id);
                }
              } className="cursor-pointer">
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.04 CFX</div>
                  </div>
                </CardContent>
              </Card>
              <Card onClick={
                (e) => {
                  e.preventDefault();
                  const id = '1';
                  clickOnItem(id);
                }
              } className="cursor-pointer">
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.045 CFX</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Ritzy Protocol. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
