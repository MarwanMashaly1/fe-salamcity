import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import HeroPage from "../components/common/HeroPage";
import { ExpandMore as ExpandMoreIcon, HelpOutline } from "@mui/icons-material";

const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to serve as a comprehensive resource for the Muslim community. It provides information on various events across multiple Muslim organizations, displays prayer times in mosques, offers local city guides, and more. By consolidating all this information in one place, the website aims to facilitate easy access to relevant and useful information, fostering a sense of community and promoting engagement among its users. It also includes a FAQ section to address common queries and provide further assistance to its users. In essence, the website is designed to cater to the needs and interests of the Muslim community, providing a platform that is both informative and user-friendly.",
    },
    {
      question: "How often is the information on the website updated?",
      answer: "The information in the website is updated twice a day",
    },
    {
      question: "How accurate are the prayer times listed on the website?",
      answer:
        "They are directly taken from the masjids website so they are accurate by 100%",
    },
    {
      question: "What should I do if I find incorrect information?",
      answer:
        "Please send us a message in the contact us page and let us know what is wrong. We will get to it as soon as possible",
    },
    {
      question: "Are all events and courses listed free?",
      answer:
        "Not Necessiraly, events fees will depends on the organizer and the event so check the description and visit their website for more information",
    },
    {
      question:
        "How can I request for an organization or institution to be added?",
      answer:
        "You can request for an organization or institution to be added by contacting us or filling out the following form https://forms.gle/5KnhzwAcxhTGAPez5",
    },
    {
      question: "How can I request for a feature to be added?",
      answer:
        "We are glad that you are looking into improving the website for the community. You can give us more information on what you would like to see by contacting us.",
    },
    // Add more FAQs as needed
  ];

  const handleChange = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div>
      <div className="prayer-times-hero">
        <HeroPage
          title="FAQs"
          desc="Find answers to frequently asked questions"
        />
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={() => handleChange(index)}
            sx={{
              width: "80%",
              marginBottom: "20px",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              // "@media (max-width: 600px)": {
              //   width: "100%",
              // },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-${index}-content`}
              id={`faq-${index}-header`}
            >
              <HelpOutline />
              <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  );
};

export default FaqPage;
