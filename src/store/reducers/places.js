import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
const initialState = {
  places: []
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: '' + Date.now() + Math.random(),
          name: action.placeName,
          image: {
            uri: 'https://i.ytimg.com/vi/fB8MYCGFqC0/maxresdefault.jpg'
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;