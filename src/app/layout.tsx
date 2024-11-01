"use client";

import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { CSPostHogProvider } from "./_analytics/provider";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";
import { usePathname } from "next/navigation";
import metadata from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const activeColor = "text-[hsl(var(--light-gold))]";

  return (
    <ClerkProvider signInForceRedirectUrl="/dashboard">
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
          <body>
            <TopNav />
            {children}
            <nav className="fixed bottom-0 left-0 right-0 bg-gray-900">
              <div className="flex justify-around p-2">
                {[
                  { href: "/", label: "Channel", icon: "/Channels.svg" },
                  { href: "/group", label: "Group", icon: "/Groups.svg" },
                  { href: "/analytics", label: "Analytics", icon: "/Analytics.svg" },
                  { href: "/profile", label: "Profile", icon: "/Profile.svg" },
                ].map(({ href, label, icon }) => (
                  <Link key={href} href={href}>
                    <Button
                      variant="ghost"
                      className={`flex flex-col items-center ${
                        pathname === href ? activeColor : "text-white"
                      }`}
                    >
                      <img
                        src={icon}
                        alt={`${label} Icon`}
                        className="w-6 h-6"
                        style={{
                          filter: pathname === href ? "invert(48%) sepia(78%) saturate(250%) hue-rotate(10deg) brightness(1.5)" : "none",
                        }}
                      />
                      <span
                        className={`mt-1 text-xs ${pathname === href ? activeColor : "text-white"}`}
                      >
                        {label}
                      </span>
                    </Button>
                  </Link>
                ))}
              </div>
            </nav>
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
