import React from "react";
import { Box, Card } from "@mui/material";
import RamadanCalendar from "../images/ramadan_calendar.jpg";
import HeroPage from "../components/common/HeroPage";

const Calendar = () => {
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
