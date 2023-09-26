import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuickLinks from "../components/QuickLinks";
import PrayerTimesWidget from "../components/PrayerTimesWidget";
import Featured from "../components/Home/Featured";
import { Link } from "react-router-dom";

import hero_bg from "../images/BeFunky-collage.jpg";

const hero_content = {
  title: "Welcome to The Muslim Navigator",
  subtitle:
    "Fullfil all your Islamic needs in one place. Find events, prayer times, and more!",
  event_btn: "Explore Events",
  prayer_btn: "Find Prayer Times",
  pattern: hero_bg,
};

const Home = () => {
  return (
    <div className="home">
      <div
        className="Hero"
        style={{
          top: "0",
          left: "0",
          position: "absolute",
          width: "100%",
          textAlign: "center",
          color: "white",
          padding: "140px 0",
        }}
      >
        <div className="hero-bg">
          <img
            src={hero_content["pattern"]}
            alt="hero-bg"
            style={{
              top: "0",
              left: "0",
              position: "absolute",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: "-1",
            }}
          />
        </div>
        <Box
          textAlign="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            padding: "20px",
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            position: "relative",
            zIndex: "0",
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            {hero_content.title}
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            {hero_content.subtitle}
          </Typography>
          <Button
            component={Link}
            to="/events"
            variant="contained"
            size="large"
            sx={{
              marginRight: "20px",
              backgroundColor: "#4a6630",
              ":hover": { backgroundColor: "#4a7f41", transform: "scale(1.1)" },
            }}
          >
            {hero_content.event_btn}
          </Button>
          <Button
            component={Link}
            to="/prayertimes"
            variant="contained"
            size="large"
            sx={{
              marginRight: "20px",
              backgroundColor: "#a67c00",
              ":hover": { backgroundColor: "#aa8f20", transform: "scale(1.1)" },
            }}
          >
            {hero_content.prayer_btn}
          </Button>
        </Box>
      </div>
      <div className="featured-home">
        <Featured />
      </div>

      <div className="quickLinks">
        <QuickLinks />
      </div>
      <PrayerTimesWidget />
    </div>
  );
};

export default Home;
