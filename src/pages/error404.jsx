import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => (
  <Box
    sx={{
      backgroundColor: "#f3e4ba",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "70vh",
    }}
  >
    <ErrorOutlineIcon sx={{ fontSize: "5rem", color: "#4F6228" /* green */ }} />
    <Typography
      variant="h4"
      sx={{ color: "#4F6228", /* green */ marginBottom: "1rem" }}
    >
      Oops! The page you're looking for doesn't exist.
    </Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#4F6228", // green
        color: "#D9EAD3", // creamy yellow
        "&:hover": {
          backgroundColor: "#4F6228", // green
        },
      }}
      component={Link}
      to="/"
    >
      Back to Home
    </Button>
  </Box>
);

export default NotFoundPage;
