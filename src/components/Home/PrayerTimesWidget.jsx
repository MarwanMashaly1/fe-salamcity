// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import moment from "moment";

// const PrayerTimesWidget = () => {
//   const [prayerTimes, setPrayerTimes] = useState([]);
//   const [currentPrayer, setCurrentPrayer] = useState("");

//   useEffect(() => {
//     axios
//       .get("api/v1/prayer_times/3")
//       .then((response) => {
//         console.log(response.data);
//         const prayers = response.data.slice(1); // Exclude the headers
//         prayers.pop(); // Remove the last row (Jumuah)
//         setPrayerTimes(prayers);

//         // Determine current prayer
//         const now = moment();
//         for (let i = 1; i < prayers.length - 1; i++) {
//           if (
//             now.isBetween(
//               moment(prayers[i][1], "hh:mm A"),
//               moment(prayers[i + 1][1], "hh:mm A")
//             )
//           ) {
//             setCurrentPrayer(prayers[i][0]);
//             break;
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching prayer times:", error);
//       });
//   }, []);

//   return (
//     <Card
//       elevation={3}
//       sx={{
//         backgroundColor: "#f9e4bc",
//         boxShadow: "none",
//       }}
//     >
//       <CardContent>
//         {/* <Typography variant="h4" gutterBottom>
//           Prayer Times
//         </Typography> */}
//         <Box>
//           <Card sx={{ boxShadow: "none", backgroundColor: "#f9e4bc" }}>
//             <CardContent>
//               <Grid
//                 container
//                 spacing={4}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {prayerTimes.map((prayer) => (
//                   <Grid item xs={4} md={2} key={prayer[0]}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         padding: "10px",
//                         borderRadius: "10px",
//                         width: "100%",
//                         backgroundColor:
//                           currentPrayer === prayer[0] ? "#f0f8ff" : "#ffffff",
//                         boxShadow:
//                           currentPrayer === prayer[0]
//                             ? "0px 2px 5px rgba(0, 0, 255, 0.3)"
//                             : "0px 2px 5px rgba(0, 0, 0, 0.1)",
//                       }}
//                     >
//                       <ScheduleIcon
//                         fontSize="large"
//                         color={
//                           currentPrayer === prayer[0] ? "primary" : "action"
//                         }
//                       />
//                       <Typography
//                         variant="h6"
//                         color={
//                           currentPrayer === prayer[0]
//                             ? "primary"
//                             : "text.primary"
//                         }
//                       >
//                         {prayer[0]}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {prayer[1]}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             </CardContent>
//           </Card>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default PrayerTimesWidget;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import moment from "moment";

const PrayerTimesWidget = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [currentPrayer, setCurrentPrayer] = useState("");

  useEffect(() => {
    axios
      .get("api/v1/prayer_times/3")
      .then((response) => {
        console.log(response.data);
        const prayers = response.data; // Access the array directly
        prayers.pop(); // Remove the last row (Jumuah)
        setPrayerTimes(prayers);

        // Determine current prayer
        const now = moment();
        for (let i = 1; i < prayers.length - 1; i++) {
          if (
            now.isBetween(
              moment(prayers[i].athan_time, "hh:mm A"),
              moment(prayers[i + 1].athan_time, "hh:mm A")
            )
          ) {
            setCurrentPrayer(prayers[i].prayer_name);
            break;
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      });
  }, []);

  return (
    <Card
      elevation={3}
      sx={{
        backgroundColor: "#f9e4bc",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Box>
          <Card
            sx={{
              boxShadow: "none",
              backgroundColor: "#f9e4bc",
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {prayerTimes.map((prayer) => (
                  <Grid item xs={4} md={2} key={prayer.id}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "10px",
                        borderRadius: "10px",
                        width: "100%",
                        backgroundColor:
                          currentPrayer === prayer.prayer_name
                            ? "#f0f8ff"
                            : "#ffffff",
                        boxShadow:
                          currentPrayer === prayer.prayer_name
                            ? "0px 2px 5px rgba(0, 0, 255, 0.3)"
                            : "0px 2px 5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <ScheduleIcon
                        fontSize="large"
                        color={
                          currentPrayer === prayer.prayer_name
                            ? "primary"
                            : "action"
                        }
                      />
                      <Typography
                        variant="h6"
                        color={
                          currentPrayer === prayer.prayer_name
                            ? "primary"
                            : "text.primary"
                        }
                      >
                        {prayer.prayer_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {prayer.athan_time}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PrayerTimesWidget;
