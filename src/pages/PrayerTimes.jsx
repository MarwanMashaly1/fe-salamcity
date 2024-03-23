// import React, { useEffect, useState } from "react";
// import MosqueCard from "../components/MosqueCard";
// import axios from "axios";
// import { Grid } from "@mui/material";
// import HeroPage from "../components/common/HeroPage";
// import "../styles/PrayerTimes.css";
// import Loader from "../utils/Loader";

// const PrayerTimes = () => {
//   const [mosques, setMosques] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const rahmaResponse = await axios.get("api/v1/masjidrahma/prayer");
//         const snmcResponse = await axios.get("api/v1/snmc/prayer");
//         const kmaResponse = await axios.get("api/v1/kma/prayer");

//         setMosques([rahmaResponse.data, snmcResponse.data, kmaResponse.data]);
//       } catch (error) {
//         console.error("Error fetching prayer times:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading || mosques.every((mosque) => mosque.length === 0)) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   if (!mosques.every((mosque) => mosque.length > 0)) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="prayer-times-hero">
//         <HeroPage
//           title="Prayer Times"
//           desc="Find out the different prayer times of each Masjid in our city!"
//         />
//       </div>
//       <Grid
//         container
//         spacing={6}
//         sx={{ justifyContent: "center", marginBottom: "40px" }}
//       >
//         {mosques.map((mosque, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             key={index}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <MosqueCard mosque={mosque} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default PrayerTimes;

import React, { useEffect, useState } from "react";
import MosqueCard from "../components/MosqueCard";
import axios from "axios";
import { Grid } from "@mui/material";
import HeroPage from "../components/common/HeroPage";
import Loader from "../utils/Loader";

const PrayerTimes = () => {
  const [mosques, setMosques] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prayerTimesResponse = await axios.get("/api/v1/prayer_times");
        const organizationsResponse = await axios.get("/api/v1/organizations");

        setMosques(prayerTimesResponse.data);
        setOrganizations(organizationsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Filter organizations that have prayer times
  const organizationsWithPrayerTimes = organizations.filter((org) =>
    mosques.some((mosque) => mosque.organization_id === org.id)
  );

  // Find the maximum height among all the cards
  const maxCardHeight = Math.max(
    ...organizationsWithPrayerTimes.map((organization) => {
      const relevantMosques = mosques.filter(
        (mosque) => mosque.organization_id === organization.id
      );
      const cardContentHeight =
        150 + // Height for title and other details
        relevantMosques.length * 50 + // Height for each row in the table
        20; // Additional padding
      return cardContentHeight;
    })
  );

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
        sx={{
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {organizationsWithPrayerTimes.map((organization) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={organization.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch", // Ensure the items stretch to the max height
            }}
          >
            {/* Pass the fixed width and max height as style props */}
            <MosqueCard
              organization={organization}
              mosques={mosques.filter(
                (mosque) => mosque.organization_id === organization.id
              )}
              cardWidth={450}
              maxCardHeight={maxCardHeight}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PrayerTimes;
