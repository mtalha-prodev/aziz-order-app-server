import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import FlatSale from "../pages/FlatSale";
import DailyDeals from "../pages/DailyDeals";
import Login from "../pages/auth/Login";
import Profile from "../pages/Profile";

function MainStack() {
  const [role, setRole] = useState('user')
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/flatsale" element={<FlatSale />} />
        <Route path="/dailydeals" element={<DailyDeals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>


    </>

  );
}

export default MainStack;
