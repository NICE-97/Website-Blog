import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Megamenu from "./pages/Megamenu";
import Megatabs from "./pages/Megatabs";
import Technology from "./pages/Technology";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import Nav from "./components/Nav";
import Topweb from "./components/Topweb";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lastfooter from "./components/Lastfooter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [show, setShow] = useState("");

  const togglebtn = () => {
    setIsToggled((prevState) => !prevState);
    if (isToggled) {
      setShow("transition delay-0 duration-500 translate-x-0");
    } else {
      setShow("hidden transition delay-0 duration-500 -translate-x-80");
    }
  };

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 right-0 z-20">
        <Nav togglebtn={togglebtn} show={show} />
      </div>
      <Topweb />
      <div className="sticky top-0 left-0 right-0 z-10">
        <Header togglebtn={togglebtn} />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/megamenu" element={<Megamenu />} />
        <Route path="/megatabs" element={<Megatabs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
      <Lastfooter />
    </div>
  );
}

export default App;
