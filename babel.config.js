// Expo requires a particular preset for Babel that automatically converts modules.
// In order to compile properly with rollup, we need to preserve modules.
// In the build script, we're setting an environment variable to allow us to switch
// between presets here. A better way probably exists, but my knowledge of Babel/Rollup
// is pretty shallow.

module.exports = function(api) {
  api.cache(true);
  if(process.env.NODE_ENV === 'build'){
    return {};
  }
  return {
    presets: [
      'babel-preset-expo'
    ],
  };
};