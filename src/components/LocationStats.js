import React, { useContext } from 'react';
import { MapStoreContext } from '../stores/store';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

const LocationStats = observer(() => {
  const mapStore = toJS( useContext( MapStoreContext ));

  const totalCases = ( mapStore.stats['cases'] || 0 ).toLocaleString();
  const totalDeaths = ( mapStore.stats['deaths'] || 0 ).toLocaleString();
  const totalRecovered = ( mapStore.stats['recovered'] || 0 ).toLocaleString();

  const lastUpdated = mapStore.stats['updated'] || 0;
  let date = new Date( lastUpdated * 1000 );
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  const formattedTime = hours + ':' + minutes.substr( -2 ) + ':' + seconds.substr( -2 );

  return (
    <div>
      <div className="panel">
        <h2>{ mapStore.stats['country'] } Stats</h2>
        <h3>Total Cases: { totalCases }</h3>
        <h3>Total Deaths: { totalDeaths }</h3>
        <h3>Total Recovered: { totalRecovered }</h3>
        <h3>Last Updated: { formattedTime }</h3>
      </div>
    </div>
  );
});

export default LocationStats;
