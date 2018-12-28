import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Util } from 'expo';

class BackToMenu extends React.Component {
  constructor(props) {
    super(props);

    this.goToMenu = this.goToMenu.bind(this);
  }

  goToMenu() {
    // Go back anywhere
    Util.reload();
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
    padding: 15,
  },
});

export default BackToMenu;
