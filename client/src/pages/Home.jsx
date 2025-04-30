import React from "react";
import Cards from "../components/Cards";
import Items from "../components/Items";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import Slides from "../components/Slides";
import PopularBrands from "../components/PopularBrands";
import Banner from "../components/Banner";
import SmallSection from "../components/SmallSection";

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <Slides/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <h1 className="text-3xl font-bold py-9 ml-4">Most Popular</h1>
        <Cards />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Items />
      </div>

      <div>
        <PopularBrands/>
      </div>
      <div>
        <SmallSection/>
      </div>
    
    </>
  );
}

export default Home;
