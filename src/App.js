import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import WeatherCard from './components/WeatherCard';

const API_KEY = 'b8cbb595cddf283b2490632b869619e4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      lowTemperature: undefined,
      highTemperature: undefined,
      humidity: undefined,
      avgTemperature: undefined,
      description: undefined,
      image: undefined
    };
  }
  getWeather = async e => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const weatherData = await apiCall.json();
    console.log(weatherData);
    if (country && city) {
      this.setState({
        avgTemperature: weatherData.main.temp,
        lowTemperature: weatherData.main.temp_max,
        highTemperature: weatherData.main.temp_min,
        humidity: weatherData.main.humidity,
        city: weatherData.name,
        country: weatherData.sys.country,
        description: weatherData.weather[0].description,
        image: weatherData.weather[0].icon
      });
    }
  };
  render() {
    var Weather;
    const {
      avgTemperature,
      lowTemperature,
      highTemperature,
      humidity,
      city,
      country,
      description,
      image
    } = this.state;
    if (
      avgTemperature &&
      lowTemperature &&
      highTemperature &&
      humidity &&
      city &&
      country &&
      description &&
      image
    ) {
      Weather = <WeatherCard information={this.state} />;
    } else Weather = null;
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1>Find the weather for any city.</h1>
        </div>
        <div class="container">
          <Search getWeather={this.getWeather} />
          {Weather}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
