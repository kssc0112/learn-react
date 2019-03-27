import React from 'react';
import { View, Modal, Text, Image, StyleSheet, Button } from 'react-native';

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
        <Button title='Delete' color='red' onPress={props.onPressDelete}/>
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
  }
});

export default placeModal;

