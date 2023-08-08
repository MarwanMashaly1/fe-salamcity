import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";

const featuredPosts = [
  {
    title: "Featured post",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="featured">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            Featured
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }} component="div">
            <Carousel>
              {featuredPosts.map((post, index) => (
                <Card sx={{ maxWidth: 345 }} key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.image}
                      alt={post.imageLabel}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Home;
