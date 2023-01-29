import execa from 'execa'

const compileTypescript = async () => {
    await execa('yarn', [
        'tsc', 
        '--outDir', 
        'dist', 
        '--declarationDir', 
        'lib'
    ])
}

export default compileTypescript;