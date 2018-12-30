import React, { Component } from 'react';

class HotelSearch extends Component {
  render() {
    return (
      <div>
        <h2>Search hotel:</h2>
        <input type="text" placeholder="Search hotel by name..." />
        <div>
          <input type="checkbox" name="hasPool" />
          <label>Has pool</label>
        </div>
        <div>
          <select>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
      </div>
    );
  }
}

export default HotelSearch;
