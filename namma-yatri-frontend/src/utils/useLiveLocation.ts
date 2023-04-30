import { useEffect, useState } from "react";

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
