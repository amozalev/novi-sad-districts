import React, {useRef, useState} from 'react';
import './App.css';
import MapGL from "./containers/MapGl";
import {ViewState, ViewStateChangeEvent} from "react-map-gl";
import MapLayers from "./components/MapLayers/MapLayers";


const DEFAULT_VIEWSTATE: ViewState = {
  longitude: 19.833549,
  latitude: 45.267136,
  zoom: 11,
  bearing: 0,
  pitch: 0,
  padding: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
}

function App() {
  const [viewState, setViewState] = useState<ViewState>(DEFAULT_VIEWSTATE);
  const mapRef = useRef<any>();

  const onViewStateChange = (viewState: ViewStateChangeEvent) => {
    setViewState(viewState.viewState);
  }

  return (
    <div className="App">
      <MapGL
        {...viewState}
        onMove={onViewStateChange}
        ref={mapRef}
      >
        <MapLayers />
      </MapGL>
    </div>
  );
}

export default App;
