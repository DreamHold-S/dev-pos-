"use client";
import { useState, useEffect } from "react";
import {
  FiLogOut,
  FiDelete,
  FiSearch,
  FiArrowDownRight,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

export default function Sidebar() {
  const [showDialog, setShowDialog] = useState(false);
  const [billList, setbillList] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedCode, setSelectedCode] = useState(null);
  const items = [
    { code: "B001", name: "Арван цагаан будаа", uldegdel: 120, une: 4500 },
    { code: "B002", name: "Сармис", uldegdel: 50, une: 2500 },
    { code: "B003", name: "Өргөст хэмх", uldegdel: 80, une: 3000 },
    { code: "B004", name: "Лууван", uldegdel: 100, une: 2800 },
    { code: "B005", name: "Өндөг", uldegdel: 200, une: 500 },
    { code: "B006", name: "Төмс", uldegdel: 150, une: 1500 },
    { code: "B007", name: "Бяслаг", uldegdel: 60, une: 7200 },
    { code: "B008", name: "Банш", uldegdel: 120, une: 5500 },
    { code: "B009", name: "Талх", uldegdel: 90, une: 1800 },
    { code: "B010", name: "Цай", uldegdel: 70, une: 4200 },
    { code: "B011", name: "Жимс", uldegdel: 45, une: 3500 },
    { code: "B012", name: "Амтат төмс", uldegdel: 30, une: 2700 },
    { code: "B013", name: "Тунгалаг сүү", uldegdel: 110, une: 2800 },
    { code: "B014", name: "Улаан лооль", uldegdel: 75, une: 3800 },
    { code: "B015", name: "Ногоон чинжүү", uldegdel: 65, une: 3600 },
    { code: "B016", name: "Алим", uldegdel: 50, une: 2500 },
    { code: "B017", name: "Банана", uldegdel: 40, une: 3200 },
    { code: "B018", name: "Өндөгтэй талх", uldegdel: 80, une: 2900 },
    { code: "B019", name: "Шоколад", uldegdel: 35, une: 7000 },
    { code: "B020", name: "Гүзээлзгэнэ", uldegdel: 25, une: 8500 },
    { code: "B021", name: "Хүрэн манжин", uldegdel: 60, une: 2600 },
    { code: "B022", name: "Сүү", uldegdel: 120, une: 2000 },
    { code: "B023", name: "Өргөст хэмх амттай", uldegdel: 55, une: 3300 },
    { code: "B024", name: "Шар лууван", uldegdel: 90, une: 3100 },
    { code: "B025", name: "Өндөгний шүүс", uldegdel: 40, une: 2400 },
    { code: "B026", name: "Будаа", uldegdel: 130, une: 4300 },
    { code: "B027", name: "Хөх тариа", uldegdel: 70, une: 3900 },
    { code: "B028", name: "Үхрийн мах", uldegdel: 200, une: 9500 },
    { code: "B029", name: "Тахианы мах", uldegdel: 180, une: 7800 },
    { code: "B030", name: "Хөх мөс", uldegdel: 50, une: 1200 },
    { code: "B031", name: "Хонины мах", uldegdel: 190, une: 9200 },
    { code: "B032", name: "Ямааны мах", uldegdel: 160, une: 8800 },
    { code: "B033", name: "Загас", uldegdel: 75, une: 8200 },
    { code: "B034", name: "Гоймон", uldegdel: 95, une: 2400 },
    { code: "B035", name: "Тос", uldegdel: 130, une: 5200 },
    { code: "B036", name: "Гурил", uldegdel: 180, une: 2400 },
    { code: "B037", name: "Давс", uldegdel: 200, une: 900 },
    { code: "B038", name: "Элсэн чихэр", uldegdel: 120, une: 2300 },
    { code: "B039", name: "Амтлагч", uldegdel: 60, une: 3500 },
    { code: "B040", name: "Кофе", uldegdel: 70, une: 5600 },
    { code: "B041", name: "Ус", uldegdel: 300, une: 1000 },
    { code: "B042", name: "Жимсний шүүс", uldegdel: 90, une: 3200 },
    { code: "B043", name: "Печень", uldegdel: 80, une: 3400 },
    { code: "B044", name: "Зайрмаг", uldegdel: 60, une: 4500 },
    { code: "B045", name: "Нимбэг", uldegdel: 50, une: 2900 },
    { code: "B046", name: "Хулуу", uldegdel: 110, une: 3100 },
    { code: "B047", name: "Хиам", uldegdel: 70, une: 8200 },
    { code: "B048", name: "Цөцгийн тос", uldegdel: 65, une: 5200 },
    { code: "B049", name: "Кетчуп", uldegdel: 100, une: 4300 },
    { code: "B050", name: "Соус", uldegdel: 75, une: 4100 },
    { code: "B051", name: "Сонгино", uldegdel: 140, une: 1600 },
    { code: "B052", name: "Цэцэгт байцаа", uldegdel: 85, une: 3700 },
    { code: "B053", name: "Бууцай", uldegdel: 95, une: 3600 },
    { code: "B054", name: "Өрөм", uldegdel: 50, une: 4800 },
    { code: "B055", name: "Ээдэм", uldegdel: 60, une: 5200 },
    { code: "B056", name: "Бууз", uldegdel: 150, une: 5400 },
    { code: "B057", name: "Хуушуур", uldegdel: 160, une: 5800 },
    { code: "B058", name: "Цуйван", uldegdel: 140, une: 6000 },
    { code: "B059", name: "Шөл", uldegdel: 110, une: 3400 },
    { code: "B060", name: "Салат", uldegdel: 90, une: 3300 },
    { code: "B061", name: "Хар цай", uldegdel: 200, une: 2600 },
    { code: "B062", name: "Ногоон цай", uldegdel: 180, une: 2800 },
    { code: "B063", name: "Мөстэй ус", uldegdel: 300, une: 1000 },
    { code: "B064", name: "Дарс", uldegdel: 50, une: 9500 },
    { code: "B065", name: "Пиво", uldegdel: 70, une: 6200 },
    { code: "B066", name: "Жимсний дарс", uldegdel: 40, une: 8700 },
    { code: "B067", name: "Тарвас", uldegdel: 55, une: 4500 },
    { code: "B068", name: "Киви", uldegdel: 60, une: 4900 },
    { code: "B069", name: "Лимон", uldegdel: 70, une: 3000 },
    { code: "B070", name: "Хан боргоцой", uldegdel: 45, une: 5500 },
    { code: "B071", name: "Мандарин", uldegdel: 80, une: 4200 },
    { code: "B072", name: "Нэрс", uldegdel: 50, une: 6000 },
    { code: "B073", name: "Чацаргана", uldegdel: 65, une: 4700 },
    { code: "B074", name: "Үзэм", uldegdel: 90, une: 3200 },
    { code: "B075", name: "Самар", uldegdel: 70, une: 6800 },
    { code: "B076", name: "Гүнжид", uldegdel: 60, une: 4300 },
    { code: "B077", name: "Газтай ус", uldegdel: 200, une: 1200 },
    { code: "B078", name: "Кола", uldegdel: 180, une: 2800 },
    { code: "B079", name: "Спрайт", uldegdel: 170, une: 2700 },
    { code: "B080", name: "Фанта", uldegdel: 160, une: 2600 },
    { code: "B081", name: "Бялуу", uldegdel: 60, une: 7500 },
    { code: "B082", name: "Торт", uldegdel: 55, une: 8800 },
    { code: "B083", name: "Шоколадтай зайрмаг", uldegdel: 65, une: 5200 },
    { code: "B084", name: "Сүүтэй цай", uldegdel: 190, une: 3000 },
    { code: "B085", name: "Капучино", uldegdel: 80, une: 4800 },
    { code: "B086", name: "Латте кофе", uldegdel: 75, une: 5000 },
    { code: "B087", name: "Эспрессо", uldegdel: 90, une: 4500 },
    { code: "B088", name: "Махтай хуурга", uldegdel: 110, une: 6700 },
    { code: "B089", name: "Гоймонтой шөл", uldegdel: 130, une: 3700 },
    { code: "B090", name: "Будаатай хуурга", uldegdel: 150, une: 4100 },
    { code: "B091", name: "Ногоотой салат", uldegdel: 120, une: 3500 },
    { code: "B092", name: "Сүүтэй коктейль", uldegdel: 85, une: 4200 },
    { code: "B093", name: "Сүүтэй шейк", uldegdel: 80, une: 3900 },
    { code: "B094", name: "Жимстэй тараг", uldegdel: 90, une: 3200 },
    { code: "B095", name: "Тараг", uldegdel: 100, une: 2800 },
    { code: "B096", name: "Ингэний сүү", uldegdel: 60, une: 5200 },
    { code: "B097", name: "Ааруул", uldegdel: 70, une: 6400 },
    { code: "B098", name: "Хатаасан жимс", uldegdel: 75, une: 5700 },
    { code: "B099", name: "Зөгийн бал", uldegdel: 40, une: 8900 },
    { code: "B100", name: "Бөөрөнхий боов", uldegdel: 150, une: 3100 },
  ];

  function addBillItem(item) {
    setbillList((prevList) => {
      // 1. Барааг кодоор нь хайна
      const existingItem = prevList.find((x) => x.code === item.code);

      if (existingItem) {
        // 2. Хэрвээ байгаа бол — too-г нэмээд niitdun-г дахин тооцно
        return prevList.map((x) =>
          x.code === item.code
            ? { ...x, too: x.too + 1, niitdun: (x.too + 1) * x.une }
            : x
        );
      } else {
        // 3. Хэрвээ байхгүй бол — шинээр нэмнэ
        const newItem = {
          code: item.code,
          name: item.name,
          une: item.une,
          too: 1,
          niitdun: item.une * 1,
          isVat: "N",
          isCityTax: "Y",
        };
        return [...prevList, newItem];
      }
    });
    setShowDialog(false);
  }

  useEffect(() => {
    const newTotal = billList.reduce((sum, item) => sum + item.niitdun, 0);
    setTotal(newTotal);
  }, [billList]);

  function deleteSelected() {
    if (!selectedCode) return alert("Устгах мөр сонгоогүй байна!");
    setbillList((prevList) =>
      prevList.filter((item) => item.code !== selectedCode)
    );
    setSelectedCode(null);
  }

  return (
    <div className="w-7/12 h-screen flex flex-col bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 text-gray-800 shadow-lg">
      {/* Толгой хэсэг */}
      <div className="w-full h-12 flex-none">
        <div className="w-full h-full bg-gradient-to-r from-[#2596be] to-[#4db8ff] text-white flex items-center px-6 shadow-md">
          <div className="flex w-full justify-between">
            <h1 className="text-sm font-semibold">Грийн магнолиа ХХК</h1>
            <h1 className="text-sm font-semibold">БИЛЛ №:01</h1>
            <h1 className="text-sm font-semibold">2025/10/06 12:24:11</h1>
          </div>
        </div>
      </div>
      {/* Хүснэгтийн хэсэг */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto border border-gray-300 rounded-md shadow-sm scrollbar-hide bg-white">
          <table className="w-full border-collapse text-sm text-left">
            <thead className="bg-white text-black sticky top-0 z-10">
              <tr>
                <th className="py-2 px-3 border border-gray-300 w-10 text-center">
                  №
                </th>
                <th className="py-2 px-3 border border-gray-300">
                  Барааны нэр
                </th>
                <th className="py-2 px-3 border border-gray-300 text-right">
                  Нэгж үнэ
                </th>
                <th className="py-2 px-3 border border-gray-300 text-center">
                  Тоо
                </th>
                <th className="py-2 px-3 border border-gray-300 text-right">
                  Дүн
                </th>
              </tr>
            </thead>
            <tbody>
              {billList.map((item, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50"
                  onClick={() => setSelectedCode(item.code)}
                  style={{
                    background:
                      selectedCode === item.code ? "#ffe1e1" : "white", // 🎨 сонгосон мөрний өнгө
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                >
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    {i + 1}
                  </td>
                  <td className="py-2 px-3 border border-gray-300">
                    {item.name}
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-right">
                    {item.une}
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    {item.too}
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-right">
                    {item.niitdun.toLocaleString("mn-MN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex-none p-2 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-200 text-blue-500 flex flex-col gap-2 shadow-md">
        <div className="flex justify-end gap-4 mb-2">
          <FiArrowDownRight size={22} />
          <FiArrowLeftCircle size={22} />
          <FiArrowRightCircle size={22} />
          <FiSearch
            size={22}
            className="cursor-pointer"
            onClick={() => setShowDialog(true)}
          />
          <FiDelete size={22} onClick={deleteSelected} />
        </div>

        <div className="flex w-full gap-2 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 p-2 rounded-lg">
          <div className="flex flex-col gap-1 w-1/2">
            <div className="grid grid-cols-3 gap-1">
              {[
                "7",
                "8",
                "9",
                "4",
                "5",
                "6",
                "1",
                "2",
                "3",
                "0",
                "00",
                ".",
              ].map((num, idx) => (
                <button
                  key={idx}
                  className="bg-white text-black py-2 rounded-lg shadow hover:bg-gray-200 transition-colors font-bold"
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <button className="bg-red-500 text-white py-2 px-3 rounded-lg shadow hover:bg-red-600 font-bold">
                C
              </button>
              <button className="bg-yellow-500 text-white py-2 px-3 rounded-lg shadow hover:bg-yellow-600 font-bold">
                {"<"}
              </button>
              <button className="bg-green-500 text-white py-2 px-3 rounded-lg shadow hover:bg-green-600 font-bold flex-1">
                Оруулах
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-1/2 bg-gray-100 rounded-lg shadow p-2">
            <div className="flex justify-between w-[80%] p-2">
              <span className="text-1xl font-bold text-gray-600 uppercase">
                Нийт дүн :
              </span>
              <span className="text-1xl font-bold text-blue-600">
                {total.toLocaleString("mn-MN")}₮
              </span>
            </div>{" "}
            <div className="flex justify-between w-[80%] p-2 uppercase ">
              <span className="text-1xl font-bold text-gray-600">
                Төлөх дүн :
              </span>
              <span className="text-1xl font-bold text-blue-600">
                {total.toLocaleString("mn-MN")}₮
              </span>
            </div>
            <div className="flex justify-between w-[80%] p-2 uppercase ">
              <span className="text-1xl font-bold text-gray-600">
                Төлсөн дүн :
              </span>
              <span className="text-1xl font-bold text-blue-600">0₮</span>
            </div>
            <div className="flex justify-between w-[80%] p-2 uppercase ">
              <span className="text-1xl font-bold text-gray-600">
                Хариулт :
              </span>
              <span className="text-1xl font-bold text-blue-600">0₮</span>
            </div>
            <div className="w-[80%] flex ">
              <button className="bg-yellow-500 text-white py-2 px-3 rounded-lg shadow hover:bg-yellow-600 font-bold flex-1 uppercase">
                Төлбөр төлөх
              </button>
            </div>
          </div>
        </div>
      </div>
      Dialog
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="bg-white rounded-lg shadow-xl w-1/2 p-6 relative">
            <h2 className="text-xl font-bold mb-4">Барааны жагсаалт</h2>
            {showDialog && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <div className="bg-white rounded-lg shadow-xl w-1/2 p-6 relative max-h-[80vh] flex flex-col">
                  <h2 className="text-xl font-bold mb-4">Барааны жагсаалт</h2>
                  <div className="flex w-full max-w-sm">
                    <input
                      type="text"
                      onChange={(e) => {}}
                      placeholder="Хайх..."
                      className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400"
                    />
                  </div>

                  {/* Table container with scroll */}
                  <div className="overflow-y-auto flex-1 scrollbar-hide">
                    <table className="w-full border-collapse text-sm text-left rounded-2xl overflow-hidden">
                      <thead className="bg-gradient-to-r from-yellow-50 via-amber-50 to-gray-100 text-gray-800 sticky top-0 z-10 shadow-sm">
                        <tr>
                          <th className="py-3 px-4 text-center font-semibold">
                            №
                          </th>
                          <th className="py-3 px-4 font-semibold">Код</th>
                          <th className="py-3 px-4 font-semibold">Нэр</th>
                          <th className="py-3 px-4 font-semibold">Үлдэгдэл</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, i) => (
                          <tr
                            onClick={(e) => addBillItem(item)}
                            key={i}
                            className="hover:bg-yellow-50 even:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="py-2 px-4 text-center">{i + 1}</td>
                            <td className="py-2 px-4">{item.code}</td>
                            <td className="py-2 px-4 font-medium text-gray-800">
                              {item.name}
                            </td>
                            <td className="py-2 px-4 text-gray-600">
                              {item.uldegdel}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button
                    className="absolute top-3 right-3 text-red-500 font-bold"
                    onClick={() => setShowDialog(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            )}

            <button
              className="absolute top-3 right-3 text-red-500 font-bold"
              onClick={() => setShowDialog(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
