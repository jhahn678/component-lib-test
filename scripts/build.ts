import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { BuildOptions, buildPackage} from './utils/build-package';

/**
 * @description This is executed from the command line or a package.json script
 * @example ts-node scripts/build
 * : Builds web and mobile to EsModule and CommonJs
 * @example ts-node scripts/build --package mobile
 * : Builds mobile to EsModule and CommonJs
 * @example ts-node scripts/build --package web --analyze --formats cjs
 * : Builds web to CommonJs and generates package analytics at build/web/lib/stats{.html & .json}
 */
const { argv }: { argv: unknown } = yargs(hideBin(process.argv))
  .option('analyze', {
    type: 'boolean',
    default: false,
    description: 'Generate bundle analytics.',
  })
  .option('sourcemap', {
    type: 'boolean',
    default: true,
    description: 'Generate sourcemap.',
  })
  .option('formats', {
    type: 'string',
    array: true,
    choices: ['es', 'cjs'],
    default: ['es', 'cjs'],
    description: "Specify module code generation: 'es', 'cjs'.",
  })
  .example([
    ['$0', 'Bundle web and mobile to es and cjs.'],
    ['$0 --formats cjs', 'Bundle web and mobile to cjs.'],
    ['$0 --package web --analyze', 'Bundle web only to es and cjs and generate analysis files'],
  ]);

(async () => {
  await buildPackage(argv as BuildOptions);
})();