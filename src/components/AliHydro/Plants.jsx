import { Link } from "react-router-dom";
import "./Plantsstyle.css";
import ShowSensorData from "./Nutration_Monitoring/ShowSensorData";
import BackBtn from "../Shared file/BackBtn";

const Plants = () => {
  return (
    <>
      <BackBtn></BackBtn>
      <div className="hydro flex md:h-screen flex-col items-center justify-center space-y-6 bg-gray-800 px-4  sm:space-x-6 sm:space-y-0  ">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl lg:text-6xl text-white">
            "Hydroponic Health Sentinel: Disease-Free Harvests with Precision
            Monitoring."
          </h1>
          <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-slate-300 text-center">
            "Hydroponic Heroes: Defending Crops, Detecting Diseases, Ensuring
            Abundance."
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Nutration card*/}
          <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white bg-no-repeat bg-cover bg-gradient-to-t shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <figure>
              <img src="/drone.png" className="mx-auto mt-8 h-88" alt="Shoes" />
            </figure>
            <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
              Plant Nutrition Monitoring
            </h1>
            <p className="my-4 text-center text-sm text-green-500">
              To Monitor of your plant nutrition, please click on Plant monitor
            </p>
            <div className="space-x-4 bg-gray-100 py-4 text-center">
              <Link
                to="/show-sensor-data"
                className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
              >
                {" "}
                Plant Nutrition Monitoring
              </Link>
            </div>
          </div>

          {/* Cancel Card */}
          <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <figure>
              <img
                src="/diseaselogo.png"
                className="mx-auto mt-8 justify-center items-center h-88"
                alt="Shoes"
              />
            </figure>

            <h1 className="mt-2 text-center text-2xl font-bold text-gray-500 ">
              Plant Diseases Detection
            </h1>
            <p className="my-4 text-center text-sm text-green-500">
              Click on Disease detection if you want to know about which type of
              disease are affected on your plant.
            </p>
            <div className="space-x-4 bg-gray-100 py-4 text-center">
              <Link
                to="/disease"
                className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
              >
                {" "}
                Plant Disease Detection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plants;
