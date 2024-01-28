import React, { useEffect, useState } from "react";
import MosqueCard from "../components/MosqueCard";
import axios from "axios";
import { Grid } from "@mui/material";
import HeroPage from "../components/common/HeroPage";
import "../styles/PrayerTimes.css";
import Loader from "../utils/Loader";

const PrayerTimes = () => {
  const [mosques, setMosques] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rahmaResponse = await axios.get("api/v1/masjidrahma/prayer");
        const snmcResponse = await axios.get("api/v1/snmc/prayer");
        const kmaResponse = await axios.get("api/v1/kma/prayer");

        setMosques([rahmaResponse.data, snmcResponse.data, kmaResponse.data]);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || mosques.every((mosque) => mosque.length === 0)) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!mosques.every((mosque) => mosque.length > 0)) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
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
