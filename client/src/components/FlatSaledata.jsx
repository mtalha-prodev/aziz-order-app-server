import React from "react";
import { flatData } from "../utils/objectData/flatData";

function FlatSaledata() {
  return (
    <>
      <div className=" flex justify-between g-4 mx-4 my-2 flex-wrap">
        {flatData.map((item, index) => (
          <div
            key={index}
            className=" relative w-[23%] border rounded-md p-2 my-2 border border-gray-700"
          >
            <img
              src={item.img}
              className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2"
            />

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

            <p className="text-md text-black my-2 cursor-auto"> {item.title}</p>
            <div className="">
              <span className="text-green-500 text-md font-bold mr-2">
                {item.discount}
              </span>
              <span className="text-gray-400 line-through font-bold">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default FlatSaledata;
