'use client'
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT, burnNFTButton, approveBurnButton, getNFTtokenUri } from "./wallet/chainFunctions";
import { useRouter } from 'next/navigation';
import { get } from "http";
import { time } from "console";

export default function BurnForm(id: number) {

    const [address, setAddress] = useState('');
    const [aprroveBurn, setApproveBurn] = useState(false);
    const urlkey: number = (window.location.href.split('/').at(4) as unknown as number);
    console.log("urlkey" + urlkey);

    const handleSubmit = () => {
        console.log(address);
        console.log('submitted');
    }


    const approveBurnNft = () => {
        return approveBurnButton(urlkey);
    }


    function showBurnButton() {
        setTimeout(() => {
            document.getElementById("burnNFT")!.style.display = "block";
            document.getElementById("approveBurn")!.style.display = "hidden";
        }, 20000);
    }

    const burnNFT = () => {

        return burnNFTButton(urlkey);
    }


    const router = useRouter();
    return (
            <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
                <CardHeader className="flex items-start gap-2">
                    <CardTitle>Claim Details</CardTitle>
                    <CardDescription>Enter your collection information</CardDescription>
                </CardHeader>
                <CardContent className="flex items-start">
                    <div className="grid gap-4 w-full md:gap-6">
                        <div className="grid gap-2">
                            <label className="text-base">
                                Address
                            </label>
                            <Input id="name" placeholder="Street postal code region country" value={address} onChange={(e)=> setAddress(e.target.value)} />
                        </div>
                        <div className="gap-2 flex-row">
                        
                            <input type="checkbox" />
                            <label className="text-xs">
                                Are you sure you want to claim this NFT? You will not be able to undo this action. You will receive a SBT and the physical product in 2 weeks.
                            </label>
                        </div>
                        <div onClick={showBurnButton} id="approveBurn" className="block">
                            {approveBurnNft()}
                        </div>
                        <div id="burnNFT" className="hidden"                             
                        onClick={() => router.push('marketplace/profile/')}>
                            {burnNFT()}
                        </div>
                    </div>
                </CardContent>
            </Card>
    );
}