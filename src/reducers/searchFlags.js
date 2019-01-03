export const initialState = {
  hasPool: 'false',
  raiting: '1',
  searchString: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FLAG_HASPOOL_CHANGED':
      return { ...state, hasPool: action.payload };

    case 'FLAG_RAITING_CHANGED':
      return { ...state, raiting: action.payload };

    case 'SEARCH_STRING_CHANGED':
      return { ...state, searchString: action.payload };

    default:
      return state;
  }
}
