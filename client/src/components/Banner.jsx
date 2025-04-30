import React from "react";
import Banner1 from "../assets/img/banner-1.jpg";
import Banner2 from "../assets/img/banner-2.jpg";
import Banner3 from "../assets/img/banner-3.jpg";

function Banner() {
  return (
    <div className="flex justify-between g-4 m-4">
      <img className ="w-1/3 rounded-2xl p-1" src={Banner1} />
      <img className ="w-1/3 rounded-2xl p-1" src={Banner2} />
      <img className ="w-1/3 rounded-2xl p-1" src={Banner3} />
    </div>
  );
}
export default Banner;
