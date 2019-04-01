import { Navigation } from 'react-native-navigation';
import { sharePlaceScreenKey, findPlaceScreenKey } from '../../../App';
import Icon from 'react-native-vector-icons/Ionicons';

const startMain = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: findPlaceScreenKey,
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0]
        },
        {
          screen: sharePlaceScreenKey,
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1]
        }
      ]
    });
  });
};

export default startMain;