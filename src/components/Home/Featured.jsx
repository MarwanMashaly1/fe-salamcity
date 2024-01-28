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
      .get("/api/v1/snmc/events")
      .then((response) => {
        const snmcEvents = response.data.slice(0, 2);
        const snmcEventsMapped = snmcEvents.map((event, index) => ({
          title: event.title,
          description: event[0],
          image: event[1],
          link: "",
          org: "SNMC",
          key: `snmc-${index}`,
        }));
        return snmcEventsMapped;
      })
      .then((snmcEventsMapped) => {
        return axios.get("/api/v1/masjidrahma/events").then((response) => {
          const rahmaEvents = response.data.slice(0, 2);
          const rahmaEventsMapped = rahmaEvents.map((event, index) => ({
            title: event[0],
            description: event[2][0],
            image: event[2][1],
            link: event[1],
            org: "masjidRahma",
            key: `rahma-${index}`,
          }));
          return [...snmcEventsMapped, ...rahmaEventsMapped];
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
                      description={post.description}
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
