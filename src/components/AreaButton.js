import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MapStoreContext } from '../stores/store';

const AreaButton = ({ id, title, areaTotal, lat, long }) => {
  AreaButton.propTypes = {
    id: PropTypes.element.isRequired,
    title: PropTypes.element.isRequired,
    areaTotal: PropTypes.element.isRequired,
    lat: PropTypes.element.isRequired,
    long: PropTypes.element.isRequired,
  };

  const mapStore = useContext( MapStoreContext );

  const handleClick = ( lat, long ) => {
    mapStore.lat = lat;
    mapStore.long = long;
    mapStore.zoom = 4;
  };

  return (
    <>
      <div className="areaDiv">
        <div id={id} className="area" tabIndex="0" onClick={() => handleClick( lat, long )}>
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
