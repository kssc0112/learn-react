import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/AuthScreen';
import SharePlaceScreen from './src/screens/SharePlace/SharePlaceScreen';
import FindPlaceScreen from './src/screens/FindPlace/FindPlaceScreen';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetailScreen';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';

// config redux
const store = storeConfig();
// Must register the component first before loading.
export const authScreenKey = 'AuthScreen';
export const sharePlaceScreenKey = 'SharePlaceScreen';
export const findPlaceScreenKey = 'FindPlaceScreen';
export const placeDetailScreenKey = 'PlaceDetailScreen';

Navigation.registerComponent(authScreenKey,
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(sharePlaceScreenKey,
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(findPlaceScreenKey,
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(placeDetailScreenKey,
  () => PlaceDetailScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: authScreenKey,
    title: 'Login'
  }
});