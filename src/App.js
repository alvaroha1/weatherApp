import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiPrivateKey from './own-stuff';
import axios from './axios-orders';
import CitySelector from './components/CitySelector';
import WeatherForecast from './components/WeatherForecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '5128638',
      currentSelectionWeather: null,
      currentCity: null,
      currentForecasts: null,
    }
  }

  updateCityIdState = ( cityId ) => {
    this.setState( { cityId: cityId } );
    console.log('hey');
    console.log(cityId);
    this.fetchWeather();
  }

  fetchWeather() {
    axios.get( `/forecast?id=${this.state.cityId}&APPID=${apiPrivateKey}`)
      .then(response => {
        console.log(response);
        this.setState({
          currentSelectionWeather: response.data,
          currentCity: response.data.city.name,
          currentForecasts: response.data.list,
        })
      })
      .catch ( error => {
        console.error(error);
      });
  }

  logState = () => {
    console.log(this.state);
  }

  componentWillMount() {
    this.fetchWeather();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my WeatherApp</h1>
        <div className="citySelector">
          <CitySelector updateCityIdState={this.updateCityIdState}/>
          <button onClick={this.logState}>Test current state</button>
        </div>
        <header className="App-header">
          <WeatherForecast name={this.state.currentCity}/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
