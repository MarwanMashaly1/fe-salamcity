import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const featuredPosts = [
  {
    title: "Featured post 1",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text 1",
  },
  {
    title: "Featured post 2",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text 2",
  },
  {
    title: "Featured post 3",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text 2",
  },
  {
    title: "Featured post 4 ",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text 2",
  },
];

const hero_content = {
  title: "Welcome to The Muslim Navigator",
  subtitle:
    "Looking for events but don't know where to go? then you are in the right place to find all your Islamic needs",
  event_btn: "Explore Events",
  prayer_btn: "Find Prayer Times",
  pattern: "https://source.unsplash.com/random",
};

const Home = () => {
  const pairsOfPosts = [];
  for (let i = 0; i < featuredPosts.length; i += 2) {
    pairsOfPosts.push(featuredPosts.slice(i, i + 2));
  }

  return (
    <div className="home">
      <div
        className="Hero"
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "100px 0",
          backgroundImage: `url("${hero_content["pattern"]}")`,
        }}
      >
        <Box
          textAlign="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            position: "relative",
            top: "30%",
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            {hero_content.title}
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            {hero_content.subtitle}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/events"
            sx={{ marginRight: "20px" }}
          >
            {hero_content.event_btn}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/prayertimes"
          >
            {hero_content.prayer_btn}
          </Button>
        </Box>
      </div>
      <div className="featured">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            minHeight: "100vh",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            Featured
          </Typography>
          <Box
            sx={{
              width: "80%", // Adjust the width of the carousel container
              margin: "0 auto", // Center the carousel container
              typography: "body1",
            }}
            component="div"
          >
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              infiniteLoop={true}
              emulateTouch={true}
              swipeable={true}
              centerSlidePercentage={50}
              autoPlay={true}
            >
              {pairsOfPosts.map((pair, index) => (
                <div key={index} className="pair-of-cards">
                  {pair.map((post, postIndex) => (
                    <Card
                      key={postIndex}
                      sx={{
                        maxWidth: "100%",
                        width: "45%", // Adjust the card width for two cards per slide
                        margin: "10px",
                        marginBottom: "40px",
                        display: "inline-block", // Display cards inline
                      }}
                    >
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
                </div>
              ))}
            </Carousel>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Home;
