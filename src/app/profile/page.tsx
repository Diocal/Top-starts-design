"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export default function Profile() {
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

  return (
    <motion.div
      className="flex flex-col h-screen bg-black text-white px-6 py-8 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">TOPSTARS</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        {/* Star Image */}
        <img
          src="/profile/Profile-star.png"
          alt="Profile Star"
          className="w-[358px] h-[148px] object-contain mb-4"
        />
        {/* Username and SP */}
        <h2 className="text-lg font-semibold">@XYZNYC</h2>
        <p className="text-3xl font-bold text-lightGold">256,935 SP</p>
        {/* Share Button */}
        <Button className="mt-4 px-6 py-3 bg-lightGold text-black rounded-md font-medium hover:bg-yellow-500 transition-all">
          Share + 10,000 SP
        </Button>
      </div>

      {/* Managed Channels Section */}
      <div className="flex justify-between items-center mb-4">
        <h3
          className="text-lg font-semibold text-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            color: "#FFFFFF",
            marginLeft: "16px",
          }}
        >
          Managed channels and groups
        </h3>
        <button
          className="text-sm font-medium text-gray-400 hover:text-lightGold"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            marginRight: "16px",
          }}
        >
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
      <div className="mt-8">
        <Card
          className="flex items-center justify-between p-4 bg-[hsl(var(--tab-bg-inactive))] rounded-lg shadow-md"
          style={{
            backgroundColor: "hsl(var(--tab-bg-inactive))",
            border: "1px solid hsl(var(--tab-bg-active))",
          }}
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
    </motion.div>
  );
}
