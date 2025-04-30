import React, { useState } from "react";
import Slider from "react-slick";
import { popularItem } from "../utils/objectData/Trending";

const Items = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Trending Items</h1>
        <div className="flex gap-2">
          <button
            onClick={() => slider?.slickPrev()}
            className="w-9 h-9 rounded-full bg-white text-green-600 shadow hover:bg-green-600 hover:text-white transition flex items-center justify-center"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            onClick={() => slider?.slickNext()}
            className="w-9 h-9 rounded-full bg-white text-green-600 shadow hover:bg-green-600 hover:text-white transition flex items-center justify-center"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {popularItem.map((tren, index) => (
          <div key={index} className="px-2">
            <div className="relative bg-gray-100 rounded-xl p-4 flex flex-col  shadow hover:shadow-lg transition">
              <img src={tren.image} className="h-48 object-contain mb-2" />

              {/* Heart icon */}
              <a href="#" className="absolute top-2 right-2 z-10 cursor-pointer">
                <span className="bg-white p-1 rounded-full">
                  <i className="fa-regular fa-heart"></i>
                </span>
              </a>

              {/* Add to bag */}
              <a
                href="#"
                className="absolute bottom-3 right-3 bg-green-500 text-white text-sm px-4 py-1 rounded-full flex items-center gap-1 z-10 cursor-pointer"
              >
                <i className="fa-solid fa-bag-shopping"></i> Add
              </a>

              <div className="p-4">
            <p className=" text-sm font-normal cursor-auto">{tren.title}</p>
            <p className="text-sm text-gray-500 cursor-auto">
              {tren.description}
            </p>
            <div className="mt-2 text-lg">
              <span className="text-green-600 font-bold mr-2">
                {tren.discount}
              </span>
              <span className="text-gray-400 line-through font-bold">
                {tren.price}
              </span>
            </div>
          </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Items;
