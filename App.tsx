import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Button from "./src/components/Button"
import { colors, fonts } from './src/constants/globalStyles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    ['VoloSansPro']: require('./assets/fonts/VoloSansPro.otf'),
    [fonts.VoloSans.bold]: require('./assets/fonts/VoloSansPro-Bold.otf'),
    [fonts.VoloSans.ultra]: require('./assets/fonts/VoloSansPro-Ultra.otf'),
    [fonts.VoloSans.regular]: require('./assets/fonts/VoloSansPro-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
    top: 60,
    position: 'absolute',
    fontSize: 24,
    color: colors.brandPrimary,
    fontFamily: fonts.VoloSans.bold
  },
  button: {
    width: 150,
  }
});
