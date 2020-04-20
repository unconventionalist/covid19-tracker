import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import { requestCovidData } from 'lib/covid-data-service';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import AreaStats from 'components/AreaStats';
import { MapStoreContext } from '../stores/store';

const DEFAULT_ZOOM = 2;
var COVID_DATA = requestCovidData();

async function getCovidData() {
  if ( !COVID_DATA ) {
    console.log( 'covid_data does not exist...' );
    COVID_DATA = await requestCovidData();
  }
  console.log( 'Returning covid data ...%o', COVID_DATA );
  return COVID_DATA;
}

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  const mapStore = useContext( MapStoreContext );

  async function mapEffect({ leafletElement: map } = {}) {
    if ( !map ) return;

    map.setMaxBounds([
      [-90, -180],
      [90, 180],
    ]);

    var response = await getCovidData();

    const { data = {} } = response;
    const { areas = [] } = data;
    const hasData = Array.isArray( areas ) && areas.length > 0;

    if ( !hasData ) return;

    let features = [];
    areas.forEach( function ( area ) {
      let subAreas = area['areas'];
      if ( subAreas.length > 1 ) {
        // TODO: Subareas are a different kind of point with different color
        // subAreas.forEach(function(subArea) {
        //   features.push({
        //     type: 'Feature',
        //     properties: {
        //       ...subArea,
        //     },
        //     geometry: {
        //       type: 'Point',
        //       coordinates: [subArea["long"], subArea["lat"]],
        //     },
        //   })
        // });
      } else {
        features.push({
          type: 'Feature',
          properties: {
            ...area,
          },
          geometry: {
            type: 'Point',
            coordinates: [area['long'], area['lat']],
          },
        });
      }
    });

    const geoJson = {
      type: 'FeatureCollection',
      features: features,
    };

    const geoJsonLayers = new L.GeoJSON( geoJson, {
      pointToLayer: ( feature = {}, latlng ) => {
        const { properties = {} } = feature;
        let updatedFormatted;
        let casesString;

        const { displayName, lastUpdated, totalConfirmed, totalDeaths, totalRecovered } = properties;

        let size = Math.log( totalConfirmed );

        casesString = `${totalConfirmed}`;

        if ( totalConfirmed > 1000 ) {
          casesString = `${casesString.slice( 0, -3 )}k+`;
        }

        if ( lastUpdated ) {
          updatedFormatted = new Date( lastUpdated ).toLocaleString();
        }
        //<span class="icon-marker" style="width: ${size}em; height: ${size}em">
        const html = `
          <span class="icon-marker" style="width: ${size}em; height: ${size}em">
            <span class="icon-marker-tooltip">
              <h2>${displayName}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${totalConfirmed}</li>
                <li><strong>Deaths:</strong> ${totalDeaths}</li>
                <li><strong>Recovered:</strong> ${totalRecovered}</li>
                <li><strong>Last Update:</strong> ${updatedFormatted}</li>
              </ul>
            </span>
            ${casesString}
          </span>
        `;

        return L.marker( latlng, {
          icon: L.divIcon({
            className: 'icon',
            html,
          }),
          riseOnHover: true,
        });
      },
    });

    geoJsonLayers.addTo( map );
  }

  var mapSettings = {
    defaultBaseMap: 'Stamen.Toner',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Covid-19 Tracker</title>
      </Helmet>

      <Map {...mapSettings} lat={mapStore.getlat()} long={mapStore.getlong()} />

      <Container type="content" className="text-center home-start">
        <div className="test">
          <h3>Total confirmed cases</h3>
          <h2>2,256,844</h2>
        </div>

        <div className="test stats">
          <h3>Confirmed By Location</h3>

          <AreaStats areas={requestCovidData()} />
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
