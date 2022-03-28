module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    "jest/globals": true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["jest", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
