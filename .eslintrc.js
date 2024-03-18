module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "prettier"],
  //   ignorePatterns: ["**/node_modules", "**/vendor", "/.expo"],
  env: {
    es6: true,
    node: true,
  },
};
