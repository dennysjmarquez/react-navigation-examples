import React from 'react';
import { View, Text, Button,
         Image, StyleSheet } from 'react-native';

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);

    this.goToStackNavigationExample = this.goToStackNavigationExample.bind(this);
    this.goToTabNavigationExample = this.goToTabNavigationExample.bind(this);
  }

  goToStackNavigationExample() {
    this.props.navigation.navigate('StackExample')
  }

  goToTabNavigationExample() {
    this.props.navigation.navigate('TabExample')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
            alt={'logo'}
          />

          <Text style={styles.title}>
            React Navigation examples
          </Text>

          <Text style={styles.subtitle}>
            by rmotr.com
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToStackNavigationExample}
            color={'#3498db'}
            title="Stack navigation example"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToTabNavigationExample}
            color={'#2ecc71'}
            title="Tab navigation example"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {}}
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
    alignItems: 'center',
    borderBottomWidth: 15,
    borderColor: '#242134'
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic'
  },
  image: {
    width: 120,
    height: 120
  },
  buttonContainer: {
    marginHorizontal: 20
  }
});

export default MenuScreen;
