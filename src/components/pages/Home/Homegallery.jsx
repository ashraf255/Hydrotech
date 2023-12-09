import React from "react";

const Homegallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Hydroponics system is the best solution for soilless medium.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The simple simplicity of hydroponics—water-nourished plants,
            soilless growing, and precisely regulated conditions—is what makes
            it so beautiful. It produces abundant, luscious crops in a
            sustainable manner by blending innovation and nature in a harmonic
            way.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Gallery Items */}
          {/* Item 1 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/firstgallery.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                  Fresh lettuce
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Hydroponic Harvesting
                </h1>
                <p className="leading-relaxed">
                  In hydroponics we can make fresh and chemical free products.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/tomato.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                  Tomato hervesting
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Growing Tomatoes in Hydroponics
                </h1>
                <p className="leading-relaxed">
                  Hydroponic tomato cultivation is an innovative method of
                  growing tomatoes without soil.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/strawberry.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                  Strawberry Hervesting
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Growing Strawberries in Hydroponics
                </h1>
                <p className="leading-relaxed">
                  Sweet hydroponic strawberries: fresh, delicious, and
                  space-efficient. Elevate your harvest!
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/plantcheck.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                  Plant Checking
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Plant Check System in Hydroponics
                </h1>
                <p className="leading-relaxed">
                  Enhance your hydroponic experience with our plant check
                  system. Monitor and optimize plant health effortlessly for a
                  thriving harvest.
                </p>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/robot.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                  Robot Helps in Hydro technology
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Robots in Hydroponics
                </h1>
                <p className="leading-relaxed">
                  Introducing advanced robotics to your hydroponic setup.
                  Enhance precision, automate tasks, and revolutionize your
                  cultivation practices for optimal yields.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/freshfruit.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                  FRESH AND VIBRANT
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Hydroponically Grown Fresh Fruit
                </h1>
                <p className="leading-relaxed">
                  Immerse yourself in a world of freshness with our
                  hydroponically cultivated fruits. From succulent berries to
                  crisp apples, experience unparalleled flavor and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homegallery;
