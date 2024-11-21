"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importar useRouter
import TopMembersCard from "./cards/TopMembersCard";
import TopGrowthCard from "./cards/TopGrowthCard";
import TopActiveCard from "./cards/TopActiveCard";

interface SectionData {
  sp: number;
  title: string;
  description: string;
  members: string;
  rating: string;
  language: string;
  tags: string[];
}

interface ContentSectionProps {
  sections: { title: string; data: SectionData[] }[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ sections }) => {
  const router = useRouter(); // Inicializar el router

  // Función para manejar la navegación
  const handleSeeAll = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "Top members":
        router.push("/topMembers"); // Redirigir a la página de "Top members"
        break;
      case "Top growth":
        router.push("/topGrowth"); // Redirigir a la página de "Top growth"
        break;
      case "Top active":
        router.push("/topActive"); // Redirigir a la página de "Top active"
        break;
      default:
        router.push("/"); // Redirigir a la página principal u otra por defecto
    }
  };

  return (
    <div className="flex-1 overflow-auto px-4 pb-8">
      {/* Choose Language Section */}
      <div className="my-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium tracking-wide">Choose language</h2>
          <div className="flex items-center space-x-1">
            {/* Banderas */}
            <img
              src="/usaflag.png"
              alt="English"
              className="h-4 w-4 object-cover"
            />
            <img
              src="/indonesia.png"
              alt="Indonesian"
              className="h-4 w-4 object-cover"
            />
            {/* Botón Flecha */}
            <button
              onClick={() => router.push("/channel/language")}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Section Mapping */}
      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <button
              className="text-white text-sm hover:underline"
              onClick={() => handleSeeAll(section.title)} // Llamar a la función con el título de la sección
            >
              See all
            </button>
          </div>

          {/* Section Cards */}
          {section.title === "Top members" && <TopMembersCard data={section.data} />}
          {section.title === "Top growth" && <TopGrowthCard data={section.data} />}
          {section.title === "Top active" && <TopActiveCard data={section.data} />}
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
