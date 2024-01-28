import { useState, useEffect } from "react";

const LocationFetcher = ({ onLocationUpdate }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser");
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    // Notify the parent component about the user's location
    if (userLocation) {
      onLocationUpdate(userLocation);
    }
  }, [userLocation, onLocationUpdate]);

  return null; // This component doesn't render anything
};

export default LocationFetcher;
