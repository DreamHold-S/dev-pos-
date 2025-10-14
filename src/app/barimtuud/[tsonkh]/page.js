"use client";
import dynamic from "next/dynamic";
import React from "react";

const allowedPages = [
  "baraaBurtgekh",
  "baraaOrlogo",
  "baraaButsaalt",
  "talonJagsaalt",
  "tailan",
  "baraaToollogo",
];

export default function RolePage({ params, ...pages }) {
  const { tsonkh } = React.use(params);

  if (!allowedPages.includes(tsonkh)) {
    return <p className="p-4 text-red-500">цонх олдсонгүй: {tsonkh}</p>;
  }

  let DynamicComponent;
  try {
    DynamicComponent = dynamic(() => import(`@/components/Manager/${tsonkh}`));
  } catch {
    DynamicComponent = () => (
      <p className="p-4 text-red-500">Компонент олдсонгүй</p>
    );
  }

  return <DynamicComponent />;
}
