import { Outlet } from "react-router-dom";
import Footer from "./components/Shared file/Footer";
import Navbar from "./components/Shared file/Navbar";

import { useEffect, useState } from "react";

function App() {
  const [espData, setEspData] = useState({ status: false });

  useEffect(() => {
    (async () => {
      const response = await fetch(import.meta.env.VITE_API_URL + "/get?id=2");
      const result = await response.json();
      const data = await result;

      setEspData({
        ...espData,
        status: true,
        all_data: data,
        sensor_value: JSON.parse(data?.data?.attributes || "{}"),
      });
    })();
  }, []);

  // console.log(espData);

  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
