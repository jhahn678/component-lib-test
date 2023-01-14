import { Dimensions, Appearance, ViewStyle } from 'react-native';

export const borderRadius = 5;
export const borderRadiusWide = 20;
export const borderWidth = 1;
export const globalMargin = 15;

export const fontSizes: FontSizes = {
  xxxSmall: 6,
  xxsmall: 8,
  extraSmall: 10,
  small: 14,
  smallMedium: 16,
  buttonText: 17,
  medium: 18,
  large: 20,
  extraLarge: 34,
  xxlarge: 44
}

export const customDatePickerStyles = {
  dateInput: {
    borderWidth: 0,
    alignItems: 'center',
  },
  datePicker: {
    justifyContent: 'center',
  },
};

export const fonts: FontFamily = {
  VoloSans: {
    regular: 'VoloSansPro-Regular',
    bold: 'VoloSansPro-Bold',
    ultra: 'VoloSansPro-Ultra',
  },
};

export const greys: Greys = {
  extraLight: 'rgb(249, 249, 249)',
  veryLight: 'rgb(245, 245, 245)',
  light: '#d6d6d6',
  medium: '#A0A0A0',
  dark: '#474747',
  veryDark: '#111',
};

export const blues: Blues = {
  veryDark: '#0A3355',
  dark: '#183F6E',
  medium: '#3e85d7',
  light: '#428AC9',
  veryLight: 'rgb(162, 202, 232)',
};

export const colors: Colors = {
  brandPrimary: '#0a3355',
  brandSecondary: '#e9ff70',
  brandTertiary: blues.light,
  lightYellow: '#eefd85',
  accentYellow: '#F9FFD6',
  lightBlue: blues.medium,
  accentBlue: '#C0F4EF',
  accentLightBlue: '#F6FDFD',
  accentLightBlueBorder: '#4CE0D2',
  veryDarkBlue: blues.veryDark,
  black: greys.veryDark,
  white: 'white',
  error: '#e63946',
  blueviolet: 'blueviolet',
  opaqueWhite: 'rgba(255, 255, 255, 0.5)',
  lightGrey: greys.light,
  mediumGrey: greys.medium,
  darkGrey: greys.dark,
  yes: '#92b753',
  maybe: '#eac143',
  no: '#d4484c',
  blues: { ...blues },
  greys: { ...greys },
};

export const textColors: TextColors = {
  brandPrimary: colors.brandPrimary,
  brandSecondary: colors.brandSecondary,
  white: colors.white,
  black: colors.black,
  lightGrey: colors.lightGrey,
  mediumGrey: colors.mediumGrey,
  darkGrey: colors.darkGrey,
  lightBlue: colors.lightBlue,
  veryDarkBlue: colors.veryDarkBlue
}

export const buttonColors: ButtonColors = {
  white: colors.white,
  error: colors.error,
  lightYellow: colors.lightYellow,
  brandPrimary: colors.brandPrimary,
  brandTertiary: colors.brandTertiary,
  brandSecondary: colors.brandSecondary,
}

export const container: ViewStyle = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 15,
};

export const shadow: ViewStyle = {
  shadowRadius: 3,
  shadowOpacity: 0.2,
  shadowColor: colors.black,
  shadowOffset: { height: 1, width: 0 },
  elevation: 4,
};

export const bottomBoxPadding: number = 35;

// export const buttonStyle = {
//   height,
//   width,
//   borderRadius: 25,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: greys.light,
//   margin: 15,
// };

export const margins = {
  smallSide: 10,
};

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const getPhoneThemeTextColor = () => (Appearance.getColorScheme() === 'dark' ? colors.white : colors.black);

export type Greys = {
  extraLight: 'rgb(249, 249, 249)',
  veryLight: 'rgb(245, 245, 245)',
  light: '#d6d6d6',
  medium: '#A0A0A0',
  dark: '#474747',
  veryDark: '#111',
}

export type Blues = {
  veryDark: '#0A3355',
  dark: '#183F6E',
  medium: '#3e85d7',
  light: '#428AC9',
  veryLight: 'rgb(162, 202, 232)',
};

export type Colors = {
  no: '#d4484c',
  white: 'white',
  error: '#e63946',
  yes: '#92b753',
  maybe: '#eac143',
  blueviolet: 'blueviolet',
  brandPrimary: '#0a3355',
  brandSecondary: '#e9ff70',
  lightYellow: '#eefd85',
  accentYellow: '#F9FFD6',
  accentBlue: '#C0F4EF',
  accentLightBlue: '#F6FDFD',
  accentLightBlueBorder: '#4CE0D2',
  opaqueWhite: 'rgba(255, 255, 255, 0.5)',
  greys: Greys,
  blues: Blues,
  darkGrey: Greys['dark'],
  black: Greys['veryDark'],
  lightGrey: Greys['light'],
  mediumGrey: Greys['medium'],
  lightBlue: Blues['medium'],
  brandTertiary: Blues['light'],
  veryDarkBlue: Blues['veryDark'],
}

type TextColors = Pick<Colors,
  | 'brandPrimary'
  | 'brandSecondary'
  | 'white'
  | 'black'
  | 'lightBlue'
  | 'mediumGrey'
  | 'lightGrey'
  | 'darkGrey'
  | 'lightBlue'
  | 'veryDarkBlue'
>

export type TextColorOptions = { [key in keyof TextColors]?: boolean | undefined };

type ButtonColors = Pick<Colors,
  | 'brandPrimary'
  | 'brandSecondary'
  | 'brandTertiary'
  | 'lightYellow'
  | 'error'
  | 'white'
>

export type ButtonColorOptions = { [key in keyof ButtonColors]?: boolean | undefined };

export type FontSizes = {
  xxxSmall: 6,
  xxsmall: 8,
  extraSmall: 10,
  small: 14,
  smallMedium: 16,
  buttonText: 17,
  medium: 18,
  large: 20,
  extraLarge: 34,
  xxlarge: 44
}

export type FontSizeOptions = { [key in keyof FontSizes]?: boolean | undefined };

export type FontFamily = {
  VoloSans: {
    regular: 'VoloSansPro-Regular',
    bold: 'VoloSansPro-Bold',
    ultra: 'VoloSansPro-Ultra',
  }
}

export type FontFamilyOptions = { [key in keyof FontFamily['VoloSans']]?: boolean | undefined }