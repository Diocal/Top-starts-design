"use client";

import React, { useState } from 'react';
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const topics = [
  "🎭 Abstract", "🐶 Animal", "🎨 Art", "🏗️ Architecture", "🏦 Business", "🖼️ Portrait", "🛋️ Interior", "⚛️ Tech",
  "💻 Programming", "📸 Photography", "🎶 Music", "🏥 Health", "🍞 Baking", "👗 Fashion", "🧠 Mental Health",
  "🌴 Nature", "📈 Finance", "🎮 Gaming", "💹 Crypto Currency", "🛸 UFO"
];

const subcategories: { [key: string]: string[] } = {
  "Crypto Currency": ["Bitcoin", "ETH", "DAO", "DEX", "DeFi", "CEX", "Web3", "Airdrop", "Launchpad", "Mining", "Staking", "Trading", "Prediction", "News"],
  "Music": ["Rock", "Jazz", "Classical", "Pop", "Hip-Hop", "EDM"],
  "Health": ["Fitness", "Nutrition", "Mental Health", "Medicine"],
};

const cards = [
  {
    sp: 50,
    title: "Topstars",
    description: "This channel contains\na lot of channels",
    members: "20k",
    rating: "4.9",
    language: "English",
    tags: ["Crypto Currency", "Information"],
    
  },
  // Agrega más cards aquí según sea necesario
];

export default function Topic() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false); // Estado para controlar el diálogo
  const router = useRouter();

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleApplyTopics = () => {
    setShowDialog(true); // Mostrar el diálogo
  };

  const handleNoClick = () => {
    // Función para normalizar el texto eliminando el ícono inicial
    const normalizeTopic = (topic: string) =>
      topic.replace(/^[^\w]+/, "").trim().toLowerCase();
  
    const matchedCard = cards.find(card =>
      card.tags.some(tag =>
        selectedTopics.some(
          topic => normalizeTopic(tag) === normalizeTopic(topic)
        )
      )
    );
  
    const message = matchedCard
      ? "🎉 Topics successfully applied!"
      : "🚫 No topics match your selection!";
  
    // Guarda el mensaje en localStorage
    localStorage.setItem("showSuccessMessage", message);
    console.log("Mensaje guardado en localStorage:", message); // Log para verificar
  
    setShowDialog(false); // Cerrar el diálogo
    router.push("/"); // Redirige a la página principal
  };
  const handleGoBack = () => {
    console.log("User performed drag to go back");
    router.back(); // Regresa a la página anterior
  };


  const handleYesClick = () => {
    const selectedSubcategories = selectedTopics.map((topic) => {
      const normalizedTopic = topic.replace(/^[^\w]+/, "").trim();
  
      // Buscar las subcategorías relacionadas con el topic
      const subcategoryList = subcategories[normalizedTopic] ?? [];
  
      return {
        topic: normalizedTopic,
        subcategories: subcategoryList,
      };
    });
  
    // Codifica los datos en un string JSON y pasa como parámetro en la URL
    const queryData = encodeURIComponent(JSON.stringify(selectedSubcategories));
  
    // Redirige a la página de subcategorías con los datos en la URL
    router.push(`/channel/topic/subcategories?data=${queryData}`);
  };
  return (
    <motion.div
      id="content"
      className="flex flex-col h-screen bg-black text-white px-6 py-8 overflow-hidden font-sans"
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
            className={`px-4 py-1.5 text-center rounded-md transition-all duration-200 text-[16px] leading-[24px] tracking-[0px] font-normal ${
              selectedTopics.includes(topic) ? "bg-lightGold text-black" : "bg-secondary text-white"
            } hover:bg-gray-700`}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="mt-auto fixed bottom-16 left-0 right-0 px-6">
        <Button onClick={handleApplyTopics} className="w-full border border-white text-white py-3 px-5 rounded-[16px] bg-transparent hover:bg-white hover:text-black hover:shadow-lg transition-all duration-200">
          Apply topics ({selectedTopics.length})
        </Button>
      </div>

      {/* Diálogo para Confirmación */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#1E1E1E] text-white rounded-lg p-6 w-full max-w-md border border-gray-700"
            style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" }}
          >
            <h3 className="text-lg font-semibold mb-3 text-white">Specific topics</h3>
            <p className="text-sm text-gray-400 mb-4">
              Do you want to have specific topics of your selected topics?
            </p>
            <div className="flex justify-end space-x-2">
              <Button
                onClick={handleNoClick}
                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
              >
                No
              </Button>
              <Button
                onClick={handleYesClick}
                className="bg-lightGold text-black py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white transition duration-200"
              >
                Yes
              </Button>
            </div>
          </motion.div>
        </div>
      )}
       {/* Indicador de "Drag" */}
       <motion.div
        className="fixed inset-x-0 bottom-0 flex justify-center items-center pb-4"
      >
        <div className="w-20 h-1 bg-white rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
