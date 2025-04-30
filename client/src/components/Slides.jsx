import React, { useState } from "react";
import Slider from "react-slick";
import { categories } from "../utils/objectData/browseData";

const Slides = () => {
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
        <h1 className="text-4xl font-bold text-gray-800">Browse by Categories</h1>
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
        {categories.map((cat, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition">
              <img src={cat.image}  className="h-24 object-contain mb-2 
              transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2" />
              <p className="text-center font-medium text-gray-700 hover:text-green-600">{cat.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
