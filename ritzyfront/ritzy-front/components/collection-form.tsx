'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT } from "./wallet/chainFunctions";

export default function CollectionForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [creator, setCreator] = useState('');
    const [evmadd, setEvmadd] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    

    const handleSubmit = () => {
        console.log(name, description, creator, evmadd, quantity, image);
        console.log('submitted');
    }

    const handleImage = (e: any) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];

        //pinata back o fs en react

    }




    return (
            <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
                <MintNFT />
                <CardHeader className="flex items-start gap-2">
                    <CardTitle>Collection Details</CardTitle>
                    <CardDescription>Enter your collection information</CardDescription>
                </CardHeader>
                <CardContent className="flex items-start">
                    <form className="grid gap-4 w-full md:gap-6" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <label className="text-base">
                                Name
                            </label>
                            <Input id="name" placeholder="My Awesome Collection" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-base">
                                Image
                            </label>
                            <input id="image" type="file" accept="image/*" value={image} onChange={e => 
                                handleImage(e)
                                }/>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-base">
                                Description
                            </label>
                            <textarea
                                className="min-h-[100px] rounded-lg p-4 bg-gray-100 dark:bg-gray-800"
                                id="description"
                                placeholder="Enter a description for your collection"
                                value={description} onChange={(e)=> setDescription(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-base">
                                Creator
                            </label>
                            <Input id="creator" placeholder="Your Name" value={creator} onChange={(e)=> setCreator(e.target.value)}/>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-base">
                                EVM address
                            </label>
                            <Input id="evmadd" placeholder="0x...." type="string" value={evmadd} onChange={(e)=> setEvmadd(e.target.value)}/>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-base" >
                                Quantity
                            </label>
                            <Input id="quantity" placeholder="10" type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                        </div>
                        <Button size="lg" variant="outline">Save</Button>
                    </form>
                </CardContent>
            </Card>
    );
}