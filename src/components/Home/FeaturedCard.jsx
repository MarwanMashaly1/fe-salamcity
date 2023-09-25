import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "../../styles/FeaturedCard.css";

const FeaturedCard = ({ title, description, image, link }) => {
  // Check if the image URL is available
  const hasImage = image && image.trim() !== "";

  return (
    <Card className="featured-card">
      <div className={`event-card-img ${hasImage ? "" : "no-image-box"}`}>
        {hasImage ? (
          <img src={image} alt={title} />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <CardContent>
        <span className="featured-card-span-title">
          <Typography variant="h6" className="event-card-title">
            {title}
          </Typography>
        </span>
        <span className="featured-card-span-desc">
          <Typography variant="body2" className="event-card-desc">
            {description}
          </Typography>
        </span>
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
