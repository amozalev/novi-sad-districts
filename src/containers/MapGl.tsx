import React from 'react';
import Map, {MapProps, NavigationControl, ScaleControl} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const staticStyle = {
  width: "100%",
  height: "100%",
  mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  mapStyle: "mapbox://styles/mapbox/light-v11",
};

const BaseControls = () => {
  return (
    <>
      <ScaleControl unit="metric"/>
      <NavigationControl
        showCompass={false}
        position="bottom-right"
      />
    </>
  );
};

const MapGL = React.forwardRef((props: MapProps, ref) => {

  return (
    <div id="map-container">
      <Map
        ref={ref}
        {...props as any}
        {...staticStyle}
      >
        {props.children}
        <BaseControls/>
      </Map>
    </div>
  );
})


export default MapGL;