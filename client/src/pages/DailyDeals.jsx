import React from "react";
import DailyData from "../components/DailyData";

const DailyDeals = () => {
  return (
    <div>
    <h1 className="text-3xl font-bold py-9 ml-4">
        Daily Deals
        <span className="text-md text-black font-normal mr-1 p-3">
          (21 Products Found)
        </span>
      </h1>
      <DailyData />
    </div>
  );
};

export default DailyDeals;
