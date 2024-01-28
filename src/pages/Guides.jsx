import React from "react";
import { Box, Typography } from "@mui/material";
import HeroPage from "../components/common/HeroPage";
import ConstructionIcon from "@mui/icons-material/Construction";
// import UnderConstructionImage from "../path/to/under_construction_image.jpg"; // Replace with your image path

const Guides = () => {
  return (
    <div>
      <div className="prayer-times-hero">
        <HeroPage
          title="Local Guide"
          desc="Find the nearest mosque and halal restaurant in your area."
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* <img
          src={UnderConstructionImage}
          alt="Under Construction"
          style={{ maxWidth: "100%", marginBottom: "20px" }}
        /> */}
        <ConstructionIcon sx={{ fontSize: 100, color: "#FFA500" }} />
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          This page is currently under construction.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, textAlign: "center" }}>
          We are working hard to bring you valuable content. Stay tuned for
          updates!
        </Typography>
      </Box>
    </div>
  );
};

export default Guides;
