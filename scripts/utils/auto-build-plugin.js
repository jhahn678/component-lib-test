import { execPromise } from '@auto-it/core'

export default class AutoBuildPlugin {
  name = 'build-plugin';

  apply(auto) {
    auto.hooks.afterVersion.tapAsync("NPM", async () => {
      await execPromise('yarn', ['build'])
    })
  }
}