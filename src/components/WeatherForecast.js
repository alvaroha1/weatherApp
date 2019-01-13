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
        <div className="a"><h5>Good Mood</h5></div>
        <div className="b"><TempGauge /></div>
        <div className="c"><h5>Bad Mood</h5></div>
        {/* <h5>Good Mood</h5>
        <TempGauge />
        <h5>Bad Mood</h5> */}
      </div>
    );
  };
};

export default WeatherForecast;