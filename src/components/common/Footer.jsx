import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#4a6741",
        color: "white",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              SalamCity is a website that aims to help Muslims in Ottawa learn
              more about what is happening in the community and stay up to date
              with events.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              fontSize: "1rem",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/faq" color="inherit" underline="hover">
              FAQ
            </Link>
            <br />
            <Link href="/events" color="inherit" underline="hover">
              Events
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover">
              Contact Us
            </Link>
            <br />
            <Link href="/prayertimes" color="inherit" underline="hover">
              Prayer Times
            </Link>
            <br />

            {/* Add more quick links as needed */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@salamcity.ca
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          borderTop: "1px solid white",
          paddingTop: "20px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          &copy; {new Date().getFullYear()} The Muslim Navigator. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
