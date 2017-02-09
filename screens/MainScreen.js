import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainComponent from '../components/MainComponent';

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
  title: 'Tab 1 - Screen 1'
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
