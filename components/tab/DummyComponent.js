import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class DummyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.goToTab = this.goToTab.bind(this);
  }

  goToTab() {
    this.props.navigation.performAction(({ tabs }) => {
      tabs('tab-navigation').jumpToTab('main');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo.png')}
          alt={'logo'}
        />

        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <TouchableHighlight onPress={this.goToTab} >
          <Text style={styles.link}>
            Touch me to change tab!
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
    fontSize: 16
  },

  link: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    padding: 15
  }
});

export default withNavigation(DummyComponent);
