import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import HeroPage from "../components/common/HeroPage";

const faqs = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  // Add more FAQs as needed
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
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
        }}
      >
        {faqs.map((faq, index) => (
          <Card key={index} sx={{ width: "80%", marginBottom: "20px" }}>
            <CardHeader
              title={faq.question}
              action={
                <IconButton
                  onClick={() => handleClick(index)}
                  aria-expanded={openIndex === index}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              }
            />
            <Collapse in={openIndex === index}>
              <CardContent>
                <Typography>{faq.answer}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default FaqPage;
