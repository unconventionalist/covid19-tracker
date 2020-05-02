import React, { useContext } from 'react';
import { MapStoreContext } from '../stores/store';
import { observer } from 'mobx-react';

const WorldStats = observer(() => {
  const mapStore = useContext( MapStoreContext );
  return (
    <div>
      <div className="panel">
        <h3>Total confirmed cases</h3>
        <h2>{ mapStore.totalWorldCases.toLocaleString() }</h2>
      </div>
    </div>
  );
});

export default WorldStats;
