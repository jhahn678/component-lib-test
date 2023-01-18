import fs from 'fs'
import path from 'path'
import chalk from 'chalk';
import { Logger } from './Logger';
import { OutputOptions, rollup, ModuleFormat, RollupOutput } from 'rollup';
import createPackageConfig, { RollupConfig } from "./create-rollup-config"
import compileTypescript from './compile-typescript';
import configurePackageJson from './configure-package-json';

/**
 * @description Compiles/writes build from rollup configuration
 * @param config Provided through scripts/utils/create-rollup-config
 * @returns Array of build outputs
 */

export default async function compile(config: RollupConfig): Promise<RollupOutput[]> {
    const build = await rollup(config);
    const outputs: OutputOptions[] = Array.isArray(config.output) ? config.output : [config.output];

    return Promise.all(outputs.map((output) => build.write(output)));
}

/** Build options are provided from scripts/build arguments */
export interface BuildOptions {
    analyze: boolean;
    sourcemap: boolean;
    minify: boolean;
    formats: ModuleFormat[];
}

export type PackageName = 'web' | 'mobile';

/**
 * called in scripts/build
 * @prebuild removes cjs/esm/lib from previous build
 * @build compiles/writes build from rollup configuration
 * @postbuild removes src folder from directory
 * @param packageName web or mobile
 * @param options build options from command line
 */
export async function buildPackage(packageName: PackageName, options?: BuildOptions) {

    const logger = new Logger('Build');

    const { formats = [], ...otherOptions } = options || {};

    let packagePath: string;

    if(packageName === 'web') {
        packagePath = path.join(__dirname, '../../build/web');
    }else if(packageName === 'mobile') {
        packagePath = path.join(__dirname, '../../build/mobile');
    }else {
        logger.error(`Package ${chalk.cyan(packageName)} does not exist`);
        process.exit(1);
    }

    logger.info(`Building package ${chalk.cyan(packageName)}`);

    // Prebuild: Remove previous build folder
    fs.rmSync(`build/${packageName}`, { recursive: true, force: true });

    try {
        const startTime = Date.now();

        // Compile typescript to package directory
        await compileTypescript(packageName);
    
        // Create rollup configs for each format and create bundle
        for (const format of formats) {
            const config = await createPackageConfig({
                ...otherOptions,
                format,
                name: packageName,
                basePath: packagePath,
            });

            logger.info(`Building to ${chalk.cyan(format)} format...`);
            await compile(config);
        }
    
        logger.info(
            `Package ${chalk.cyan(packageName)} was built in ${chalk.green(
                `${((Date.now() - startTime) / 1000).toFixed(2)}s`
            )}`
        );

        // Postbuild: Removing src folder from directory
        fs.rmSync(`build/${packageName}/src`, { recursive: true, force: true });

        // Configure and add package.json
        fs.writeFileSync(`build/${packageName}/package.json`, configurePackageJson(packageName))

      } catch (err) {
        logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
        process.stdout.write(`${err.toString('minimal')}\n`);
        process.exit(1);
      }
}