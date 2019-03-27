import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.listItem}>
        <Image
          style={styles.itemImage}
          source={props.image}/>
          <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#EEE',
    width: '100%',
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row'
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 8
  }
});

export default listItem;