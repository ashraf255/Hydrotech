// const Blog = () => {
//   return (
//     <div className="w-full">
//       <div className="my-12">
//         <div className="mb-12">
//           <div className="flex flex-wrap -mx-4 justify-start">
//             <div className="px-4 relative w-full text-left">
//               <span className="text-blueGray-800 bg-blueGray-400 text-xs font-bold inline-block py-1 uppercase uppercase last:mr-0 mr-1 leading-tight rounded px-2">Have you seen us?</span>
//               <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">Our recent writings</h2>
//               <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">The time is now for it to be okay to be great. People in this world shun people for being great.</p>
//             </div>
//           </div>
//         </div>
//         <div className="items-center flex flex-wrap -mx-4 mb-0">
//           {/* Repeat this block for each item */}
//           <div className="px-4 mb-4 relative w-full lg:w-1/4">
//             <div className="h-330-px overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg transition-all duration-150 ease-in-out hover:z-1 hover:transform hover:scale-110 group rounded-lg mb-4">
//               <div className="absolute w-full h-full bg-50-center bg-cover transition-all duration-1000 ease-in-out group-hover:transform group-hover:scale-110 rounded-lg" style={{ backgroundImage: "url('../../assets/img/sections/josh-appel.jpg')", backfaceVisibility: "hidden" }}></div>
//               <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"></div>
//               <a href="javascript:;">
//                 <div className="absolute text-left p-6 bottom-0">
//                   <h6 className="text-xl leading-normal mb-0 text-white opacity-75">New Challenges</h6>
//                   <h5 className="text-2xl font-bold leading-tight mt-0 mb-2 text-white">Touch on a trend</h5>
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* Repeat this block for each item */}
//         </div>
//         <div className="text-center">
//           <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2 text-white bg-pink-500 border-pink-500 active:bg-pink-600 active:border-pink-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">show more</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

const Blog = () => {
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-indigo-500">
              Headless UI
            </span>
            Completely unstyled, fully accessible UI components
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS.
            </p>
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
            href="https://headlessui.dev"
          >
            Learn more
            <span className="sr-only">
              , Completely unstyled, fully accessible UI components
            </span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <img
          src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </li>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-indigo-500">
              Headless UI
            </span>
            Completely unstyled, fully accessible UI components
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS.
            </p>
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
            href="https://headlessui.dev"
          >
            Learn more
            <span className="sr-only">
              , Completely unstyled, fully accessible UI components
            </span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <img
          src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </li>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-indigo-500">
              Headless UI
            </span>
            Completely unstyled, fully accessible UI components
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS.
            </p>
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
            href="https://headlessui.dev"
          >
            Learn more
            <span className="sr-only">
              , Completely unstyled, fully accessible UI components
            </span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <img
          src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </li>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-indigo-500">
              Headless UI
            </span>
            Completely unstyled, fully accessible UI components
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS.
            </p>
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
            href="https://headlessui.dev"
          >
            Learn more
            <span className="sr-only">
              , Completely unstyled, fully accessible UI components
            </span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <img
          src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </li>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-indigo-500">
              Headless UI
            </span>
            Completely unstyled, fully accessible UI components
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS.
            </p>
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
            href="https://headlessui.dev"
          >
            Learn more
            <span className="sr-only">
              , Completely unstyled, fully accessible UI components
            </span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <img
          src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </li>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-indigo-500">
              Headless UI
            </span>
            Completely unstyled, fully accessible UI components
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS.
            </p>
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
            href="https://headlessui.dev"
          >
            Learn more
            <span className="sr-only">
              , Completely unstyled, fully accessible UI components
            </span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <img
          src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </li>

      {/* Repeat similar structure for the other two items */}
    </ul>
  );
};

export default Blog;
