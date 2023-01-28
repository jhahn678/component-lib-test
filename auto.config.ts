import { AutoRc } from "@auto-it/core"
import { INpmConfig } from "@auto-it/npm";

const npmOptions: INpmConfig = {
  publishFolder: "./build",
};

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    plugins: [
      './scripts/utils/auto-build-plugin.js',
      ["npm", npmOptions],
    ],
  };
}