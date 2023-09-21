import React, { useEffect, useState } from "react";
import MosqueCard from "../components/MosqueCard";
import axios from "axios";
import { Container, Typography, Grid, Skeleton } from "@mui/material";
import "../styles/PrayerTimes.css";

const PrayerTimes = () => {
  const [rahmaPrayerTimes, setRahmaPrayerTimes] = useState([]);
  const [snmcPrayerTimes, setSnmcPrayerTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/masjidrahma/prayer")
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
      .get("http://127.0.0.1:5000/snmc/prayer")
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

  const mosques = [rahmaPrayerTimes, snmcPrayerTimes];

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
      <div className="prayer-times-title">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Prayer Times
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Find the prayer times for different mosques in your city.
          </Typography>
        </Container>
      </div>
      <Grid container spacing={6} sx={{ justifyContent: "center" }}>
        {mosques.map((mosque, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MosqueCard mosque={mosque} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PrayerTimes;
