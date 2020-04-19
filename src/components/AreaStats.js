import React from 'react';
import AreaButton from 'components/AreaButton';
import PropTypes from 'prop-types';

class AreaStats extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      button_data: '',
      //handleClick: props.handleClick
      //    mapRef: props.mapref
    };
    //this.handleAreaStatsClick = props.handleClick;
    this.handleClick = this.props.handleClick;
    //this.handleClick = this.handleClick.bind(this);
    console.log( 'MapRef....%o', this.handleClick );

    // props["mapref"].then((mapref) => {
    //     console.log("MapRef....%o", mapref)
    // });

    props['areas'].then(( data ) => {
      this.setState({
        button_data: this.createAreasStats( data['data']['areas'], this.handleClick ),
      });
    });
  }

  createAreasStats = ( areas, handleClick ) => {
    let areaStats = [];
    console.log( 'Props....%o', this.handleClick );
    areas.forEach( function ( area ) {
      areaStats.push(
        <AreaButton
          key={area['id']}
          id={area['id']}
          title={area['displayName']}
          areaTotal={area['totalConfirmed']}
          lat={area['lat']}
          long={area['long']}
          handleAreaStatsClick={handleClick}
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
  handleClick: PropTypes.element.isRequired,
};

export default AreaStats;
