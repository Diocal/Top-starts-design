import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { CSPostHogProvider } from "./_analytics/provider";
import { Button } from "~/components/ui/button";
import { Globe, Star, Users, BarChart3, User } from "lucide-react";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import TopNav from "./_components/topnav";
import Head from "next/head";

export const metadata: Metadata = {
  title: "TopStart",
  description: "Telegram Data Collection",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider signInForceRedirectUrl="/dashboard">
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
          <Head>
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <body>
            <TopNav></TopNav>
            {children}
            <nav className="fixed bottom-0 left-0 right-0 bg-gray-900">
              <div className="flex justify-around p-2">
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="flex flex-col items-center text-white"
                  >
                    <Globe />
                    <span className="mt-1 text-xs">Channel</span>
                  </Button>
                </Link>

                <Link href="/group">
                  <Button
                    variant="ghost"
                    className="flex flex-col items-center text-white"
                  >
                    <Users />
                    <span className="mt-1 text-xs">Group</span>
                  </Button>
                </Link>

                <Link href="/analytics">
                  <Button
                    variant="ghost"
                    className="flex flex-col items-center text-white"
                  >
                    <BarChart3 />
                    <span className="mt-1 text-xs">Analytics</span>
                  </Button>
                </Link>

                <Link href="/profile">
                  <Button
                    variant="ghost"
                    className="flex flex-col items-center text-white"
                  >
                    <User />
                    <span className="mt-1 text-xs">Profile</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
