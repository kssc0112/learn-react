import { combineReducers, createStore } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

const config = () => {
  return createStore(rootReducer);
};

export default config;