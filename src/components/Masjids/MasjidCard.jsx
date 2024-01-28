// // Import necessary components and icons
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   IconButton,
//   Chip,
//   Tooltip,
//   Button,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// // import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LanguageIcon from "@mui/icons-material/Language";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";

// const MasjidCard = ({ mosque }) => {
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const [isTextOverflowing, setIsTextOverflowing] = useState(false);
//   const descriptionRef = useRef(null);

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   useEffect(() => {
//     const isOverflowing =
//       descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
//     setIsTextOverflowing(isOverflowing);
//   }, [showFullDescription]);

//   return (
//     <Card
//       style={{
//         backgroundColor: "#f3eff0",
//         marginBottom: "20px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <CardContent>
//         <Typography
//           variant="h5"
//           style={{ color: "#4a6741", marginBottom: "10px" }}
//         >
//           {mosque.name}
//         </Typography>
//         <img
//           src={mosque.image}
//           alt={mosque.name}
//           style={{
//             width: "100%",
//             height: "200px",
//             objectFit: "cover",
//             borderRadius: "8px",
//           }}
//         />
//         <Typography
//           variant="body2"
//           style={{
//             marginTop: "10px",
//             overflow: "hidden",
//             maxHeight: showFullDescription ? "none" : "60px",
//           }}
//           ref={descriptionRef}
//         >
//           {mosque.description}
//         </Typography>
//         {isTextOverflowing && (
//           <Button onClick={toggleDescription}>
//             {showFullDescription ? "Read Less" : "read more..."}
//           </Button>
//         )}
//         <Grid
//           container
//           spacing={2}
//           alignItems="center"
//           style={{ marginTop: "10px" }}
//         >
//           {/* Location and Phone */}
//           <Grid item xs={6}>
//             <IconButton color="primary" aria-label="location">
//               <LocationOnIcon />
//             </IconButton>
//             {mosque.address}
//           </Grid>
//           <Grid item xs={6} sx={{}}>
//             <IconButton color="primary" aria-label="phone">
//               <EmailIcon />
//             </IconButton>
//             {mosque.contact}
//           </Grid>
//           {/* Services */}
//           <Grid item xs={12} style={{ marginTop: "10px" }}>
//             <Grid
//               container
//               spacing={1}
//               alignItems="center"
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               {mosque.services.map((service) => (
//                 <Grid item key={service}>
//                   <Chip
//                     label={service}
//                     style={{
//                       margin: "3px",
//                       backgroundColor: "#4a6741",
//                       color: "white",
//                     }}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//           {/* Website, Facebook, Instagram */}
//           <Grid item xs={4}>
//             <Tooltip title="Visit website">
//               <IconButton
//                 color="primary"
//                 aria-label="website"
//                 component="a"
//                 href={mosque.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <LanguageIcon />
//               </IconButton>
//             </Tooltip>
//           </Grid>
//           <Grid item xs={4}>
//             <Tooltip title="Visit Facebook">
//               <IconButton
//                 color="primary"
//                 aria-label="facebook"
//                 component="a"
//                 href={mosque.facebook}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FacebookIcon />
//               </IconButton>
//             </Tooltip>
//           </Grid>
//           <Grid item xs={4}>
//             <Tooltip title="Visit Instagram">
//               <IconButton
//                 color="primary"
//                 aria-label="instagram"
//                 component="a"
//                 href={mosque.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <InstagramIcon />
//               </IconButton>
//             </Tooltip>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default MasjidCard;

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Chip,
  Tooltip,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const MasjidCard = ({ mosque }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const isOverflowing =
      descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
    setIsTextOverflowing(isOverflowing);
  }, [showFullDescription]);

  return (
    <Card
      style={{
        backgroundColor: "#f3eff0",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          style={{ color: "#4a6741", marginBottom: "10px" }}
        >
          {mosque.name}
        </Typography>
        <img
          src={mosque.image}
          alt={mosque.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Typography
          variant="body2"
          style={{
            marginTop: "10px",
            overflow: "hidden",
            maxHeight: showFullDescription ? "none" : "60px",
          }}
          ref={descriptionRef}
        >
          {mosque.description}
        </Typography>
        {isTextOverflowing && (
          <Button onClick={toggleDescription}>
            {showFullDescription ? "Read Less" : "read more..."}
          </Button>
        )}
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ marginTop: "10px" }}
        >
          {/* Location and Phone */}
          <Grid item xs={12} sm={6}>
            <IconButton color="primary" aria-label="location">
              <LocationOnIcon />
            </IconButton>
            {mosque.address}
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconButton color="primary" aria-label="email">
              <EmailIcon />
            </IconButton>
            {mosque.contact}
          </Grid>
          {/* Services */}
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {mosque.services.map((service) => (
                <Grid item key={service}>
                  <Chip
                    label={service}
                    style={{
                      margin: "3px",
                      backgroundColor: "#4a6741",
                      color: "white",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Website, Facebook, Instagram */}
          <Grid item xs={4}>
            <Tooltip title="Visit website">
              <IconButton
                color="primary"
                aria-label="website"
                component="a"
                href={mosque.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="Visit Facebook">
              <IconButton
                color="primary"
                aria-label="facebook"
                component="a"
                href={mosque.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="Visit Instagram">
              <IconButton
                color="primary"
                aria-label="instagram"
                component="a"
                href={mosque.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MasjidCard;
