/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceModal from './src/components/PlaceModal/PlaceModal'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  handleAddPlaceOnPress = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  handleOnPressDelete = () => {
    this.props.onDeletePlace();
  };
  handleOnPressClose = () => {
    this.props.onDeselectPlace();
  };

  handlePlaceOnPress = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceModal
            selectedPlace={this.props.selectedPlace}
            onPressDelete={this.handleOnPressDelete}
            onPressClose={this.handleOnPressClose}
        />
        <PlaceInput addPlaceOnPress={this.handleAddPlaceOnPress}/>
        <PlaceList
          places={this.props.places}
          onItemPress={this.handlePlaceOnPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapToStateProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapToDispatchProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (placeKey) => dispatch(selectPlace(placeKey)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapToStateProps, mapToDispatchProps)(App);