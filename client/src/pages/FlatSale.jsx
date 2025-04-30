import React from "react";
import FlatSaledata from "../components/FlatSaledata";

const FlatSale = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-9 ml-4">
        Flat Sale
        <span className="text-md text-black font-normal mr-1 p-3">
          (21 Products Found)
        </span>
      </h1>
      <FlatSaledata />
    </div>
  );
};

export default FlatSale;
