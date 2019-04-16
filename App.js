import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth';
import SharePlaceScreen from './src/screens/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';
import {
  authScreenKey,
  sharePlaceScreenKey,
  findPlaceScreenKey,
  placeDetailScreenKey,
  sideDrawerKey
} from './src/screens/Keys/screenKeys';

// config redux
const store = storeConfig();
// Must register the component first before loading.

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
Navigation.registerComponent(sideDrawerKey,
  () => SideDrawer
);

Navigation.startSingleScreenApp({
  screen: {
    screen: authScreenKey,
    title: 'Login'
  }
});