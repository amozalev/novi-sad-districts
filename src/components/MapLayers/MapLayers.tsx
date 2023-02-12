import React, {useEffect, useState} from "react";
import {Layer, LayerProps, Source} from "react-map-gl";
import {toFeatureCollection} from "../../utils/mapUtils";


const layerStyle: LayerProps = {
  'id': 'districts',
  'type': 'fill',
  'source': 'districts',
  'layout': {
    visibility: 'visible'
  },
  'paint': {
    'fill-color': ['string', ['get', 'fillColor'], '#0080ff'],
    'fill-opacity': 0.5
  }
};

const borderLayerStyle: LayerProps = {
  'id': 'districtsBorders',
  'type': 'line',
  'source': 'districts',
  'layout': {
    visibility: 'visible'
  },
  'paint': {
    'line-color': '#ff7043',
    'line-width': 1,
    'line-opacity': 0.5
  }
};

const MapLayers = React.memo(() => {
  const [districts, setDistricts] = useState<GeoJSON.FeatureCollection<GeoJSON.Polygon>>();

  useEffect(() => {
    (async function () {
      const distrcitsData = await require('../../data/districts');
      const featureColl = toFeatureCollection(distrcitsData.distrcitsJson);
      setDistricts(featureColl);
    })();

  }, [])

  return (
    <>
      <Source id="districts" type="geojson" data={districts}>
        <Layer {...layerStyle} />
        <Layer {...borderLayerStyle} />
      </Source>
    </>
  )
})

export default MapLayers;