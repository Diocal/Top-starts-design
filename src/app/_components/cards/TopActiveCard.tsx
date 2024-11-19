import React from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const TopActiveCard = ({ data }) => (
  <div
    className="w-full h-full overflow-y-auto space-y-4 no-scrollbar" // Scroll vertical
    style={{
      height: "500px", // Ajusta la altura según lo necesario
    }}
  >
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
          className="absolute right-4 top-4 flex items-center"
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
        <div className="mb-4 flex items-start">
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
              className="mt-1 mb-3 whitespace-pre-line"
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
);

export default TopActiveCard;
