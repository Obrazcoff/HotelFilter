import React, { Component } from 'react';
import { connect } from 'react-redux';

class HotelDetails extends Component {
  render() {
    if (!this.props.hotel) {
      return <p>Choose hotel, please...</p>;
    }
    return (
      <div>
        <h2>{this.props.hotel.name}</h2>
        <img src={this.props.hotel.img} alt={this.props.hotel.name} />
        <br />
        <p>{this.props.hotel.description}</p>
        <p>
          Rate:
          {(function(rows, i, len) {
            while (++i <= len) {
              rows.push(<span class="fa fa-star checked" />);
            }
            return rows;
          })([], 0, this.props.hotel.rate)}
        </p>
        <div>
          <label for={this.props.hotel.name}>Has pool</label>
          <input
            type="checkbox"
            id={this.props.hotel.name}
            name="hasPool"
            checked={this.props.hotel.hasPool === 'true'}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotel: state.hotelActive,
  };
}

export default connect(mapStateToProps)(HotelDetails);
