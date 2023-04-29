import { useState, useEffect } from "react";

function useLiveCity() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        async function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setCity(
              data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.county
            );
          } catch (error) {
            setError("Error getting city name.");
          }
        },
        function (error) {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return { city, error };
}

export default useLiveCity;
