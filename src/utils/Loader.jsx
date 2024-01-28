import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f3e4ba",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} thickness={1.5} style={{ color: "black" }} />
    </div>
  );
};

export default Loader;
