import React, { useState } from "react";
import {
  fruitsSubMenuData,
  babySubMenuData,
  healthSubMenuData,
  homeSubMenuData,
  personalSubMenuData,
  cleaningSubMenuData,
  foodSubMenuData,
  nestedMenuData,
} from "../utils/objectData/navdata";

function NestedMenu() {
  const [subMenu, setSubMenu] = useState();

  // console.log(nestedMenuData)
  return (
    <div className=" absolute mt-1 w-40 bg-slate-100 border border-slate-200 rounded-md p-2 z-50">
      {nestedMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onMouseEnter={() => setSubMenu(index)}
            // onClick={() => setSubMenu(index)}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs hover:text-green-600">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}

      {subMenu == 0 ? (
        <Foods />
      ) : subMenu == 1 ? (
        <Cleaning />
      ) : subMenu == 2 ? (
        <Personal />
      ) : subMenu == 3 ? (
        <Health />
      ) : subMenu == 4 ? (
        <Baby />
      ) : subMenu == 5 ? (
        <Home />
      ) : (
        ""
      )}
    </div>
  );
}

const Foods = () => {
  const [nestedSub, setNestedSub] = useState();

  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md pt-5 pl-2 text-xs ease-in-out delay-200">
      {foodSubMenuData.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setNestedSub(index)}
        >
          <button className="my-2 w-full flex justify-between items-center text-sm text-slate-900">
            <span className="text-xs">{item.mainTitle}</span>
            <i className="fa-solid fa-angle-right text-sm"></i>
          </button>

          {nestedSub === index && item.mainTitle === "Fruits & Vegetables" && (
            <div className="absolute top-0 left-full w-40 bg-white border border-slate-200 rounded-md p-2 z-50">
              {fruitsSubMenuData.map((fruit, i) => (
                <div
                  key={i}
                  className="text-xs py-1 hover:text-green-600 cursor-pointer"
                >
                  {fruit.mainTitle}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Cleaning = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {cleaningSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs hover:text-green-600">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

// more menu

const Personal = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {personalSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};
const Health = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {healthSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};
const Baby = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {babySubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};
const Home = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {homeSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

export default NestedMenu;
