/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs'
import chalk from 'chalk';
import { Logger } from './Logger';
import compileTypescript from './compile-typescript';
import { OutputOptions, rollup, ModuleFormat, RollupOutput } from 'rollup';
import createPackageConfig, { RollupConfig } from "./create-rollup-config"

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

/**
 * Called in scripts/build
 * @prebuild removes cjs/esm/lib from previous build
 * @build compiles/writes build from rollup configuration
 * @postbuild removes src folder from directory
 * @param options build options from command line
 */
export async function buildPackage(options?: BuildOptions) {

    const logger = new Logger('Build');

    const { formats = [], ...otherOptions } = options || {};

    logger.info(`${chalk.cyan('Building package')}`);

    // Prebuild: Remove previous build folders
    fs.rmSync('cjs', { recursive: true, force: true });
    fs.rmSync('esm', { recursive: true, force: true });
    fs.rmSync('lib', { recursive: true, force: true });
    fs.rmSync('dist', { recursive: true, force: true });

    try {
        const startTime = Date.now();

        // Compile typescript to package directory
        await compileTypescript();

        // Create rollup configs for each format and create bundle
        for (const format of formats) {
            const config = await createPackageConfig({
                format,
                ...otherOptions,
            });

            logger.info(`Building to ${chalk.cyan(format)} format...`);
            await compile(config);
        }

        logger.info(
            `Package was built in ${chalk.green(
                `${((Date.now() - startTime) / 1000).toFixed(2)}s`
            )}`
        );

        // Postbuild: Removing dist folder from directory
        fs.rmSync('dist', { recursive: true, force: true });

      } catch (err) {
        process.stdout.write(`${err.toString('minimal')}\n`);
        process.exit(1);
      }
}