import { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { addDocument } from "../util/apiServices";
import toaster from "./Toast";

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    id: import.meta.env.VITE_MAP_API_KEY,
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });
  const [markers, setMarkers] = useState([]);

  const containerStyle = {
    width: "85vw",
    height: "85vh",
  };

  const center = {
    lat: 31.5204,
    lng: 74.3587,
  };

  const handleMapClick = async (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const newMarker = {
      id: markers.length + 1,
      location: {
        lat,
        lng,
      },
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

    try {
      await addDocument("maplocations", { location: newMarker.location });
      toaster.success("Location saved successfully");
    } catch (error) {
      toaster.error("Something Went Wrong!!!");
    }
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}
        >
          {markers.map(({ id, location }) => (
            <Marker key={id} position={location} label={id.toString()} />
          ))}
        </GoogleMap>
      ) : null}
    </div>
  );
};

export default MapComponent;
