import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HeroPage from "../components/HeroPage";
// import "../styles/Contact.css";

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    message: false,
  });
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = () => {
    const { fullName, email, company, message } = formValues;

    if (fullName && email && company && message) {
      // Reset form errors
      setFormErrors({
        fullName: false,
        email: false,
        company: false,
        message: false,
      });

      // Logic for form submission
      setOpenSnackbar(true);
      setIsButtonClicked(true);
    } else {
      // Display form error messages
      setFormErrors({
        fullName: fullName ? false : "Please enter your full name",
        email: email ? false : "Please enter a valid email",
        company: company ? false : "Please enter your company",
        message: message ? false : "Please enter your message",
      });

      setOpenSnackbar(true);
      setIsButtonClicked(false);
    }
  };

  const handleFormChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div>
      <div className="prayer-times-hero">
        <HeroPage
          title="Local Guide"
          desc="Find the nearest mosque and halal restaurant in your area."
        />
      </div>
      <div className="hero-contact">
        <h1>Contact</h1>
      </div>
      <div className="contact">
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "80%",
              margin: "0 auto",
              typography: "body1",
            }}
            component="div"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    backgroundColor: "#f9e4bc",
                    boxShadow: "none",
                    borderRadius: "10px",
                  }}
                  // elevation={3}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      <PhoneIcon
                        sx={{
                          marginRight: "10px",
                          marginBottom: "5px",
                          fontSize: "1.5rem",
                        }}
                      />
                      Phone
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      (343) 456-7890
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    backgroundColor: "#f9e4bc",
                    boxShadow: "none",
                    borderRadius: "10px",
                  }}
                  // elevation={3}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      <EmailIcon
                        sx={{
                          marginRight: "10px",
                          marginBottom: "5px",
                          fontSize: "1.5rem",
                        }}
                      />
                      Email
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      muslimnav@gmail.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "80%",
              margin: "0 auto",
              typography: "body1",
            }}
            component="div"
          >
            <Typography variant="h4" gutterBottom>
              Send us a message
            </Typography>
            <Typography variant="body2" gutterBottom>
              We will get back to you as soon as possible.
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                id="fullName"
                label="Full Name"
                variant="outlined"
                color="primary"
                sx={{ width: "100%", marginBottom: "20px" }}
                onChange={handleFormChange}
                error={formErrors.fullName}
                helperText={formErrors.fullName}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                color="primary"
                sx={{ width: "100%", marginBottom: "20px" }}
                onChange={handleFormChange}
                error={formErrors.email}
                helperText={formErrors.email}
              />

              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                color="primary"
                sx={{ width: "100%", marginBottom: "20px" }}
                onChange={handleFormChange}
                error={formErrors.message}
                helperText={formErrors.message}
              />
              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#a67c00",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
