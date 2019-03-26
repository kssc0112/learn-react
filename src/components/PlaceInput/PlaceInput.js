import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
    state = {
        placeName: ''
    };

    handlePlaceInputChangeText = val => {
        this.setState({
          placeName: val
        })
      };

    handleAddPlaceOnPress = (props) => {
        if (this.state.placeName === '') {
          return;
        }
        this.props.addPlaceOnPress(this.state.placeName);
      };

    render() {
        return (
            <View style={styles.inputContainer}>
            <TextInput
              style={styles.placeInputText} 
              placeholder='Add a Place!'
              value={this.state.placeName}
              onChangeText={this.handlePlaceInputChangeText}
            />
            <Button
              styles={styles.placeInputButton}
              title='add'
              onPress={this.handleAddPlaceOnPress}
            />         
          </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      placeInputText: {
        width: '70%'
      },
      placeInputButton: {
        width: '30%'
      }
});