import fs from 'fs';
import { PackageName } from "./build-package"
import webConfig from "../../config/web-config";
import sharedConfig from "../../config/shared-config";
import mobileConfig from "../../config/mobile-config";

interface PackageConfig {
    name: string
    dependencies?: { [k: string]: string }
    peerDependencies: { [k: string]: string }
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
 * @description
 * Retrieve and parse the package.json from the root of the project.
 * Filter all packages from the dependencies object that are in the
 * exclude array, as well as expo related packages.
 * @returns
 * Dependencies object for the build package.json
 *  - OR -
 * null if the number of deps is zero.
 */
const getDependenciesList = (): { [k: string]: string } | null => {
    // Retrieve the root package.json
    const packageJson = fs.readFileSync("package.json", { encoding: 'utf-8' });
    // Parse object and get dependencies lists
    const { dependencies } = JSON.parse(packageJson);
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
const configurePackageJson = (packageName: PackageName): string => {
    const rootDependencies = getDependenciesList();

    const {
        dependencies: sharedDependencies,
        peerDependencies: sharedPeerDependencies,
        ...sharedProperties
    } = sharedConfig as Omit<PackageConfig, 'name'>;

    let config: PackageConfig;

    if(packageName === 'mobile') {
        config = mobileConfig as PackageConfig;
    }else if(packageName === 'web') {
        config = webConfig as PackageConfig;
    }else{
        return "";
    }

    const { name, dependencies, peerDependencies } = config;

    const packageJson = {
        name,
        ...sharedProperties,
        dependencies: {
            ...rootDependencies,
            ...sharedDependencies,
            ...dependencies,
        },
        peerDependencies: {
            ...sharedPeerDependencies,
            ...peerDependencies,
        }
    }

    return JSON.stringify(packageJson, null, 2)
}

export default configurePackageJson;