import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import "../styles/MosqueCard.css";

const MosqueCard = ({ mosque }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".mosque-card");
    let maxHeight = 0;

    cards.forEach((card) => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  }, [mosque]);
  return (
    <Card ref={cardRef} className="mosque-card" sx={{}}>
      <CardContent>
        <Typography
          className="mosque-title"
          variant="h5"
          component="h2"
          sx={{
            color: "#4a6741",
          }}
        >
          {mosque[0][0]}
        </Typography>
        <Typography
          className="mosque-subtitle"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Address: {mosque[0][1]}
        </Typography>
        <Typography
          className="mosque-subtitle"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Contact: {mosque[0][2]}
        </Typography>
        <Table className="mosque-table">
          <TableHead>
            <TableRow>
              <TableCell>Salāh</TableCell>
              <TableCell>Adhān</TableCell>
              <TableCell>Iqāmah</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mosque.slice(1).map((prayerTimeRow, index) => (
              <TableRow key={index}>
                {prayerTimeRow.map((cell, index) => (
                  <TableCell key={index}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MosqueCard;
