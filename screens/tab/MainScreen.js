import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainComponent from '../../components/stack/MainComponent';
import BackToMenu from '../../components/BackToMenu';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainComponent text={'Open up MainComponent.js to start working on your app!'} />
      </View>
    );
  }
}

MainScreen.navigationOptions = {
  header: {
    title: 'Screen 1',
    right: <BackToMenu />,
    tintColor: '#3498db'
  },
  tabBar: {
    label: 'Home',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

export default MainScreen;
