import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import HeroPage from "../components/common/HeroPage";
import emailjs from "@emailjs/browser";

// import "../styles/Contact.css";

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, message } = formValues;

    if (fullName && email && message) {
      // Reset form errors
      setFormErrors({
        fullName: false,
        email: false,
        message: false,
      });

      // Send email
      emailjs
        .send(
          "mailtrap_send_service",
          "template_b0zc0vm",
          {
            message: message,
            from_name: fullName,
            reply_to: email,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setEmailStatus("Email sent successfully!");
            setOpenSnackbar(true);
            setIsButtonClicked(true);
          },
          (err) => {
            console.log("FAILED...", err);
            setEmailStatus("Failed to send email.");
            setOpenSnackbar(true);
            setIsButtonClicked(false);
          }
        );

      // Logic for form submission
    } else {
      // Display form error messages
      setFormErrors({
        fullName: fullName ? false : "Please enter your full name",
        email: email ? false : "Please enter a valid email",
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
          title="Contact Us"
          desc="Find the nearest mosque and halal restaurant in your area."
        />
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={isButtonClicked ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {isButtonClicked ? "Form submitted successfully!" : emailStatus}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
