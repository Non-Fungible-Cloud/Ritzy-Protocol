import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Marketplace() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 gap-4 border-b px-6 lg:gap-8 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">

        <Link className="flex items-center gap-2 font-semibold lg:ml-auto" href="#">
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
        <Button className="lg:ml-4" size="sm" variant="outline">
          Connect Wallet
        </Button>
      </header>
      <main className="flex-1 grid gap-8 p-4 md:gap-12 md:p-6">
        <section className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid items-center gap-2">
              <h1 className="font-semibold text-4xl">Featured Collections</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card>
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.05 ETH</div>
                    <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">100</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>

                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/ferraridrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Ferrari ToroNegro</CardTitle>
                  <CardDescription className="text-sm">Ferrari</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">100 ETH</div>
                    <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">5</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>

                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/watchdrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Super Watch</CardTitle>
                  <CardDescription className="text-sm">
                    Ethereum Foundation X Rolex
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">2 ETH</div>
                    <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">50</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>

                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/raquetdrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Racket Nadal</CardTitle>
                  <CardDescription className="text-sm">Rafael Nadal</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.1 ETH</div>
                    <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">1000</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid items-center gap-2">
              <h1 className="font-semibold text-4xl">User Posted</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card>

                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/raquetdrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Racket Nadal</CardTitle>
                  <CardDescription className="text-sm">Rafael Nadal</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.3 ETH</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.041 ETH</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.04 ETH</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Artwork"
                  className=" object-cover rounded-t-lg"
                  height={200}
                  src="/images/winedrop.jpg"
                  width={300}
                />
                <CardContent className="pb-4">
                  <CardTitle className="text-base font-semibold">Vino Tinto </CardTitle>
                  <CardDescription className="text-sm">Bodegas Campos</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">0.045 ETH</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
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
