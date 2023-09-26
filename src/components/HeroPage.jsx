import React from "react";
import { Container, Typography } from "@mui/material";
import "../styles/HeroPage.css";

const HeroPage = () => {
  return (
    <div>
      <div className="page-title">
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Prayer Times
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            className="secondry-hero-text"
          >
            Find the prayer times for different mosques in your city.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default HeroPage;
