import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EventModal = ({ isModalOpen, closeModal, selectedEvent }) => (
  <Modal
    open={isModalOpen}
    onClose={closeModal}
    aria-labelledby="event-modal"
    aria-describedby="event-modal-description"
  >
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: {
          xs: "80%", // Reducing width on smaller screens
          sm: "70%",
          md: "60%",
          lg: "50%",
          xl: "40%",
        },
        maxHeight: {
          xs: "80vh", // Reducing max height on smaller screens
          sm: "90vh",
        },
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        overflowY: "auto", // Enable scrolling on Y-axis
        margin: "auto", // Center the modal horizontally
        borderRadius: 2, // Adding a slight border radius for aesthetics
      }}
    >
      {selectedEvent?.image && (
        <img
          src={selectedEvent?.image}
          alt={selectedEvent?.title}
          style={{
            width: "100%", // Ensures the image is responsive within the container
            height: "auto", // Keeps the aspect ratio of the image
            maxWidth: "600px", // Maximum width of the image
            maxHeight: "70vh", // Maximum height of the image, scales with the viewport
            marginBottom: 2,
            display: "block", // Ensures that the image is treated as a block element
            marginLeft: "auto", // Automatically adjust left margin
            marginRight: "auto", // Automatically adjust right margin
          }}
        />
      )}
      <Typography variant="h4" component="div" gutterBottom>
        {selectedEvent?.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Organized by: {selectedEvent?.organization_name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedEvent?.full_description}
      </Typography>
      {selectedEvent?.start_time && (
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Start Time: {selectedEvent?.start_time}
        </Typography>
      )}
      {selectedEvent?.end_time && (
        <Typography variant="body2" color="text.secondary" gutterBottom>
          End Time: {selectedEvent?.end_time}
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary" gutterBottom>
        More Info: <a href={selectedEvent?.link}>Click Here</a>
      </Typography>
      <Button
        onClick={closeModal}
        variant="contained"
        sx={{ backgroundColor: "#4a6741", mt: 2 }}
      >
        Close
      </Button>
    </Box>
  </Modal>
);

export default EventModal;
