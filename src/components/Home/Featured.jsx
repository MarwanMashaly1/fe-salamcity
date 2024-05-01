import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import FeaturedCard from "./FeaturedCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = ({ setLoading }) => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    axios
      .get("/api/v1/events/10")
      .then((response) => {
        // const uomsaEvents = response.data.slice(0, 2);

        // slice to get last 2 events
        const uomsaEvents = response.data.slice(-2);
        return uomsaEvents;
      })
      .then((uomsaEvents) => {
        return axios.get("/api/v1/events/4").then((response) => {
          // const kmaEvents = response.data.slice(0, 2);
          // slice to get last 2 events
          const kmaEvents = response.data.slice(-2);
          return [...uomsaEvents, ...kmaEvents];
        });
      })
      .then((featuredEvents) => {
        setFeaturedEvents(featuredEvents);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const pairsOfEvents = [];
  const itemsPerSlide = isMobile ? 1 : 2; // Change this line

  for (let i = 0; i < featuredEvents.length; i += itemsPerSlide) {
    // And this line
    pairsOfEvents.push(featuredEvents.slice(i, i + itemsPerSlide)); // And this line
  }

  return (
    <div>
      <div className="featured">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: isMobile ? "10%" : "4%", // Adjust this value
            // marginBottom: "9%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: isMobile ? "78%" : "90%",
              height: "60%",
              margin: "0 auto",
              typography: "body1",
            }}
            component="div"
          >
            <Slider
              dots={true}
              infinite={true}
              slidesToShow={1}
              arrows={true}
              autoplay={true}
              draggable={true}
              autoplaySpeed={7000}
            >
              {pairsOfEvents.map((pair, index) => (
                <div key={index} className="pair-of-cards">
                  {pair.map((post, postIndex) => (
                    <FeaturedCard
                      key={postIndex}
                      title={post.title}
                      description={post.full_description}
                      image={post.image}
                      link={post.link}
                      org={post.org}
                    />
                  ))}
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Featured;
