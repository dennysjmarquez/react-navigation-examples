import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.goToStack = this.goToStack.bind(this);
  }

  goToStack() {
    this.props.navigation.push('Stack2');
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <Text style={styles.text}>
          {params ? `You send a param: ${params.name}` : 'You do not send a param'}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToStack}
            color={'#242134'}
            title="Add stack!"
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

export default withNavigation(MainComponent);
