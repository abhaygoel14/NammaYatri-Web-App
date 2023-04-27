import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../const/api";
import Loading from "../Loading";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
  });
  if (!isLoaded) return <Loading>Loading...</Loading>;
  return <FetchMap />;
}

function FetchMap() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
