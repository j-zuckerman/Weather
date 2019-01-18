import React, { Component } from 'react';

class WeatherCard extends Component {
  render() {
    return (
      <div className="weather-padding">
        <div className="weather-styling">
          <h1>
            {this.props.information.city} ,{this.props.information.country}
          </h1>
          <h1>
            <img
              src={`http://openweathermap.org/img/w/${
                this.props.information.image
              }.png`}
            />
            {'  '}
            {this.props.information.avgTemperature}&#176; F
          </h1>
          <h2>Description: {this.props.information.description}</h2>

          <h3>Low: {this.props.information.lowTemperature}</h3>
          <h3>High: {this.props.information.highTemperature}</h3>
          <h4>Humidity: {this.props.information.humidity}</h4>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
