import {GeoJSONSourceRaw} from "mapbox-gl";
import {DistrictEntity, PolygonProperty} from "../types/types";

export const createGeoJsonSource = (features: Array<GeoJSON.Feature<GeoJSON.Polygon, any>>): GeoJSONSourceRaw => {
  return {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features,
    }
  }
}

export const toPolygonFeature = (item: DistrictEntity): GeoJSON.Feature<GeoJSON.Polygon, PolygonProperty> => ({
  type: "Feature",
  geometry: {
    type: 'Polygon',
    coordinates: [item.polygon.split(',0 ').map(item => item.split(',').map(Number))],
  },
  id: item?.id,
  properties: {
    name: item.name,
    fillColor: item.fillColor
  }
})

export const toFeatureCollection = (districts: DistrictEntity[]): GeoJSON.FeatureCollection<GeoJSON.Polygon> => {
  return {
    type: "FeatureCollection",
    features: districts.map(item => toPolygonFeature(item)),
  }
}