import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Dashboard from "./navigation/Dashboard";
import Navbar from "./navigation/navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const { role } = useSelector((state) => state.auth)

  console.log(role)
  return (
    <BrowserRouter>
      {role != 'user' ? (
        <>
          <Header />
          <Navbar />
          <MainStack />
          <Footer />
        </>
      ) : (
        <Dashboard />
      )}
    </BrowserRouter>
  );
}


export default App;
