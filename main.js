import Exponent from 'exponent';
import React from 'react';
import MenuNavigator from './navigators/Menu';

class App extends React.Component {
  render() {
    return (
      <MenuNavigator />
    );
  }
}

Exponent.registerRootComponent(App);
