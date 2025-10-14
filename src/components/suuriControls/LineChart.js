import dynamic from "next/dynamic";
import React from "react";

// SSR үед window алдаа өгөхөөс сэргийлнэ
const Line = dynamic(
  () => import("@ant-design/plots").then((mod) => mod.Line),
  { ssr: false }
);

export default function Home() {
  const data = [
    { month: "1 сар", value: 30 },
    { month: "2 сар", value: 45 },
    { month: "3 сар", value: 28 },
    { month: "4 сар", value: 60 },
    { month: "5 сар", value: 90 },
    { month: "6 сар", value: 75 },
  ];

  const config = {
    data,
    xField: "month",
    yField: "value",
    smooth: true,
    point: { size: 4, shape: "circle" },
    color: "#1677ff",
    tooltip: { showMarkers: true },
    animation: { appear: { animation: "path-in", duration: 2000 } },
  };

  return (
    <div style={{ width: "100%", height: "90%", padding: 20 }}>
      <h2>📊</h2>
      <Line {...config} />
    </div>
  );
}
