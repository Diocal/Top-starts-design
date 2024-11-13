"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TopNav from "../_components/topnav";
import EngagementTable from "./EngagementTable";
import ChannelStats from "./ChannelStats";
import ReachMetrics from "./ReachMetrics";

// Datos necesarios para los componentes

const membersData = [
  { name: "Karina", engagement: 55, medal: "🥇", avatar: "avatar/Karina.png" },
  { name: "Winter", engagement: 40, medal: "🥈", avatar: "avatar/Winter.png" },
  { name: "Jack Paul", engagement: 33, medal: "🥉", avatar: "avatar/JackPaul.png" },
  { name: "Connor Mcgregor", engagement: 30, rank: "#4", avatar: "avatar/Mcgregor.png" },
  { name: "Justin Bieber", engagement: 28, rank: "#5", avatar: "avatar/JustinBieber.png" },
  { name: "Dasha Taran", engagement: 26, rank: "#6", avatar: "avatar/DashaTaran.png" },
  { name: "Keisya Levronka", engagement: 25, rank: "#7", avatar: "avatar/KeisyaLevronka.png" },
  { name: "Rafael Struick", engagement: 22, rank: "#8", avatar: "avatar/RafaelStruick.png" },
  { name: "Sergio Ramos", engagement: 15, rank: "#9", avatar: "avatar/SergioRamos.png" },
  { name: "Rowan Atkinson", engagement: 12, rank: "#10", avatar: "avatar/RowanAtkinson.png" },
];

const statsData = [
  {
    title: "New Members",
    data: [
      { day: 2, value: 3000 },
      { day: 4, value: 5000 },
      { day: 6, value: 8000 },
      { day: 8, value: 6000 },
      { day: 10, value: 7000 },
      { day: 12, value: 9000 },
      { day: 14, value: 10000 },
      { day: 16, value: 8500 },
      { day: 18, value: 9500 },
      { day: 20, value: 9100 },
      { day: 22, value: 9700 },
      { day: 24, value: 8900 },
      { day: 26, value: 9200 },
    ],
    color: "#60CF97",
    change: 9000,
    percentageChange: 15,
  },
  {
    title: "Members Lost",
    data: [
      { day: 2, value: 2000 },
      { day: 4, value: 3000 },
      { day: 6, value: 4000 },
      { day: 8, value: 3500 },
      { day: 10, value: 3000 },
      { day: 12, value: 5000 },
      { day: 14, value: 6000 },
      { day: 16, value: 6500 },
      { day: 18, value: 7000 },
      { day: 20, value: 7500 },
      { day: 22, value: 8000 },
      { day: 24, value: 8200 },
      { day: 26, value: 8500 },
    ],
    color: "#E97575",
    change: -8000,
    percentageChange: -10,
  },
];

const reachMetricsData = [
  {
    title: "Total Impressions",
    data: [
      { day: 2, value: 750 },
      { day: 4, value: 1500 },
      { day: 6, value: 1000 },
      { day: 8, value: 1800 },
      { day: 10, value: 1250 },
      { day: 12, value: 2000 },
      { day: 14, value: 2250 },
      { day: 16, value: 1750 },
      { day: 18, value: 1900 },
      { day: 20, value: 2100 },
      { day: 22, value: 2200 },
      { day: 24, value: 2100 },
      { day: 26, value: 2000 },
    ],
    color: "#60CF97",
    change: 2000,
    percentageChange: 100,
  },
  {
    title: "Links Clicked",
    data: [
      { day: 2, value: 200 },
      { day: 4, value: 400 },
      { day: 6, value: 300 },
      { day: 8, value: 500 },
      { day: 10, value: 400 },
      { day: 12, value: 600 },
      { day: 14, value: 750 },
      { day: 16, value: 650 },
      { day: 18, value: 500 },
      { day: 20, value: 400 },
      { day: 22, value: 300 },
      { day: 24, value: 250 },
      { day: 26, value: 100 },
    ],
    color: "#E97575",
    change: -103,
    percentageChange: -20,
  },
  {
    title: "Revenue",
    data: [
      { day: 2, value: 1000 },
      { day: 4, value: 900 },
      { day: 6, value: 1100 },
      { day: 8, value: 950 },
      { day: 10, value: 1200 },
      { day: 12, value: 1300 },
      { day: 14, value: 1250 },
      { day: 16, value: 1100 },
      { day: 18, value: 1150 },
      { day: 20, value: 1000 },
      { day: 22, value: 900 },
      { day: 24, value: 800 },
      { day: 26, value: 700 },
    ],
    color: "#E97575",
    change: -128,
    percentageChange: -10,
  },
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("Daily");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white px-6 py-8 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
  

      {/* TopStars Section */}
      <div className="flex items-center bg-[#121212] p-4 rounded-lg mb-6">
        <img
          src="/avatar1.png"
          alt="Topstars Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <h2 className="text-lg font-medium flex-grow">Topstars</h2>
        <button>
          <span className="text-gray-400">▾</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
  {["Daily", "Weekly", "Monthly", "Yearly"].map((tab) => (
    <button
      key={tab}
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        activeTab === tab
          ? "bg-lightGold text-black"
          : "bg-tabBgDefault text-tabTextDefault hover:text-white"
      }`}
      onClick={() => handleTabClick(tab)}
      style={{
        backgroundColor: activeTab === tab ? "hsl(var(--light-gold))" : "hsl(var(--tab-bg-inactive))",
        color: activeTab === tab ? "hsl(var(--primary-font-color))" : "hsl(var(--secondary-font-color))",
      }}
    >
      {tab}
    </button>
  ))}
</div>

      {/* Engagement Table */}
      <EngagementTable members={membersData} />

      {/* Channel Stats */}
      <ChannelStats stats={statsData} />

      {/* Reach Metrics */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-gray-200">Reach</h3>
        <ReachMetrics metrics={reachMetricsData} />
      </div>
    </motion.div>
  );
}
