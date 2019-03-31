import React from 'react';
import { View, Modal, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeModal = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType='slide'>
      <View style={styles.modalContainer}>
        {modalContent}
      </View>
      <View>
        <TouchableOpacity style={styles.deleteButton} onPress={props.onPressDelete}>
          <Icon size={30} name='ios-trash' color='red'/>
        </TouchableOpacity>
        <Button title='Close' color='blue' onPress={props.onPressClose}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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

export default placeModal;

