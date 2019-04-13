import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { placeDetailScreenKey } from '../../../App';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
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