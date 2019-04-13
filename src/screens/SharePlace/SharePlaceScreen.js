import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
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