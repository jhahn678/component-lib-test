import * as fs from 'fs';
import * as path from 'path';
const cwd = process.cwd();

interface PackageConfig {
    name: string
    author: string
    license: string
    version: string
    repository: string
    main: string,
    publishConfig: {
        registry: string
        access: string
    },
    dependencies: { [k: string]: string }
    peerDependencies: { [k: string]: string },
    devDependencies: { [k: string]: string },
}

/**
 * These are dependencies that need to be excluded from the
 * build package.json. React and React-native(-web) will
 * be listed as peerDependencies. Additionally all expo related
 * packages will be filtered out in the getDependenciesList function.
 *
 * In the future, we can test moving these to peerDeps in development,
 * which would eliminate the need to keep record of them here. I already
 * tested this with expo and initially it failed, but it may be possible
 * with some extra configuration.
 */

const exclude = [
    'react',
    'react-dom',
    'react-native',
    'react-native-web',
];


/**
 * Gets package.json from specified path and parse to object
 * @param fromPath defaults to process.cwd()
 * @returns parsed package.json as object
 */
export const getPackageJson = (fromPath: string = cwd): PackageConfig => {
    const packagePath = path.join(fromPath, "package.json")
    const file = fs.readFileSync(packagePath, { encoding: 'utf-8' });
    return JSON.parse(file);
}


/**
 * @description
 * Retrieve and parse the package.json from the root of the project.
 * Filter all packages from the dependencies object that are in the
 * exclude array, as well as expo related packages.
 * @returns
 * Dependencies object for the build package.json
 *  - OR -
 * null if the number of deps is zero.
 */
export const getDependenciesList = (): { [k: string]: string } | null => {
    // Retrieve the parsed root package.json
    const { dependencies = {}  } = getPackageJson();
     // Filter out unwanted deps
     const filteredEntries = Object.entries<string>(dependencies)
        .filter(([x]) =>
            !exclude.includes(x)        // Remove all packages in excludes array
            && !x.includes('expo')      // Remove all expo related packages
            && !x.includes('@types')    // SAFEGUARD - remove all @types packages (should be in devDeps anyways)
     );
    // Return null here to skip adding empty dependencies object in next step
    if(filteredEntries.length === 0) return null;
    return Object.fromEntries<string>(filteredEntries);
};


/**
 * @description
 * Configures the build package.json object
 * @param packageName
 * @returns JSON object
 */
const configurePackageJson = (): string => {
    
    const dependencies = getDependenciesList();

    const { 
        name, 
        license, 
        version, 
        author,
        publishConfig
    } = getPackageJson();

    const packageJson = {
        name,
        license,
        version,
        author,
        publishConfig,
        main: "cjs/index.js",
        module: "esm/index.js",
        types: "lib/index.d.ts",
        sideEffects: false,
        dependencies,
        peerDependencies: {
            "react": ">=17.0.2",
            "react-native": ">=0.68.0",
            "react-native-web": ">=0.17.1",
        }
    }

    return JSON.stringify(packageJson, null, 2)
}

export default configurePackageJson;