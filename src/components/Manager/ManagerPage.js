"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import LineModel from "@/components/suuriControls/LineChart";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu, Checkbox } from "antd";

const App = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  const [current, setCurrent] = useState("mail");

  // const onClick = (e) => {
  //   const selected = menus.find((m) => m.key === e.key);
  //   if (selected) {
  //     // URL-д сонгосон цонхны нэрийг дамжуулна
  //     router.push(`/barimtuud/${selected.tsonhNer}`);
  //   }
  // };

  const onClick = (e) => {
    router.push(`/barimtuud/${e.key}`);
  };

  useEffect(() => {
    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNzU4MTYyNjU5LCJleHAiOjE3NTgxNjYyNTksImlhdCI6MTc1ODE2MjY1OSwiaXNzIjoiQlRPX0FQSSIsImF1ZCI6IkJUT19DbGllbnRzIn0.nvHbgyydHkWuohVaQohwh4WZg5V_VkXfA5rtx8eJ93c"
    );
    const raw = "";

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://192.168.100.138:3050/Api/Get/ManagerMenu") // өөрийн API хаяг
      .then((response) => response.json())
      .then((result) => {
        setMenus(result.list);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(menus);
  return (
    <div className="flex items-start bg-gray-300 w-screen h-dvh">
      <div className="bg-stone-100 h-dvh flex flex-col items-start justify-start">
        <Button
          className="w-full bg-sky-600"
          type="primary"
          onClick={toggleCollapsed}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          className="h-[vh]"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={menus.map((item) => ({
            key: item.tsonhNer.toString(),
            value: item.tsonhNer.toString(),
            icon: (
              <span
                dangerouslySetInnerHTML={{ __html: item.img }}
                style={{ display: "inline-block", width: 20, height: 20 }}
              />
            ),
            label: item.label,
          }))}
          onClick={onClick}
          selectedKeys={[current]}
        />
        {/* <Menu
          className="h-[vh]"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        /> */}
      </div>
      <div className="bg-violet-50 w-full h-dvh">
        <div className="bg-sky-600 w-full text-amber-50 flex items-center justify-center text-2xl">
          Борлуулалтын статистик мэдээлэл
        </div>
        <div>
          <button className="hover:bg-amber-600 border-1 border-gray-400 w-[16%] rounded-sm text-blue-800">
            Өнөөдөр
          </button>
          <button className="hover:bg-amber-600 border-1 border-gray-400 w-[16%] rounded-sm text-blue-800">
            Өчигдөр
          </button>
          <button className="hover:bg-amber-600 border-1 border-gray-400 w-[16%] rounded-sm text-blue-800">
            7 хоног
          </button>
          <button className="hover:bg-amber-600 border-1 border-gray-400 w-[16%] rounded-sm text-blue-800">
            Сар
          </button>
          <button className="hover:bg-amber-600 border-1 border-gray-400 w-[16%] rounded-sm text-blue-800">
            Улирал
          </button>
          <button className="hover:bg-amber-600 border-1 border-gray-400 w-[20%] rounded-sm text-blue-800">
            Жил
          </button>
        </div>
        <div className="p-3 grid grid-cols-4 grid-rows-2 gap-2 ">
          <div className="h-[100px] bg-stone-100 rounded-sm flex flex-col items-center justify-center shadow-2xl">
            <p className="h-[35%]">Нийт борлуулалт</p>
            <p className="h-[35%] text-blue-600">50 сая</p>
            <div className="bg-blue-500 w-full text-white rounded-sm h-[30%] flex items-center justify-center">
              100%
            </div>
          </div>
          <div className="bg-stone-100 rounded-sm flex flex-col items-center justify-center shadow-2xl">
            <p className="h-[35%]">Цэвэр ашиг</p>
            <p className="h-[35%] text-blue-600">20 сая</p>
            <div className="bg-blue-500 w-full text-white rounded-sm h-[30%] flex items-center justify-center">
              40%
            </div>
          </div>
          <div className="col-span-4 row-span-2 col-start-2 row-start-1 bg-stone-100 shadow-2xl rounded-sm">
            <Checkbox className="bottom-0">
              Өмнөх үеийн боруулалттай харьцуулж харах
            </Checkbox>
            <LineModel></LineModel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
