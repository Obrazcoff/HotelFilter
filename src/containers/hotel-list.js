import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectHotel } from '../actions/index';

class HotelsList extends Component {
  showHotelsList() {
    return this.props.hotels.map(hotel => {
      if (
        (this.props.searchFlags.hasPool === 'false' ||
          this.props.searchFlags.hasPool === hotel.hasPool) &&
        parseInt(hotel.rate) >= parseInt(this.props.searchFlags.raiting) &&
        hotel.name
          .toLowerCase()
          .includes(this.props.searchFlags.searchString.toLowerCase())
      ) {
        return (
          <div
            className="card"
            onClick={() => this.props.selectHotel(hotel)}
            key={hotel.name}
          >
            <div className="card-img">
              <img src={hotel.img} alt={hotel.name} />
            </div>
            <div className="card-details">
              <h3>{hotel.name}</h3>
              <div>
                {' '}
                {(function(rows, i, len) {
                  while (++i <= len) {
                    rows.push(<span class="fa fa-star checked" />);
                  }
                  return rows;
                })([], 0, hotel.rate)}{' '}
              </div>
              <br />
              <div>
                <input
                  type="checkbox"
                  id={hotel.name}
                  name="hasPool"
                  checked={hotel.hasPool === 'true'}
                />
                <label for={hotel.name}>Has pool</label>
              </div>
            </div>
          </div>
        );
      } else return null;
    });
  }
  render() {
    return <div className="list">{this.showHotelsList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels,
    searchFlags: state.searchFlags,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectHotel: selectHotel }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(HotelsList);
