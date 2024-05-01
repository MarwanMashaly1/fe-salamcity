import React from "react";
import { Box, Card } from "@mui/material";
import RamadanCalendar from "../images/ramadan_calendar.jpg";
import HeroPage from "../components/common/HeroPage";

const Calendar = () => {
  // const [events, setEvents] = useState([]);

  // const calendarID = process.env.REACT_APP_CALENDAR_ID;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  // const getEvents = (calendarID, apiKey) => {
  //   function initiate() {
  //     gapi.client
  //       .init({
  //         apiKey: apiKey,
  //       })
  //       .then(function () {
  //         return gapi.client.request({
  //           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //         });
  //       })
  //       .then(
  //         (response) => {
  //           let events = response.result.items;
  //           setEvents(events);
  //         },
  //         function (err) {
  //           return [false, err];
  //         }
  //       );
  //   }
  //   gapi.load("client", initiate);
  // };

  // useEffect(() => {
  //   const events = getEvents(calendarID, apiKey);
  //   setEvents(events);
  // }, []);

  return (
    <div className="temp-RamadanCalendar">
      <div className="events-hero">
        <HeroPage
          title="Ramadan Calendar"
          desc="Find out the prayer times for the month of Ramadan."
        />
      </div>
      {/* create a section that has a card that contains a calendar image using material ui*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Card
          sx={{
            // maxWidth: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={RamadanCalendar}
            alt="Ramadan Calendar"
            style={{ width: "100%", height: "auto" }}
          />
        </Card>
      </Box>
    </div>
  );
};

export default Calendar;
