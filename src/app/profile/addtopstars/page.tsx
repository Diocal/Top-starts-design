"use client";

import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const groups = [
  { name: "Topstars", icon: "/addtopstars/Topstars.png" },
  { name: "BTC Community", icon: "/addtopstars/Btc.png" },
  { name: "ETH Channel", icon: "/addtopstars/Ethereum.png" },
  { name: "Sol", icon: "/addtopstars/Sol.png" },
  { name: "SUI Indonesia Group", icon: "/addtopstars/Sui.png" },
  { name: "Matchain Family Indonesia", icon: "/addtopstars/Mattchain.png" },
  { name: "Pepe Community", icon: "/addtopstars/Pepe.png" },
  { name: "Airdropfinder Indonesia", icon: "/addtopstars/Airdrop.png" },
  { name: "Official TON Society", icon: "/addtopstars/TON.png" },
  { name: "Official Bitget Exchange", icon: "/addtopstars/Bidget.png" },
];

export default function AddTopstarsWithDrag() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (group: any) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGroup(null);
    setIsModalOpen(false);
  };

  const handleAddGroup = () => {
    if (selectedGroup) {
      localStorage.setItem(
        "showSuccessMessage",
        `🎉 Successfully added group or channel: ${selectedGroup.name}`
      );
      closeModal();
      router.push("/profile");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <motion.div
      id="content"
      className="flex flex-col h-screen bg-black text-white px-4 py-8 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.y < -200) {
          handleGoBack();
        }
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Add Topstars</h1>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div
          className="relative flex items-center h-12 rounded-lg bg-[hsl(var(--tab-bg-inactive))] shadow-md"
          style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Similar al diseño de los cards
          }}
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2 transform">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M15.7559 14.2559H14.9659L14.6859 13.9859C15.6659 12.8459 16.2559 11.3659 16.2559 9.75586C16.2559 6.16586 13.3459 3.25586 9.75586 3.25586C6.16586 3.25586 3.25586 6.16586 3.25586 9.75586C3.25586 13.3459 6.16586 16.2559 9.75586 16.2559C11.3659 16.2559 12.8459 15.6659 13.9859 14.6859L14.2559 14.9659V15.7559L19.2559 20.7459L20.7459 19.2559L15.7559 14.2559ZM9.75586 14.2559C7.26586 14.2559 5.25586 12.2459 5.25586 9.75586C5.25586 7.26586 7.26586 5.25586 9.75586 5.25586C12.2459 5.25586 14.25586 7.26586 14.25586 9.75586C14.25586 12.2459 12.24586 14.2559 9.75586 14.25586Z"
                fill="white"
              />
            </svg>
          </span>
          <Input
            placeholder="Search channel or group to add..."
            className="h-full pl-12 w-full rounded-lg text-white bg-[hsl(var(--tab-bg-inactive))] placeholder-gray-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Groups List */}
      <div className="space-y-1 overflow-auto no-scrollbar">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col px-4 py-2 rounded-md hover:bg-gray-800 transition relative cursor-pointer"
              style={{
                backgroundColor: "hsl(var(--tab-bg-inactive))",
              }}
              onClick={() => openModal(group)}
            >
              <div className="flex items-center">
                <img
                  src={group.icon}
                  alt={`${group.name} Icon`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="ml-4 text-white font-medium text-sm">
                  {group.name}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 h-[1px] w-full"
                style={{
                  backgroundColor: "hsl(var(--light-gold))",
                }}
              />
            </div>
          ))
        ) : (
            <div className="flex flex-col items-center justify-center gap-4 bg-[hsl(var(--tab-bg-inactive))] py-8 px-6 rounded-lg">
            <img
              src="/Banana.png"
              alt="No Results Icon"
              className="h-20 w-20"
            />
            <p className="text-white font-medium text-center">
              No results for <span className="text-[hsl(var(--light-gold))]">"{searchTerm}"</span>
            </p>
            <p className="text-gray-400 text-sm text-center">Try a new search!</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-[hsl(var(--tab-bg-inactive))] rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-white font-semibold text-lg mb-4">
              Add selected group or channel?
            </h2>
            <p className="text-gray-300 mb-6 text-sm">
              Are you sure you want to add the selected group or channel:{" "}
              <span className="text-[hsl(var(--light-gold))]">
                {selectedGroup?.name}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-sm text-gray-400 hover:text-white"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm bg-[hsl(var(--light-gold))] text-black rounded-lg hover:opacity-90"
                onClick={handleAddGroup}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drag Indicator */}
      <motion.div className="flex justify-center items-center mt-auto pt-6">
        <div className="w-20 h-1 bg-white rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
