// import React from "react";
// import { CardActions, Button, Typography } from "@mui/material";
// import "../styles/EventCard.css";

// const EventCard = ({ title, description, image, link }) => {
//   console.log(image);
//   return (
//     <div className="event-card">
//       <div className="event-card-img">
//         <img src={image} alt={title} />
//       </div>
//       <div className="event-card-info">
//         <h2 className="event-card-title">{title}</h2>
//         <p className="event-card-desc">{description}</p>
//       </div>
//       <CardActions className="event-card-actions">
//         <Button href={link} target="_blank" rel="noopener noreferrer">
//           Learn More
//         </Button>
//       </CardActions>
//     </div>
//   );
// };

// export default EventCard;
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "../styles/EventCard.css";

const EventCard = ({ title, description, image, link }) => {
  // Check if the image URL is available
  const hasImage = image && image.trim() !== "";

  return (
    <Card className="event-card">
      <div className={`event-card-img ${hasImage ? "" : "no-image-box"}`}>
        {hasImage ? (
          <img src={image} alt={title} />
        ) : (
          <div className="no-image">No Image Available</div>
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
        <Button href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
