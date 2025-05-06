import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Dashboard from "./navigation/Dashboard";
import Navbar from "./navigation/navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [role, setRole] = useState('user')

  const getRole = () => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)

    
    setRole(user?.role)
  }

  useEffect(() => {
    getRole()
  }, [])

  

  const main = true;

  return (
    <BrowserRouter>
      {role == 'user' ? (
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
