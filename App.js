import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/AuthScreen';

// Must register the component first before loading.
const authScreenKey = 'AuthScreen';
Navigation.registerComponent(authScreenKey, () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: authScreenKey,
    title: 'Login'
  }
});