import { SignIn } from "@clerk/nextjs";
import { headers } from "next/headers";
import { db } from "~/server/db";
import { SignedIn, SignedOut} from "@clerk/nextjs";
import Link from "next/link";
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


export default async function HomePage() {
  const user = auth();
  
  if (user.userId) {
    redirect('/dashboard/data');
  }
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-6">
        <SignedOut>
          <div className="h-full w-full text-2xl text-center"> Main Page Sign in</div>
        </SignedOut>
        <SignedIn>
        </SignedIn>
      </div>
    </main>
  );
}
