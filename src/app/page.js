"use client";
import Image from "next/image";
import background from "../../public/backround.jpg";
import MyAppBar from "@/components/appBar";

import { useRouter } from "next/navigation";

async function getData() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNzU4MTYyNjU5LCJleHAiOjE3NTgxNjYyNTksImlhdCI6MTc1ODE2MjY1OSwiaXNzIjoiQlRPX0FQSSIsImF1ZCI6IkJUT19DbGllbnRzIn0.nvHbgyydHkWuohVaQohwh4WZg5V_VkXfA5rtx8eJ93c"
  );

  const raw = JSON.stringify({
    username: "admin",
    password: "",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://192.168.100.138:3050/Api/FixedLogin", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export default function Home() {
  const miniiRouter = useRouter();

  const Login = () => {
    miniiRouter.push("/products");
  };

  return (
    <div
      className="flex items-center justify-center bg-stone-500 h-dvh"
      style={{
        backgroundImage: `url(${background.src})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="display: absolute top-0">
        <MyAppBar ></MyAppBar>
      </div> */}
      <div className="w-[400px] h-[300px] border rounded-lg mt-10 flex flex-col items-center justify-center text-white backdrop: backdrop-blur-sm shadow-amber-50">
        <div className="w-[90%]  border rounded-lg flex text-2xl focus-within:border-sky-400">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </span>
          <input
            className="pl-2 w-[90%] text-xl focus:outline-none"
            placeholder="username"
          ></input>
        </div>
        <div className="w-[90%] border rounded-lg mt-5 flex text-2xl focus-within:border-sky-400">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
              />
            </svg>
          </span>
          <input
            className="pl-2 w-[90%] text-xl focus:outline-none"
            placeholder="password"
            type="password"
          ></input>
        </div>

        <div className="w-[90%] border rounded-lg mt-5 flex items-center justify-center text-2xl focus-within:border-sky-400 bg-violet-500 hover:bg-violet-400">
          <button onClick={Login} className="">
            Нэвтрэх
          </button>
          <span className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </span>
        </div>
      </div>
      <div className="display: absolute bottom-5 text-white">
        @copyright asdasdasdasd
      </div>
    </div>
  );
}
