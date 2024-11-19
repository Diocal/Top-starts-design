"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const TopMembersCard = ({ data }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndices, setScrollIndices] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging) return;

      const x = event.clientX;
      const delta = x - startX;
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollLeft - delta;
      }
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const children = scrollContainer.children[0]?.children;
      if (children) {
        const containerRect = scrollContainer.getBoundingClientRect();
        let closestIndex = 0;
        let closestDistance = Infinity;

        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const childRect = child.getBoundingClientRect();

          const distance = Math.abs(
            containerRect.left + containerRect.width / 2 -
              (childRect.left + childRect.width / 2)
          );
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }

        setScrollIndices(closestIndex);

        const card = children[closestIndex] as HTMLElement;
        if (card) {
          const cardOffset = card.offsetLeft + card.offsetWidth / 2;
          const scrollPosition =
            cardOffset - scrollContainer.offsetWidth / 2;

          scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const children = scrollContainer.children[0]?.children;
      if (children) {
        const containerRect = scrollContainer.getBoundingClientRect();
        let closestIndex = 0;
        let closestDistance = Infinity;

        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const childRect = child.getBoundingClientRect();

          const distance = Math.abs(
            containerRect.left + containerRect.width / 2 -
              (childRect.left + childRect.width / 2)
          );
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }

        setScrollIndices(closestIndex);
      }
    }
  };

  const scrollToIndex = (cardIdx: number) => {
    const scrollContainer = scrollContainerRef.current;
    const card = scrollContainer?.children[0]?.children[cardIdx] as HTMLElement | null;

    if (!card || !scrollContainer) return;

    const containerWidth = scrollContainer.offsetWidth;
    const cardOffset = card.offsetLeft + card.offsetWidth / 2;
    const scrollPosition = cardOffset - containerWidth / 2;

    scrollContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setScrollIndices(cardIdx);
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

  return (
    <div>
      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={`w-full overflow-x-auto whitespace-nowrap pb-4 snap-x snap-mandatory no-scrollbar ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onScroll={handleScroll}
      >
        <div className="inline-flex space-x-4">
          {data.map((card, idx) => (
            <Card
              key={idx}
              className="relative w-[342px] flex-shrink-0 p-4 snap-start"
              style={{
                backgroundColor: "hsl(var(--tab-bg-inactive))",
                border: "none",
              }}
            >
              {/* SP and Star Icon */}
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
                <img src="/star.png" alt="Star Icon" className="mr-1 h-4 w-4" />
                <span>{card.sp} SP</span>
              </div>

              {/* Main Content */}
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
                      <img src="/star.png" alt="Rating Icon" className="h-4 w-4" />
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

              {/* Buttons */}
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

      {/* Selector Buttons */}
      <div className="mt-2 flex justify-center space-x-2">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all ${
              scrollIndices === idx
                ? "bg-yellow-500 w-8 h-3 rounded-full"
                : "bg-gray-400 w-3 h-3 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMembersCard;
