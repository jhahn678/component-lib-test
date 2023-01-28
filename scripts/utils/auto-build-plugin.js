import execa from 'execa';

export default class AutoBuildPlugin {
  name = 'build-plugin';

  apply(auto) {
    auto.hooks.afterVersion.tapAsync("NPM", async () => {
      await execa('yarn', ['build'])
    })
  }
}