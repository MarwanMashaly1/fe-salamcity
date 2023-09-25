import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton"; // Import the loading skeleton component
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/snmc/events")
      .then((response) => {
        const snmcEvents = response.data.slice(0, 2);
        const snmcEventsMapped = snmcEvents.map((event, index) => ({
          title: event.title,
          description: event[0],
          image: event[1],
          link: "",
          key: `snmc-${index}`,
        }));
        return snmcEventsMapped;
      })
      .then((snmcEventsMapped) => {
        return axios
          .get("http://127.0.0.1:5000/masjidrahma/events")
          .then((response) => {
            const rahmaEvents = response.data.slice(0, 2);
            const rahmaEventsMapped = rahmaEvents.map((event, index) => ({
              title: event[0],
              description: event[2][0],
              image: event[2][1],
              link: event[1],
              key: `rahma-${index}`,
            }));
            return [...snmcEventsMapped, ...rahmaEventsMapped];
          });
      })
      .then((featuredEvents) => {
        setFeaturedEvents(featuredEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <LoadingSkeleton /> {/* Render the loading skeleton component */}
      </div>
    );
  }

  const pairsOfEvents = [];
  for (let i = 0; i < featuredEvents.length; i += 2) {
    pairsOfEvents.push(featuredEvents.slice(i, i + 2));
  }

  return (
    <div>
      <div className="featured">
        <Box
          sx={{
            marginTop: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "80%",
              margin: "0 auto",
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
              {pairsOfEvents.map((pair, index) => (
                <div key={index} className="pair-of-cards">
                  {pair.map((post, postIndex) => (
                    <FeaturedCard
                      title={post.title}
                      description={post.description}
                      image={post.image}
                      link={post.link}
                    />
                    // <Card
                    //   key={postIndex}
                    //   sx={{
                    //     maxWidth: "100%",
                    //     width: "40%",
                    //     margin: "10px",
                    //     marginBottom: "40px",
                    //     display: "inline-block",
                    //   }}
                    // >
                    //   <CardActionArea>
                    //     <CardMedia
                    //       component="img"
                    //       height="140"
                    //       image={post.image}
                    //       alt={post.imageLabel}
                    //     />
                    //     <CardContent>
                    //       <Typography gutterBottom variant="h5" component="div">
                    //         {post.title}
                    //       </Typography>
                    //       <Typography variant="body2" color="text.secondary">
                    //         {post.description}
                    //       </Typography>
                    //     </CardContent>
                    //   </CardActionArea>
                    // </Card>
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

export default Featured;
