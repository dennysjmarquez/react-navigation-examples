import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MenuHeader = () => (
  <View style={styles.container}>
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
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default MenuHeader;
