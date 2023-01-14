const replace = require("replace-in-file");

const results = replace.replaceInFileSync({
  files: "build/web/**/*.js",
  from: /from [",']react-native[",']/g,
  to: "from 'react-native-web'"
})

const modified = results.filter(x => x.hasChanged === true)

console.log(`

    Modified ${modified.length} files to import from 'react-native-web'

`)
