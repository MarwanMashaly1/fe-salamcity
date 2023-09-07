// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

// import EventCard from "../components/EventCard"; // Assuming you have an EventCard component
// import Hero from "../components/Hero"; // Assuming you have a Hero component

// const Events = () => {
//   const organizations = ["All Organizations", "SNMC", "Masjid ar-Rahma"];
//   const [selectedOrganization, setSelectedOrganization] = useState("");
//   const [snmcEvents, setSNMCEvents] = useState([]);
//   const [rahmaEvents, setRahmaEvents] = useState([]);

//   useEffect(() => {
//     // Fetch SNMC events using Axios
//     axios
//       .get("http://127.0.0.1:5000/snmc/events")
//       .then((response) => {
//         setSNMCEvents(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching SNMC events:", error);
//       });

//     // Fetch Masjid Rahma events using Axios
//     axios
//       .get("http://127.0.0.1:5000/masjidrahma/events")
//       .then((response) => {
//         setRahmaEvents(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching Masjid Rahma events:", error);
//       });
//   }, []);

//   // Format SNMC events
//   const snmcFormattedEvents = snmcEvents.map((event) => ({
//     title: "", // Leave title blank since it's not available for SNMC events
//     description: event[0],
//     image: event[1],
//     link: "", // You can add a link if needed
//   }));

//   // Format Masjid Rahma events
//   const rahmaFormattedEvents = rahmaEvents.map((event) => ({
//     title: event[0],
//     description: event[2][0],
//     image: event[2][1],
//     link: event[1], // You can add a link if needed
//   }));

//   // Merge the formatted events from both organizations
//   const formattedEventsList = [
//     ...(selectedOrganization === "SNMC" ? snmcFormattedEvents : []),
//     ...(selectedOrganization === "Masjid ar-Rahma" ? rahmaFormattedEvents : []),
//   ];

//   return (
//     <div className="Events">
//       <div className="Hero">
//         <Hero />
//       </div>
//       <div className="events-filter">
//         <FormControl sx={{ marginRight: "10px" }} className="org-filter">
//           <InputLabel>{"Organization"}</InputLabel>
//           <Select
//             value={selectedOrganization}
//             onChange={(event) => setSelectedOrganization(event.target.value)}
//             className="org-select"
//           >
//             {organizations.map((organization) => (
//               <MenuItem value={organization} key={organization}>
//                 {organization}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>
//       <div className="events-section">
//         {formattedEventsList.map((event, index) => (
//           <EventCard
//             key={index}
//             title={event.title}
//             description={event.description}
//             image={event.image}
//             link={event.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;

import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import EventCard from "../components/EventCard";
import { Box } from "@mui/material";

const Events = () => {
  const organizations = ["All Organizations", "SNMC", "Masjid ar-Rahma"];
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [snmcEvents, setSNMCEvents] = useState([]);
  const [rahmaEvents, setRahmaEvents] = useState([]);

  useEffect(() => {
    // Fetch SNMC events using Axios
    axios
      .get("http://127.0.0.1:5000/snmc/events")
      .then((response) => {
        setSNMCEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching SNMC events:", error);
      });

    // Fetch Masjid Rahma events using Axios
    axios
      .get("http://127.0.0.1:5000/masjidrahma/events")
      .then((response) => {
        setRahmaEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Masjid Rahma events:", error);
      });
  }, []);

  const renderEvents = () => {
    let eventsToRender = [];

    if (selectedOrganization === "SNMC") {
      eventsToRender = snmcEvents.map((event, index) => ({
        title: event.title, // Modify according to your SNMC event structure
        description: event[0], // Modify according to your SNMC event structure
        image: event[1], // Modify according to your SNMC event structure
        link: event.link, // Modify according to your SNMC event structure
        key: index,
      }));
    } else if (selectedOrganization === "Masjid ar-Rahma") {
      eventsToRender = rahmaEvents.map((event, index) => ({
        title: event[0],
        description: event[2][0],
        image: event[2][1],
        link: event[1],
        key: index,
      }));
    } else {
      // When "All Organizations" is selected, combine both SNMC and Rahma events
      const snmcEventsMapped = snmcEvents.map((event, index) => ({
        title: event.title, // Modify according to your SNMC event structure
        description: event[0],
        image: event[1], // Modify according to your SNMC event structure
        link: "",
        key: `snmc-${index}`,
      }));

      const rahmaEventsMapped = rahmaEvents.map((event, index) => ({
        title: event[0],
        description: event[2][0],
        image: event[2][1],
        link: event[1],
        key: `rahma-${index}`,
      }));

      eventsToRender = [...snmcEventsMapped, ...rahmaEventsMapped];
    }

    // Filter out events that lack descriptions
    eventsToRender = eventsToRender.filter((event) => event.description);

    return eventsToRender.map((event) => (
      <Grid item key={event.key} xs={12} sm={6} md={6} lg={6} xl={6}>
        <EventCard
          title={event.title}
          description={event.description}
          image={event.image}
          link={event.link}
        />
      </Grid>
    ));
  };

  return (
    <div className="events-container">
      <div className="events-hero">
        <Box sx={{ flexGrow: 1 }}>
          <h1 className="events-hero-title">Events</h1>
        </Box>
      </div>

      <div className="events-filter">
        <FormControl
          sx={{ marginRight: "10px", width: "200px" }}
          className="org-filter"
        >
          <InputLabel>{"Organization"}</InputLabel>
          <Select
            value={selectedOrganization}
            onChange={(event) => setSelectedOrganization(event.target.value)}
            className="org-select"
          >
            {organizations.map((organization) => (
              <MenuItem value={organization} key={organization}>
                {organization}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2} className="events-grid">
        {renderEvents()}
      </Grid>
    </div>
  );
};

export default Events;
