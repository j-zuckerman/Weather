import React, { Component } from 'react';

import '../App.css';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="country"
          placeholder="Enter country"
          style={{ marginRight: '10px' }}
        />
        <button className="btn btn-dark">Get Weather!</button>
      </form>
    );
  }
}

export default Search;
