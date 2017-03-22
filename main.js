import Expo from 'expo';
import React from 'react';
import Menu from './navigators/Menu';

class App extends React.Component {
  render() {
    return (
      <Menu />
    );
  }
}

Expo.registerRootComponent(App);
