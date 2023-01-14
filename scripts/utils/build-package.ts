import chalk from 'chalk';
import path from 'path'
import { Logger } from './Logger';
import { OutputOptions, rollup, ModuleFormat } from 'rollup';
import createPackageConfig, { RollupConfig } from "./create-rollup-config"
// import generateDts from './generate-dts';

export default async function compile(config: RollupConfig) {
    const build = await rollup(config);
    const outputs: OutputOptions[] = Array.isArray(config.output) ? config.output : [config.output];

    return Promise.all(outputs.map((output) => build.write(output)));
}

const logger = new Logger('Build');

export interface BuildOptions {
    analyze: boolean;
    sourcemap: boolean;
    minify: boolean;
    formats: ModuleFormat[];
}

export async function buildPackage(packageName: 'web' | 'mobile', options?: BuildOptions) {

    const { formats = [], ...opts } = options || {};

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

    try {
        const startTime = Date.now();

        // Calling tsconfig to generate type declartions
        // await generateDts(packagePath);
    
        //Creating rollup configs for each file path
        for (const format of formats) {
            const config = await createPackageConfig({
                ...opts,
                format,
                basePath: packagePath,
                name: packageName,
            });
    
            logger.info(`Building to ${chalk.cyan(format)} format...`);
            //Executing rollup on each config
            await compile(config);
        }
    
        logger.info(
            `Package ${chalk.cyan(packageName)} was built in ${chalk.green(
                `${((Date.now() - startTime) / 1000).toFixed(2)}s`
            )}`
        );
      } catch (err) {
        logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
        process.stdout.write(`${err.toString('minimal')}\n`);
        process.exit(1);
      }
}