import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../components/PlaceInput';
import { addPlace } from '../store/actions/index';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  
  onNavigatorEvent = event => {
    switch(event.id) {
      case 'sideDrawerButton':
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
        break;
    }
  }
  placeAddedHandler = placeName => {
    this.props.addPlace(placeName);
  }
  render() {
    return (
      <View>
        <PlaceInput addPlaceOnPress={this.placeAddedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addPlace: (placeName) => addPlace(placeName)
};
export default connect(null, mapDispatchToProps)(SharePlaceScreen);