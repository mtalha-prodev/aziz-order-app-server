import React from "react";
import OffersProduct from "../components/OffersProduct";

const Offers = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-9 ml-4">
        Offer Products
        <span className="text-md text-black font-normal mr-1 p-3">
        (30 Products Found)</span>
      </h1>
      <OffersProduct />
    </div>
  );
};

export default Offers;
