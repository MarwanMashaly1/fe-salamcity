import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a new context
export const MosqueContext = createContext();

// Create a provider component
export const MosqueProvider = ({ children }) => {
  const [mosques, setMosques] = useState([]);

  useEffect(() => {
    // Fetch prayer times when the component mounts
    const fetchPrayerTimes = async () => {
      const rahmaResponse = await axios.get(
        "http://127.0.0.1:5000/masjidrahma/prayer"
      );
      const snmcResponse = await axios.get("http://127.0.0.1:5000/snmc/prayer");
      setMosques([rahmaResponse.data, snmcResponse.data]);
    };

    fetchPrayerTimes();
  }, []);

  return (
    <MosqueContext.Provider value={mosques}>{children}</MosqueContext.Provider>
  );
};
