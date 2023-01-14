module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["module:metro-react-native-babel-preset", { disableImportExportTransform: true }]
      // ['babel-preset-expo', { web: { disableImportExportTransform: true }}],
      // '@babel/preset-react',
      // ['@babel/preset-env', { modules: false }]
    ],
  };
};
