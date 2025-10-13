"use client";

import dynamic from "next/dynamic";
import { use } from "react";

export default function RolePage({ params }) {
  // ✅ params бол Promise тул use() ашиглан задлана
  const { role } = use(params);

  const DynamicComponent =
    role === "manager"
      ? dynamic(() => import("@/components/Manager/ManagerPage"))
      : role === "cashier"
      ? dynamic(() => import("@/components/Cashier/CashierPage"))
      : role === "jagsaalt"
      ? dynamic(() => import("@/components/Manager/jagsaaltPage"))
      : () => <p className="p-4 text-red-500">Role олдсонгүй: {role}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-400">
      <DynamicComponent />
    </div>
  );
}
