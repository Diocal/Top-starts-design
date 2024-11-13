"use client";

import React from "react";

interface Member {
  name: string;
  engagement: number;
  medal?: string; // Para medallas 🥇🥈🥉
  rank?: string; // Para posiciones #4, #5, etc.
  avatar: string; // URL de la imagen del avatar
}

interface EngagementTableProps {
  members: Member[];
}

export default function EngagementTable({ members }: EngagementTableProps) {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {/* Encabezado de la tabla */}
      <div className="flex justify-between items-center mb-6">
        <h3
          className="text-[18px] font-semibold text-gray-300"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            color: "hsl(var(--subtle-light))",
            letterSpacing: "0.2px",
          }}
        >
          Most active members
        </h3>
        <button
          className="text-sm font-medium text-gray-400 hover:text-[#FFC107] transition-colors"
          style={{
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          See all
        </button>
      </div>

      {/* Lista de miembros */}
      <ul className="space-y-4">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-[#121212] px-4 py-3 rounded-lg shadow-lg"
          >
            {/* Avatar y detalles del miembro */}
            <div className="flex items-center">
              <img
                src={member.avatar}
                alt={`${member.name} Avatar`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
              <h4
                  className="font-bold text-white text-[16px]"
                  style={{
                    lineHeight: "24px",
                    letterSpacing: "0.16px",
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-[12px] font-medium"
                  style={{
                    color: "hsl(var(--subtle-light))",
                    lineHeight: "16px",
                    letterSpacing: "0.6px",
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  {member.engagement} Engagement
                </p>
              </div>
            </div>

            {/* Medalla o rango */}
            <span
              className="text-lg font-bold text-[#FFC107]"
              style={{
                fontFamily: "'Work Sans', sans-serif",
              }}
            >
              {member.medal || member.rank}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
