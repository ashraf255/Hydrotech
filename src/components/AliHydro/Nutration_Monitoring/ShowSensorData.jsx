import React, { useState, useEffect } from "react";
import BackBtn from "../../Shared file/BackBtn";
import axios from "axios";
import Userdate from "./Date";

export default function ShowSensorData() {
  const [espData, setEspData] = useState({ status: false });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/get?id=2"
      );

      const data = await response.data;

      setEspData({
        ...espData,
        status: true,
        all_data: data,
        sensor_value: JSON.parse(data?.data?.attributes || "{}"),
      });
    };
    fetchData();

    setInterval(fetchData, 1000);
  }, []);

  return (
    <>
      {" "}
      <div
        className="w-full h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("https://i.ibb.co/gJP3gf2/vertical.jpg")`,
        }}
      >
        <BackBtn />
        {/* <div className="w-full min-h-screen flex items-center justify-center">
        {espData.status ? (
          <div>
            <p>
              <b>Description:</b> {espData.all_data.data.text}
            </p>
            <p>
              <b>
                Ph Value : <span>{espData.sensor_value.ph}</span>
              </b>
            </p>
            <p>
              <b>
                Temperature : <span>{espData.sensor_value.temperature}</span>
              </b>
            </p>
            <p>
              <b>
                Pir Motion Sensor :{" "}
                <span>{espData.sensor_value.pirMotion}</span>
              </b>
            </p>
            <p>
              <b>
                Water Level : <span>{espData.sensor_value.waterLevel}</span>
              </b>
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
        <div className="w-full min-h-screen flex items-center justify-center  ">
          {espData.status ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Sensor Values
              </h2>

              {/* Ph Value Card */}

              <div className="bg-white p-4 rounded-md transition duration-300 ease-in-out transform hover:shadow-lg w-64  border border-gray-30">
                <h2 className="text-xl font-bold mb-4 text-center">pH Value</h2>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-green-500">
                    {espData.sensor_value.ph}
                  </span>
                </div>
              </div>
              {/* Temperature Card */}
              {/* <div className="border-b-2 border-gray-200 pb-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Temperature</h3>
              <p>
                <span className="text-blue-500">
                  {espData.sensor_value.temperature}
                </span>
              </p>
            </div> */}
              <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-2xl">
                <div className="text-center">
                  <h2 className="text-xl font-semibold">Temperature</h2>
                  <p className="text-sm dark:text-gray-400">
                    <Userdate />
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-32 h-32 p-6 dark:text-yellow-400 fill-current"
                >
                  <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                  <rect width="32" height="48" x="240" y="16"></rect>
                  <rect width="32" height="48" x="240" y="448"></rect>
                  <rect width="48" height="32" x="448" y="240"></rect>
                  <rect width="48" height="32" x="16" y="240"></rect>
                  <rect
                    width="32"
                    height="45.255"
                    x="400"
                    y="393.373"
                    transform="rotate(-45 416 416)"
                  ></rect>
                  <rect
                    width="32.001"
                    height="45.255"
                    x="80"
                    y="73.373"
                    transform="rotate(-45 96 96)"
                  ></rect>
                  <rect
                    width="45.255"
                    height="32"
                    x="73.373"
                    y="400"
                    transform="rotate(-45.001 96.002 416.003)"
                  ></rect>
                  <rect
                    width="45.255"
                    height="32.001"
                    x="393.373"
                    y="80"
                    transform="rotate(-45 416 96)"
                  ></rect>
                </svg>
                <div className="mb-2 text-3xl font-semibold">
                  <span className="text-blue-500">
                    {espData.sensor_value.temperature}
                  </span>
                </div>
                <p className="dark:text-gray-400">temperature</p>
              </div>

              {/* Pir Motion Sensor Card */}

              <div className="bg-white p-4 rounded-md shadow-md border border-gray-300 transition duration-300 ease-in-out transform hover:shadow-lg mt-8">
                <div className="border-b-2 border-gray-200 pb-4 mb-4">
                  <h3 className="text-xl font-bold mb-2 text-center">
                    Pir Motion Sensor
                  </h3>
                  <p>
                    <span className="text-yellow-500 ">
                      {" "}
                      {espData.sensor_value.pirMotion}
                    </span>
                  </p>
                </div>
              </div>

              {/* Water Level Card */}

              <div className="bg-white p-6 rounded-md border border-gray-300 transition duration-300 ease-in-out transform hover:shadow-lg mt-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2 text-indigo-600 text-center">
                    Water Level
                  </h3>
                  <p className="text-lg text-red-600">
                    {" "}
                    {espData.sensor_value.waterLevel}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>{" "}
      </div>
    </>
  );
}
