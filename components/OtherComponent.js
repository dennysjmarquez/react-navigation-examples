import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class OtherComponent extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
          alt={'logo'}
        />

        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <TouchableHighlight onPress={this.goBack} >
          <Text style={styles.link}>
            Touch me to go back!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 80,
    height: 80
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    padding: 15
  },

  link: {
    color: '#242134',
    textAlign: 'center',
    fontWeight: '900'
  }
});

export default withNavigation(OtherComponent);
