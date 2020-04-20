import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class MapStore {
  data = '';
  lat = 0;
  long = 0;
  getlat = () => {
    return this.lat;
  };
  getlong = () => {
    return this.lat;
  };
}

decorate( MapStore, {
  lat: observable,
  long: observable,
});

export const MapStoreContext = createContext( new MapStore());
