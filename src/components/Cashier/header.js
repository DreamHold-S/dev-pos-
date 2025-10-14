"use client";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  function click() {
    router.push("/");
  }

  return (
    <header className="h-12 w-full bg-gradient-to-r from-gray-200 via-white to-gray-250 text-gray-800 flex items-center justify-between px-6 shadow-md">
      {/* Зүүн тал */}
      <div className="flex gap-3 items-center">
        <h1 className="text-sm font-semibold ">Систем огноо :</h1>
        <h1 className="text-sm font-semibold">2025/10/06 12:24:11</h1>
      </div>

      {/* Баруун тал */}
      <div className="flex gap-3 items-center cursor-pointer hover:text-gray-600 transition-colors">
        <FiUser size={22} />
        <span className="flex flex-col">
          <span className="text-xs">Кассир</span>
          <span className="text-xs font-medium">Эрдэнэцэцэг</span>
        </span>

        <button onClick={click}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ea6666"
              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
            />
          </svg>
        </button>

        {/* <FiLogOut size={22} onClick={logOut} /> */}
      </div>
    </header>
  );
}
