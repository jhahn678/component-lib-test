import {
  Blues,
  Colors,
  FontFamily,
  FontSizes,
  Greys,
} from './types'

export const borderRadius = 5;
export const borderRadiusWide = 20;
export const borderWidth = 1;
export const globalMargin = 15;

export const fontSizes: FontSizes = {
  xxxxSmall: 6,
  xxxsmall: 8,
  xxSmall: 10,
  extraSmall: 12,
  small: 14,
  smallMedium: 16,
  buttonText: 17,
  medium: 18,
  large: 20,
  extraLarge: 34,
  xxlarge: 44
}

export const fonts: FontFamily = {
  VoloSansPro: "'VoloSansPro', Arial, Helvetica Neue, Helvetica, sans-serif",
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
  dropInBlue: 'rgba(85, 62, 114, 1)',
  pickupPurple: 'rgba(61, 115, 179, 1)',
}; 