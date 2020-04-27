import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import { requestCovidData, getWorldData } from 'lib/covid-data-service';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import AreaStats from 'components/AreaStats';
import WorldStats from 'components/WorldStats';
import { MapStoreContext } from '../stores/store';

var COVID_DATA = requestCovidData();

async function getCovidData() {
  if ( !COVID_DATA ) {
    COVID_DATA = await requestCovidData();
  }
  return COVID_DATA;
}

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  const mapStore = useContext( MapStoreContext );
  var WORLD_DATA = getWorldData();
  WORLD_DATA.then(( data ) => {
    mapStore.totalWorldCases = data['data']['cases'];
  });

  async function mapEffect({ leafletElement: map } = {}) {
    if ( !map ) return;

    map.setMaxBounds([
      [-90, -180],
      [90, 180],
    ]);

    var response = await getCovidData();

    const { data = {} } = response;
    const hasData = Array.isArray( data ) && data.length > 0;

    if ( !hasData ) return;

    let features = [];
    data.forEach( function ( location ) {
      features.push({
        type: 'Feature',
        properties: {
          ...location,
        },
        geometry: {
          type: 'Point',
          coordinates: [location['countryInfo']['long'], location['countryInfo']['lat']],
        },
      });
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

        const { country, updated, cases, deaths, recovered } = properties;

        let size = Math.log( cases ) / 2;
        //let size = casesPerOneMillion / 1000;

        casesString = `${cases}`;

        if ( cases > 1000 ) {
          casesString = `${casesString.slice( 0, -3 )}k+`;
        }

        if ( updated ) {
          updatedFormatted = new Date( updated ).toLocaleString();
        }
        //<span class="icon-marker" style="width: ${size}em; height: ${size}em">
        const html = `
          <span class="icon-marker" style="width: ${size}em; height: ${size}em">
            <span class="icon-marker-tooltip">
              <h2>${country}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${cases}</li>
                <li><strong>Deaths:</strong> ${deaths}</li>
                <li><strong>Recovered:</strong> ${recovered}</li>
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
    //zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Covid-19 Tracker</title>
      </Helmet>

      <Map {...mapSettings} lat={mapStore.getLat()} long={mapStore.getLong()} defaultZoom={mapStore.getZoom()} />

      <Container type="content" className="text-center home-start" totalWorldCases={mapStore.totalWorldCases}>
        <WorldStats totalWorldCases={mapStore.getTotalWorldCases()} />
        { /* <div className="test">
          <h3>Total confirmed cases</h3>
          <h2>{mapStore.totalWorldCases}</h2>
        </div> */ }

        <div className="test stats">
          <h3>Cases By Location</h3>

          <AreaStats areas={requestCovidData()} />
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
