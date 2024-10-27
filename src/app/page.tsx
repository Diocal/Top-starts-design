// import { SignIn } from "@clerk/nextjs";
// // import { headers } from "next/headers";
// // import { db } from "~/server/db";
// import { SignedIn, SignedOut } from "@clerk/nextjs";
// import Link from "next/link";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { useState } from "react";
// import { Globe, Star } from "lucide-react";

// export default async function HomePage() {
//   const user = auth();
//   const [global, setGlobal] = useState(true);
//   const [language, setLanguage] = useState("en"); // 'en' for English, 'id' for Indonesian
//   const [searchTerm, setSearchTerm] = useState("");
//   if (user.userId) {
//     redirect("/dashboard/data");
//   }

//   const sections = [
//     {
//       title: "Top members",
//       data: [
//         {
//           sp: 50,
//           title: "Topstars",
//           description: "This channel contains a lot of channels",
//           members: "20k",
//           rating: "4.9",
//           language: "English",
//           tags: ["Entertainment", "Information"],
//         },
//         // Add more card data here
//       ],
//     },
//     {
//       title: "Top growth",
//       data: [
//         {
//           sp: 30,
//           title: "FastGrow",
//           description: "Rapidly growing community",
//           members: "15k",
//           rating: "4.8",
//           language: "Indonesian",
//           tags: ["Business", "Networking"],
//         },
//         // Add more card data here
//       ],
//     },
//     {
//       title: "Top active",
//       data: [
//         {
//           sp: 70,
//           title: "ActiveHub",
//           description: "Most active discussions daily",
//           members: "25k",
//           rating: "5.0",
//           language: "English",
//           tags: ["Discussion", "Community"],
//         },
//         // Add more card data here
//       ],
//     },
//   ];

//   return (
//     <main className="">
//       <div className="flex flex-wrap gap-6">
//         <SignedOut>
//           <div className="h-full w-full text-center text-2xl">
//             {" "}
//             Main Page Sign in
//           </div>
//         </SignedOut>
//         <SignedIn></SignedIn>
//       </div>
//       <div className="min-h-screen bg-black p-4 text-white">
//         {/* Global / Local Toggle */}
//         <div className="flex items-center justify-between">
//           <button
//             onClick={() => setGlobal(true)}
//             className={`rounded px-4 py-2 ${global ? "bg-yellow-400" : "bg-gray-700"}`}
//           >
//             Global <Globe className="ml-1 inline-block" />
//           </button>
//           <button
//             onClick={() => setGlobal(false)}
//             className={`rounded px-4 py-2 ${!global ? "bg-yellow-400" : "bg-gray-700"}`}
//           >
//             Local{" "}
//             <span role="img" aria-label="Local" className="ml-1 inline-block">
//               🇮🇩
//             </span>
//           </button>
//         </div>

//         {/* Search and Topics */}
//         <div className="my-4 flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="flex-1 rounded bg-gray-800 px-4 py-2"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="rounded bg-yellow-400 px-3 py-2">Topics 💡</button>
//         </div>

//         {/* Language Selector */}
//         <div className="mb-4 flex items-center justify-between">
//           <span>Choose language</span>
//           <div className="flex space-x-2">
//             <span
//               role="img"
//               aria-label="English"
//               className={`cursor-pointer text-2xl ${language === "en" ? "opacity-100" : "opacity-50"}`}
//               onClick={() => setLanguage("en")}
//             >
//               🇺🇸
//             </span>
//             <span
//               role="img"
//               aria-label="Indonesian"
//               className={`cursor-pointer text-2xl ${language === "id" ? "opacity-100" : "opacity-50"}`}
//               onClick={() => setLanguage("id")}
//             >
//               🇮🇩
//             </span>
//           </div>
//         </div>

//         {/* Sections: Top Members, Top Growth, Top Active */}
//         {sections.map((section, idx) => (
//           <div key={idx} className="mb-6">
//             <div className="mb-2 flex items-center justify-between">
//               <h2 className="text-lg font-semibold">{section.title}</h2>
//               <a href="#" className="text-yellow-400">
//                 See all
//               </a>
//             </div>
//             <div className="flex space-x-4 overflow-x-scroll">
//               {section.data
//                 .filter((card) =>
//                   global ? true : card.language === "Indonesian",
//                 )
//                 .filter((card) =>
//                   card.title.toLowerCase().includes(searchTerm.toLowerCase()),
//                 )
//                 .map((card, cardIdx) => (
//                   <div
//                     key={cardIdx}
//                     className="min-w-[200px] rounded-lg bg-gray-800 p-4"
//                   >
//                     <div className="mb-2 flex items-center space-x-2">
//                       <Star className="text-yellow-400" />
//                       <span className="text-sm font-semibold">
//                         {card.sp} SP
//                       </span>
//                     </div>
//                     <h3 className="font-bold">{card.title}</h3>
//                     <p className="text-sm text-gray-400">{card.description}</p>
//                     <div className="mt-2 flex items-center space-x-2">
//                       <span>👥 {card.members}</span>
//                       <span>⭐ {card.rating}</span>
//                       <span>🗣 {card.language}</span>
//                     </div>
//                     <div className="mt-2 flex flex-wrap space-x-2">
//                       {card.tags.map((tag, tagIdx) => (
//                         <span
//                           key={tagIdx}
//                           className="rounded-full bg-gray-700 px-2 py-1 text-xs"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}

//         {/* Bottom Navigation */}
//         <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-gray-900 p-2">
//           <button className="text-white">Channel 📺</button>
//           <button className="text-white">Group 👥</button>
//           <button className="text-white">Analytics 📊</button>
//           <button className="text-white">Profile 👤</button>
//         </div>
//       </div>
//     </main>
//   );
// }

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
              <Button variant="default" className="whitespace-nowrap">
                Topics 💡
              </Button>
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
