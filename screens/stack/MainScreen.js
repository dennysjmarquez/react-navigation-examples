import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MainComponent from '../../components/stack/MainComponent';
import BackToMenu from '../../components/BackToMenu';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainComponent text={'Open up stack/MainComponent.js to start working on your app!'} />
      </View>
    );
  }
}

MainScreen.navigationOptions = {
  // title: 'Screen 1',
  title: (props) => {
    if (props.state.params) {
      return `Screen 1 - Hi ${props.state.params.name}`;
    }

    return 'Screen 1';
  },
  header: {
    right: <BackToMenu />,
    tintColor: '#3498db',
  },
  cardStack: {
    gesturesEnabled: false,
  },
  // only to Tab navigation example
  tabBar: {
    label: 'Tab1',
    icon: () => (
      <Image source={require('../../assets/images/icon.png')} />
    ),
  },
  // only to Drawer navigation example
  drawer: {
    label: 'Drawer1',
    icon: () => (
      <Image source={require('../../assets/images/icon.png')} />
    ),
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default MainScreen;
