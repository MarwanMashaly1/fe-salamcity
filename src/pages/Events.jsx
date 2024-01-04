import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import HeroPage from "../components/common/HeroPage";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Modal,
  Box,
  Button,
} from "@mui/material";

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const Events = () => {
  const organizations = ["All Organizations", "SNMC", "Masjid ar-Rahma", "KMA"];
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [snmcEvents, setSNMCEvents] = useState([]);
  const [rahmaEvents, setRahmaEvents] = useState([]);
  const [kmaEvents, setKMAEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch SNMC events using Axios
    axios
      .get("api/v1/snmc/events")
      .then((response) => {
        setSNMCEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching SNMC events:", error);
      });

    // Fetch Masjid Rahma events using Axios
    axios
      .get("api/v1/masjidrahma/events")
      .then((response) => {
        setRahmaEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Masjid Rahma events:", error);
      });

    // Fetch KMA events using Axios
    axios
      .get("api/v1/kma/events")
      .then((response) => {
        setKMAEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching KMA events:", error);
      });
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

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
    } else if (selectedOrganization === "KMA") {
      eventsToRender = kmaEvents.map((event, index) => {
        let descriptionText = "No Description Available";
        let imageUrl = "";

        if (event[7] && Array.isArray(event[7])) {
          if (validURL(event[7][3])) {
            descriptionText = event[7][0];
            imageUrl = event[7][3];
          } else if (validURL(event[7][0])) {
            imageUrl = event[7][0];
          }
        }

        return {
          title: event[0] || "Untitled",
          date: event[1],
          time_start: event[2],
          time_end: event[3],
          location: event[4],
          description: descriptionText,
          image: imageUrl,
          link: event[6] || "#",
          key: index,
        };
      });
    } else {
      // When "All Organizations" is selected, combine both SNMC and Rahma events
      const snmcEventsMapped = snmcEvents.map((event, index) => ({
        title: event.title, // Modify according to your SNMC event structure
        description: event[0],
        image: event[1], // Modify according to your SNMC event structure
        link: "snmc.ca",
        key: `snmc-${index}`,
        org: "SNMC",
      }));

      const rahmaEventsMapped = rahmaEvents.map((event, index) => ({
        title: event[0],
        description: event[2][0],
        image: event[2][1],
        link: event[1],
        key: `rahma-${index}`,
        org: "Masjid ar-Rahma",
      }));

      const kmaEventsMapped = kmaEvents.map((event, index) => {
        let descriptionText = "No Description Available";
        let imageUrl = "";

        if (event[7] && Array.isArray(event[7])) {
          if (validURL(event[7][3])) {
            descriptionText = event[7][0];
            imageUrl = event[7][3];
          } else if (validURL(event[7][0])) {
            imageUrl = event[7][0];
          }
        }

        return {
          title: event[0],
          date: event[1],
          time_start: event[2],
          time_end: event[3],
          location: event[4],
          description: descriptionText,
          image: imageUrl,
          link: event[6],
          key: `kma-${index}`,
          org: "KMA",
        };
      });

      eventsToRender = [
        ...snmcEventsMapped,
        ...rahmaEventsMapped,
        ...kmaEventsMapped,
      ];
    }

    // Filter out events that lack descriptions
    eventsToRender = eventsToRender.filter((event) => event.description);

    return eventsToRender.map((event) => (
      <Grid
        item
        key={event.key}
        xs={12}
        sm={6}
        md={6}
        lg={6}
        xl={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EventCard
          title={event.title}
          description={event.description}
          image={event.image}
          link={event.link}
          onClick={() => openModal(event)}
          org={event.org}
        />
      </Grid>
    ));
  };

  const EventModal = () => (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="event-modal"
      aria-describedby="event-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>{selectedEvent?.title}</h2>
        <p>{selectedEvent?.description}</p>
        <Button onClick={closeModal} variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );

  return (
    <div className="events-container">
      <div className="events-hero">
        <HeroPage
          title="Events"
          desc="Discover various events across the city"
        />
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
      <Grid
        container
        spacing={2}
        className="events-grid"
        sx={{ justifyContent: "center" }}
      >
        {renderEvents()}
      </Grid>
      <EventModal />
    </div>
  );
};

export default Events;
