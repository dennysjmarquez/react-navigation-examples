import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
        <TouchableOpacity onPress={this.goToStackNavigationExample} >
          <Text style={styles.text}>
            Stack navigation example
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {console.log('asd')}}>
          <Text style={styles.text}>
            Tab navigation example
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {console.log('asd')}}>
          <Text style={styles.text}>
            Drawer navigation example
          </Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  text: {
    color: '#444',
    backgroundColor: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    padding: 20
  }
});

export default MenuScreen;
