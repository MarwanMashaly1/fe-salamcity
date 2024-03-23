import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "../styles/EventCard.css";
import salamCity from "../images/logo.png";
import axios from "axios";

const EventCard = ({ title, description, image, link, onClick, org }) => {
  const [orgImage, setOrgImage] = React.useState(null);
  // Check if the image URL is available
  const hasImage = image && image.trim() !== "";

  useEffect(() => {
    if (!hasImage && org) {
      console.log("Fetching organization image");
      axios
        .get(`/api/v1/organizations/${org}/image`)
        .then((response) => {
          setOrgImage(response.data);
        })
        .catch((error) => {
          console.error("Error fetching organization image", error);
        });
    }
  }, [hasImage, org]);

  const handleCardClick = () => {
    // Call the onClick prop passed from the parent component
    if (onClick) {
      onClick();
    }
  };

  const handleLinkClick = () => {
    // Open the link in a new tab
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Card className="event-card">
      <div className={`event-card-img ${hasImage ? "" : "no-image-box"}`}>
        {hasImage ? (
          <img src={image} alt={title} />
        ) : orgImage ? (
          <img
            src={orgImage}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <img src={salamCity} alt="Salam City" />
        )}
      </div>

      <CardContent>
        <span className="event-card-span-title">
          <Typography variant="h6" className="event-card-title">
            {title}
          </Typography>
        </span>
        <span className="event-card-span-desc">
          <Typography variant="body2" className="event-card-desc">
            {description}
          </Typography>
        </span>
      </CardContent>
      <CardActions className="event-card-actions">
        <Button onClick={handleLinkClick}>Link</Button>
        <Button onClick={handleCardClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
