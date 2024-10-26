import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { CSPostHogProvider } from "./_analytics/provider";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import TopNav from "./_components/topnav";

export const metadata: Metadata = {
  title: "Bridge23",
  description: "Data Collection",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider signInForceRedirectUrl="/dashboard">
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
          <body className="fixed bottom-0 left-0 right-0 top-0 h-full w-full">
            <TopNav></TopNav>
            {children}
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
