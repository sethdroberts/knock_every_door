"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";



const App = () => {
    var GMAPS_API_KEY = 'AIzaSyDCWVqi8Pi-z4wTGEdIA4UmAycdGYQxcCE'
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: GMAPS_API_KEY,
    });
    const center = useMemo(() => ({ lat: 44.52043, lng: -85.856743 }), []);
    return (
      <div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={7}
          />
        )}
      </div>
    );
  };
  
  export default App;