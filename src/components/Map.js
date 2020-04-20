import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { Map as BaseMap, TileLayer, ZoomControl } from 'react-leaflet';

import { useConfigureLeaflet, useMapServices, useRefEffect } from 'hooks';
import { isDomAvailable } from 'lib/util';
import { MapStoreContext } from '../stores/store';
import { observer } from 'mobx-react';

const DEFAULT_MAP_SERVICE = 'OpenStreetMap';

const Map = observer(( props ) => {
  const { children, className, defaultBaseMap = DEFAULT_MAP_SERVICE, mapEffect, ...rest } = props;

  const mapStore = useContext( MapStoreContext );
  const mapRef = useRef();

  useConfigureLeaflet();
  useRefEffect({
    ref: mapRef,
    effect: mapEffect,
  });

  const services = useMapServices({
    names: [...new Set([defaultBaseMap, DEFAULT_MAP_SERVICE])],
  });
  const basemap = services.find(( service ) => service.name === defaultBaseMap );

  let mapClassName = `map`;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  if ( !isDomAvailable()) {
    return (
      <div className={mapClassName}>
        <p className="map-loading">Loading map...</p>
      </div>
    );
  }

  const mapSettings = {
    className: 'map-base',
    zoomControl: false,
    minZoom: 3,
    ...rest,
  };

  return (
    <div key={props.center} className={mapClassName}>
      <BaseMap ref={mapRef} {...mapSettings} center={[mapStore.lat, mapStore.long]}>
        { children }
        { basemap && <TileLayer {...basemap} /> }
        <ZoomControl position="bottomright" />
      </BaseMap>
    </div>
  );
});

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
  mapref: PropTypes.func,
  center: PropTypes.array,
};

export default Map;
