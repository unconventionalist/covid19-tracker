import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Map as BaseMap, TileLayer, ZoomControl } from 'react-leaflet';

import { useConfigureLeaflet, useMapServices, useRefEffect } from 'hooks';
import { isDomAvailable } from 'lib/util';

const DEFAULT_MAP_SERVICE = 'OpenStreetMap';

const Map = ( props ) => {
  const { children, className, defaultBaseMap = DEFAULT_MAP_SERVICE, mapEffect, ...rest } = props;

  //TileLayer.provider('Stamen.Toner').addTo(Map);

  const mapRef = useRef();
  console.log( 'Mapp inner ref %o', mapRef );

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

  //console.log("Mapp inner ref %o", mapRef);
  // return a function?
  props.mapref( mapRef );

  return (
    <div key={props.center} className={mapClassName}>
      <BaseMap ref={mapRef} {...mapSettings}>
        { children }
        { basemap && <TileLayer {...basemap} /> }
        <ZoomControl position="bottomright" />
      </BaseMap>
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
  mapref: PropTypes.func,
  center: PropTypes.array,
};

export default Map;
