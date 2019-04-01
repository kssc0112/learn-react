import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/AuthScreen';
import SharePlaceScreen from './src/screens/SharePlace/SharePlaceScreen';
import FindPlaceScreen from './src/screens/FindPlace/FindPlaceScreen';

// Must register the component first before loading.
export const authScreenKey = 'AuthScreen';
export const sharePlaceScreenKey = 'SharePlaceScreen';
export const findPlaceScreenKey = 'FindPlaceScreen';
Navigation.registerComponent(authScreenKey, () => AuthScreen);
Navigation.registerComponent(sharePlaceScreenKey, () => SharePlaceScreen);
Navigation.registerComponent(findPlaceScreenKey, () => FindPlaceScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: authScreenKey,
    title: 'Login'
  }
});