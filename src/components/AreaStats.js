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

  createAreasStats = ( data ) => {
    let areaStats = [];
    data.forEach( function ( area ) {
      areaStats.push(
        <AreaButton
          key={area['country']}
          id={area['country']}
          title={area['country']}
          areaTotal={area['cases']}
          lat={area['countryInfo']['lat']}
          long={area['countryInfo']['long']}
          totalCases={area['cases']}
          totalDeaths={area['deaths']}
          totalRecovered={area['recovered']}
          lastUpdated={area['updated']}
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
