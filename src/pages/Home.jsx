import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuickLinks from "../components/Home/QuickLinks";
import PrayerTimesWidget from "../components/Home/PrayerTimesWidget";
import Featured from "../components/Home/Featured";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import hero_bg from "../images/BeFunky-collage.jpg";
import Loader from "../utils/Loader";

import "../styles/Home.css";
import "../styles/fonts.css";

const hero_content = {
  title: "Welcome to SalamCity",
  subtitle:
    "Fullfil all your Islamic needs in one place. Find events, prayer times, and more!",
  event_btn: "Explore Events",
  prayer_btn: "Find Prayer Times",
  pattern: hero_bg,
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="home">
      {isLoading ? (
        <div>
          <Loader />
          <Featured setLoading={setIsLoading} />
        </div>
      ) : (
        <>
          <div
            className="Hero"
            style={{
              width: "100%",
              textAlign: "center",
              color: "white",
              paddingTop: isMobile ? "60px" : "140px",
              paddingBottom: isMobile ? "40px" : "140px",
              position: "relative",
            }}
          >
            <div className="hero-bg">
              <img
                src={hero_content["pattern"]}
                alt="hero-bg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                padding: isMobile ? "20px" : "40px",
                maxWidth: isMobile ? "100%" : "600px",
                textAlign: "center",
                margin: "0 auto",
                position: "relative",
                zIndex: "1",
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "2rem" : "4rem",
                  // lineHeight: "3rem",
                  color: "#ffffff",
                  margin: "1rem",
                  // font that looks like hand written
                  fontFamily: " DancingScript",
                }}
              >
                {hero_content.title}
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "1rem" : "1.3rem",
                  // lineHeight: "3rem",
                  fontFamily: "Open Sans",
                  color: "#ffffff",
                  margin: "1rem",
                }}
              >
                {hero_content.subtitle}
              </Typography>
              <Button
                component={Link}
                to="/events"
                variant="contained"
                size="large"
                sx={{
                  marginRight: "20px",
                  marginBottom: isMobile ? "20px" : "0px",
                  backgroundColor: "#4a6630",
                  ":hover": {
                    backgroundColor: "#4a7f41",
                    transform: "scale(1.1)",
                  },
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
                  ":hover": {
                    backgroundColor: "#aa8f20",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {hero_content.prayer_btn}
              </Button>
            </Box>
          </div>
          <div className="featured-home">
            <Featured setLoading={setIsLoading} />
          </div>

          <div className="quickLinks">
            <QuickLinks />
          </div>
          <div>
            <PrayerTimesWidget />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
