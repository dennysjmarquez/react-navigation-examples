import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  header: {
    title: 'Screen 2',
    right: <BackToMenu />,
    tintColor: '#3498db'
  }
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
