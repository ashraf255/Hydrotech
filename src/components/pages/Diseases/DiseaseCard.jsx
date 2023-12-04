import React from "react";
import { Link } from "react-router-dom";

const DiseasesCard = ({ diseases }) => {
  const {
    id,
    heading,
    title,
    image,
    description,
    solution_title,
    solution_description,
    slug,
  } = diseases;
  return (
    <>
      <div className="shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-2xl">
        <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg">
          <img src={image} alt="image" className="w-full h-72" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {title}
              </a>
            </h3>
            <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
              {heading}
            </p>
            <Link
              to={`/diseases/diseases-details/${slug}`}
              className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiseasesCard;
