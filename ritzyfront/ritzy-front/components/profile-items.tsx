'use client';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Header } from "./ui/header";
import { useRouter } from 'next/navigation';
import { useAddress } from "@thirdweb-dev/react";
import { getIDsOfAddress, tokenURI } from "./wallet/chainFunctions";
import { use, useEffect, useState } from "react";

export function ProfileItems() {

    const ipfsURL = "https://ipfs.io/ipfs/";
    const address = useAddress();
    const items = getIDsOfAddress(address!);

    const[itemsIdsInt, setItemsIdsInt] = useState<number[]>([]);
    const[itemsUri, setItemsUri] = useState<string[]>([]);

    useEffect(() => {

        if(!items.isLoading){
            const itemsIdsInt = items!.data.map(Number);
            setItemsIdsInt(itemsIdsInt);
        }


    }, [items.isLoading, items.data]);


    getIpfsUri();

    function getUri(id: number){
        const uri = tokenURI(id);
        return uri;
    }
    function getIpfsUri(){
      if(itemsIdsInt! !== undefined){
        const result = itemsIdsInt!.map(getUri);
        const resultipfs = result.map((uri) => ipfsURL + uri);
          setItemsUri(resultipfs);
      }
    }



    const router = useRouter();

    function clickOnItem(id:string) {
        router.push('/marketplace/'+ id);
      }



    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 grid gap-8 ml-10 md:gap-12 md:p-6">
          <section className="grid gap-4">
            <div className="grid gap-4">
              <div className="grid items-center gap-2">
                <h1 className="font-semibold text-4xl">My Nfts</h1>
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
                    src="/images/winedrop.jpg"
                    width={300}
                  />
                  <CardContent className="pb-4">
                    <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                    <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">0.05 CFX</div>
                    </div>
                  </CardContent>
                </Card>

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