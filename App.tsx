import React from 'react';
import Button from './src/components/Button'
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/constants/globalStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component Playground</Text>
      <Button style={styles.button}>Hello World</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    top: 80,
    position: 'absolute',
    fontSize: 24,
    fontWeight: '700',
    color: colors.brandPrimary
  },
  button: {
    width: 150
  }
});
