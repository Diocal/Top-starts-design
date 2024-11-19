"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

// Componente para el diseño del card
const GrowthCard = ({ card }) => {
  return (
    <Card
      className="relative w-full p-4 flex flex-col items-center"
      style={{
        backgroundColor: "#141414", // Fondo de los cards
        
        boxShadow: "0 0 0 0.5px rgba(255, 255, 255, 0.2)", // Simula un borde fino,
        borderRadius: "8px",
      }}
    >
      {/* Avatar */}
      <img
        src="/avatar1.png"
        alt="Avatar Icon"
        className="h-16 w-16 rounded-full object-cover mb-3"
      />

      {/* SP and Star Icon */}
      <div
        className="flex items-center mb-3"
        style={{
          fontFamily: "Work Sans, sans-serif",
          fontSize: "12px",
          fontWeight: "300",
          lineHeight: "16px",
          letterSpacing: "2.5px",
          color: "hsl(var(--tab-bg-active))",
        }}
      >
        <img src="/star.png" alt="Star Icon" className="mr-1 h-4 w-4" />
        <span>{card.sp} SP</span>
      </div>

      {/* Main Content */}
      <div className="mb-3 flex flex-col items-center">
        <div className="text-center">
          <h3
            className="text-white mb-2"
            style={{
              fontFamily: "Work Sans, sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "20px",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontFamily: "Work Sans, sans-serif",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "16px",
              color: "hsl(var(--subtle-light))",
            }}
          >
            {card.description}
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-col items-center mt-3 text-sm text-gray-400">
          {/* Primera fila */}
          <div className="flex space-x-3">
            <div className="flex items-center space-x-1">
              <img
                src="/users1.png"
                alt="Users Icon"
                className="h-4 w-4 object-contain"
              />
              <span>{card.members}</span>
            </div>
            <div className="flex items-center space-x-1">
              <img src="/star.png" alt="Rating Icon" className="h-4 w-4" />
              <span>{card.rating}</span>
            </div>
          </div>
          {/* Segunda fila */}
          <div className="flex items-center space-x-1 mt-1">
            <img
              src="/translate.png"
              alt="Language Icon"
              className="h-4 w-4"
            />
            <span>{card.language}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center mt-4 space-y-2">
        <Button
          variant="default"
          className="w-full px-3 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-900"
        >
          Entertainment
        </Button>
        <Button
          variant="default"
          className="w-full px-3 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-900"
        >
          Information
        </Button>
      </div>
    </Card>
  );
};

// Página de Top Growth con tabs y scroll vertical
const TopGrowthPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();

  const tabs = ["All", "Today", "7D", "30D", "90D"];
  const sampleData = Array.from({ length: 20 }, (_, idx) => ({
    sp: 50,
    title: `Growth Channel ${idx + 1}`,
    description: `This channel has the highest growth ${idx + 1}`,
    members: `${500 + idx * 50}K`,
    rating: (4.0 + (idx % 5) * 0.1).toFixed(1),
    language: idx % 2 === 0 ? "English" : "Spanish",
  }));

  return (
    <div
      className="px-4 py-8"
      style={{
        backgroundColor: "#121212", // Fondo de la página
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold text-white">Sort by</div>
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-400 hover:underline"
        >
          Back
        </button>
      </header>

      {/* Tabs */}
      <div className="mb-4">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded-[6px] ${
                activeTab === tab
                  ? "bg-[hsl(var(--light-gold))] text-black font-bold"
                  : "bg-[#141414] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {sampleData.map((card, idx) => (
          <GrowthCard key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TopGrowthPage;
