"use client";
import { useState, useRef } from "react";
import { SignedOut, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card } from "~/components/ui/card";

export default function HomePage() {
  const { userId } = useAuth();
  const [global, setGlobal] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const scrollContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [scrollIndices, setScrollIndices] = useState<{ [key: number]: number }>({});

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

  const handleScroll = (sectionIdx: number) => {
    const container = scrollContainerRefs.current[sectionIdx];
    if (container) {
      const slideWidth = container.scrollWidth / container.childElementCount;
      const newIndex = Math.round(container.scrollLeft / slideWidth);
      setScrollIndices((prev) => ({ ...prev, [sectionIdx]: newIndex }));
    }
  };

  const scrollToIndex = (sectionIdx: number, cardIdx: number) => {
    const currentRef = scrollContainerRefs.current[sectionIdx];
    const card = currentRef?.children[cardIdx] as HTMLElement | undefined;

    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setScrollIndices((prev) => ({ ...prev, [sectionIdx]: cardIdx }));
    }
  };



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
              <TabsList className="w-full flex overflow-auto">
                <TabsTrigger value="global" className="flex-1 font-semibold">
                  Global 🌍
                </TabsTrigger>
                <TabsTrigger value="local" className="flex-1 font-semibold flex items-center">
                  Local
                  <img src="/indonesia.png" alt="Indonesia Flag" className="w-4 h-4 inline-block ml-1" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
  
            <div className="my-4 flex items-center space-x-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white opacity-75"
                  >
                    <path
                      d="M15.7559 14.2559H14.9659L14.6859 13.9859C15.6659 12.8459 16.2559 11.3659 16.2559 9.75586C16.2559 6.16586 13.3459 3.25586 9.75586 3.25586C6.16586 3.25586 3.25586 6.16586 3.25586 9.75586C3.25586 13.3459 6.16586 16.2559 9.75586 16.2559C11.3659 16.2559 12.8459 15.6659 13.9859 14.6859L14.2559 14.9659V15.7559L19.2559 20.7459L20.7459 19.2559L15.7559 14.2559ZM9.75586 14.2559C7.26586 14.2559 5.25586 12.2459 5.25586 9.75586C5.25586 7.26586 7.26586 5.25586 9.75586 5.25586C12.2459 5.25586 14.25586 7.26586 14.25586 9.75586C14.25586 12.2459 12.2459 14.2559 9.75586 14.2559Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 flex-1 bg-[hsl(var(--tab-bg-inactive))] text-white rounded-md h-12 focus:outline-none focus:ring-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderColor: "transparent", color: "rgba(255, 255, 255, 0.85)" }}
                />
              </div>
              <Link href="/channel/topic">
                <Button variant="default" className="h-12 bg-[hsl(var(--tab-bg-inactive))] text-white rounded-md whitespace-nowrap">
                  Topics 💡
                </Button>
              </Link>
            </div>
  
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
  
                <div
                  ref={(el) => (scrollContainerRefs.current[sectionIdx] = el)}
                  onScroll={() => handleScroll(sectionIdx)}
                  className="w-full overflow-x-auto whitespace-nowrap flex space-x-4 pb-4 snap-x snap-mandatory scroll-smooth"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {section.data.map((card, cardIdx) => (
                    <Card
                      key={cardIdx}
                      className="p-4 flex-shrink-0 w-[342px] bg-[hsl(var(--tab-bg-inactive))] snap-center border-none relative"
                    >
                    <div
                      className="absolute top-2 right-2 flex items-center"
                      style={{
                      fontFamily: "Work Sans, sans-serif",
                      fontSize: "12px",
                      fontWeight: "300",
                      lineHeight: "16px",
                      letterSpacing: "2.5px",
                      color: "hsl(var(--tab-bg-active))",
                      }}
                        >
                          <img src="/star.png" alt="Star Icon" className="mr-1 w-4 h-4" />
                          <span>{card.sp} SP</span>
                        </div>
                        <div className="flex items-start mb-3">
                          <img src="/avatar1.png" alt="Avatar Icon" className="w-16 h-16 rounded-full mr-4" />
                          <div>
                        <h3
                              className="text-white"
                              style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                                letterSpacing: "0.12px",
                              }}
                            >
                              {card.title}
                            </h3>
                          <p
                              className="mt-1 mb-2 whitespace-pre-line"
                              style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "12px",
                                fontWeight: "500",
                                lineHeight: "16px",
                                letterSpacing: "0.6px",
                                color: "hsl(var(--subtle-light))",
                              }}
                            >
                              {card.description}
                            </p>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                              <div className="flex items-center space-x-1 text-[hsl(var(--icon-color))]">
                                <img src="/users1.png" alt="Users Icon" className="w-4 h-4 object-contain" />
                                <span
                                  style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    lineHeight: "16px",
                                    letterSpacing: "0.6px",
                                    color: "hsl(var(--subtle-light))",
                                  }}
                                >
                                  {card.members}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <img src="/star.png" alt="Rating Icon" className="w-4 h-4" />
                                <span
                                  style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    lineHeight: "16px",
                                    letterSpacing: "0.6px",
                                    color: "hsl(var(--subtle-light))",
                                  }}
                                >
                                  {card.rating}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <img src="/translate.png" alt="Language Icon" className="w-4 h-4" />
                                <span
                                  style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    lineHeight: "16px",
                                    letterSpacing: "0.6px",
                                    color: "hsl(var(--subtle-light))",
                                  }}
                                >
                                  {card.language}
                                </span>
                              </div>
                              </div>
                        </div>
                      </div>
                      <div className="mt-[-5px] ml-[45px] flex justify-center space-x-2">
                        <Button
                          variant="default"
                          className="px-3 py-1 font-medium text-[12px] leading-[16px] tracking-[0.6px]"
                          style={{ fontFamily: "Work Sans, sans-serif", color: "white", backgroundColor: "black" }}
                        >
                          Information
                        </Button>
                        <Button
                          variant="default"
                          className="px-3 py-1 font-medium text-[12px] leading-[16px] tracking-[0.6px]"
                          style={{ fontFamily: "Work Sans, sans-serif", color: "white", backgroundColor: "black" }}
                        >
                          Entertainment
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
  
                <div className="flex justify-center mt-2 space-x-2">
                  {section.data.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToIndex(sectionIdx, i)}
                      className={`transition-all duration-300 ${scrollIndices[sectionIdx] === i ? "bg-yellow-500 w-8 h-3 rounded-full" : "bg-gray-400 w-3 h-3 rounded-full"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </SignedOut>
        </div>
      </div>
    </main>
  );
  
}

