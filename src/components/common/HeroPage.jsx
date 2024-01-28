import React from "react";
import { Container, Typography } from "@mui/material";
import "../../styles/HeroPage.css";

const HeroPage = ({ title, desc }) => {
  return (
    <div>
      <div
        className="page-title"
        sx={{
          position: "relative",
          // background: "linearGradient( to left, #4a6741, #4a6d41 )",
          backgroundColor: "#4a6741",
          padding: "1rem 0",
          paddingTop: "80px",
          width: "100%",
        }}
      >
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
