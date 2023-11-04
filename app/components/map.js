"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Button, Drawer} from 'antd';
import React, { useState } from 'react';
import DrawerForm from './drawer'


const App = () => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: 'AIzaSyDCWVqi8Pi-z4wTGEdIA4UmAycdGYQxcCE',
    });
    const center = useMemo(() => ({ lat: 44.52043, lng: -85.856743 }), []);

    const [open, setOpen] = useState(false);
    
    const showDrawer = () => {
      setOpen(true);
    };

    
    const onClose = () => {
      setOpen(false);
    };
  

    return (
      <div id="maps" className='my-5'>
        <h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Michigan-Wide Live Territory Tracker (coming soon)</h2>

        <div className="mb-10 mt-10 flex items-center justify-center gap-x-6">
        < DrawerForm/>

            </div>

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
      </div>
    );
  };
  
  export default App;