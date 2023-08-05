import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  const hero_content = {
    title: "Welcome to The Muslim Navigator",
    subtitle:
      "Looking for events but don't know where to go? then you are in the right place to find all your Islamic needs",
    event_btn: "Explore Events",
    prayer_btn: "Find Prayer Times",
    pattern: "https://source.unsplash.com/random",
  };

  return (
    <div className="home">
      <div
        className="Hero"
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "100px 0",
          backgroundImage: `url("${hero_content["pattern"]}")`,
        }}
      >
        <Box
          textAlign="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            position: "relative",
            top: "30%",
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
    </div>
  );
};

export default Home;
