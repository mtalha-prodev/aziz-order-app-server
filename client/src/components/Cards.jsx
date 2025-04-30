import React from "react";
import { popularProduct } from "../utils/objectData/cardData";

function Cards() {
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {popularProduct.map((item, index) => (
        <div
          key={index}
          className="relative w-72 rounded-xl  shadow-lg bg-white text-black border border-gray-200"
        >
          <div className="relative">
            <img
              src={item.img}
              className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2"
            />

            {/* flash sale badge */}
            <span className="absolute top-2 left-2 bg-slate-900 text-xs font-semibold px-2 py-1 rounded-full z-10 text-white flex items-center gap-1">
              Flash Sale
            </span>
            {/* heart icon */}
            <a
              href="#"
              className="absolute top-2 right-2 z-10  hover:cursor:pointer"
            >
              {/* to specifically give color text-[rgb()] */}
              <span className="bg-white p-1 rounded-full ">
                <i class="fa-regular fa-heart"></i>
              </span>
            </a>
            {/* add to bag */}
            <a
              href="#"
              className="absolute bottom-3 right-3 bg-green-500 hover:cursor:pointer text-white text-sm px-4 py-1 rounded-full flex items-center gap-1 z-10"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add
            </a>
          </div>

          <div className="p-4">
            <p className="text-lg font-semibold cursor-auto">{item.title}</p>
            <p className="text-sm text-gray-500 cursor-auto">
              {item.description}
            </p>
            <div className="mt-2 text-lg">
              <span className="text-green-600 font-bold mr-2">
                {item.discount}
              </span>
              <span className="text-gray-400 line-through font-bold">
                {item.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
