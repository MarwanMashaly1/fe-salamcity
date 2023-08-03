import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import "../styles/Navbar.css";

const pages = ["Home", "Prayer Times", "Events", "Contact"];
const pages_links = ["/", "/prayertimes", "/events", "/contact"];

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ marginLeft: "20px" }}
            >
              The Muslim Navigator
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-end",
              marginRight: "20px",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => setActivePage(page)}
                href={pages_links[index]}
                sx={{
                  position: "relative",
                  textTransform: "none",
                  fontSize: "1.2rem",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: 0,
                    borderBottom: "2px solid #ffffff",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::before": {
                    width: "100%",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
