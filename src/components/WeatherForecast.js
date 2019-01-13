import React, { Component } from 'react';

class WeatherForecast extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//  }

  render () {
    return (
      <div>
      <h3>Current Temperature Forecast for {this.props.name}</h3>
     
      </div>
    );
  };
};

export default WeatherForecast;