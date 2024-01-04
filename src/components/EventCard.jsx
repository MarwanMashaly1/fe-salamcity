import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "../styles/EventCard.css";
import snmc from "../images/snmc_img.jpg";
import rahma from "../images/MasjidRahma_img.jpg";

const EventCard = ({ title, description, image, link, onClick, org }) => {
  // Check if the image URL is available
  const hasImage = image && image.trim() !== "";

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
        ) : org === "snmc" ? (
          <img src={snmc} alt={title} />
        ) : org === "Masjid ar-Rahma" ? (
          <img src={rahma} alt={title} />
        ) : (
          <Typography variant="h6" className="event-card-org">
            {org}
          </Typography>
        )}
      </div>

      <CardContent>
        <span className="event-card-span-title">
          <Typography
            variant="h6"
            className="event-card-title"
            sx={{
              marginTop: "3%",
            }}
          >
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
