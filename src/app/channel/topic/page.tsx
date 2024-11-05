"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";

const topics = [
  "🎭 Abstract", "🐶 Animal", "🎨 Art", "🏗️ Architecture", "🏦 Business", "🖼️ Portrait", "🛋️ Interior", "⚛️ Tech",
  "💻 Programming", "📸 Photography", "🎶 Music", "🏥 Health", "🍞 Baking", "👗 Fashion", "🧠 Mental Health",
  "🌴 Nature", "📈 Finance", "🎮 Gaming", "💹 Crypto Currency", "🛸 UFO"
];

export default function Topic() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white px-6 py-8 overflow-auto pb-20 font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-normal leading-8">
          <span className="text-lightGold">What kind of main topics do</span> 
          <span className="text-white"> you like to apply?</span>
        </h2>
        <p className="text-gray-400 font-normal text-sm leading-5 tracking-[0.08px] pt-2">
          You can choose more than one topic.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => toggleTopic(topic)}
            className={`px-3.8 py-1.5 text-center rounded-md transition-all duration-200 text-[16px] leading-[24px] tracking-[0px] font-normal ${
              selectedTopics.includes(topic) ? "bg-lightGold text-black" : "bg-gray-800 text-white"
            } hover:bg-gray-700`}
          >
            {topic}
          </button>
        ))}
      </div>

      <Button className="mt-auto border border-white text-white py-2 px-4 rounded-lg hover:bg-gray-700">
        Apply topics ({selectedTopics.length})
      </Button>
    </div>
  );
}
