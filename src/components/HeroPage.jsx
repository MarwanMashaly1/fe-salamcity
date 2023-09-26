import React from "react";
import { Container, Typography } from "@mui/material";
import "../styles/HeroPage.css";

const HeroPage = ({ title, desc }) => {
  return (
    <div>
      <div className="page-title">
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            className="secondry-hero-text"
          >
            {desc}
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default HeroPage;
