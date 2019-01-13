import React, { Component } from 'react';
import './App.css';
import apiPrivateKey from './own-stuff';
import axios from './axios-orders';
import CitySelector from './components/CitySelector';
import WeatherForecast from './components/WeatherForecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '2759794',
      currentSelectionWeather: null,
      currentCity: 'Amsterdam',
      currentForecasts: null,
    }
  }

  updateCityIdState = ( cityId ) => {
    this.setState( { cityId: cityId } );
    this.fetchWeather();
  }

  fetchWeather = () => {
    axios.get( `/forecast?id=${this.state.cityId}&APPID=${apiPrivateKey}`)
      .then(response => {
        this.setState({
          currentSelectionWeather: response.data,
          currentCity: response.data.city.name,
          currentForecasts: response.data.list,
        })
      })
      .catch ( error => {
        console.error(error);
      });
      // console.log('fetch Weather executed')
  }

  logState = () => {
    console.log(this.state);
  }

  componentWillMount() {
    this.fetchWeather();
  }

  componentDidMount() {
    // setInterval(() => this.fetchWeather(), 600000);
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
        </header>
        {/* {setInterval(() => console.log('10segons'), 10000)} */}
      </div>
    );
  }
}

export default App;
