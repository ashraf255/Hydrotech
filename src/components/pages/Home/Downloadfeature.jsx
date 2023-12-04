import React from "react";

const Downloadfeature = () => {
  return (
    <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/plantde.png"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold">
              Login & Sign up for Detect your plant disease and monitor your
              plant nutration.
            </h3>
            <p className="my-6 text-gray-400">
              "Effective access to plant maintenance with our simple Sign up and
              log in. Quickly identify plant problems and easily keep an eye on
              nutrients to make sure your hydroponic garden grows. Together,
              let's elevate your cultivation adventure!"
            </p>
            <span>
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Login & Signup
                </span>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="/phone.png"
            alt="Plant monitoring app"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold">
              Download our app for monitoring your plant.
            </h3>
            <p className="my-6 text-gray-400">
              "Download our app to enjoy effortless plant monitoring in your
              hydroponic system and experience seamless cultivation. In the palm
              of your hands, precisely track, nurture, and thrive."
            </p>
            {/* <button
              type="button"
              className="px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#57cef3"
                  d="M7 3v58l33-29z"
                  data-original="#57cef3"
                />
                <path
                  fill="#fff200"
                  d="m36 32 8-10 15 10-15 10z"
                  data-original="#fff200"
                />
                <path
                  fill="#48ff48"
                  d="M36 32 7 3h4l34 20z"
                  data-original="#48ff48"
                />
                <path
                  fill="#ff6c58"
                  d="M36 32 7 61h4l34-20z"
                  data-original="#ff6c58"
                />
                <path
                  fill="#f33"
                  d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                  data-original="#ff3333"
                />
                <path
                  fill="#0779e4"
                  d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                  data-original="#0779e4"
                />
                <path
                  fill="#314a52"
                  d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                  data-original="#314a52"
                />
              </svg>
              <div>
                <p className="text-[10px] text-white leading-none text-left">
                  Get it on
                </p>
                Google Play
              </div>
            </button> */}
            <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-violet-400 dark:text-gray-900">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-900">
					<path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leadi">
					<span className="mb-1 text-xs">GET IT ON</span>
					<span className="font-semibold title-font">Google Play</span>
				</span>
			</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloadfeature;
