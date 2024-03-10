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


  const address = useAddress();


  const router = useRouter();

  const [nft, setNft] = useState({
    name: '',
    description: '',
    image: '',
    Owner: '',
    tokenID: '',
    Creator: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [tokenUri, setTokenUri] = useState('');
  const [owner, setOwner] = useState('');
  const [urlkey, setUrlkey] = useState('');


  useEffect(() => {
    const urlkey: number = (window.location.href.split('/').pop() as unknown as number);
    console.log("urlkey" + urlkey);
    setUrlkey(urlkey.toString());
    const tokenUrii = getNFTtokenUri(urlkey).then((uri) => {
      setTokenUri(uri);
      console.log("uri: " + uri);
    }
    );

    const owneri = getNFTOwner(urlkey).then((owner) => {
      setOwner(owner);
      console.log("owner" + owner);

    });

  }
    , [address]);

  useEffect(() => {
    if (tokenUri != '' && owner != '') {
      fetch(tokenUri).then((response) => response.json()).then((data) => {
        console.log(data);
        setNft({
          name: data.name,
          description: data.description,
          image: data.image,
          Owner: owner,
          tokenID: urlkey.toString(),
          Creator: data.company
        });
      });
      setIsLoading(false);
    }
  }, [tokenUri, owner]);



  function isOwner() {
    if (address == owner) {
      return true;
    }
    return false;
  }



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
              src={nft.image}
              width={600}
            />
            <div className="grid gap-2">
              <h1 className="font-semibold text-2xl">{nft.name}</h1>
              <p className="text-sm leading-normal">
                {nft.description}
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="font-semibold text-xl">Additional Information</h2>
            <dl className="grid gap-2 text-sm">
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Creator</dt>
                <dd className="text-sm font-normal">{nft.Creator}</dd>
              </div>
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Token ID</dt>
                <dd className="text-sm font-normal">{nft.tokenID}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4">
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
                <div className="text-sm font-medium">{nft.Owner.slice(0, 6)}...{nft.Owner.slice(nft.Owner.length - 4,nft.Owner.length) }</div>
              </CardContent>
            </Card>
          </div>

            {isOwner() ?
                      <div className="flex flex-col gap-4">
                          <Button size="lg" variant="outline"
                          onClick={
                            () => {
                              router.push('/marketplace/'+ urlkey+'/burn');
                            }
            
                          }>Claim Physical Item</Button>
                        <Button size="lg" variant="outline"
                          onClick={
                            () => {
                              router.push('/marketplace/'+ urlkey+'/list');
                            }
                          }>
                          <PlusIcon className="w-4 h-4 mr-2" />
                          List NFT for Sale
                        </Button>
                      </div>
              : <div></div>
            }


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
