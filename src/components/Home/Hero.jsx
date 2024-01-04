import React from "react";
import { Typography, Box, Paper } from "@mui/material";

const Hero = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" sx={{ marginBottom: "10px" }}>
          Explore Upcoming Events
        </Typography>
        <Typography variant="subtitle1">
          Discover a variety of exciting events
        </Typography>
      </Box>
    </Paper>
  );
};

export default Hero;
