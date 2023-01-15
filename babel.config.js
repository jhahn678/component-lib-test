require('dotenv').config()
console.log(process.env.NODE_ENV)

module.exports = function(api) {
  api.cache(true);
  if(process.env.NODE_ENV === 'build'){
    return {
      presets: [
        ["module:metro-react-native-babel-preset", { disableImportExportTransform: true }]
      ],
    };
  }
  return {
    presets: [
      'babel-preset-expo'
    ],
  };
};