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
  headerRight: <BackToMenu />,
  headerTintColor: '#3498db',
  gesturesEnabled: true,

  // only to Tab navigation example
  tabBarLabel: 'Tab1',
  tabBarIcon: () => (
    <Image source={require('../../assets/images/icon.png')} />
  ),

  // only to Drawer navigation example
  drawerLabel: 'Drawer1',
  drawerIcon: () => (
    <Image source={require('../../assets/images/icon.png')} />
  ),
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
