import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class BackToMenu extends React.Component {
  constructor(props) {
    super(props);

    this.goToMenu = this.goToMenu.bind(this);
  }

  goToMenu() {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <TouchableHighlight onPress={this.goToMenu} >
        <Text style={styles.link}>
          Menu
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '500',
    padding: 15
  }
});

export default withNavigation(BackToMenu);
