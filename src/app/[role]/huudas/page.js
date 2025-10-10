"use client";

import dynamic from "next/dynamic";
import { use } from "react";

export default function RolePage({ params }) {
  // ✅ params бол Promise тул use() ашиглан задлана
  const { role } = use(params);

  const DynamicComponent =
    role === "manager"
      ? dynamic(() => import("@/components/ManagerPage"))
      : role === "cashier"
      ? dynamic(() => import("@/components/CashierPage"))
      : () => <p className="p-4 text-red-500">Role олдсонгүй: {role}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <DynamicComponent />
    </div>
  );
}
