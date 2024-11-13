"use client";

import React, { useState } from "react";
import TabComponent from "./_components/tabComponent";
import ContentSection from "./_components/contentSection";

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
  const [global, setGlobal] = useState(true);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Tabs for Global and Local */}
      <TabComponent global={global} setGlobal={setGlobal} />

      {/* Content Section */}
      <ContentSection sections={sections} />
    </main>
  );
}
