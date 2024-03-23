import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo.png";

const pages = ["Home", "Prayer Times", "Events", "Calendar", "Contact"];
const pages_links = ["/", "/prayertimes", "/events", "/calendar", "/contact"];

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="navbar">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          zIndex: 1000,
          color: "#fff",
          backgroundColor: "#4a6741",
          opacity: 0.98,
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <a href="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  height: "90x",
                  width: "150px",
                  marginLeft: "10px",
                }}
              />
            </a>
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
            {/* Display Burger Icon on Mobile */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { sm: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Display Navigation Links on Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      {/* <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                setActivePage(page);
                toggleDrawer(false)();
              }}
              component="a"
              href={pages_links[index]}
            >
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "60%",
            backgroundColor: "#4a6741",
            color: "#fff",
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                setActivePage(page);
                toggleDrawer(false)();
              }}
              component="a"
              href={pages_links[index]}
            >
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "#fff" }} />
        {/* Additional items or styling can be added here */}
      </Drawer>
    </div>
  );
};

export default Navbar;
