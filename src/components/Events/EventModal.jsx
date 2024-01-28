// EventModal.js

import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
        width: "90%", // Adjust the percentage based on your preference
        maxWidth: 600, // Set your desired maximum width here
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        margin: "auto", // Center the modal horizontally
      }}
    >
      <h2>{selectedEvent?.title}</h2>
      <p
        style={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {selectedEvent?.description}
      </p>
      <Button
        onClick={closeModal}
        variant="contained"
        sx={{ backgroundColor: "#4a6741" }}
      >
        Close
      </Button>
    </Box>
  </Modal>
);

export default EventModal;
