import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuHeader = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      React Navigation examples
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default MenuHeader;
