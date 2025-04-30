import React from "react";
import Slider_one from "../assets/img/slider_one-cover.png";
import Slider_two from "../assets/img/slider_two-cover.png";
import Slider_three from "../assets/img/slider_three-cover.png";

const slides = [
  { img: Slider_one },
  { img: Slider_two },
  { img: Slider_three },
];

function Carousel() {
  return (
    <>
    <div className="p-3 ">
    
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
      {/* time here 1000=1sec */}
        <div className="carousel-inner rounded-md">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img src={slide.img} className="d-block w-100" />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
}
export default Carousel;
