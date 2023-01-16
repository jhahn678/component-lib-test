import execa from 'execa'
import { PackageName } from './build-package';

const compileTypescript = async (packageName: PackageName) => {
    await execa('yarn', [
        'tsc', 
        '--outDir', 
        `test-build/${packageName}/src`, 
        '--declarationDir', 
        `test-build/${packageName}/lib`
    ])
}

export default compileTypescript;