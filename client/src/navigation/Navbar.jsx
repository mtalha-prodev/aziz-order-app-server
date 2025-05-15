import React, { useState } from "react";
import { navbar } from "./css/style";
import NestedMenu from "./NestedMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const { value, product } = useSelector((state) => state.counter)

  console.log(product)
  const [val, setVal] = useState(true);
  const [menu, setMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white flex justify-between items-center px-2 py-4 ">
      <div className=" flex justify-center items-center ">
        <div className="relative">
          <button
            onClick={() => setMenu(!menu)}
            className=" bg-slate-900 rounded-md text-white p-2 text-xs font-medium"
          >
            <i class="fa-solid fa-table-list mr-1"></i>Browser Category{" "}
            <i class="fa-solid fa-angle-down ml-1"></i>
          </button>
          {menu && <NestedMenu />}
        </div>
        <ul className="flex justify-evenly items-center w-72 ">
          <li>
            <Link to="/" className={navbar.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/offers" className={navbar.navLink}>Offers</Link>
          </li>
          <li>
            <Link to="/dailydeals" className={navbar.navLink}>Daily Deals</Link>
          </li>
          <li>
            <Link to="/flatsale" className={navbar.navLink}>Flat Sale</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a className="text-blue-600 text-xs font-medium cursor-pointer">
          <i class="fa-solid fa-headset "></i> +92 300 1234567
        </a>
        <button
          className="text-sm font-medium bg-green-500  rounded-md px-2 py-1 ml-4 text-white "
        >
          <i class="fa-solid fa-basket-shopping mr-1"></i> My Cart {value}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
