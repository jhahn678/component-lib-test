import React, { useCallback } from 'react';
import { fonts } from './src/constants/globalStyles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Playground from './Playground';

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
    <Playground onLayout={onLayoutRootView}/>
  );
}

