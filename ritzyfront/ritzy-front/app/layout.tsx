'use client'
import type { Metadata } from "next";
import { ConfluxEspaceTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Ritzy Protocol",
  description: "Discover unique digital and physical items in our phygital-first marketplace.",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      activeChain={ ConfluxEspaceTestnet }>
      <html lang="en">
          <body className={inter.className}>{children}</body>
      </html>
    </ThirdwebProvider>
    
  );
}
