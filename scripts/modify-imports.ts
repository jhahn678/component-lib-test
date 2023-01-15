import chalk from 'chalk';
import { replaceInFileSync } from "replace-in-file";

/**
 * @description Script to replace all imports from react-native to react-native-web in build/web
 * @example [IN PACKAGE.JSON SCRIPT] ts-node scripts/modify-imports
 */

const results = replaceInFileSync({
  files: ["build/web/**/*.js","build/web/**/*.jsx", "build/web/**/*.ts", "build/web/**/*.tsx"],
  from: /from [",']react-native[",']/g,
  to: "from 'react-native-web'"
})

const modified = results.filter(x => x.hasChanged === true)

console.log(`

    Modified ${chalk.cyan(modified.length)} files to import from ${chalk.cyan('react-native-web')}

`);