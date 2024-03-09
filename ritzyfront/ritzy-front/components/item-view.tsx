'use client';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Header } from "./ui/header"
import { useRouter } from 'next/navigation';
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { getNFTOwner, getNFTtokenUri } from "./wallet/chainFunctions";

export function ItemView() {

  const urlkey: number = (window.location.href.split('/').pop() as unknown as number);
  const address = useAddress();

  const router = useRouter();

  const [nft, setNft] = useState({
    name: '',
    description: '',
    image: '',
    Owner: '',
    tokenID: urlkey,
    Creator: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    getNFTOwner(urlkey).then((newowner:string) => {
      setNft({ ...nft, Owner: newowner });
    }
    );

  }, [nft]);


  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <div className="grid gap-4 lg:grid-cols-[400px_1fr] xl:grid-cols-[600px_1fr] max-w-6xl mx-auto px-4">
        <div className="grid gap-4">
          <div className="grid gap-4">
            <img
              alt="NFT Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 "
              height={600}
              src="/images/ferraridrop.jpg"
              width={600}
            />
            <div className="grid gap-2">
              <h1 className="font-semibold text-2xl">Glimmer Lamps</h1>
              <p className="text-sm leading-normal">
                Glimmer Lamps are the perfect addition to any room, emitting a soft and warm light that creates a cozy
                atmosphere. These handcrafted lamps are made with care and attention to detail, ensuring that each one is
                a unique work of art. The base of the lamp is made from sustainably sourced wood, adding a natural and
                organic touch to the design. The lampshade is adorned with delicate crystals that catch the light,
                creating a beautiful shimmering effect. Whether you're looking to add a touch of elegance to your home or
                searching for the perfect gift, Glimmer Lamps are sure to impress.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="font-semibold text-xl">Additional Information</h2>
            <dl className="grid gap-2 text-sm">
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Creator</dt>
                <dd className="text-sm font-normal">Artisan Designs</dd>
              </div>
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Token ID</dt>
                <dd className="text-sm font-normal">0x4b3f2c3a6b4c</dd>
              </div>
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Contract Address</dt>
                <dd className="text-sm font-normal">0x495f947276749ce646f68ac8c248420045cb7b5e</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Price</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="font-semibold text-2xl">0.05 CFX</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Owner</CardTitle>
                <CardDescription>The current owner of this NFT</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <div className="text-sm font-medium">CryptoCollector123</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Button size="lg" variant="outline"
            onClick={
              () => {
                router.push('/marketplace/{{id}/burn');
              }
            
            }>Claim Physical Item</Button>
            <Button size="lg" variant="outline">Purchase NFT</Button>
            <Button size="lg" variant="outline"
            onClick={
              () => {
                router.push('/marketplace/{{id}/list');
              }
            }>
              <PlusIcon className="w-4 h-4 mr-2" />
              List NFT for Sale
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
