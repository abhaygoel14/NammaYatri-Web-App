import { useEffect, useState } from "react";

/**
 * A custom React hook that returns the current latitude and longitude of the user's device.
 * @returns An object containing the current latitude and longitude of the user's device.
 */
export default function useLiveLocation() {
  const [currLocationJs, setCurrLocationJs] = useState({
    latitude: 0,
    longitude: 0,
  });
  const { latitude, longitude } = currLocationJs;
  useEffect(() => {
    getLocationJs();
  }, []);
  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  };
  return { latitude, longitude };
}
