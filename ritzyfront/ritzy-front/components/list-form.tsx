'use client'
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT } from "./wallet/chainFunctions";
import { useRouter } from 'next/navigation';

export default function ListForm() {

    const router = useRouter();


    return (
            <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
                <CardHeader className="flex items-start gap-2">
                    <CardTitle>List Details</CardTitle>
                    <CardDescription>Enter your listing information</CardDescription>
                </CardHeader>
                <CardContent className="flex items-start">
                    <form className="grid gap-4 w-full md:gap-6">
                        <div className="grid gap-2">
                            <label className="text-base">
                                Price (CFX)
                            </label>
                            <Input id="name" placeholder="100" />
                        </div>
                        <Button size="lg" variant="outline"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                router.push('/marketplace/');
                            }
                        }>List</Button>
                    </form>
                </CardContent>
            </Card>
    );
}