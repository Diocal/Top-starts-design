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
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
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
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
          members: "20k",
          rating: "4.9",
          language: "English",
          tags: ["Entertainment", "Information"],
        },
        {
          sp: 50,
          title: "Topstars",
          description: "This channel contains a lot of channels",
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
            {/* Global / Local Toggle */}
            <Tabs
              defaultValue={global ? "global" : "local"}
              onValueChange={(value) => setGlobal(value === "global")}
              className="mb-4"
            >
              <TabsList className="w-full">
                <TabsTrigger value="global" className="flex-1">
                  Global <Globe className="ml-1 inline-block" />
                </TabsTrigger>
                <TabsTrigger value="local" className="flex-1">
                  Local <span className="ml-1">🇮🇩</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Search and Topics */}
            <div className="my-4 flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Search..."
                className="flex-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Link href="/channel/topic">
                <Button variant="default" className="whitespace-nowrap">
                  Topics 💡
                </Button>
              </Link>
            </div>

            {/* Language Selector */}
            <div className="mb-4 flex items-center space-x-2">
              <span>Choose language:</span>
              <Button
                variant={language === "en" ? "default" : "secondary"}
                onClick={() => setLanguage("en")}
              >
                🇺🇸
              </Button>
              <Button
                variant={language === "id" ? "default" : "secondary"}
                onClick={() => setLanguage("id")}
              >
                🇮🇩
              </Button>
              <Link href="/channel/languaje">
                <ChevronRight />
              </Link>
            </div>

            {/* Sections */}
            {sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <Button variant="link" className="p-0 text-yellow-400">
                    See all
                  </Button>
                </div>
                <ScrollArea className="w-full">
                  <div className="flex w-max space-x-4">
                    {section.data.map((card, cardIdx) => (
                      <Card key={cardIdx} className="bg-gray-800">
                        <div className="mb-2">
                          <div className="flex items-center space-x-2">
                            <Star className="text-yellow-400" />
                            <span className="text-sm font-semibold">
                              {card.sp} SP
                            </span>
                          </div>
                          <h3 className="mt-2 text-lg font-bold">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-sm">
                          <span>👥 {card.members}</span>
                          <span>⭐ {card.rating}</span>
                          <span>🗣 {card.language}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {card.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="mt-1 rounded-full bg-gray-700 px-3 py-1 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
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
