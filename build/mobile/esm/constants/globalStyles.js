import { Dimensions } from 'react-native';

var greys = { extraLight: "rgb(249, 249, 249)", veryLight: "rgb(245, 245, 245)", light: "#d6d6d6", medium: "#A0A0A0", dark: "#474747", veryDark: "#111" };
var blues = { veryDark: "#0A3355", dark: "#183F6E", medium: "#3e85d7", light: "#428AC9", veryLight: "rgb(162, 202, 232)" };
var colors = { brandPrimary: "#0a3355", brandSecondary: "#e9ff70", brandTertiary: blues.light, lightYellow: "#eefd85", accentYellow: "#F9FFD6", lightBlue: blues.medium, accentBlue: "#C0F4EF", accentLightBlue: "#F6FDFD", accentLightBlueBorder: "#4CE0D2", veryDarkBlue: blues.veryDark, black: greys.veryDark, white: "white", error: "#e63946", blueviolet: "blueviolet", opaqueWhite: "rgba(255, 255, 255, 0.5)", lightGrey: greys.light, mediumGrey: greys.medium, darkGrey: greys.dark, yes: "#92b753", maybe: "#eac143", no: "#d4484c", blues: Object.assign({}, blues), greys: Object.assign({}, greys) };
Dimensions.get("window").height;
Dimensions.get("window").width;

export { blues, colors, greys };
//# sourceMappingURL=globalStyles.js.map
