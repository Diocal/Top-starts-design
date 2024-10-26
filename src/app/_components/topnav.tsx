"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl border-b font-semibold">
      <Link href="/dashboard" className="flex items-center">
        <span>Bridge23</span>
        <Image src="/favicon.png" width={30} height={30} alt="Bridge23 Logo" className="ml-2" />
      </Link>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}