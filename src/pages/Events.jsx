import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import HeroPage from "../components/common/HeroPage";
import EventModal from "../components/Events/EventModal";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Pagination,
  PaginationItem,
} from "@mui/material";
import Loader from "../utils/Loader";

const Events = () => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const eventsPerPage = 12; // Number of events to display per page

  useEffect(() => {
    // Fetch all organizations
    axios
      .get("/api/v1/organizations")
      .then((response) => setOrganizations(response.data))
      .catch((error) => console.error("Error fetching organizations:", error));
    // Fetch all events

    axios
      .get("/api/v1/events")
      .then((response) => {
        setEvents(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleOrganizationChange = (event) => {
    // Reset currentPage to 1 when organization filter changes
    setCurrentPage(1);
    setSelectedOrganization(event.target.value);
  };

  const renderEvents = () => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;

    const uomsaEvents = [];
    const otherEvents = [];

    // Filter events based on the selected organization
    const filteredEvents = selectedOrganization
      ? events.filter((event) => event.organization_id === selectedOrganization)
      : events;

    filteredEvents.forEach((event) => {
      if (event.organization_id === 10) {
        uomsaEvents.push(event);
      } else {
        otherEvents.push(event);
      }
    });

    console.log(selectedEvent);

    // const eventsToRender = filteredEvents.slice(startIndex, endIndex);
    const eventsToRender = uomsaEvents
      .concat(otherEvents)
      .slice(startIndex, endIndex);

    return eventsToRender.map((event) => (
      <Grid
        item
        key={event.id}
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
          description={event.full_description}
          image={event.image}
          link={event.link}
          onClick={() => openModal(event)}
          org={event.organization_id}
        />
      </Grid>
    ));
  };

  const filteredEvents = selectedOrganization
    ? events.filter((event) => event.organization_id === selectedOrganization)
    : events;

  const organizationsWithEvents = Array.from(
    new Set(filteredEvents.map((event) => event.organization_id))
  );

  const filteredOrganizations = organizations.filter((organization) =>
    organizationsWithEvents.includes(organization.id)
  );
  // Calculate the number of pages required to display all events
  const pageCount = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="events">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="events-container" style={{ overflowX: "hidden" }}>
          <div className="events-hero">
            <HeroPage
              title="Events"
              desc="Discover various events across the city"
            />
          </div>

          <div className="events-filter">
            <FormControl
              sx={{ marginTop: "10px", marginRight: "50px", width: "200px" }}
              className="org-filter"
            >
              <InputLabel htmlFor="organization-select">
                Organization
              </InputLabel>
              <Select
                value={selectedOrganization}
                onChange={handleOrganizationChange}
                className="org-select"
                label="Organization"
                inputProps={{
                  name: "organization",
                  id: "organization-select",
                }}
              >
                <MenuItem value="">All Organizations</MenuItem>
                {filteredOrganizations.map((organization) => (
                  <MenuItem value={organization.id} key={organization.id}>
                    {organization.name_short}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              boundaryCount={2}
              sx={{
                marginBottom: "1%",
              }}
              renderItem={(item) => (
                <PaginationItem
                  component={Button}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#4a6741",
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </Box>
          <EventModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            selectedEvent={selectedEvent}
          />
        </div>
      )}
    </div>
  );
};

export default Events;
