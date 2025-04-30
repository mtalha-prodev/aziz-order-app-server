import React from "react";

import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Dashboard from "./navigation/Dashboard";
import Navbar from "./navigation/navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const main = true;

  return (
    <BrowserRouter>
      {main ? (
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
