export const selectHotel = hotel => {
  return {
    type: 'HOTEL_SELECTED',
    payload: hotel,
  };
};

export const changeIsPoolFlag = hasPool => {
  return {
    type: 'FLAG_HASPOOL_CHANGED',
    payload: hasPool,
  };
};

export const changeRaitingFlag = raiting => {
  return {
    type: 'FLAG_RAITING_CHANGED',
    payload: raiting,
  };
};

export const changeSearchString = searchString => {
  return {
    type: 'SEARCH_STRING_CHANGED',
    payload: searchString,
  };
};
