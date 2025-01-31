module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "./eslint-settings/eslint-config-common/index.cjs",
    "./eslint-settings/eslint-config-react/index.cjs",
    "./eslint-settings/eslint-config-typescript/index.cjs",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/promise-function-async": ["off"],
    "@typescript-eslint/typedef": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "react/button-has-type": ["off"],
    "no-console": ["off"]
  }
};
