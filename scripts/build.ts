import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { buildPackage} from './utils/build-package';

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('package', {
    type: 'string',
    choices: ['web', 'mobile'],
    description: 'Specify package which should be bundled.',
  })
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
    choices: ['es', 'cjs', 'umd'],
    default: ['es', 'cjs'],
    description: "Specify module code generation: 'es', 'cjs'.",
  })
  .example([
    ['$0 --formats umd cjs', 'Bundle web and mobile to umd and cjs.'],
    ['$0 --package web', 'Bundle web only to es and cjs'],
  ]);

(async () => {
  if(argv.package){
    await buildPackage(argv.package, argv)
  }else{
    await buildPackage('web', argv)
    await buildPackage('mobile', argv)
  }
})();