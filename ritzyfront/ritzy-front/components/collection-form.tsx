'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MintNFT } from "./wallet/chainFunctions";


export class Nft {
    name!: string;
    description!: string;
    image!: string;
    Creator!: string;
    Owner!: string;
}

export default function CollectionForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [creator, setCreator] = useState('');
    const [evmadd, setEvmadd] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [objectUrl, setObjectUrl] = useState('');
    const [nft, setNft] = useState<Nft>();
    const [isUpdated, setIsUpdated] = useState(false);

    

    const handleSubmit = () => {
        console.log(name, description, creator, evmadd, quantity, image);
        console.log('submitted');

        //upload metadata to pinata
        const res = new Nft();
        res.name = name;
        res.description = description;
        res.image = imageUrl;
        res.Creator = creator;
        res.Owner = evmadd;
        setNft(res);

        uploadMetadata(res).then(() => {
            console.log("metadata uploaded");
            setIsUpdated(true);
            document.getElementById("save")!.style.display = "none";
        });


        //mint NFT



    }


    const handleImage = (e: any) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];

        uploadtoPinata(file);

    }

    async function uploadtoPinata(file: any) {
        const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
        const data = new FormData();
        data.append('file', file);

        console.log(process.env.NEXT_PUBLIC_PINATA_JWT);

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4N2E2OTQwYi0yYjNmLTQ2ZjEtOGNkNC1jZjA4Y2E4ZGZmZjgiLCJlbWFpbCI6InNhcnRlZ2V5ZGFAZ3VmdW0uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImUwYjkwZmRjN2VhZGUxYTE5ZWFjIiwic2NvcGVkS2V5U2VjcmV0IjoiYmE3YTJkYmJmNDhjYjM0M2FmNDM1ZjQyNjVkN2I1NzcyOWQ1NjJhMzdhZDlhY2E3YjgwN2FkYTA0OGNjOTRlMCIsImlhdCI6MTcxMDAyMzY4Nn0.2b4UsJw5GaQ7h-FVQ4uocwg9a1hq1HddHrnDUD3QGEc` 
            },
            body: data
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            setImageUrl("https://ipfs.io/ipfs/"+ data.IpfsHash+"?0.png");
        }).catch(error => {
            console.error('Error:', error);
        });
    }


    async function uploadMetadata(nft: Nft) {

        const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
        const data = JSON.stringify({
            name: nft.name,
            description: nft.description,
            image: nft.image,
            Creator: nft.Creator,
            Owner: nft.Owner
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4N2E2OTQwYi0yYjNmLTQ2ZjEtOGNkNC1jZjA4Y2E4ZGZmZjgiLCJlbWFpbCI6InNhcnRlZ2V5ZGFAZ3VmdW0uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImUwYjkwZmRjN2VhZGUxYTE5ZWFjIiwic2NvcGVkS2V5U2VjcmV0IjoiYmE3YTJkYmJmNDhjYjM0M2FmNDM1ZjQyNjVkN2I1NzcyOWQ1NjJhMzdhZDlhY2E3YjgwN2FkYTA0OGNjOTRlMCIsImlhdCI6MTcxMDAyMzY4Nn0.2b4UsJw5GaQ7h-FVQ4uocwg9a1hq1HddHrnDUD3QGEc` 
            },
            body: data
        }).then(response => {
            return response.json();
        }
        ).then(data => {
            console.log(data);
            setObjectUrl("https://ipfs.io/ipfs/"+ data.IpfsHash);
        }).catch(error => {
            console.error('Error:', error);
        });
    }







return (
    <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
        <CardHeader className="flex items-start gap-2">
            <CardTitle>Collection Details</CardTitle>
            <CardDescription>Enter your collection information</CardDescription>
        </CardHeader>
        <CardContent className="flex items-start">
            <div className="grid gap-4 w-full md:gap-6">
                <div className="grid gap-2">
                    <label className="text-base">
                        Name
                    </label>
                    <Input id="name" placeholder="My Awesome Collection" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Image
                    </label>
                    <input id="image" type="file" accept="image/*" value={image} onChange={e =>
                        handleImage(e)
                    } />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Description
                    </label>
                    <textarea
                        className="min-h-[100px] rounded-lg p-4 bg-gray-100 dark:bg-gray-800"
                        id="description"
                        placeholder="Enter a description for your collection"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Creator
                    </label>
                    <Input id="creator" placeholder="Your Name" value={creator} onChange={(e) => setCreator(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        EVM address
                    </label>
                    <Input id="evmadd" placeholder="0x...." type="string" value={evmadd} onChange={(e) => setEvmadd(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base" >
                        Quantity
                    </label>
                    <Input id="quantity" placeholder="10" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <Button size="lg" variant="outline" id="save" onClick={
                    handleSubmit

                }>Save</Button>


                {isUpdated && MintNFT(evmadd, objectUrl)}
            </div>
        </CardContent>
    </Card>
);
}