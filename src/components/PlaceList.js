import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const placeList = props => {
    return (
        <FlatList 
          style={styles.listContainer}
          data={props.places}
          renderItem={({item}) => (
            <ListItem 
              placeName={item.name}
              onItemPress={() => props.onItemPress(item.key)}
              image={item.image}
            />
          )}
        />  
        
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
      }
});

export default placeList;