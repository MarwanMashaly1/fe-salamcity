import React from "react";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";
import {
  Event,
  AccessTime,
  LocationOn,
  Info,
  QuestionAnswer,
  ContactMail,
} from "@mui/icons-material";

const QuickLinks = () => {
  const quickLinksData = [
    {
      icon: <Event />,
      title: "Events",
      description: "Explore upcoming events in Ottawa",
      color: "#ff6f00", // Top section color
      link: "/events", // Link to the events page
    },
    {
      icon: <AccessTime />,
      title: "Prayer Times",
      description: "Find daily prayer timings",
      color: "#d32f2f", // Top section color
      link: "/prayertimes", // Link to the prayer times page
    },
    {
      icon: <LocationOn />,
      title: "Mosques",
      description: "Discover local mosques",
      color: "#388e3c", // Top section color
      link: "/mosques", // Link to the mosques page
    },
    {
      icon: <Info />,
      title: "Local Guides",
      description: "Learn about the Ottawa Muslim community",
      color: "#1976d2", // Bottom section color
      link: "/guides", // Link to the about page
    },
    {
      icon: <QuestionAnswer />,
      title: "FAQ",
      description: "Answers to common questions",
      color: "#7b1fa2", // Bottom section color
      link: "/faq", // Link to the FAQ page
    },
    {
      icon: <ContactMail />,
      title: "Contact Us",
      description: "Get in touch with us for inquiries",
      color: "#0288d1", // Bottom section color
      link: "/contact", // Link to the contact page
    },
  ];

  return (
    <Grid container spacing={3}>
      {quickLinksData.map((link, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link href={link.link} color="inherit" underline="none">
            <Card
              sx={{
                backgroundColor: link.color,
                color: "#fff",
                height: "100%",
                width: "90%",
                margin: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent>
                <Grid container alignItems="center">
                  <Grid item xs={2}>
                    {link.icon}
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6">{link.title}</Typography>
                    <Typography variant="body2">{link.description}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuickLinks;
