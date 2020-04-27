import React from 'react';
import AreaButton from 'components/AreaButton';
import PropTypes from 'prop-types';

class AreaStats extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      button_data: '',
    };

    props['areas'].then(( data ) => {
      this.setState({
        button_data: this.createAreasStats( data['data']),
      });
    });
  }

  createAreasStats = ( areas ) => {
    let areaStats = [];
    areas.forEach( function ( area ) {
      areaStats.push(
        <AreaButton
          key={area['country']}
          id={area['country']}
          title={area['country']}
          areaTotal={area['cases']}
          lat={area['countryInfo']['lat']}
          long={area['countryInfo']['long']}
        />
      );
    });
    return areaStats;
  };

  render() {
    return <div>{ this.state.button_data }</div>;
  }
}

AreaStats.propTypes = {
  areas: PropTypes.element.isRequired,
};

export default AreaStats;
