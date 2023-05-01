import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../const/api";
import useLiveCity from "../const/useLiveCity";

/**
 * A functional component that renders a Google Map with the Places library loaded.
 * @returns {JSX.Element} - A div with the text "Loading..." if the Places library is not yet loaded,
 * otherwise it returns the Map component.
 */
export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

/**
 * A component that displays a Google Map centered on the user's current location.
 * @returns A Google Map component with a marker at the user's current location.
 */
/**
 * A component that displays a Google Map centered on the user's current location.
 * @returns A Google Map component with a marker at the user's current location.
 */
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
