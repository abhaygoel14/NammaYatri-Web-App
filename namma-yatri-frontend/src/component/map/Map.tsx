import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../const/api";
import useLiveCity from "../const/useLiveCity";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const livecity = useLiveCity();
  // console.log("Map", JSON.stringify(livecity));
  const center = useMemo(
    () => ({ lat: livecity.latitude, lng: livecity.longitude }),
    [livecity.latitude, livecity.longitude]
  );

  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}
