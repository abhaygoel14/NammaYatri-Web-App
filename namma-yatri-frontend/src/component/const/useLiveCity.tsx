import { useState, useEffect } from "react";

function useLiveCity() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        async function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            //console.log(data);
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
  }, [latitude, longitude]);

  return { city, error, latitude, longitude };
}

export default useLiveCity;
