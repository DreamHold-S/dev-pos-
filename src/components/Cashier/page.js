"use client"; // ✅ Client Component болгох

import Posleft from "./posleft";
import Header from "./header";

export default function UndsenTsonh() {
  // Button click event
  function onClickTile(e) {
    alert(e.target.innerText);
  }

  const items = [
    "Механик харандаа, MG",
    "Хүүхдийн гутал",
    "Ширээний хэрэгсэл PEN STAND",
    "Шугам EK53005 45' /16 cm Neon Yellow",
    "Маркер Acrylic 36 өнгө HM922 DELI",
    "Үзгэн бал 0,8мм 6pcs AGP132R2 ногоон MG",
    "Балын харандаа AWP304B8 2HB MG",
    "Запас үзгэн балны MF2907 цэнхэр",
    "Запас тосон балны ABR122S9 0.7mm blue MG",
    "Механик харандаа Tapli Clip Blue 0.5мм",
    "Механик харандаа 2.0 2B AMP35671",
    "Тодруулагч kt84593",
    "Үзгэн бал 0,8мм 6pcs AGP132R2 ногоон MG",
    "Балын харандаа AWP304B8 2HB MG",
    "Запас үзгэн балны MF2907 цэнхэр",
    "Ширээний хэрэгсэл PEN STAND",
    "Шугам EK53005 45' /16 cm Neon Yellow",
    "Маркер Acrylic 36 өнгө HM922 DELI",
    "Үзгэн бал 0,8мм 6pcs AGP132R2 ногоон MG",
  ];
  const itemGroups = [
    "Архи пиво",
    "Хүүхдийн гутал",
    "Ширээний хэрэгсэл",
    "Шугам EK53005 45'",
    "Маркер Acrylic 36 ",
    "Үзгэн бал 0,8мм 6pcs",
    "Балын харандаа ",
    "Запас үзгэн бал",
    "Запас тосон бал",
    "Механик харандаа Tapli",
    "Механик харандаа 2.0",
    "Тодруулагч kt84593",
    "Үзгэн бал 0,8мм 6pcs",
    "Балын харандаа",
    "Запас үзгэн бал",
    "Ширээний хэрэгсэл PEN STAND",
    "Шугам EK53005 45'",
    "Маркер Acrylic 36",
    "Үзгэн бал 0,8мм 6pcs",
  ];
  return (
    <div className="flex h-screen flex-col">
      {/* <Header /> */}
      <div className="flex flex-1 overflow-hidden">
        {/* Зүүн тал */}

        <Posleft />

        <div className="flex-[2] flex flex-col bg-gray-100">
          <div className="h-12 flex-none bg-blue-500 text-white flex items-center justify-center font-bold text-xs tracking-wide uppercase shadow-md">
            Хамгийн их борлуулалттай
          </div>
          <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full max-w-6xl mx-auto p-2 border-t border-b border-gray-300 scrollbar-thin scrollbar-thumb-gray-400  scrollbar-hide scrollbar-track-gray-100">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={onClickTile}
                className="bg-green-500 text-white text-center px-3 py-2 rounded-xl shadow-md
                           font-medium hover:bg-green-600 hover:scale-105
                           transition-transform duration-200 ease-in-out
                           break-words whitespace-normal leading-snug"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="h-1 flex-none bg-amber-500 flex items-center justify-center font-semibold shadow-inner"></div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="h-12 flex-none bg-blue-400 text-white flex items-center justify-center font-bold text-xs tracking-wide uppercase shadow-md">
            БҮЛЭГ
          </div>
          <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 w-full max-w-6xl mx-auto p-2 border-t border-b border-gray-300 scrollbar-thin scrollbar-thumb-gray-400  scrollbar-hide scrollbar-track-gray-100">
            {itemGroups.map((item, idx) => (
              <button
                key={idx}
                onClick={onClickTile}
                className="bg-gray-100 text-gray-900 text-center px-3 py-2 rounded-xl shadow-md
           font-medium hover:bg-gray-200 hover:scale-105
           transition-transform duration-200 ease-in-out
           break-words whitespace-normal leading-snug"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="h-1 flex-none bg-amber-500 flex items-center justify-center font-semibold shadow-inner"></div>
        </div>
      </div>
    </div>
  );
}
