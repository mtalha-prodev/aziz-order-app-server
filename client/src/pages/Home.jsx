import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Items from "../components/Items";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import Slides from "../components/Slides";
import PopularBrands from "../components/PopularBrands";
import Banner from "../components/Banner";
import SmallSection from "../components/SmallSection";
import Spinner from "../components/Loader";

function Home() {
  const [loading, setLoading] = useState(true)

  // get localstorage data by key
  const token = localStorage.getItem("token");
  // remove single item
  // const token = localStorage.removeItem("token");
  // remove all items
  // const token = localStorage.clear();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

    }, 1000);
  }, [])

  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <Slides />
      </div>
      <div>
        <Banner />
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
        <PopularBrands />
      </div>
      <div>
        <SmallSection />
      </div>
      {
        loading &&
        <Spinner loading={loading} />
      }
    </>
  );
}

export default Home;
