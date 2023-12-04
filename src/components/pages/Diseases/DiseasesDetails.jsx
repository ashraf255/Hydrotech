import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Shared file/Navbar";

export default function DiseasesDetails() {
  const { slug } = useParams();

  const [diseases, setDiseases] = useState({ status: false });

  useEffect(() => {
    (async function () {
      const response = await fetch("/data.json");
      const result = await response.json();
      const data = await result.diseases;

      setDiseases({
        status: true,
        data: data.find((d) => d.slug === slug),
      });
    })();
  }, []);
  console.log(diseases);
  return (
    <>
      <div className="bg-gray-200">
        <div className="bg-white">
          <Navbar />
        </div>
        <div className="max-w-screen-lg mx-auto">
          <main className="mt-10">
            <div className="mb-4 md:mb-0 w-full mx-auto relative">
              <div className="px-4 lg:px-0">
                <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                  {diseases.status && diseases.data.heading}
                </h2>
                <a
                  href="#"
                  className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                >
                  {diseases.status && diseases.data.title}
                </a>
              </div>
              <img
                src={diseases.status && diseases.data.image}
                className="w-full object-cover lg:rounded"
                style={{ height: "28em" }}
                alt="Blog Header"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-12 ">
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full ">
                <div className="pb-6 text-justify text-center ">
                  {diseases.status &&
                    (function (str) {
                      const paragraphs = str.split("\n");

                      return paragraphs.map((paragraph) => (
                        <p className="pb-6">{paragraph.trim()}</p>
                      ));
                    })(diseases.data.description)}
                </div>

                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                  {diseases.status && diseases.data.solution_title}
                </h2>
                <p className="pb-6 text-justify text-centerr">
                  {diseases.status && diseases.data.solution_description}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
