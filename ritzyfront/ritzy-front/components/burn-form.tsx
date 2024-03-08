'use client'
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT } from "./wallet/chainFunctions";
import { useRouter } from 'next/navigation';

export default function BurnForm() {

    const router = useRouter();
    return (
            <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
                <CardHeader className="flex items-start gap-2">
                    <CardTitle>Claim Details</CardTitle>
                    <CardDescription>Enter your collection information</CardDescription>
                </CardHeader>
                <CardContent className="flex items-start">
                    <form className="grid gap-4 w-full md:gap-6">
                        <div className="grid gap-2">
                            <label className="text-base">
                                Address
                            </label>
                            <Input id="name" placeholder="Street postal code region country" />
                        </div>
                        <div className="gap-2 flex-row">
                        
                            <input type="checkbox" />
                            <label className="text-xs">
                                Are you sure you want to claim this NFT? You will not be able to undo this action. You will receive a SBT and the physical product in 2 weeks.
                            </label>
                        </div>
                        <Button size="lg" variant="outline" 
                        onClick={
                            (e) => {
                                e.preventDefault();
                                router.push('/marketplace/profile');
                            }
                        
                        }>Claim</Button>
                    </form>
                </CardContent>
            </Card>
    );
}