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
