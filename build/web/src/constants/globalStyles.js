import { Dimensions, Appearance } from 'react-native-web';
export const borderRadius = 5;
export const borderRadiusWide = 20;
export const borderWidth = 1;
export const globalMargin = 15;
export const fontSizes = {
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
};
export const customDatePickerStyles = {
    dateInput: {
        borderWidth: 0,
        alignItems: 'center',
    },
    datePicker: {
        justifyContent: 'center',
    },
};
export const fonts = {
    VoloSans: {
        regular: 'VoloSansPro-Regular',
        bold: 'VoloSansPro-Bold',
        ultra: 'VoloSansPro-Ultra',
    },
};
export const greys = {
    extraLight: 'rgb(249, 249, 249)',
    veryLight: 'rgb(245, 245, 245)',
    light: '#d6d6d6',
    medium: '#A0A0A0',
    dark: '#474747',
    veryDark: '#111',
};
export const blues = {
    veryDark: '#0A3355',
    dark: '#183F6E',
    medium: '#3e85d7',
    light: '#428AC9',
    veryLight: 'rgb(162, 202, 232)',
};
export const colors = {
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
    blues: Object.assign({}, blues),
    greys: Object.assign({}, greys),
};
export const textColors = {
    brandPrimary: colors.brandPrimary,
    brandSecondary: colors.brandSecondary,
    white: colors.white,
    black: colors.black,
    lightGrey: colors.lightGrey,
    mediumGrey: colors.mediumGrey,
    darkGrey: colors.darkGrey,
    lightBlue: colors.lightBlue,
    veryDarkBlue: colors.veryDarkBlue
};
export const buttonColors = {
    white: colors.white,
    error: colors.error,
    lightYellow: colors.lightYellow,
    brandPrimary: colors.brandPrimary,
    brandTertiary: colors.brandTertiary,
    brandSecondary: colors.brandSecondary,
};
export const container = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
};
export const shadow = {
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowColor: colors.black,
    shadowOffset: { height: 1, width: 0 },
    elevation: 4,
};
export const bottomBoxPadding = 35;
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
