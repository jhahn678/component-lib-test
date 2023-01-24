import { getPackageJson } from "./configure-package-json";
import { Auto, IPlugin, execPromise } from '@auto-it/core';


export default class PublishPlugin implements IPlugin {
    /** The name of the plugin */
    name = "publish-packages";
  
    /** Tap into auto plugin points. */
    apply(auto: Auto) {
        const packageJson = getPackageJson();

        auto.hooks.beforeShipIt.taps

        auto.hooks.getAuthor.tapAsync("NPM", async () => {
            const { author } = packageJson;
            if (author) {
              auto.logger.log.info("NPM: Got author information from package.json");
              return author;
            }
        });
      
          auto.hooks.getPreviousVersion.tapAsync("NPM", async () => {
            const { version } = packageJson;

            auto.logger.log.info(
              "NPM: Got previous version from package.json - ",
              version
            );
      
            if (version) {
              return auto.prefixRelease(version);
            }
          });
      
          auto.hooks.getRepository.tapAsync("NPM", async () => {
            const { repository } = packageJson;
            auto.logger.log.info("NPM: getting repo information from package.json");
            return repository;
          });

          auto.hooks.publish.tapAsync("NPM", async ({ bump }) => {
            await execPromise("npm", [
              "version",
              bump,
              "-m",
              "Bump version to: %s [skip ci]",
            ]);
            await execPromise("npm", ["publish"]);
            await execPromise("git", [
              "push",
              "--follow-tags",
              "--set-upstream",
              auto.remote,
              "$branch",
            ]);
          });
    }
}