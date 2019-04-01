import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMain from '../Main/startMain';

class AuthScreen extends Component {
  handleLogin = () => {
    startMain();
  };
  render () {
    return (
      <View>
        <Text>Test First Screen</Text>
        <Button title='Login' onPress={this.handleLogin}/>
      </View>
    );
  }
}

export default AuthScreen;