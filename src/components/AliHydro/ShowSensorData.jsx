import React, { useState, useEffect } from "react";
import BackBtn from "../Shared file/BackBtn";
import axios from "axios";

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

    // setInterval(fetchData, 1000);
  }, []);

  return (
    <>
      <BackBtn />
      <div className="w-full min-h-screen flex items-center justify-center">
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
      </div>
    </>
  );
}
