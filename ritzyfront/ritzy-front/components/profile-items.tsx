'use client';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Header } from "./ui/header";
import { useRouter } from 'next/navigation';
import { useAddress } from "@thirdweb-dev/react";
import { BalanceOf, GetIDsOfAddress, getNFTOwner, getNFTtokenUri } from "./wallet/chainFunctions";
import { use, useEffect, useState } from "react";
import { get } from "http";

export class Nft {
  name!: string;
  description!: string;
  image!: string;
}



export function ProfileItems() {


    const address = useAddress();
    //const address = "0x4c8f2e1A98397EbD82e780A6e791a0b09202E25c"
    const { data, } = GetIDsOfAddress(address ? address : "");
    const { balance } = BalanceOf(address ? address : "");
    
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingNfts, setIsLoadingNfts] = useState(true);
    const [URIs, setURIs] = useState<string[]>([]);
    const [Nfts, setNfts] = useState<Nft[]>([]);
    const [idMapUri, setIdMapUri] = useState<Map<number, string>>(new Map());
    const [idMap, setIdMap] = useState<Map<number, Nft>>(new Map());
 


    function MapNfts(map: Map<number, Nft>) {
      return Array.from(map).map(([key, value]) => {
        return (
          <Card onClick={
            (e) => {
              e.preventDefault();
              const id = key.toString();
              clickOnItem(id);
            }
          } className="cursor-pointer" key={key}>
            <img
              alt="Artwork"
              className=" object-cover rounded-t-lg"
              height={200}
              src={value.image}
              width={300}
            />
            <CardContent className="pb-4 mt-5">
              <CardTitle className="text-base font-semibold">{value.name}</CardTitle>
              <CardDescription className="text-sm">{value.description}</CardDescription>
            </CardContent>
          </Card>
        );
      });
    }


    useEffect(() => {
      const array: string[] = [];
      if(data != undefined && URIs.length != balance){
        data.forEach((id: number)  => {
          getNFTtokenUri(id).then((newuri:string) => {
            console.log(id + " " + newuri);
            getNFTOwner(id).then((owner: string) => {
              if(owner == address){
                array.push(newuri);
                setIdMapUri(idMapUri.set(Number(id), newuri));
                if(array.length == balance){
                  setURIs(array);
                }
              }
            });              
          });
      });
      }
    }, [data, balance]);

    useEffect(() => {
      if(URIs.length == balance && URIs.length != 0){
        readFromIpfs(idMapUri);
        
      }
    }, [balance, URIs]);


    useEffect(() => {
      if(Nfts.length == balance && Nfts.length != 0){
        setIsLoading(false);
      }
    }, [Nfts]);

    const router = useRouter();

    function clickOnItem(id:string) {
        router.push('/marketplace/'+ id);
    }


    function readFromIpfs(map: Map<number, string>) {
      const NftsArray: Nft[] = [];
      map.forEach((uri: string, id: number) => {
        fetch(uri)
          .then(response => response.json())
          .then(data => {
            const nft = new Nft();
            nft.name = data.name;
            nft.description = data.description;
            nft.image = data.image;
            setIdMap(idMap.set(id, nft));
            NftsArray.push(nft);
            if(NftsArray.length == balance){
              setNfts(NftsArray);
            }
          });
      });
    }


    

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        {!isLoading ? (
           <main className="flex-1 grid gap-8 ml-10 md:gap-12 md:p-6">
          <section className="grid gap-4">
            <div className="grid gap-4">
              <div className="grid items-center gap-2">
                <h1 className="font-semibold text-4xl">My Nfts</h1>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               
                {MapNfts(idMap)}
              </div>
            </div>
          </section>
           <section className="grid gap-4">
             <div className="grid gap-4">
               <div className="grid items-center gap-2">
                 <h1 className="font-semibold text-4xl">My Sbts</h1>
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
   
               </div>
             </div>
           </section>
         </main>
          ):(
          <>
          </>
        )}
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
    );
  }