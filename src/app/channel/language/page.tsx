"use client";

import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const languages = [
  { name: "Indonesian", flag: "/indonesia.png" },
  { name: "Japanese", flag: "/language/Japanese.png" },
  { name: "Korean", flag: "/language/Korean.png" },
  { name: "Chinese", flag: "/language/Chinese.png" },
  { name: "Thai", flag: "/language/Thai.png" },
  { name: "Vietnam", flag: "/language/Vietnam.png" },
  { name: "Tagalog", flag: "/language/Tagalog.png" },
  { name: "Melayu", flag: "/language/Melayu.png" },
  { name: "English", flag: "/usaflag.png" },
];

export default function LanguageSelector() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  const handleApply = () => {
    const message =
      selectedLanguages.length > 0
        ? "🎉 Language successfully applied!"
        : "🚫 No languages selected!";

    // Guardar el mensaje en `localStorage`
    localStorage.setItem("showSuccessMessage", message);

    // Redirigir a la página principal
    router.push("/");
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
      {/* Título y barra de búsqueda */}
      <div className="mb-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white opacity-75"
            >
              <path
                d="M15.7559 14.2559H14.9659L14.6859 13.9859C15.6659 12.8459 16.2559 11.3659 16.2559 9.75586C16.2559 6.16586 13.3459 3.25586 9.75586 3.25586C6.16586 3.25586 3.25586 6.16586 3.25586 9.75586C3.25586 13.3459 6.16586 16.2559 9.75586 16.2559C11.3659 16.2559 12.8459 15.6659 13.9859 14.6859L14.2559 14.9659V15.7559L19.2559 20.7459L20.7459 19.2559L15.7559 14.2559ZM9.75586 14.2559C7.26586 14.2559 5.25586 12.2459 5.25586 9.75586C5.25586 7.26586 7.26586 5.25586 9.75586 5.25586C12.2459 5.25586 14.25586 7.26586 14.25586 9.75586C14.25586 12.2459 12.24586 14.2559 9.75586 14.25586Z"
                fill="white"
              />
            </svg>
          </span>
          <Input
            placeholder="Search language.."
            className="h-12 pl-10 rounded-lg bg-[hsl(var(--tab-bg-inactive))] text-white focus:outline-none focus:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de idiomas */}
      <div className="flex flex-col gap-2 overflow-auto">
        {filteredLanguages.length > 0 ? (
          filteredLanguages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--tab-bg-inactive))] rounded-t-lg border-b-2 border-[hsl(var(--light-gold))] shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="h-8 w-8 rounded-md object-cover"
                />
                <span className="text-white text-sm">{lang.name}</span>
              </div>
              <input
                type="checkbox"
                checked={selectedLanguages.includes(lang.name)}
                onChange={() => toggleLanguage(lang.name)}
                className="form-checkbox h-5 w-5 text-[hsl(var(--tab-bg-active))]"
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

      {/* Botón para aplicar */}
      <div className="mt-auto fixed bottom-0 inset-x-0 px-4 bg-[hsl(var(--tab-bg-inactive))] py-4 rounded-t-lg">
        <div>
          <Button
            onClick={handleApply}
            className="w-full py-3 border border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Apply language ({selectedLanguages.length})
          </Button>
        </div>

        {/* Indicador de "Drag" */}
        <motion.div className="flex justify-center items-center pt-4">
          <div className="w-20 h-1 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
