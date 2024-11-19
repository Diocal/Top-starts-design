"use client";

import React, { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const cities = [
  { name: "Jakarta, Indonesia", flag: "/local/Indonesia.png" },
  { name: "Tokyo, Japan", flag: "/local/Japan.png" },
  { name: "Seoul, South Korea", flag: "/local/Korea.png" },
  { name: "Beijing, China", flag: "/local/China.png" },
  { name: "Bangkok, Thailand", flag: "/local/Thailand.png" },
  { name: "Hanoi, Vietnam", flag: "/local/Vietnam.png" },
  { name: "Manila, Philippines", flag: "/local/Philippines.png" },
  { name: "Kuala Lumpur, Malaysia", flag: "/local/Malaysia.png" },
  { name: "Central, Singapore", flag: "/local/Singapore.png" },
  { name: "Delhi, India", flag: "/local/India.png" },
];

export default function LocalPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  // Al cargar la página, establece el tab "Local" como seleccionado
  useEffect(() => {
    localStorage.setItem("selectedTab", "local");
  }, []);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCityClick = () => {
    // Redirigir a la página principal
    router.push("/");

    // Guardar el estado del tab seleccionado
    localStorage.setItem("selectedTab", "local");
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
                d="M15.7559 14.2559H14.9659L14.6859 13.9859C15.6659 12.8459 16.2559 11.3659 16.2559 9.75586C16.2559 6.16586 13.3459 3.25586 9.75586 3.25586C6.16586 3.25586 3.25586 6.16586 3.25586 9.75586C3.25586 13.3459 6.16586 16.25586 9.75586 16.25586C11.3659 16.25586 12.8459 15.6659 13.9859 14.6859L14.2559 14.9659V15.7559L19.2559 20.7459L20.7459 19.2559L15.7559 14.2559ZM9.75586 14.2559C7.26586 14.2559 5.25586 12.2459 5.25586 9.75586C5.25586 7.26586 7.26586 5.25586 9.75586 5.25586C12.2459 5.25586 14.25586 7.26586 14.25586 9.75586C14.25586 12.2459 12.24586 14.25586 9.75586 14.25586Z"
                fill="white"
              />
            </svg>
          </span>
          <Input
            placeholder="Search city.."
            className="h-12 pl-10 rounded-lg bg-[hsl(var(--tab-bg-inactive))] text-white focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de ciudades */}
      <div className="flex flex-col gap-2 overflow-auto">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <div
              key={city.name}
              className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--tab-bg-inactive))] rounded-t-lg shadow-md cursor-pointer hover:bg-[hsl(var(--light-gold))]"
              onClick={handleCityClick}
            >
              <div className="flex items-center gap-4">
                <img
                  src={city.flag}
                  alt={city.name}
                  className="h-8 w-8 rounded-md object-cover"
                />
                <span className="text-white text-sm">{city.name}</span>
              </div>
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

      {/* Indicador de "Drag" */}
      <motion.div className="flex justify-center items-center pt-4">
        <div className="w-20 h-1 bg-white rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
