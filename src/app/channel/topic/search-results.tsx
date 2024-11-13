"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const channels = [
  {
    sp: 50,
    title: "Topstars",
    description: "This channel contains a lot of channels",
    members: "20k",
    rating: "4.9",
    language: "English",
    tags: ["Crypto Currency", "Information"],
  },
  {
    sp: 45,
    title: "TechTalks",
    description: "Latest discussions in tech",
    members: "15k",
    rating: "4.8",
    language: "English",
    tags: ["Tech", "Programming"],
  },
  // Añade más channels aquí si lo necesitas
];

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredChannels, setFilteredChannels] = useState([]);

  useEffect(() => {
    const topics = searchParams.get("topics")?.split(",") || [];
    const results = channels.filter(channel =>
      channel.tags.some(tag => topics.includes(tag))
    );
    setFilteredChannels(results);
  }, [searchParams]);

  return (
    <div className="flex flex-col h-screen bg-black text-white px-6 py-8 overflow-y-auto font-sans">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      {filteredChannels.length > 0 ? (
        filteredChannels.map((channel, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">{channel.title}</h3>
            <p className="text-sm text-gray-400">{channel.description}</p>
            <p className="text-sm text-gray-400">Members: {channel.members}</p>
            <p className="text-sm text-gray-400">Rating: {channel.rating}</p>
            <p className="text-sm text-gray-400">Language: {channel.language}</p>
            <p className="text-sm text-gray-400">Tags: {channel.tags.join(", ")}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No results found for the selected topics.</p>
      )}
      <button onClick={() => router.back()} className="mt-4 text-lightGold underline">Back to Topics</button>
    </div>
  );
}
