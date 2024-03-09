'use client';

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function Landing() {

  const router = useRouter();
  return (
    <div className="flex flex-col min-h-[100dvh] transition-all">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-zinc-900 ">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Ritzy Protocol</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 ">
          <div className="flex items-center gap-2">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#drop">
            Drops
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 " href="#contact">
            Contact
          </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button className="text-sm font-medium hover:underline underline-offset-4 bg-sky-600"
              onClick={
                () => {
                  router.push('/marketplace');
                }
              }>
              Marketplace
            </Button>
            <Button className="text-sm font-medium hover:underline underline-offset-4 bg-orange-600"
            onClick={
              () => {
                router.push('/Login');
              }
            
            }>
              Dashboard
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-1 m-auto">
        <section className="w-full pt-6 md:pt-12 lg:pt-16" id="marketplace">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <img
                alt="Hero"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center"
                height="1024"
                src="/images/winebottle.jpg"
                width="1024"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Ritzy phygital Marketplace
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover unique digital and physical items in our phygital-first marketplace.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min:[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="marketplace"
                  >
                    Explore Marketplace
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="drop">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">New Drops</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out these amazing items available on our platform.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className="overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/watchdrop.jpg"
                  width="400"
                />
                <div className="space-y-1 m-auto">
                  <h3 className="text-xl font-bold">Super watch X Ethereum</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1 of 1. Priceless.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className=" overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/raquetdrop.jpg"
                  width="400"
                />
                <div className="space-y-1 m-auto">
                  <h3 className="text-xl font-bold m-auto">Dunlop X Rafa Nadal</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Play like a pro.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className=" overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/winedrop.jpg"
                  width="400"
                />
                <div className="space-y-1 m-auto">
                  <h3 className="text-xl font-bold">Bogedas Campos 2014 Tinto</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Taste the flavour of Spain.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Features</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What makes Ritzy different from other marketplaces? Here are some of our key features.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className="aspect-video  overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/traceability.jpg"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Traceability</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">The blockchain technology that powers NFTs offers an unalterable ledger for transactions, making it particularly adept at recording data from IoT devices.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/multichain.png"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Chain Agnostic</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400"> Ritzy is multichain, deployeable in EVM and no-EVM chains.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/auth.jpg"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Authenticity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Thanks to the combination of IoT and blockchain, we empower you to tokenize any physical asset so you can trust, verify, and authenticate it.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className=" aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/phygital.jpg"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Digital Twin</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Step into the world of digital collectibles to discover, trade, and showcase one-of-a-kind digital assets, each fully linked to your physical items. Explore the seamless fusion of the real and the digital, where your limited edition pieces come to life in the virtual realm in seamless, verified way.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/nfc.webp"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">NFC powered</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">See all the details and history of your item just by tapping.  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  alt="Cover image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/images/acabs.png"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Account Abstraction</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Users do not need to worry about wallets, seed phrases or gas. All is covered by Ritzy to foucs on the important things.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Future of Commerce is Ritzy
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up to get notified when we launch. 
                <Link className="underline underline-offset-2" href="#">
                   Terms & Conditions
                </Link>
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Ritzy Protocol. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
