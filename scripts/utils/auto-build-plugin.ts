import execa from 'execa';
import { Auto, IPlugin } from '@auto-it/core'

export default class AutoBuildPlugin implements IPlugin {
  name = 'build-plugin';

  apply(auto: Auto) {
    auto.hooks.afterVersion.tapAsync("NPM", async () => {
      await execa('yarn', ['build'])
    })
  }
}