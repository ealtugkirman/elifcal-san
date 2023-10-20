"use client"

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function  Maper() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAFkH3HkFaYWHoYyMaR6WJSaWW5XcieqH0', // Replace with your actual API key
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  // Specify the latitude and longitude coordinates of the Eiffel Tower
  const eiffelTowerLocation = useMemo(() => ({ lat: 48.8588443, lng: 2.2943506 }), []);

  return (
    <GoogleMap zoom={15} center={eiffelTowerLocation} mapContainerClassName="map-container">
      {/* Add a marker to the Eiffel Tower location */}
      <Marker position={eiffelTowerLocation} />
    </GoogleMap>
  );
}
