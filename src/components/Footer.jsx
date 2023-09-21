import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt libero non felis blandit fringilla.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/events" color="inherit" underline="hover">
              Events
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
              Social Media
            </Typography>
            <Link href="#" color="inherit" sx={{ marginRight: "10px" }}>
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ marginRight: "10px" }}>
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit">
              <InstagramIcon />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: muslimnav@gmail.com
            </Typography>
            {/* <Typography variant="body2" gutterBottom>
              Phone: (343) 456-7890
            </Typography> */}
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          borderTop: "1px solid white",
          paddingTop: "20px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          &copy; {new Date().getFullYear()} The Muslim Navigator. All rights
          reserved.
        </Typography>
        <Typography variant="body2" sx={{ marginRight: "5px" }}>
          Designed by Marwan
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
