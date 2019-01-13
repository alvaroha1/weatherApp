import React, { Component } from 'react';
import City from './City';

class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          id: '2759794',
          name: 'Amsterdam',
        },
        {
          id: '5128638',
          name: 'NewYork',
        },
        {
          id: '5601538',
          name: 'Moscow',
        },
        {
          id: '6356055',
          name: 'Barcelona',
        },
      ]
    }
 }

  render () {
    return (
      <div>
      <h4>Select Your City</h4>
      {this.state.cities.map( city => <City 
        name={city.name} 
        key={city.id}
        cityId={city.id} 
        updateCityIdState={this.props.updateCityIdState}/>)}
      </div>
    );
  };
};

export default CitySelector;