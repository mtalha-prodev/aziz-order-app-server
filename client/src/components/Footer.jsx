import React from "react";
import Img from "../assets/img/theme-footer-logo.png";
import { footer } from "../utils/tailwind/header";
import Icons from "./Icons";

const Footer = () => {
  const support = [
    {
      title: "support",
    },
    {
      text: "FAQ",
    },
    {
      text: "Return & Exchange",
    },
    {
      text: "Delivery",
    },
    {
      text: "Contact Us",
    },
  ];

  const Legal = [
    {
      title: "Legal",
    },
    {
      text: "About Us",
    },
    {
      text: "Cookies Policy",
    },
    {
      text: "Terms & Conditions",
    },
    {
      text: "Privacy Policy",
    },
  ];
  const Contact = [
    {
      title: "Contact",
    },
    {
      text: "House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216",
      icon: "fa-solid fa-location-dot",
    },
    {
      text: "info@inilabs.net",
      icon: "fa-solid fa-envelope",
    },
    {
      text: "+8801333384628",
      icon: "fa-solid fa-phone",
    },
  ];

  return (
    <div className=" bg-slate-900 py-5">
      <div className="border-b border-gray-500 flex justify-around items-center p-5">
        <div className=" w-1/4">
          <img src={Img} className="w-20 " />
          <p className="text-white text-xs my-2">Subscribe to our newsletter</p>
          <div className=" bg-slate-50 rounded-3xl p-[2px] flex justify-between items-center pl-3">
            <input
              className="text-xs  bg-transparent outline-none  text-black border-none"
              placeholder="User Email Address"
            />
            <button className="bg-green-500 text-white text-xs px-2 py-1 rounded-3xl">
              Subscribe
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <Icons icon="fa-brands fa-facebook " iconStyle={footer} />
            <Icons icon="fa-brands fa-x-twitter" iconStyle={footer} />
            <Icons icon="fa-brands fa-instagram" iconStyle={footer} />
            <Icons icon="fa-brands fa-youtube" iconStyle={footer} />
          </div>
        </div>

        <div className="w-3/4 flex justify-evenly ">
          <Text text={support} />
          <Text text={Legal} />
          <Text text={Contact} />
        </div>
      </div>
      <p className="text-white text-sm text-center mt-3">
        © StoreKing by iNiLabs 2024, All Rights Reserved
      </p>
    </div>
  );
};

const Text = ({ text }) => {
  return (
    <div>
      {text.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="text-bold text-lg capitalize text-white ">
              {item.title}
            </h1>
            <div className="flex items-center">
              {item.icon && (
                <i className={`${item.icon} text-white text-sm mr-2`}></i>
              )}
              <p className="text-xs text-white cursor-pointer hover:text-green-500 py-2  ">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
