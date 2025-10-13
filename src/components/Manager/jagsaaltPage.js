"use client";

import React, { useState } from "react";
import { Table, DatePicker, Button } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SearchOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const App = () => {
  // useState зөв байрлалд байна
  dayjs.extend(customParseFormat);
  const garchig = "Баримтын жагсаалт";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
  const dateFormat = "YYYY/MM/DD";
  const defaultDates = [
    dayjs("2025/09/01", dateFormat),
    dayjs("2025/10/31", dateFormat),
  ];
  const [dates, setDates] = useState(defaultDates);
  const onChange = (values) => {
    if (values) {
      setDates(values);
      console.log(
        "Сонгосон огноо:",
        values[0].format("YYYY/MM/DD"),
        " - ",
        values[1].format("YYYY/MM/DD")
      );
    } else {
      console.log("Сонгосон огноо цэвэрлэгдлээ");
      setDates([]);
    }
  };
  async function getData() {
    const begDate = dates[0].format("YYYY/MM/DD");
    const endDate = dates[1].format("YYYY/MM/DD");

    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNzU4MTYyNjU5LCJleHAiOjE3NTgxNjYyNTksImlhdCI6MTc1ODE2MjY1OSwiaXNzIjoiQlRPX0FQSSIsImF1ZCI6IkJUT19DbGllbnRzIn0.nvHbgyydHkWuohVaQohwh4WZg5V_VkXfA5rtx8eJ93c"
    );
    console.log(begDate);
    console.log(endDate);
    const raw = JSON.stringify({
      BeginDate: begDate,
      EndDate: endDate,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = fetch(
      "http://192.168.100.138:3050/Api/InvoiceListHdr",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.list))
      .catch((error) => console.error(error));
  }

  const columns = [
    { title: "Гүйлгээний багц", dataIndex: "maprecID", key: "maprecID" },
    { title: "Огноо", dataIndex: "invDate", key: "invDate" },
    { title: "Баримтын дугаар", dataIndex: "invRef", key: "invRef" },
    {
      title: "Харилцагчийн нэр",
      dataIndex: "customerName",
      key: "customerName",
    },
    { title: "Нийт дүн", dataIndex: "amount", key: "amount" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-stone-100 h-dvh p-4 w-screen">
      <div className="top-5 absolute">
        <h2 className="text-1xl text-gray-500 font-bold bg-gradient-to-r from-red-100 via-yellow-100 to-green-100 shadow-2xl shadow-amber-100 pl-6 pr-6 rounded-lg">
          {garchig.toUpperCase()}
        </h2>
      </div>
      <div className="flex flex items-start justify-start gap-2 w-[80%]">
        <RangePicker
          value={dates}
          format={dateFormat} // RangePicker-д форматыг зааж өгөх
          showTime
          onChange={onChange}
        />
        <Button
          className="w-[150px]"
          type="primary"
          iconPosition="end"
          icon={<SearchOutlined />}
          onClick={getData}
        >
          Шүүх
        </Button>
      </div>
      <Table
        className="mt-3 w-[80%] max-w-5xl shadow-2xl rounded-lg"
        columns={columns}
        dataSource={data}
        rowKey="maprecID"
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4}>
              <b>Нийт дүн:</b>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4}>
              <b>{totalAmount.toLocaleString()} ₮</b>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default App;
