import execa from 'execa'
import { PackageName } from './build-package';

const compileTypescript = async (packageName: PackageName) => {
    await execa('yarn', [
        'tsc', 
        '--outDir', 
        `build/${packageName}/src`, 
        '--declarationDir', 
        `build/${packageName}/lib`
    ])
}

export default compileTypescript;