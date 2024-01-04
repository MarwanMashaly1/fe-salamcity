import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Faq from "./pages/Faq";
import Guides from "./pages/Guides";
import Mosques from "./pages/Mosques";
import Donate from "./pages/Donate";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prayerTimes" element={<PrayerTimes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/Mosques" element={<Mosques />} />
            <Route path="/donate" element={<Donate />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404</h1>
                  <p>Page not found</p>
                  <Button variant="contained" href="/">
                    Go to Home
                  </Button>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
