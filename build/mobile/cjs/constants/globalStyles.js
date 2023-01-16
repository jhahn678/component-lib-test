'use strict';

var reactNative = require('react-native');

var borderRadius = 5;
var borderRadiusWide = 20;
var borderWidth = 1;
var globalMargin = 15;
var fontSizes = { xxxSmall: 6, xxsmall: 8, extraSmall: 10, small: 14, smallMedium: 16, buttonText: 17, medium: 18, large: 20, extraLarge: 34, xxlarge: 44 };
var customDatePickerStyles = { dateInput: { borderWidth: 0, alignItems: "center" }, datePicker: { justifyContent: "center" } };
var fonts = { VoloSans: { regular: "VoloSansPro-Regular", bold: "VoloSansPro-Bold", ultra: "VoloSansPro-Ultra" } };
var greys = { extraLight: "rgb(249, 249, 249)", veryLight: "rgb(245, 245, 245)", light: "#d6d6d6", medium: "#A0A0A0", dark: "#474747", veryDark: "#111" };
var blues = { veryDark: "#0A3355", dark: "#183F6E", medium: "#3e85d7", light: "#428AC9", veryLight: "rgb(162, 202, 232)" };
var colors = { brandPrimary: "#0a3355", brandSecondary: "#e9ff70", brandTertiary: blues.light, lightYellow: "#eefd85", accentYellow: "#F9FFD6", lightBlue: blues.medium, accentBlue: "#C0F4EF", accentLightBlue: "#F6FDFD", accentLightBlueBorder: "#4CE0D2", veryDarkBlue: blues.veryDark, black: greys.veryDark, white: "white", error: "#e63946", blueviolet: "blueviolet", opaqueWhite: "rgba(255, 255, 255, 0.5)", lightGrey: greys.light, mediumGrey: greys.medium, darkGrey: greys.dark, yes: "#92b753", maybe: "#eac143", no: "#d4484c", blues: Object.assign({}, blues), greys: Object.assign({}, greys) };
var textColors = { brandPrimary: colors.brandPrimary, brandSecondary: colors.brandSecondary, white: colors.white, black: colors.black, lightGrey: colors.lightGrey, mediumGrey: colors.mediumGrey, darkGrey: colors.darkGrey, lightBlue: colors.lightBlue, veryDarkBlue: colors.veryDarkBlue };
var buttonColors = { white: colors.white, error: colors.error, lightYellow: colors.lightYellow, brandPrimary: colors.brandPrimary, brandTertiary: colors.brandTertiary, brandSecondary: colors.brandSecondary };
var container = { flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 15 };
var shadow = { shadowRadius: 3, shadowOpacity: 0.2, shadowColor: colors.black, shadowOffset: { height: 1, width: 0 }, elevation: 4 };
var bottomBoxPadding = 35;
var margins = { smallSide: 10 };
var screenHeight = reactNative.Dimensions.get("window").height;
var screenWidth = reactNative.Dimensions.get("window").width;
var getPhoneThemeTextColor = function getPhoneThemeTextColor2() {
  return reactNative.Appearance.getColorScheme() === "dark" ? colors.white : colors.black;
};

exports.blues = blues;
exports.borderRadius = borderRadius;
exports.borderRadiusWide = borderRadiusWide;
exports.borderWidth = borderWidth;
exports.bottomBoxPadding = bottomBoxPadding;
exports.buttonColors = buttonColors;
exports.colors = colors;
exports.container = container;
exports.customDatePickerStyles = customDatePickerStyles;
exports.fontSizes = fontSizes;
exports.fonts = fonts;
exports.getPhoneThemeTextColor = getPhoneThemeTextColor;
exports.globalMargin = globalMargin;
exports.greys = greys;
exports.margins = margins;
exports.screenHeight = screenHeight;
exports.screenWidth = screenWidth;
exports.shadow = shadow;
exports.textColors = textColors;
//# sourceMappingURL=globalStyles.js.map
