'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT, approveButton, createMarketItemButton, tokenURI } from "./wallet/chainFunctions";
import { useRouter } from 'next/navigation';
import { BigNumber } from "ethers";

export default function ListForm(id: number) {


    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [aprroveList, setApproveList] = useState(false);

    const urlkey: number = (window.location.href.split('/').at(4) as unknown as number);
    console.log("urlkey" + urlkey);



    const handleSubmit = () => {
        console.log(address);
        console.log('submitted');
    }

    const getId = () => {
        console.log("id" + id);
    }

    const approveNft = () => {
        return approveButton(urlkey);
    }


    function showListButton() {
        setTimeout(() => {
            document.getElementById("listNFT")!.style.display = "block";
            document.getElementById("approve")!.style.display = "hidden";
        }, 20000);
    }

    const listNFT = (price: string) => {

        const convertedPrice = BigNumber.from(Number(price)).mul(10).pow(18);
        console.log(convertedPrice);
        return createMarketItemButton(urlkey, convertedPrice);
    }


    const router = useRouter();


    return (
            <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
                <CardHeader className="flex items-start gap-2">
                    <CardTitle>List Details</CardTitle>
                    <CardDescription>Enter your listing information</CardDescription>
                </CardHeader>
                <CardContent className="flex items-start">
                    <div className="grid gap-4 w-full md:gap-6">
                        <div className="grid gap-2">
                            <label className="text-base">
                                Price (CFX)
                            </label>
                            <Input id="price" placeholder="100" value={price} onChange={e => setPrice(e.target.value)} />
                        </div>
                        <div onClick={showListButton} id="approve" className="block">
                            {approveNft()}
                        </div>
                        <div id="listNFT" className="hidden" 
                        >
                            {listNFT(price)}
                        </div>
                    </div>
                </CardContent>
            </Card>
    );
}