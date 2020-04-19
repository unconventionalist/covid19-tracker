import React from 'react';
import PropTypes from 'prop-types';
//import 'assets/stylesheets/application.scss';

const AreaButton = ({ id, title, areaTotal, lat, long, handleAreaStatsClick }) => {
  AreaButton.propTypes = {
    id: PropTypes.element.isRequired,
    title: PropTypes.element.isRequired,
    areaTotal: PropTypes.element.isRequired,
    lat: PropTypes.element.isRequired,
    long: PropTypes.element.isRequired,
    handleAreaStatsClick: PropTypes.element.isRequired,
  };

  // handleClick = () => {
  //     console.log("button clicked");
  // }

  return (
    <>
      <div className="areaDiv">
        { /* <div id="unitedstates" class="area" tabindex="0"></div> */ }
        { /* <div id={ id } className="area" tabIndex="0" onClick={() => handleClick(id)}> */ }
        <div id={id} className="area" tabIndex="0" onClick={() => handleAreaStatsClick( lat, long )}>
          <table className="test2">
            <tbody>
              <tr>
                <td>
                  <div areaname="areaName" title="United States">
                    { title }
                  </div>
                </td>
                <td>
                  <div areaname="areaTotal" className="areaTotal">
                    { areaTotal }
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

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   pageName: PropTypes.string,
// };

export default AreaButton;
