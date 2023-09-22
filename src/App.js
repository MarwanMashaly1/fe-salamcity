import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Mosques from "./pages/Mosques";
import Donate from "./pages/Donate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/prayerTimes" element={<PrayerTimes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/About" element={<About />} />
            <Route path="/Mosques" element={<Mosques />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
