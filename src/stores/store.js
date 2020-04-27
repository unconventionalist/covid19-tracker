import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class MapStore {
  data = '';
  lat = 0;
  long = 0;
  zoom = 2;
  totalWorldCases = 0;
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
}

decorate( MapStore, {
  lat: observable,
  long: observable,
  zoom: observable,
  totalWorldCases: observable,
});

export const MapStoreContext = createContext( new MapStore());
