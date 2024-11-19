"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card } from "~/components/ui/card";
import { useRouter } from "next/navigation";
import TopMembersCard from "~/components/cards/TopMembersCard";

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
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  
  sections,
  searchTerm,
  setSearchTerm,
}) => {
  const scrollContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const router = useRouter();

  const [scrollIndices, setScrollIndices] = useState<{ [key: number]: number }>(
    {}
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent, idx: number) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRefs.current[idx]?.scrollLeft || 0);
    setCurrentIdx(idx);
    e.preventDefault();
    console.log("Drag started on section:", idx);
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || currentIdx === null) return;
  
      const x = event.clientX;
      const delta = x - startX;
      const scrollContainer = scrollContainerRefs.current[currentIdx];
  
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollLeft - delta;
  
        // Calcular cuál card está más cercano al centro del contenedor
        const children = scrollContainer.children[0]?.children;
        if (children) {
          const containerCenter = scrollContainer.offsetWidth / 2;
          let closestIndex = 0;
          let closestDistance = Infinity;
  
          for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLElement;
            const childRect = child.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();
  
            // Distancia entre el centro del contenedor y el centro del card
            const childCenter =
              childRect.left - containerRect.left + child.offsetWidth / 2;
            const distance = Math.abs(containerCenter - childCenter);
  
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = i;
            }
          }
  
          // Aquí es donde debes agregar esta validación y actualización del estado
          if (closestIndex >= 0 && closestIndex < children.length) {
            setScrollIndices((prev) => ({
              ...prev,
              [currentIdx]: closestIndex,
            }));
          }
        }
      }
    },
    [isDragging, startX, scrollLeft, currentIdx]
  );
  const handleMouseUp = useCallback(() => {
    if (isDragging) console.log("Drag ended.");
    setIsDragging(false);
    setCurrentIdx(null);
  }, [isDragging]);

  const scrollToIndex = (sectionIdx: number, cardIdx: number) => {
    const currentRef = scrollContainerRefs.current[sectionIdx];
    const card = currentRef?.children[0]?.children[cardIdx] as HTMLElement | null;
    if (!card || !currentRef) return;
  
    if (card) {
      const containerWidth = currentRef.offsetWidth;
      const cardOffset = card.offsetLeft + card.offsetWidth / 2;
      const scrollPosition = cardOffset - containerWidth / 2;
  
      currentRef.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
  
      // Actualizar el índice actual
      setScrollIndices((prev) => ({ ...prev, [sectionIdx]: cardIdx }));
    }
  };
  const handleScroll = (sectionIdx: number) => {
    const currentRef = scrollContainerRefs.current[sectionIdx];
    if (currentRef) {
      const children = currentRef.children[0]?.children;
      if (children) {
        const containerRect = currentRef.getBoundingClientRect();
        let closestIndex = 0;
        let closestDistance = Infinity;
  
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const childRect = child.getBoundingClientRect();
  
          const distance = Math.abs(containerRect.left - childRect.left);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }
  
        setScrollIndices((prev) => ({
          ...prev,
          [sectionIdx]: closestIndex,
        }));
      }
    }
  };
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const renderCardBySection = (sectionTitle: string, card: SectionData) => {
    if (sectionTitle === "Top members") {
      return <TopMembersCard card={card} />;
    }
    if (sectionTitle === "Top growth") {
      return <TopGrowthCard card={card} />;
    }
    if (sectionTitle === "Top active") {
      return <TopActiveCard card={card} />;
    }
    return null; // O un diseño por defecto si no coincide con ninguna sección
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
    {/* Sections */}
    {sections.map((section, idx) => (
      <div key={idx} className="mb-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <button
            onClick={() => console.log(`See All clicked for ${section.title}`)}
            className="text-white text-[12px] font-medium leading-[16px] tracking-[0.6px] font-sans hover:underline"
          >
            See all
          </button>
        </div>
        <div
          onScroll={() => handleScroll(idx)}
          className={`w-full overflow-x-auto whitespace-nowrap pb-4 snap-x snap-mandatory no-scrollbar ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          ref={(el) => (scrollContainerRefs.current[idx] = el)}
        >
          <div className="inline-flex space-x-4">
            {section.data.map((card, cardIdx) => (
              <Card
                key={cardIdx}
                className="relative w-[342px] flex-shrink-0 p-4 snap-start"
                style={{
                  backgroundColor: "hsl(var(--tab-bg-inactive))",
                  border: "none",
                }}
              >
                <div
                  className="absolute right-2 top-2 flex items-center"
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
                  <span>{card.sp} SP</span>
                </div>
                <div className="mb-3 flex items-start">
                  <img
                    src="/avatar1.png"
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
                      {card.title}
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
                      {card.description}
                    </p>
                    <div className="flex items-center space-x-3 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <img
                          src="/users1.png"
                          alt="Users Icon"
                          className="h-4 w-4 object-contain"
                        />
                        <span>{card.members}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/star.png"
                          alt="Rating Icon"
                          className="h-4 w-4"
                        />
                        <span>{card.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/translate.png"
                          alt="Language Icon"
                          className="h-4 w-4"
                        />
                        <span>{card.language}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[45px] mt-[-5px] flex justify-center space-x-2">
                  <Button
                    variant="default"
                    className="px-3 py-1 text-[12px] font-medium"
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Information
                  </Button>
                  <Button
                    variant="default"
                    className="px-3 py-1 text-[12px] font-medium"
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Entertainment
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-center space-x-2">
          {section.data.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(idx, i)}
              className={`transition-all ${
                (scrollIndices[idx] ?? -1) === i
                  ? "bg-yellow-500 w-8 h-3 rounded-full" // Activo
                  : "bg-gray-400 w-3 h-3 rounded-full" // Inactivo
              }`}
            />
          ))}
        </div>
      </div>
    ))}
    </div>
  );
};

export default ContentSection;
