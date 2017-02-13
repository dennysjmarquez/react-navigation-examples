import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);

    this.goToStackNavigationExample = this.goToStackNavigationExample.bind(this);
  }

  goToStackNavigationExample() {
    this.props.navigation.navigate('Stack')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToStackNavigationExample}
            color={'#3498db'}
            title="Stack navigation example"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToStackNavigationExample}
            color={'#2ecc71'}
            title="Tab navigation example"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToStackNavigationExample}
            color={'#e74c3c'}
            title="Drawer navigation example"
          />
        </View>
      </View>
    );
  }
}

MenuScreen.navigationOptions = {
  title: 'Menu'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  buttonContainer: {
    margin: 10
  }
});

export default MenuScreen;
