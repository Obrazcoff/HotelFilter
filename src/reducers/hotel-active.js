export default function(state = null, action) {
  switch (action.type) {
    case 'HOTEL_SELECTED':
      return action.payload;

    default:
      return state;
  }
}
