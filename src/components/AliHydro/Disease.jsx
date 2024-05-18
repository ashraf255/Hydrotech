import { Link } from "react-router-dom";
import "./Plantsstyle.css";

import BackBtn from "../Shared file/BackBtn";

const Disease = () => {
  return (
    <>
      <BackBtn></BackBtn>
      <div className=" flex md:h-screen flex-col items-center justify-center space-y-6 bg-gray-800 px-4  sm:space-x-6 sm:space-y-0 bg-green-700  ">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl lg:text-6xl text-white">
            "Select Your Plant Disease Detection Card: Choose Your plant for
            Targeted Diagnosis! "
          </h1>
          {/* <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-slate-300 text-center">
            "Hydroponic Heroes: Defending Crops, Detecting Diseases, Ensuring
            Abundance."
          </p> */}
        </div>
        <div className="flex flex-col md:flex-row gap-8 m-8 ">
          <div className="card w-96 glass bg-gradient-to-t shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <figure>
              <img src="./tomato.png" alt="tomato!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-white">Tomato plant</h2>
              <p className="text-white">detect here your tomato plant</p>
              <div className="card-actions justify-end">
                <div className="space-x-4  py-4 text-center">
                  <Link
                    to="/tomatoimage-uploader"
                    className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
                  >
                    {" "}
                    Tomato Disease Detection
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 glass bg-gradient-to-t shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/XWZ4w1z/lettucedisease.jpg"
                alt="lettuce !"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-white">Lettuce</h2>
              <p className="text-white">detect here your tomato plant</p>
              <div className="card-actions justify-end">
                <div className="space-x-4  py-4 text-center">
                  <Link
                    to="/lettuceimage-uploader "
                    className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
                  >
                    {" "}
                    Lettuce Disease Detection
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 glass bg-gradient-to-t shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/x87TzNJ/ddc81773b9.jpg"
                alt="strawberry!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-white">
                Strawberry plant
              </h2>
              <p className="text-white">detect here your Strawberry plant</p>
              <div className="card-actions justify-end">
                <div className="space-x-4  py-4 text-center">
                  <Link
                    to="/Strawberryimage-uploader"
                    className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
                  >
                    {" "}
                    Strawberry Disease Detection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disease;
