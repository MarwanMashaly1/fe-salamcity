import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../../styles/FeaturedCard.css";
import snmc from "../../images/snmc_img.jpg";
import masjidRahma from "../../images/MasjidRahma_img.jpg";
import { AspectRatio } from "@mui/joy";

const FeaturedCard = ({ title, description, image, link, org }) => {
  // Check if the image URL is available
  const hasImage = image && image.trim() !== "";

  return (
    <Card className="featured-card">
      <AspectRatio ratio={3 / 2} objectFit="fill">
        <div className={`event-card-img ${hasImage ? "" : "no-image-box"}`}>
          {hasImage ? (
            <img src={image} alt={title} />
          ) : // check the org name and display the logo
          org === "SNMC" ? (
            <img src={snmc} alt={title} />
          ) : (
            <img src={masjidRahma} alt={title} />
          )}
        </div>
      </AspectRatio>
      <CardContent>
        {title === undefined ? (
          <Typography variant="body2" className="featured-card-desc">
            {description}
          </Typography>
        ) : description === undefined ? (
          <div className="featured-card-date">
            <span className="featured-card-span-title">
              <Typography
                variant="h6"
                className="featured-card-title"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  lineHeight: "1.5rem",
                  color: "#000000",
                }}
              >
                {title}
              </Typography>
            </span>
            <Typography variant="body2" className="featured-card-desc">
              No description available
            </Typography>
          </div>
        ) : (
          <div>
            <span className="featured-card-span-title">
              <Typography
                variant="h6"
                className="featured-card-title"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  lineHeight: "1.5rem",
                  color: "#000000",
                }}
              >
                {title}
              </Typography>
            </span>
            <Typography variant="body2" className="featured-card-desc">
              {description}
            </Typography>
          </div>
        )}
        {/* <span className="featured-card-span-title">
          <Typography
            variant="h6"
            className="event-card-title"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              lineHeight: "1.5rem",
              color: "#000000",
              margin: "1rem",
            }}
          >
            {title}
          </Typography>
        </span> */}
        {/* <span className="featured-card-span-desc">
          <Typography variant="body2" className="event-card-desc">
            {description}
          </Typography>
        </span> */}
      </CardContent>
      {/* <CardActions className="featured-card-actions">
        <Button href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default FeaturedCard;
