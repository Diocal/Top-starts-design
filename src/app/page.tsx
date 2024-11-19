"use client";

import React, { useState, useEffect } from "react";
import TabComponent from "./_components/tabComponent";
import ContentSection from "./_components/contentSection";
import SearchAndTopics from "./_components/searchAndTopics";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";



const mockData = [
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
    sp: 70,
    title: "ActiveHub",
    description: "Most active discussions daily",
    members: "25k",
    rating: "5.0",
    language: "English",
    tags: ["Discussion", "Community"],
  },
  // Agrega más datos aquí
];
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




export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [global, setGlobal] = useState(true);

  useEffect(() => {
    // Retrieve the saved tab state from localStorage
    const savedTab = localStorage.getItem("selectedTab");
    setGlobal(savedTab !== "local"); // Default to "global" if not set
  }, []);

  useEffect(() => {
    // Save the current tab state to localStorage whenever it changes
    localStorage.setItem("selectedTab", global ? "global" : "local");
  }, [global]);

  // Filter sections dynamically based on the search term
  const filteredSections = sections.map((section) => ({
    ...section,
    data: section.data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  // Check if there are results in the filtered sections
  const hasResults = filteredSections.some((section) => section.data.length > 0);


  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Tabs */}
     {/* Tabs */}
     <div className="bg-black">
     <TabComponent global={global} setGlobal={setGlobal} />
    </div>
  
      {/* Search and Topics */}
      <SearchAndTopics searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  
      {/* Condicional para mostrar resultados filtrados o la sección completa */}
      {searchTerm.trim() ? (
        hasResults ? (
          <div className="flex flex-col px-4 pb-8">
            <div className="inline-flex flex-wrap gap-4">
              {filteredSections.map((section) =>
                section.data.map((item, idx) => (
                  <Card
                    key={idx}
                    className="relative w-[342px] flex-shrink-0 p-4"
                    style={{
                      backgroundColor: "hsl(var(--tab-bg-inactive))",
                      border: "none",
                    }}
                  >
                    <div
                      className="absolute right-2 top-2 flex items-center"
                      style={{
                        fontFamily: "Work Sans, sans-serif",
                        fontSize: "12px",
                        fontWeight: "300",
                        lineHeight: "16px",
                        letterSpacing: "2.5px",
                        color: "hsl(var(--tab-bg-active))",
                      }}
                    >
                      <img
                        src="/star.png"
                        alt="Star Icon"
                        className="mr-1 h-4 w-4"
                      />
                      <span>{item.sp} SP</span>
                    </div>
                    <div className="mb-3 flex items-start">
                      <img
                        src="/avatar1.png"
                        alt="Avatar Icon"
                        className="mr-4 h-16 w-16 rounded-full"
                      />
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
                          {item.title}
                        </h3>
                        <p
                          className="mb-2 mt-1 whitespace-pre-line"
                          style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "16px",
                            letterSpacing: "0.6px",
                            color: "hsl(var(--subtle-light))",
                          }}
                        >
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <img
                              src="/users1.png"
                              alt="Users Icon"
                              className="h-4 w-4 object-contain"
                            />
                            <span>{item.members}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <img
                              src="/star.png"
                              alt="Rating Icon"
                              className="h-4 w-4"
                            />
                            <span>{item.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <img
                              src="/translate.png"
                              alt="Language Icon"
                              className="h-4 w-4"
                            />
                            <span>{item.language}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-[45px] mt-[-5px] flex justify-center space-x-2">
                      <Button
                        variant="default"
                        className="px-3 py-1 text-[12px] font-medium"
                        style={{
                          fontFamily: "Work Sans, sans-serif",
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        Information
                      </Button>
                      <Button
                        variant="default"
                        className="px-3 py-1 text-[12px] font-medium"
                        style={{
                          fontFamily: "Work Sans, sans-serif",
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        Entertainment
                      </Button>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        ) : (
          // Mensaje de "No results found"
          <div className="flex flex-col items-center justify-center h-64">
            <img
              src="/Banana.png"
              alt="No results icon"
              className="h-20 w-20 mb-4"
            />
            <p className="text-lg font-semibold">No results for "{searchTerm}"</p>
            <p className="text-gray-400">Try a new search!</p>
          </div>
        )
      ) : (
        <ContentSection sections={sections} />
      )}
    </main>
  );
  
}