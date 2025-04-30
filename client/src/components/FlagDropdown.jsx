import React, { useState } from "react";

const FlagDropdown = () => {
  const [flag, setFlag] = useState([
    {
      name: "PK",
      icon: "fa-solid fa-flag-checkered",
    },
    {
      name: "IN",
      icon: "fa-solid fa-flag-checkered",
    },
    {
      name: "USA",
      icon: "fa-solid fa-flag-checkered",
    },
    {
      name: "UAE",
      icon: "fa-solid fa-flag-checkered",
    },
  ]);

  return (
    <div className="absolute top-8 w-24 border border-zinc-700 rounded-md p-1">
      {flag.map((item) => (
        <div className="flex justify-between">
          <i class={`${item.icon} ml-1`}></i>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FlagDropdown;
