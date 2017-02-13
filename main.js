import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuNavigator from './navigators/Menu';

class App extends React.Component {
  render() {
    return (
      <MenuNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
