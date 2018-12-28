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

MainScreen.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;

  const title = params ?
                `Screen 1 - Hi ${params.name}` :
                'Screen 1';

  return {
    title,
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
