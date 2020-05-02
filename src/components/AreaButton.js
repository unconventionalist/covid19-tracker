import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MapStoreContext } from '../stores/store';

const AreaButton = ({ id, title, areaTotal, lat, long, totalCases, totalDeaths, totalRecovered, lastUpdated }) => {
  AreaButton.propTypes = {
    id: PropTypes.element.isRequired,
    title: PropTypes.element.isRequired,
    areaTotal: PropTypes.element.isRequired,
    lat: PropTypes.element.isRequired,
    long: PropTypes.element.isRequired,
    totalCases: PropTypes.element.isRequired,
    totalDeaths: PropTypes.element.isRequired,
    totalRecovered: PropTypes.element.isRequired,
    lastUpdated: PropTypes.element.isRequired,
  };

  const mapStore = useContext( MapStoreContext );

  const handleClick = ( lat, long, totalCases, totalDeaths, totalRecovered, lastUpdated, id ) => {
    mapStore.stats = {
      cases: totalCases,
      deaths: totalDeaths,
      recovered: totalRecovered,
      updated: lastUpdated,
      country: id,
    };

    mapStore.lat = lat;
    mapStore.long = long;
    mapStore.zoom = 4;
  };

  return (
    <>
      <div className="areaDiv">
        <div
          id={id}
          className="area"
          tabIndex="0"
          onClick={() => handleClick( lat, long, totalCases, totalDeaths, totalRecovered, lastUpdated, id )}
        >
          <table className="test2">
            <tbody>
              <tr>
                <td>
                  <div areaname="areaName" title={title}>
                    { title }
                  </div>
                </td>
                <td>
                  <div areaname="areaTotal" className="areaTotal">
                    { areaTotal.toLocaleString() }
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AreaButton;
