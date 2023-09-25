import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuickLinks from "../components/QuickLinks";
import PrayerTimesWidget from "../components/PrayerTimesWidget";
import Featured from "../components/Home/Featured";

import hero_bg from "../images/BeFunky-collage.jpg";

const hero_content = {
  title: "Welcome to The Muslim Navigator",
  subtitle:
    "Looking for events but don't know where to go? then you are in the right place to find all your Islamic needs",
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "140px 0",
          backgroundImage: `url("${hero_content["pattern"]}")`,
          zIndex: "-1",
        }}
      >
        <Box
          textAlign="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            padding: "20px",
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            {hero_content.title}
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            {hero_content.subtitle}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/events"
            sx={{ marginRight: "20px" }}
          >
            {hero_content.event_btn}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/prayertimes"
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
