import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const allPlaces = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPress={() => props.onItemPress(i)}
        />
    ));
    return (
        <View style={styles.listContainer}>
            {allPlaces}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
      }
});

export default placeList;