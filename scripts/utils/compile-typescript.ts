import execa from 'execa'

const compileTypescript = async () => {
    await execa('yarn', [
        'tsc', 
        '--outDir', 
        `build/src`, 
        '--declarationDir', 
        `build/lib`
    ])
}

export default compileTypescript;