import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Carousel } from "@mui/material";

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
            <Carousel classeName={classes.root}>
              {featuredPosts.map((post, index) => (
                <CardSwipeable key={index} item={post} />
              ))}
            </Carousel>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Home;

function CardSwipeable(props) {
  const classes = useStyles();
  return (
    <div classes={classes.root}>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h6"
              component="h6"
              color="secondary"
            >
              ${props.item.c}
            </Typography>
            <Typography
              className={`${classes.typo} ${classes.mx}`}
              variant="h5"
              color="inherit"
              component="h3"
            >
              {props.item.label}
            </Typography>
            <Typography
              className={classes.typo}
              color="textSecondary"
              component="p"
            >
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h6"
              component="h6"
              color="secondary"
            >
              ${props.item.c}
            </Typography>
            <Typography
              className={`${classes.typo} ${classes.mx}`}
              variant="h5"
              color="inherit"
              component="h3"
            >
              {props.item.label}
            </Typography>
            <Typography
              className={classes.typo}
              color="textSecondary"
              component="p"
            >
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h6"
              component="h6"
              color="secondary"
            >
              ${props.item.c}
            </Typography>
            <Typography
              className={`${classes.typo} ${classes.mx}`}
              variant="h5"
              color="inherit"
              component="h3"
            >
              {props.item.label}
            </Typography>
            <Typography
              className={classes.typo}
              color="textSecondary"
              component="p"
            >
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
