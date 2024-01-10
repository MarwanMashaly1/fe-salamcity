import React, { useEffect, useState } from "react";
import MosqueCard from "../components/MosqueCard";
import axios from "axios";
import { Grid, Skeleton } from "@mui/material";
import HeroPage from "../components/common/HeroPage";
import "../styles/PrayerTimes.css";

const PrayerTimes = () => {
  const [rahmaPrayerTimes, setRahmaPrayerTimes] = useState([]);
  const [snmcPrayerTimes, setSnmcPrayerTimes] = useState([]);
  const [kmaPrayerTimes, setKmaPrayerTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("api/v1/masjidrahma/prayer")
      .then((response) => {
        console.log(response);
        setRahmaPrayerTimes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("api/v1/snmc/prayer")
      .then((response) => {
        console.log(response);
        setSnmcPrayerTimes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("api/v1/kma/prayer")
      .then((response) => {
        console.log(response);
        setKmaPrayerTimes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const mosques = [rahmaPrayerTimes, snmcPrayerTimes, kmaPrayerTimes];

  if (loading || mosques.every((mosque) => mosque.length === 0)) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={400} height={300} />
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={400} height={300} />
      </div>
    );
  }

  if (!mosques.every((mosque) => mosque.length > 0)) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={400} height={200} />
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={400} height={118} />
      </div>
    );
  }

  return (
    <div>
      {/* Header is not Done we need to make it look nicer and shaped */}
      <div className="prayer-times-hero">
        <HeroPage
          title="Prayer Times"
          desc="Find out the different prayer times of each Masjid in our city!"
        />
      </div>
      <Grid
        container
        spacing={6}
        sx={{ justifyContent: "center", marginBottom: "40px" }}
      >
        {mosques.map((mosque, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MosqueCard mosque={mosque} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PrayerTimes;
