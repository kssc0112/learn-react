import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../store/actions';
import { connect } from 'react-redux';

class PlaceDetailScreen extends Component {
  onDeleteHandler = key => {
    this.props.onDeletePlace(key);
    this.props.navigator.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => this.onDeleteHandler(this.props.selectedPlace.key)}>
            <Icon size={30} name='ios-trash' color='red'/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  }, 
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deleteButton: {
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  }
};

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);

