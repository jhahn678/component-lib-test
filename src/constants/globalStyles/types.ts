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
  dropInBlue: 'rgba(85, 62, 114, 1)',
  pickupPurple: 'rgba(61, 115, 179, 1)',
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

export type FontSizeOptions = { [key in keyof FontSizes]?: boolean | undefined };

export type FontFamily = {
  /**
   * Most components should use this.
   * It has 8 variants that map out to:
   *  #### Regular
   *  - fontWeight:  500
   *  #### Regular italic
   *  - fontWeight: 500
   *  - fontStyle: italic
   *  #### Bold
   *  - fontWeight: 600
   *  #### Bold italic
   *  - fontWeight: 600
   *  - fontStyle: italic
   *  #### Ultra
   *  - fontWeight: 900
   *  #### Ultra italic
   *  - fontWeight: 900
   *  - fontStyle: italic
   */
  VoloSansPro: "'VoloSansPro', Arial, Helvetica Neue, Helvetica, sans-serif",
  // Should also be concatenated - leaving it as is for now since
  // styled-components needed a different for fallbacks
  VoloSans: {
    /** Maps to fontWeight 500 */
    regular: 'VoloSansPro-Regular',
    /** Maps to fontWeight 600 */
    bold: 'VoloSansPro-Bold',
    /** Maps to fontWeight 900 */
    ultra: 'VoloSansPro-Ultra',
  }
}

export type FontFamilyOptions = { [key in keyof FontFamily['VoloSans']]?: boolean | undefined }