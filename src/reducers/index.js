import { combineReducers } from 'redux';
import HotelsReducers from './hotels';
import HotelActive from './hotel-active';

const allReducers = combineReducers({
  hotels: HotelsReducers,
  hotelActive: HotelActive,
});

export default allReducers;
