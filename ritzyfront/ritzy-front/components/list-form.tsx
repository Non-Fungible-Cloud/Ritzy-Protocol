'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT, approveButton, createMarketItemButton } from "./wallet/chainFunctions";
import { useRouter } from 'next/navigation';

export default function ListForm(id: number) {


    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [aprroveList, setApproveList] = useState(false);

    const handleSubmit = () => {
        console.log(address);
        console.log('submitted');
    }

    const getId = () => {
        console.log("id" + id);
    }

    const approveNft = () => {
        return approveButton(2);
    }


    function showListButton() {
        setTimeout(() => {
            document.getElementById("listNFT")!.style.display = "block";
            document.getElementById("approve")!.style.display = "hidden";
        }, 20000);
    }

    const listNFT = (price:string) => {

        return createMarketItemButton(2, Number(price));
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
                        <Button size="lg" variant="outline"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                router.push('/marketplace/');
                            }
                        }>List</Button>
                        <div onClick={showListButton} id="approve" className="block">
                            {approveNft()}
                        </div>
                        <div id="listNFT" className="hidden" 
                            onClick={() => router.push('/marketplace/')}
                        >
                            {listNFT(price)}
                        </div>
                    </div>
                </CardContent>
            </Card>
    );
}