import path from 'path';
import { RollupOptions, OutputOptions, ModuleFormat, InputPluginOption } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel, RollupBabelInputPluginOptions } from '@rollup/plugin-babel'
import visualizer from 'rollup-plugin-visualizer';
import esbuild from 'rollup-plugin-esbuild';
import { PackageName } from './build-package';

export interface RollupConfig extends RollupOptions{
    output: OutputOptions | OutputOptions[]
}

interface PkgConfigInput {
    name: PackageName
    basePath: string
    format: ModuleFormat
    entry?: string
    sourcemap?: boolean
    analyze?: boolean
}

export default async function createPackageConfig(config: PkgConfigInput): Promise<RollupConfig> {

  // Transforms imports for babel helpers to reference @babel/runtime
  let babelPlugins: string[] = ["@babel/plugin-transform-runtime"];

  const babelOptions: RollupBabelInputPluginOptions = {
    babelHelpers: "runtime",
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    presets: [
      ["module:metro-react-native-babel-preset", { disableImportExportTransform: true }]
    ]
  };

  // Transforms react-native imports in the web build
  if(config.name === 'web') babelPlugins.push('react-native-web')

  babelOptions.plugins = babelPlugins;

  const plugins = [
    commonjs({ include: /node_modules/ }),
    babel(babelOptions),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    nodeExternals(),
    esbuild({ minify: config.format === 'umd' }),
  ] as InputPluginOption[];

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

  // Rollup executes after TS compilation, which outputs to build/{package}/src
  const defaultInput = path.resolve(config.basePath, 'src/index.js');

  return {
    output,
    plugins,
    input: config?.entry || defaultInput,
  };
}