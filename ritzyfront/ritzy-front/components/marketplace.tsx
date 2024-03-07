import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "./ui/header"

export function Marketplace() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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

