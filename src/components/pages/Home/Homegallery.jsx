import React from 'react';

const Homegallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
           Hydroponics system is the best solution for soilless medium.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          The simple simplicity of hydroponics—water-nourished plants, soilless growing, and precisely regulated conditions—is what makes it so beautiful. It produces abundant, luscious crops in a sustainable manner by blending innovation and nature in a harmonic way.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Gallery Items */}
          {/* Item 1 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/firstgallery.png" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/tomato.png" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/strawberry.png" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/plantcheck.png" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/robot.png" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/freshfruit.png" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homegallery;
