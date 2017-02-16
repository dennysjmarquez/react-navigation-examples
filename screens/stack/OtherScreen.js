import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import OtherComponent from '../../components/stack/OtherComponent';
import BackToMenu from '../../components/BackToMenu';

class OtherScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OtherComponent text={'Hey I\'m a Stacked screen!'} />
      </View>
    );
  }
}

OtherScreen.navigationOptions = {
  title: 'Screen 2',
  // title: state => 'Screen 2',
  header: {
    right: <BackToMenu />,
    tintColor: '#3498db',
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
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default OtherScreen;
