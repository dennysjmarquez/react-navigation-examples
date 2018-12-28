import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class FooComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.toggleDrawer}
            color={'#242134'}
            title="Open drawer!"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonContainer: {
    padding: 15,
  },
});

export default withNavigation(FooComponent);
