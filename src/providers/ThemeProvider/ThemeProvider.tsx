import { NativeBaseProvider, extendTheme, NativeBaseProviderProps } from "native-base"

/** These are temporary - just needed something for testing */
const theme = extendTheme({
  colors: {
    brandPrimary: {
      50: '#e3f4ff',
      100: '#bbdcf7',
      200: '#90c4ef',
      300: '#66ace8',
      400: '#2a7bc8',
      500: '#0d4472',
      600: '#0a3355',
      700: '#082944',
      800: '#062035',
      900: '#000f1b',
    },
    brandSecondary: {
      50: '#faffdd',
      100: '#faffdd',
      200: '#faffdd',
      300: '#faffdd',
      400: '#f3ffb0',
      500: '#ebff80',
      600: '#e9ff70',
      700: '#ddff23',
      800: '#c3e610',
      900: '#97b306',
    },
    brandTertiary: {
      50: '#e1f5ff',
      100: '#e1f5ff',
      200: '#e1f5ff',
      300: '#bedbf3',
      400: '#99c2e6',
      500: '#72a9d8',
      600: '#428AC9',
      700: '#3377b3',
      800: '#255d8c',
      900: '#174265',
    }
  },
});


type CustomThemeType = typeof theme;

// Extending the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

/**
 * Preconfigured with our cutsom theme.
 * All components must be children of this provider.
 * @TODO Setup custom theme
 * @TODO Add theme override method that deep merges
 * provided theme object
 */
const ThemeProvider = (
  props: Omit<NativeBaseProviderProps, 'theme'>
) => <NativeBaseProvider theme={theme} {...props}/>;

export default ThemeProvider;