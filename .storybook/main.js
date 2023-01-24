const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    '@storybook/addon-react-native-web'
  ],
  framework: "@storybook/react",
  staticDirs: [
    { from: "../src/assets", to: "assets" },
    { from: "../assets/fonts", to: "fonts" }
  ],
}