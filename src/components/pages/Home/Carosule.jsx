/* eslint-disable react/prop-types */
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcNext, FcPrevious } from "react-icons/fc";

const Carousel = () => {
  const sliderRef = useRef(null);
  const sliderImg = ['/firstbg.png', '/send.png', '/third.png'];
  const overlayTexts = ['Harvest Haven - “Growing Nature’s Bounty”', 'Golden Fields- “Nurturing the Seeds of Success”', 'Fresh Roots-“Planting the Seeds of Tomorrow”'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2100,
    arrows: false,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="h-full rounded relative">
      <div className="w-full mx-auto relative">
        <div
          onClick={goToPrev}
          className="absolute grid place-items-center w-12 left-0 z-10 top-1/2"
        >
          <FcPrevious className="text-3xl"></FcPrevious>
        </div>
        <div
          onClick={goToNext}
          className="absolute grid place-items-center w-12 right-0 top-1/2 z-10"
        >
          <FcNext className="text-3xl"></FcNext>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {sliderImg?.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="rounded w-full h-[300px] md:h-[600px]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <p className="text-6xl font-bold">{overlayTexts[index]}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;