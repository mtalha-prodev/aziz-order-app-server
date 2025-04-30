import React from "react";
import Image from "../assets/img/section.jpg";

function Section() {
  return (
    <div className="relative overflow-hidden rounded-xl m-8 ">
      <img className ="w-full h-auto object-cover" src={Image} />
    </div>
  );
}
export default Section;
