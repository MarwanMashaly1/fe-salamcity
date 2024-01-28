// eventUtils.js
import axios from "axios";

const calculateDistance = (location1, location2) => {
  const toRadians = (degree) => degree * (Math.PI / 180);

  const earthRadius = 6371; // Earth radius in kilometers

  const lat1 = location1.latitude;
  const lon1 = location1.longitude;
  const lat2 = location2.latitude;
  const lon2 = location2.longitude;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return distance;
};

const sortEventsByDistance = (userLocation, events) => {
  const convertAddressToCoordinates = async (address) => {
    try {
      const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
      } else {
        console.error("Geocoding error: No results found");
        return null;
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      return null;
    }
  };

  return events
    .map((event) => {
      const eventLocation = convertAddressToCoordinates(event.address);
      const distance = calculateDistance(userLocation, eventLocation);
      return { ...event, distance };
    })
    .sort((a, b) => a.distance - b.distance);
};

export { calculateDistance, sortEventsByDistance };
