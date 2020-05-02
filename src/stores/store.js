import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class MapStore {
  data = '';
  lat = 0;
  long = 0;
  zoom = 2;
  totalWorldCases = 0;
  geoJsonLayers = null;
  stats = {};

  getStats = () => {
    return this.stats;
  };
  getLat = () => {
    return this.lat;
  };
  getLong = () => {
    return this.lat;
  };
  getZoom = () => {
    return this.zoom;
  };
  getTotalWorldCases = () => {
    return this.totalWorldCases;
  };
  getGeoJsonLayers = () => {
    return this.geoJsonLayers;
  };
  getMapEffect = ( geoJsonLayers ) => {
    return function mapEffect({ leafletElement: map } = {}) {
      if ( !map ) return;

      if ( geoJsonLayers ) {
        geoJsonLayers.addTo( map );
      }
    };
  };
}

decorate( MapStore, {
  lat: observable,
  long: observable,
  zoom: observable,
  totalWorldCases: observable,
  geoJsonLayer: observable,
  getMapEffect: observable,
  stats: observable,
});

export const MapStoreContext = createContext( new MapStore());
