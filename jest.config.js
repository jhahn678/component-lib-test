module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};