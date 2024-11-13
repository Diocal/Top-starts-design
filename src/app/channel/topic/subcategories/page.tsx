"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

function SubcategoriesClientComponent() {
  const [subcategoriesData, setSubcategoriesData] = useState<
    { topic: string; subcategories: string[] }[]
  >([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [tabs, setTabs] = useState<string[]>([]); // Tabs para categorías seleccionadas
  const [activeTab, setActiveTab] = useState<string | null>(null); // Tab activa

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const queryData = searchParams.get("data");
    if (queryData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(queryData));
        setSubcategoriesData(parsedData);

        // Configurar tabs con las categorías seleccionadas
        const topics = parsedData.map((item: { topic: string }) => item.topic);
        setTabs(topics);

        // Seleccionar la primera tab como activa por defecto
        if (topics.length > 0) {
          setActiveTab(topics[0]);
        }
      } catch (error) {
        console.error("Error parsing query data:", error);
      }
    }
  }, [searchParams]);

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((sub) => sub !== subcategory)
        : [...prev, subcategory]
    );
  };

  const handleApply = () => {
    console.log("Selected subcategories:", selectedSubcategories);
    // Implementa la lógica para manejar las subcategorías seleccionadas
  };

  const handleGoBack = () => {
    router.back();
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
      {/* Título */}
      <div className="mb-8">
        <h2 className="text-2xl font-normal leading-8">
          <span className="text-lightGold">What kind of specific topics do</span>
          <span className="text-white"> you like to apply?</span>
        </h2>
        <p className="text-gray-400 font-normal text-sm leading-5 tracking-[0.08px] pt-2">
          You can choose more than one topic.
        </p>
      </div>

      {/* Tabs con scroll horizontal */}
      {tabs.length > 1 && (
        <div className="flex space-x-2 mb-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-lightGold scrollbar-track-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === tab
                  ? "bg-lightGold text-black"
                  : "bg-gray-700 text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Subcategorías filtradas */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {subcategoriesData
          .filter((item) => !activeTab || item.topic === activeTab) // Filtra por tab activa
          .map((item) =>
            item.subcategories.map((subcategory) => (
              <label key={subcategory} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-lightGold"
                  checked={selectedSubcategories.includes(subcategory)}
                  onChange={() => toggleSubcategory(subcategory)}
                />
                <span>{subcategory}</span>
              </label>
            ))
          )}
      </div>

      {/* Botón para aplicar */}
      <div className="fixed inset-x-0 bottom-16 px-6"> {/* Cambié bottom-6 a bottom-16 */}
        <button
          onClick={handleApply}
          className="w-full py-3 bg-transparent border border-lightGold text-lightGold hover:bg-lightGold hover:text-black rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          Apply specific topics ({selectedSubcategories.length})
        </button>
      </div>

      {/* Indicador de "Drag" */}
      <motion.div
        className="fixed inset-x-0 bottom-0 flex justify-center items-center pb-4"
      >
        <div className="w-20 h-1 bg-white rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}

export default function Subcategories() {
  return (
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
      <SubcategoriesClientComponent />
    </Suspense>
  );
}
