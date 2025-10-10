"use client";

import React, { useState } from "react";
import Image from "next/image";
import background from "../../../public/backround.jpg";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "manager" || role === "cashier") {
      router.push(`/${role}/huudas`);
    } else {
      alert("Role сонгоно уу!");
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* ✅ Background зураг */}
      <Image
        src={background}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* ✅ Dark overlay (зураг дээр саарал/бүдэг filter) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* ✅ Login card */}
      <div className="relative flex items-center justify-center h-full">
        <div className="w-[400px] bg-white/10 border border-white/30 rounded-2xl shadow-lg backdrop-blur-md text-white p-6 flex flex-col items-center space-y-5">
          <h1 className="text-2xl font-semibold mb-2">Нэвтрэх</h1>

          {/* Username input */}
          <div className="w-full border border-gray-300 rounded-lg flex items-center px-3 py-2 bg-white/20 focus-within:border-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="text-gray-100"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
            <input
              className="ml-2 w-full bg-transparent text-white placeholder-gray-300 focus:outline-none"
              placeholder="Username"
            />
          </div>

          {/* Role select */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-white/20 border border-gray-300 rounded-lg p-2 text-white focus:outline-none focus:border-sky-400"
          >
            <option value="">-- Role сонго --</option>
            <option value="manager" className="text-black">
              Менежер
            </option>
            <option value="cashier" className="text-black">
              Кассчин
            </option>
          </select>

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Нэвтрэх
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M3 7.636A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-9-5.636" />
                <path d="M11 8s4 2.946 4 4s-4 4-4 4m3.5-4H2" />
              </g>
            </svg>
          </button>

          {/* Footer */}
          <div className="text-xs text-gray-300 mt-2">
            © 2025 MyApp — Бүх эрх хуулиар хамгаалагдсан
          </div>
        </div>
      </div>
    </div>
  );
}
