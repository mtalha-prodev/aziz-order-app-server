import React, { useState } from "react";
import Slider from "react-slick";
import { brands } from "../utils/objectData/brandsData";

const PopularBrands = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Popular Brands
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => slider?.slickPrev()}
            className="w-9 h-9 rounded-full bg-white-800 text-green-600 shadow hover:bg-green-600 hover:text-white transition flex items-center justify-center"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            onClick={() => slider?.slickNext()}
            className="w-9 h-9 rounded-full bg-white-800 text-green-600 shadow hover:bg-green-600 hover:text-white transition flex items-center justify-center"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <Slider {...settings} ref={setSlider}>
        {brands.map((bran, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-sm ">
              <img src={bran.image} className="h-8 p-1 object-contain mt-1 mb-2 " />
              <p className="text-center font-medium text-gray-700 hover:text-green-600">
                {bran.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularBrands;
