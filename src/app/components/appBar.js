"use client";

import React from "react";

function AppBar({ pTitle, className = "" }) {
  return (
    <div
      className={`w-[100vw] bg-gradient-to-r from via-violet-600 to-pink-300 h-10 flex items-center justify-center ${className}`}
    >
      <h1 id="title" className="text-xl font-bold ">
        {pTitle}
      </h1>
    </div>
  );
}

export default AppBar;
