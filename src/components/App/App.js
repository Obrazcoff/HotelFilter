import React, { Component } from 'react';
import './App.css';
import HotelsList from '../../containers/hotel-list';
import HotelDetails from '../../containers/hotel-details';
import HotelSearch from '../../containers/hotel-search';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="content">
            <h2>Hotels list:</h2>
            <HotelsList />
          </div>
        </div>
        <div className="left_side">
          <HotelSearch />
        </div>
        <div className="right_side">
          <h3>Hotel Details:</h3>
          <HotelDetails key={Math.random()} />
        </div>
      </div>
    );
  }
}

export default App;
