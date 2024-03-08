"use client"
import Link from "next/link";
import { Input } from "./input";
import { Button } from "./button";
import { useState } from "react";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";


export function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  function disconnectWallet() {
      disconnect();
      setIsProfileDropdownOpen(false);
  }

  return (
    <header className="flex items-center h-14 gap-4 mb-10 px-6 lg:gap-8 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">

    <Link className="flex items-center gap-2 font-semibold lg:ml-auto" href="/marketplace">
      <span className="">Ritzy Marketplace</span>
    </Link>
    <form className="ml-auto flex-1 lg:ml-0">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
          placeholder="Search NFTs..."
          type="search"
        />
      </div>
    </form>
    {!address ? (
      <ConnectWallet 
        btnTitle="Login"
        theme={"dark"}
        modalSize={"wide"}
        className="lg:ml-4"/>
                    ) : (
      <Button className="lg:ml-4" size="sm" variant="outline" 
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
        {address.slice(0, 6)}...{address.slice(address.length - 4,address.length)}
      </Button>)}
  </header>
  );
}



function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  