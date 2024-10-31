"use client";

import { SignIn, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Star, Users, BarChart3, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card } from "~/components/ui/card";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  const { userId } = useAuth();
  const router = useRouter();
  const [global, setGlobal] = useState(true);
  const [language, setLanguage] = useState("en"); // 'en' for English, 'id' for Indonesian
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      title: "Top members",
      data: [
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        // Add more card data here
      ],
    },
    {
      title: "Top growth",
      data: [
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains\na lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        // Add more card data here
      ],
    },
    {
      title: "Top active",
      data: [
        {
          sp: 70,
          title: "ActiveHub",
          description: "Most active discussions daily",
          members: "25k",
          rating: "5.0",
          language: "English",
          tags: ["Discussion", "Community"],
        },
        {
          sp: 70,
          title: "ActiveHub",
          description: "Most active discussions daily",
          members: "25k",
          rating: "5.0",
          language: "English",
          tags: ["Discussion", "Community"],
        },
        {
          sp: 70,
          title: "ActiveHub",
          description: "Most active discussions daily",
          members: "25k",
          rating: "5.0",
          language: "English",
          tags: ["Discussion", "Community"],
        },
        {
          sp: 70,
          title: "ActiveHub",
          description: "Most active discussions daily",
          members: "25k",
          rating: "5.0",
          language: "English",
          tags: ["Discussion", "Community"],
        },
        // Add more card data here
      ],
    },
  ];



  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex-1 overflow-auto p-4 pb-24">
        <div className="flex-1 pb-16">
          <SignedOut>
            <Tabs
              defaultValue={global ? "global" : "local"}
              onValueChange={(value) => setGlobal(value === "global")}
              className="mb-4"
            >
              <TabsList className="w-full flex overflow-hidden">
                <TabsTrigger value="global" className="flex-1 font-semibold">
                  Global 🌍
                </TabsTrigger>
                <TabsTrigger value="local" className="flex-1 font-semibold flex items-center">
                  Local <img src="/indonesia.png" alt="Indonesia Flag" className="w-4 h-4 inline-block ml-1" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
  
            <div className="my-4 flex items-center space-x-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">🔍</span>
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 flex-1 bg-[hsl(var(--tab-bg-inactive))] text-white rounded-md h-12 focus:outline-none focus:ring-0 focus:border-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Link href="/channel/topic">
                <Button variant="default" className="h-12 bg-[hsl(var(--tab-bg-inactive))] text-white rounded-md whitespace-nowrap">
                  Topics 💡
                </Button>
              </Link>
            </div>
  
            <div className="mb-4 flex items-center justify-between">
              <span>Choose language:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`${language === "en" ? "opacity-100" : "opacity-60"} focus:outline-none`}
                >
                  <img src="/usaflag.png" alt="USA Flag" className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setLanguage("id")}
                  className={`${language === "id" ? "opacity-100" : "opacity-60"} focus:outline-none`}
                >
                  <img src="/indonesia.png" alt="Indonesia Flag" className="w-5 h-5" />
                </button>
                <Link href="/channel/languaje">
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
  
            {sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <Button variant="link" className="p-0 text-white">See all</Button>
                </div>
                <ScrollArea className="w-full">
                  <div className="flex w-max space-x-4">
                    {section.data.map((card, cardIdx) => (
                     <Card key={cardIdx} className="bg-gray-800 p-4 flex flex-col relative w-[342px] border-none">

                     <div className="absolute top-2 right-2 text-yellow-400 font-semibold flex items-center">
                       <img src="/star.png" alt="Star Icon" className="mr-1 w-4 h-4" />
                       <span>{card.sp} SP</span>
                     </div>
                     <div className="flex items-start mb-3">
                       <img src="/avatar1.png" alt="Avatar Icon" className="w-16 h-16 rounded-full mr-4" />
                       <div>
                         <h3 className="text-lg font-bold text-white">{card.title}</h3>
                         <p className="text-gray-400 text-sm mt-1 mb-2 whitespace-pre-line">{card.description}</p>
                         <div className="flex items-center space-x-3 text-sm text-gray-400">
                           <div className="flex items-center space-x-1">
                             <img src="/users1.png" alt="Users Icon" className="w-4 h-4" />
                             <span>{card.members}</span>
                           </div>
                           <div className="flex items-center space-x-1">
                             <img src="/star.png" alt="Rating Icon" className="w-4 h-4" />
                             <span>{card.rating}</span>
                           </div>
                           <div className="flex items-center space-x-1">
                             <Globe className="w-4 h-4" />
                             <span>{card.language}</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="mt-[-5px] ml-[65px] flex justify-center space-x-2 ml-1">
                       <Button variant="default" className="px-3 py-1 text-white font-semibold bg-black">
                         Information
                       </Button>
                       <Button variant="default" className="px-3 py-1 text-white font-semibold bg-black">
                         Entertainment
                       </Button>
                     </div>
                   </Card>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            ))}
          </SignedOut>
          <SignedIn>{/* Content for signed-in users */}</SignedIn>
        </div>
      </div>
    </main>
  );
  
}