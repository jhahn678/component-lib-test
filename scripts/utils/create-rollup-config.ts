import path from 'path';
import { RollupOptions, OutputOptions, ModuleFormat } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel'
import visualizer from 'rollup-plugin-visualizer';
// import esbuild from 'rollup-plugin-esbuild';
// import { getPackagesList } from '../../scripts/utils/get-packages-list';

export interface RollupConfig extends RollupOptions{
    output: OutputOptions | OutputOptions[]
}

interface PkgConfigInput {
    name: string,
    basePath: string
    format: ModuleFormat
    entry?: string
    minify?: boolean
    sourcemap?: boolean
    analyze?: boolean
}

export default async function createPackageConfig(config: PkgConfigInput): Promise<RollupConfig> {
    //Get package.json from config
    // const packageJson = JSON.parse(
    //     fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
    // );

  //Get universal list of packages
//   const pkgList = await getPackagesList();

  //Aliasing package list
    //Creating a regex from package name
    //unsure ------
//   const aliasEntries: Alias[] = pkgList.map((pkg) => ({
//     find: new RegExp(`^${pkg.packageJson.name}`),
//     replacement: path.resolve(pkg.path, 'src'),
//   }));

  const plugins = [
    commonjs({ include: /node_modules/ }), //converts commonjs to es modules
    babel({ 
        babelHelpers: "runtime",
        extensions: ['.ts', '.tsx', '.js'],
        presets: [["module:metro-react-native-babel-preset", { disableImportExportTransform: true }]]
    }),
    nodeExternals(), // automatically declares NodeJS built-in modules as external
    nodeResolve({ extensions: ['.ts', '.tsx', '.js'] }),  // locates modules using the Node resolution algorithm
    // esbuild({
    //   minify: config.format === 'umd',
    //   sourceMap: false,
    //   tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    // }),
  ];

//   let externals;

//   if (config.format === 'umd') {
//     externals = [
//       ...(config?.externals || []),
//       ...Object.keys({
//         ...packageJson.peerDependencies,
//       }),
//     ];
//   } else {
//     externals = [
//       '@emotion/server/create-instance',
//       'dayjs/locale/ru',
//       'highlight.js/lib/languages/typescript',
//       '@emotion/cache',
//       '@emotion/utils',
//       '@emotion/serialize',
//       'prism-react-renderer/themes/duotoneDark',
//       'prism-react-renderer/themes/duotoneLight',
//       ...(config?.externals || []),
//       ...Object.keys({
//         ...packageJson.peerDependencies,
//         ...packageJson.dependencies,
//       }),
//     ];
//   }

  const output: OutputOptions = {
    name: config.name,
    format: config.format,
    externalLiveBindings: false,
    sourcemap: config.sourcemap,
  };

  if (config.format === 'es') {
    output.dir = path.resolve(config.basePath, 'esm');
    output.preserveModules = true;
  }

  if (config.format === 'cjs') {
    output.dir = path.resolve(config.basePath, 'cjs');
    output.preserveModules = true;
    output.exports = 'named';
  }

//   if (config.format === 'umd') {
//     output.file = path.resolve(config.basePath, 'lib/index.umd.js');
//     output.globals = {
//       ...pkgList
//         .map((pkg) => ({
//           [pkg.packageJson.name]: pkg.packageJson.name,
//         }))
//         .reduce((globals, pkgGlobal) => ({ ...globals, ...pkgGlobal }), {}),
//       react: 'React',
//       dayjs: 'dayjs',
//       'react-dom': 'ReactDOM',
//     };
//   }

  if (config.analyze && config.format === 'es') {
    plugins.push(
      visualizer({
        title: config.name,
        filename: path.join(config.basePath, 'lib/stats.html'),
        projectRoot: path.join(config.basePath, 'src'),
        sourcemap: true,
        gzipSize: true,
      }),
      visualizer({
        title: config.name,
        filename: path.join(config.basePath, 'lib/stats.json'),
        projectRoot: path.join(config.basePath, 'src'),
        json: true,
        sourcemap: true,
        gzipSize: true,
      })
    );
  }

  return {
    input: config?.entry || path.resolve(config.basePath, 'index.js'),
    output,
    plugins,
  };
}