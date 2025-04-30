import React from "react";

const services = [
  {
    icon: "fa-regular fa-heart",
    title: "Quality & Savings",
    description: "Comprehensive quality control and affordable prices",
  },
  {
    icon: "fa-solid fa-truck",
    title: "Fast Delivery",
    description: "Fast and convenient door to door delivery",
  },
  {
    icon: "fa-regular fa-credit-card",
    title: "Secure Payment",
    description: "Different secure payment methods",
  },
  {
    icon: "fa-solid fa-desktop",
    title: "Professional Service",
    description: "Efficient customer support from passionate team",
  },
];

function SmallSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-white">
      {services.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <i className={`${item.icon} text-green-500 text-xl mt-1`}></i>
          <div>
            <h3 className="text-md p-2 font-semibold text-slate-700">
              {item.title}
            </h3>
            <p className="text-sm text-slate-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallSection;
