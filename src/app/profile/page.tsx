"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"; // Para el input en el modal
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const shareOptions = [
    { name: "Saved Messages", icon: "/addtopstars/Saved.png" },
    { name: "Karina", icon: "/avatar/Karina.png" },
    { name: "Winter", icon: "/avatar/Winter.png" },
    { name: "Jake Paul", icon: "/avatar/JackPaul.png" },
    { name: "Conor Mcgregor", icon: "/avatar/Mcgregor.png" },
    { name: "Justin Bieber", icon: "/avatar/JustinBieber.png" },
    { name: "Dasha Taran", icon: "/avatar/DashaTaran.png" },
    { name: "Keisya Levronka", icon: "/avatar/KeisyaLevronka.png" },
    { name: "Rafael", icon: "/avatar/RafaelStruick.png" },
    { name: "Sergio Ramos", icon: "/avatar/SergioRamos.png" },
    { name: "Rowan", icon: "/avatar/RowanAtkinson.png" },
    { name: "ETH Channel", icon: "/addtopstars/Ethereum.png" },
    { name: "SOL Channel", icon: "/addtopstars/Sol.png" },
    { name: "Topstars", icon: "/addtopstars/Topstars.png" },
    { name: "Pepe Community", icon: "/addtopstars/Pepe.png" },

  ];

  const channels = [
    {
      sp: 50,
      title: "Topstars",
      description: "This channel contains a lot of channels",
      members: "20k",
      rating: "4.9",
      language: "English",
      tags: ["Entertainment", "Information"],
      avatar: "/avatar1.png",
    },
    {
      sp: 70,
      title: "SuperGroup",
      description: "Group with engaging discussions",
      members: "15k",
      rating: "4.8",
      language: "Spanish",
      tags: ["Community", "Discussions"],
      avatar: "/avatar1.png",
    },
  ];

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const dismissMessage = () => setShowMessage(false);
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-black text-white px-6 py-8 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/profile/Profile-star.png"
          alt="Profile Star"
          className="w-[358px] h-[148px] object-contain mb-4"
        />
        <h2 className="text-lg font-semibold">@XYZNYC</h2>
        <p className="text-3xl font-bold text-lightGold">256,935 SP</p>
        <Button
          className="mt-4 w-full py-3 bg-lightGold text-black rounded-lg font-medium hover:bg-yellow-500 transition-all"
          onClick={openPopup}
        >
          Share + 10,000 SP
        </Button>
      </div>
  
      {/* Managed Channels Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">
          Managed channels and groups
        </h3>
        <button className="text-sm font-medium text-gray-400 hover:text-lightGold">
          See all
        </button>
      </div>
  
      {/* Channels List */}
      <div className="space-y-4">
        {channels.map((channel, index) => (
          <Card
            key={index}
            className="relative w-full flex-shrink-0 bg-[hsl(var(--tab-bg-inactive))] p-4 rounded-lg shadow-none border-none"
            style={{
              backgroundColor: "hsl(var(--tab-bg-inactive))",
              border: "none",
            }}
          >
            {/* SP Display */}
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
              <img
                src="/star.png"
                alt="Star Icon"
                className="mr-1 h-4 w-4"
              />
              <span>{channel.sp} SP</span>
            </div>
  
            {/* Channel Details */}
            <div className="mb-3 flex items-start">
              <img
                src={channel.avatar}
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
                  {channel.title}
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
                  {channel.description}
                </p>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-1 text-[hsl(var(--icon-color))]">
                    <img
                      src="/users1.png"
                      alt="Members Icon"
                      className="h-4 w-4 object-contain"
                    />
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
                      {channel.members}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/star.png"
                      alt="Rating Icon"
                      className="h-4 w-4"
                    />
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
                      {channel.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/translate.png"
                      alt="Language Icon"
                      className="h-4 w-4"
                    />
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
                      {channel.language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Tags */}
            <div className="ml-[45px] mt-[-5px] flex justify-center space-x-2">
              {channel.tags.map((tag, tagIndex) => (
                <Button
                  key={tagIndex}
                  variant="default"
                  className="px-3 py-1 text-[12px] font-medium leading-[16px] tracking-[0.6px]"
                  style={{
                    fontFamily: "Work Sans, sans-serif",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
  
      {/* Add Topstars Section */}
      <div className="mt-8 pb-20">
        <Card
          className="flex items-center justify-between p-4 bg-[hsl(var(--tab-bg-inactive))] rounded-lg shadow-md cursor-pointer"
          onClick={() => router.push("/profile/addtopstars")}
        >
          <div className="flex items-center">
            <img
              src="/star.png"
              alt="Star Icon"
              className="mr-2 h-8 w-8 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">
                Add topstars to channel or group
              </span>
              <span className="text-lightGold text-xs font-medium">
                + 10,000 SP
              </span>
            </div>
          </div>
        </Card>
      </div>
  
      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center z-50">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className="bg-[hsl(var(--tab-bg-inactive))] w-full max-w-md rounded-t-lg p-6"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Share with</h2>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-white"
              >
                ✖
              </button>
            </div>
  
          {/* Dismissible Message */}
          {showMessage && (
            <div
              className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 bg-black text-white p-4 rounded-lg shadow-lg w-[90%] flex items-center justify-between"
              style={{ zIndex: 1000 }}
            >
              <p className="text-sm">
                Topstars mini app is the first mini app that concentrated in channel and groups, join them and get points!
              </p>
              <button
                className="ml-4 text-white hover:text-gray-400"
                onClick={dismissMessage}
              >
                ✖
              </button>
            </div>
          )}
            {/* Search Bar */}
            <div className="relative mt-4">
              <Input
                placeholder="Search chats..."
                className="h-12 pl-10 bg-black text-white placeholder-gray-400 rounded-lg focus:outline-none"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M15.7559 14.2559H14.9659L14.6859 13.9859C15.6659 12.8459 16.2559 11.3659 16.2559 9.75586C16.2559 6.16586 13.3459 3.25586 9.75586 3.25586C6.16586 3.25586 3.25586 6.16586 3.25586 9.75586C3.25586 13.3459 6.16586 16.2559 9.75586 16.2559C11.3659 16.2559 12.8459 15.6659 13.9859 14.6859L14.2559 14.9659V15.7559L19.2559 20.7459L20.7459 19.2559L15.7559 14.2559ZM9.75586 14.2559C7.26586 14.2559 5.25586 12.2459 5.25586 9.75586C5.25586 7.26586 7.26586 5.25586 9.75586 5.25586C12.2459 5.25586 14.25586 7.26586 14.25586 9.75586C14.25586 12.2459 12.2459 14.2559 9.75586 14.25586Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
  
            {/* Share Options */}
            <div className="mt-6 grid grid-cols-5 gap-4">
              {shareOptions.map((option, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-400 mt-2">
                    {option.name}
                  </span>
                </div>
              ))}
            </div>
  
            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center space-y-2">
              <button className="w-[90%] py-3 text-center rounded-lg bg-[hsl(var(--light-gold))] text-black text-sm font-medium hover:opacity-90 transition">
                Send
              </button>
              <button
                onClick={closePopup}
                className="w-[90%] py-3 text-center rounded-lg bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}


