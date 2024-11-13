"use client";

import React from "react";

export default function TopStarsSection() {
  return (
    <div className="flex items-center bg-[#121212] p-4 rounded-lg mb-6">
      <img
        src="/path-to-avatar.png" // Cambia esta ruta al avatar real
        alt="Topstars Avatar"
        className="w-12 h-12 rounded-full mr-4"
      />
      <h2 className="text-lg font-medium flex-grow">Topstars</h2>
      <button>
        <span className="text-gray-400">▾</span>
      </button>
    </div>
  );
}
