import Exponent from 'exponent';
import React from 'react';
import Menu from './navigators/Menu';

class App extends React.Component {
  render() {
    return (
      <Menu />
    );
  }
}

Exponent.registerRootComponent(App);
