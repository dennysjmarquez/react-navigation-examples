import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
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
        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goBack}
            color={'#242134'}
            title="Go back!"
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

export default withNavigation(OtherComponent);
