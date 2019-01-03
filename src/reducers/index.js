import { combineReducers } from 'redux';
import HotelsReducers from './hotels';
import HotelActive from './hotel-active';
import SearchFlags from './searchFlags';

const allReducers = combineReducers({
  hotels: HotelsReducers,
  hotelActive: HotelActive,
  searchFlags: SearchFlags,
});

export default allReducers;
