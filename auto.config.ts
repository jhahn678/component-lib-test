import { AutoRc } from "@auto-it/core"
import { INpmConfig } from "@auto-it/npm";

const npmOptions: INpmConfig = {
  publishFolder: "./build"
};

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    baseBranch: "testing",
    plugins: [
      ["npm", npmOptions],
    ],
  };
}