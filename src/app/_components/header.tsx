"use client";

import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between mb-6">
      <button className="text-white text-lg font-bold">✕</button>
      <h1 className="text-xl font-semibold">TOPSTARS</h1>
      <div className="text-gray-400">⋮</div>
    </div>
  );
}

export default Header;
