import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { placeDetailScreenKey } from '../screens/Keys/screenKeys';

import PlaceList from '../components/PlaceList';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  
  onNavigatorEvent = event => {
    switch(event.id) {
      case 'sideDrawerButton':
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
        break;
    }
  }
  
  itemSelectedHandler = key => {
    const place = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: placeDetailScreenKey,
      title: place.name,
      passProps: {
        selectedPlace: place
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemPress={this.itemSelectedHandler}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};
export default connect(mapStateToProps)(FindPlaceScreen);