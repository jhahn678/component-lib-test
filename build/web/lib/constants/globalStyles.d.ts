import { ViewStyle } from 'react-native-web';
export declare const borderRadius = 5;
export declare const borderRadiusWide = 20;
export declare const borderWidth = 1;
export declare const globalMargin = 15;
export declare const fontSizes: FontSizes;
export declare const customDatePickerStyles: {
    dateInput: {
        borderWidth: number;
        alignItems: string;
    };
    datePicker: {
        justifyContent: string;
    };
};
export declare const fonts: FontFamily;
export declare const greys: Greys;
export declare const blues: Blues;
export declare const colors: Colors;
export declare const textColors: TextColors;
export declare const buttonColors: ButtonColors;
export declare const container: ViewStyle;
export declare const shadow: ViewStyle;
export declare const bottomBoxPadding: number;
export declare const margins: {
    smallSide: number;
};
export declare const screenHeight: number;
export declare const screenWidth: number;
export declare const getPhoneThemeTextColor: () => "#111" | "white";
export declare type Greys = {
    extraLight: 'rgb(249, 249, 249)';
    veryLight: 'rgb(245, 245, 245)';
    light: '#d6d6d6';
    medium: '#A0A0A0';
    dark: '#474747';
    veryDark: '#111';
};
export declare type Blues = {
    veryDark: '#0A3355';
    dark: '#183F6E';
    medium: '#3e85d7';
    light: '#428AC9';
    veryLight: 'rgb(162, 202, 232)';
};
export declare type Colors = {
    no: '#d4484c';
    white: 'white';
    error: '#e63946';
    yes: '#92b753';
    maybe: '#eac143';
    blueviolet: 'blueviolet';
    brandPrimary: '#0a3355';
    brandSecondary: '#e9ff70';
    lightYellow: '#eefd85';
    accentYellow: '#F9FFD6';
    accentBlue: '#C0F4EF';
    accentLightBlue: '#F6FDFD';
    accentLightBlueBorder: '#4CE0D2';
    opaqueWhite: 'rgba(255, 255, 255, 0.5)';
    greys: Greys;
    blues: Blues;
    darkGrey: Greys['dark'];
    black: Greys['veryDark'];
    lightGrey: Greys['light'];
    mediumGrey: Greys['medium'];
    lightBlue: Blues['medium'];
    brandTertiary: Blues['light'];
    veryDarkBlue: Blues['veryDark'];
};
declare type TextColors = Pick<Colors, 'brandPrimary' | 'brandSecondary' | 'white' | 'black' | 'lightBlue' | 'mediumGrey' | 'lightGrey' | 'darkGrey' | 'lightBlue' | 'veryDarkBlue'>;
export declare type TextColorOptions = {
    [key in keyof TextColors]?: boolean | undefined;
};
declare type ButtonColors = Pick<Colors, 'brandPrimary' | 'brandSecondary' | 'brandTertiary' | 'lightYellow' | 'error' | 'white'>;
export declare type ButtonColorOptions = {
    [key in keyof ButtonColors]?: boolean | undefined;
};
export declare type FontSizes = {
    xxxSmall: 6;
    xxsmall: 8;
    extraSmall: 10;
    small: 14;
    smallMedium: 16;
    buttonText: 17;
    medium: 18;
    large: 20;
    extraLarge: 34;
    xxlarge: 44;
};
export declare type FontSizeOptions = {
    [key in keyof FontSizes]?: boolean | undefined;
};
export declare type FontFamily = {
    VoloSans: {
        regular: 'VoloSansPro-Regular';
        bold: 'VoloSansPro-Bold';
        ultra: 'VoloSansPro-Ultra';
    };
};
export declare type FontFamilyOptions = {
    [key in keyof FontFamily['VoloSans']]?: boolean | undefined;
};
export {};
//# sourceMappingURL=globalStyles.d.ts.map