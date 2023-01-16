import path from 'path';
import { RollupOptions, OutputOptions, ModuleFormat } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel'
import visualizer from 'rollup-plugin-visualizer';
import esbuild from 'rollup-plugin-esbuild';

export interface RollupConfig extends RollupOptions{
    output: OutputOptions | OutputOptions[]
}

interface PkgConfigInput {
    name: string,
    basePath: string
    format: ModuleFormat
    entry?: string
    sourcemap?: boolean
    analyze?: boolean
}

export default async function createPackageConfig(config: PkgConfigInput): Promise<RollupConfig> {
    
    // // Aliasing dependencies
    // const packageJson = JSON.parse(
    //     fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
    // );
    // const pkgList = await getPackagesList();
    // const aliasEntries: Alias[] = pkgList.map((pkg) => ({
    //     find: new RegExp(`^${pkg.packageJson.name}`),
    //     replacement: path.resolve(pkg.path, 'src'),
    // }));


  const plugins = [
    commonjs({ include: /node_modules/ }),
    babel({ 
            babelHelpers: "runtime",
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            presets: [["module:metro-react-native-babel-preset", { disableImportExportTransform: true }]]
        }),
    nodeExternals(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
        sourceMap: true,
        minify: config.format === 'umd',
    }),
  ];

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

  return {
    input: config?.entry || path.resolve(config.basePath, 'src/index.js'),
    output,
    plugins,
  };
}