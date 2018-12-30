export const selectHotel = hotel => {
  return {
    type: 'HOTEL_SELECTED',
    payload: hotel,
  };
};
