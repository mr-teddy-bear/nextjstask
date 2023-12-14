module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./.babelrc" }],
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
};
