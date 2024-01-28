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
  const organizations = [
    "All Organizations",
    "UOMSA",
    "SNMC",
    "Masjid ar-Rahma",
    "KMA",
    "OMA",
    "CUMSA",
    "Jami Omar",
    "Barrhaven Islamic Centre",
  ];
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [snmcEvents, setSNMCEvents] = useState([]);
  const [rahmaEvents, setRahmaEvents] = useState([]);
  const [kmaEvents, setKMAEvents] = useState([]);
  const [omaEvents, setOMAEvents] = useState([]);
  const [uomsaEvents, setUOMSAEvents] = useState([]);
  const [cumsaEvents, setCUMSAEvents] = useState([]);
  const [JamiOmarEvents, setJamiOmarEvents] = useState([]);
  const [bicEvents, setBicEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const eventsPerPage = 12; // Number of events to display per page
  let eventsToRender = [];

  useEffect(() => {
    // Function to fetch events for an organization
    const fetchEventsForOrganization = (organization, setEvents) => {
      try {
        return axios
          .get(`api/v1/${organization.toLowerCase()}/events`)
          .then((response) => setEvents(response.data));
      } catch (error) {
        console.error(`Error fetching ${organization} events:`, error);
      }
    };

    // List of organizations
    const organizations = [
      "UOMSA",
      "SNMC",
      "MasjidRahma",
      "KMA",
      "OMA",
      "CUMSA",
      "JamiOmar",
      "barrhavenislamiccentre",
    ];

    // Fetch events for all organizations simultaneously
    Promise.all(
      organizations.map((organization) =>
        fetchEventsForOrganization(organization, (events) => {
          switch (organization) {
            case "SNMC":
              setSNMCEvents(events);
              break;
            case "MasjidRahma":
              setRahmaEvents(events);
              break;
            case "KMA":
              setKMAEvents(events);
              break;
            case "OMA":
              setOMAEvents(events);
              break;
            case "UOMSA":
              setUOMSAEvents(events);
              break;
            case "CUMSA":
              setCUMSAEvents(events);
              break;
            case "JamiOmar":
              setJamiOmarEvents(events);
              break;
            case "barrhavenislamiccentre":
              setBicEvents(events);
              break;
            default:
              break;
          }
        })
      )
    );
    setIsLoading(false);
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

  const renderEvents = () => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;

    if (selectedOrganization === "SNMC") {
      eventsToRender = snmcEvents.map((event, index) => ({
        title: event.title,
        description: event[0],
        image: event[1],
        link: "snmc.ca",
        key: index,
        org: "SNMC",
      }));
    } else if (selectedOrganization === "Masjid ar-Rahma") {
      eventsToRender = rahmaEvents.map((event, index) => ({
        title: event[0],
        description: event[2][0],
        image: event[2][1],
        link: event[1],
        key: index,
        org: "Masjid ar-Rahma",
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
    } else if (selectedOrganization === "OMA") {
      eventsToRender = omaEvents.map((event, index) => ({
        title: "",
        description: event[0],
        image: event[1],
        link: event[4],
        key: index,
      }));
    } else if (selectedOrganization === "UOMSA") {
      eventsToRender = uomsaEvents.map((event, index) => ({
        title: "",
        description: event[0],
        image: event[1],
        link: event[4],
        key: index,
      }));
    } else if (selectedOrganization === "CUMSA") {
      eventsToRender = cumsaEvents.map((event, index) => ({
        title: "",
        description: event[0],
        image: event[1],
        link: event[4],
        key: index,
      }));
    } else if (selectedOrganization === "Jami Omar") {
      eventsToRender = JamiOmarEvents.map((event, index) => ({
        title: event[1],
        description: event[2] + ", " + event[4] + ". Link for it: " + event[3],
        image: event[0],
        link: "https://www.jamiomar.org/",
        key: index,
      }));
    } else if (selectedOrganization === "Barrhaven Islamic Centre") {
      eventsToRender = bicEvents.map((event, index) => {
        if (event[0] === null) {
          event[0] = "No Description Available";
        }
        return {
          title: "",
          description: event[0],
          image: event[1],
          link: event[4] || "",
          key: `bic-${index}`,
          org: "Barrhaven Islamic Centre",
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

      const omaEventsMapped = omaEvents.map((event, index) => ({
        title: "",
        description: event[0],
        image: event[1],
        link: event[4] || "",
        key: `oma-${index}`,
        org: "OMA",
      }));

      const uomsaEventsMapped = uomsaEvents.map((event, index) => ({
        title: "",
        description: event[0],
        image: event[1],
        link: event[4] || "",
        key: `uomsa-${index}`,
        org: "UOMSA",
      }));

      const cumsaEventsMapped = cumsaEvents.map((event, index) => ({
        title: "",
        description: event[0],
        image: event[1],
        link: event[4] || "",
        key: `cumsa-${index}`,
        org: "CUMSA",
      }));

      const bicEventsMapped = bicEvents.map((event, index) => {
        if (event[0] === null) {
          event[0] = "No Description Available";
        }
        return {
          title: "",
          description: event[0],
          image: event[1],
          link: event[4] || "",
          key: `bic-${index}`,
          org: "Barrhaven Islamic Centre",
        };
      });

      const jamiOmarEventsMapped = JamiOmarEvents.map((event, index) => ({
        title: event[1],
        description: event[2] + ", " + event[4] + ". Link for it: " + event[3],
        image: event[0],
        link: "https://www.jamiomar.org/",
        key: `jamiOmar-${index}`,
        org: "JamiOmar",
      }));

      eventsToRender = [
        ...uomsaEventsMapped,
        ...snmcEventsMapped,
        ...rahmaEventsMapped,
        ...kmaEventsMapped,
        ...omaEventsMapped,
        ...cumsaEventsMapped,
        ...jamiOmarEventsMapped,
        ...bicEventsMapped,
      ];
    }

    // Filter out events that lack descriptions
    eventsToRender = eventsToRender.filter((event) => event.description);

    return eventsToRender.slice(startIndex, endIndex).map((event) => (
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
                onChange={(event) =>
                  setSelectedOrganization(event.target.value)
                }
                className="org-select"
                label="Organization"
                inputProps={{
                  name: "organization",
                  id: "organization-select",
                }}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={Math.ceil(eventsToRender.length / eventsPerPage)}
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
