"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

// Componente para el diseño del card
const MemberCard = ({ card }) => {
  return (
    <Card
      className="relative w-full p-4"
      style={{
        backgroundColor: "#141414", // Fondo de los cards
        border: "none",
      }}
    >
      {/* SP and Star Icon */}
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
        <img src="/star.png" alt="Star Icon" className="mr-1 h-4 w-4" />
        <span>{card.sp} SP</span>
      </div>

      {/* Main Content */}
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
            {card.title}
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
            {card.description}
          </p>
          <div className="flex items-center space-x-3 text-sm text-gray-400">
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
            <div className="flex items-center space-x-1">
              <img
                src="/translate.png"
                alt="Language Icon"
                className="h-4 w-4"
              />
              <span>{card.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="ml-[45px] mt-[-5px] flex justify-center space-x-2">
        <Button
          variant="default"
          className="px-3 py-1 text-[12px] font-medium"
          style={{
            fontFamily: "Work Sans, sans-serif",
            color: "white",
            backgroundColor: "#141414", // Fondo del botón
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
            backgroundColor: "#141414", // Fondo del botón
          }}
        >
          Entertainment
        </Button>
      </div>
    </Card>
  );
};

// Página de Top Members con tabs y scroll vertical
const TopMembersPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();

  const tabs = ["All", "Today", "7D", "30D", "90D"];
  const sampleData = Array.from({ length: 20 }, (_, idx) => ({
    sp: 50,
    title: `Channel ${idx + 1}`,
    description: `This channel provides great content ${idx + 1}`,
    members: `${900 - idx * 10}K`,
    rating: (4.5 + (idx % 5) * 0.1).toFixed(1),
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
                  : "bg-[#141414] text-white" // Fondo del botón inactivo
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="h-full overflow-y-auto space-y-4">
        {sampleData.map((card, idx) => (
          <MemberCard key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TopMembersPage;
