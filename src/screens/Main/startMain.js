import { Navigation } from 'react-native-navigation';
import {
  sharePlaceScreenKey,
  findPlaceScreenKey,
  sideDrawerKey
} from '../Keys/screenKeys';
import Icon from 'react-native-vector-icons/Ionicons';

const startMain = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: findPlaceScreenKey,
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'SideDrawerButton',
                id: 'sideDrawerButton'
              }
            ]
          }
        },
        {
          screen: sharePlaceScreenKey,
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'SideDrawerButton',
                id: 'sideDrawerButton'             
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: sideDrawerKey
        }
      }
    });
  });
};

export default startMain;