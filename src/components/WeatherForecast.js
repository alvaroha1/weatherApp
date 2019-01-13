import React, { Component } from 'react';
import TempGauge from './TempGauge';
import './WeatherForecast.css';


class WeatherForecast extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//  }

  render () {
    return (
      <div className="wFContainer">
        <div className="c"><h2>Forecast for {this.props.name}</h2></div>
        <div className="a"><h5>Good Mood</h5></div>
        <div className="b"><TempGauge /></div>
        <div className="c"><h5>Bad Mood</h5></div>
        <div className="c"><h3>The expected average Temperature in {this.props.name} for the next 5 days is <strong>{this.props.avgTemp}ºC</strong></h3></div>
      </div>
    );
  };
};

export default WeatherForecast;