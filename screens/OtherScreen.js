import React from 'react';
import { View, StyleSheet } from 'react-native';
import OtherComponent from '../components/OtherComponent';

class OtherScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OtherComponent text={'Hey i\'m a Stacked screen!'} />
      </View>
    );
  }
}

OtherScreen.navigationOptions = {
  title: 'Tab 1 - Screen 2',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

export default OtherScreen;
