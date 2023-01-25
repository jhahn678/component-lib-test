import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { BuildOptions, buildPackage} from './utils/build-package';

/**
 * @description This is executed from the command line or a package.json script
 * @example ts-node scripts/build
 * : Standard build to EsModule and CommonJs
 * @example ts-node scripts/build --formats cjs
 * : Builds only to CommonJs
 * @example ts-node scripts/build --analyze
 * : Standard build with package analytics at build/lib/stats
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
    ['$0', 'Bundle to es and cjs.'],
    ['$0 --formats cjs', 'Bundle only to cjs.'],
    ['$0 --analyze', 'Bundle to es and cjs and generate analysis files'],
  ]);

(async () => {
  await buildPackage(argv as BuildOptions);
})();