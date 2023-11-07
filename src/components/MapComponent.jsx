import { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { addDocument } from "../util/apiServices";

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

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const newMarker = {
      id: markers.length + 1,
      location: {
        lat,
        lng,
      },
    };
    addDocument("maplocations", { location: newMarker.location });
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}>
          {markers.map(({ id, location }) => (
            <Marker key={id} position={location} label={id.toString()} />
          ))}
        </GoogleMap>
      ) : null}
    </div>
  );
};

export default MapComponent;
