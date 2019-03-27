/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    places: []
  };

  handleAddPlaceOnPress = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({key: '' + Date.now() + Math.random(), value: placeName})
      }
    });
  };

  handleDeletePlaceOnPress = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput addPlaceOnPress={this.handleAddPlaceOnPress}/>
        <PlaceList places={this.state.places} onItemPress={this.handleDeletePlaceOnPress}/>
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
