import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeIsPoolFlag,
  changeRaitingFlag,
  changeSearchString,
} from '../actions/index';

class HotelSearch extends Component {
  render() {
    return (
      <div>
        <h2>Search hotel:</h2>
        <input
          type="text"
          placeholder="Search hotel by name..."
          ref="search_string_value"
          onChange={() =>
            this.props.changeSearchString(this.refs.search_string_value.value)
          }
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="hasPool"
              ref="hasPool_flag"
              onClick={() =>
                this.props.changeIsPoolFlag(
                  this.refs.hasPool_flag.checked ? 'true' : 'false'
                )
              }
            />
            Has pool
          </label>
        </div>
        <div>
          <select
            ref="raiting_flag"
            onChange={() =>
              this.props.changeRaitingFlag(this.refs.raiting_flag.value)
            }
          >
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

function mapStateToProps(state) {
  return {
    searchFlags: state.searchFlags,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeIsPoolFlag: changeIsPoolFlag,
      changeRaitingFlag: changeRaitingFlag,
      changeSearchString: changeSearchString,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelSearch);
