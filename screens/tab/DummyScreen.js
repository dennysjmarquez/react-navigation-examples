import React from 'react';
import { View, StyleSheet } from 'react-native';
import DummyComponent from '../../components/tab/DummyComponent';
import BackToMenu from '../../components/BackToMenu';

class DummyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DummyComponent text={'This is another tab!'} />
      </View>
    );
  }
}

DummyScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

export default DummyScreen;
