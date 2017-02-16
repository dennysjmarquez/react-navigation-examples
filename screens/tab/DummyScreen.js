import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import DummyComponent from '../../components/tab/DummyComponent';

class DummyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DummyComponent text={'This is another screen, on 2nd tab!'} />
      </View>
    );
  }
}

DummyScreen.navigationOptions = {
  // title: 'Tab2'
  tabBar: {
    label: 'Tab2',
    icon: () => (
      <Image source={require('../../assets/images/icon.png')} />
    ),
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default DummyScreen;
