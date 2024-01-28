import React, { useState } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import MarriageIcon from "@mui/icons-material/Favorite";
// import CounsellingIcon from "@mui/icons-material/Forum";
// import ZakatIcon from "@mui/icons-material/AttachMoney";
// import EducationIcon from "@mui/icons-material/School";
import HeroPage from "../components/common/HeroPage";
import mosques from "../utils/mosque_details";
import MasjidCard from "../components/Masjids/MasjidCard";

// const serviceIcons = {
//   Marriage: <MarriageIcon />,
//   Counselling: <CounsellingIcon />,
//   Zakat: <ZakatIcon />,
//   Education: <EducationIcon />,
// };

const Mosques = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <div className="prayer-times-hero">
        <HeroPage
          title="Mosques"
          desc="Learn more about the mosques in your area."
        />
      </div>
      <TextField
        variant="outlined"
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={{ marginBottom: "2%", marginTop: "2%" }}
      />
      <div style={{ padding: "25px" }}>
        <Grid container spacing={4}>
          {mosques
            .filter(
              (mosque) =>
                mosque.name.toLowerCase().includes(search.toLowerCase()) ||
                mosque.address.toLowerCase().includes(search.toLowerCase())
            )
            .map((mosque) => (
              <Grid item xs={12} sm={6} md={4} key={mosque.id}>
                <MasjidCard mosque={mosque} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Mosques;
