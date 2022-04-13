module.exports = {
  env: {
    browser: true,
    "jest/globals": true,
  },
  globals: {
    JSX: true,
    NodeJS: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jest", "prettier"],
  rules: {
    "no-debugger": "warn",
    "react/prop-types": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "react/destructuring-assignment": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": ["warn"],
    "@typescript-eslint/no-unnecessary-type-constraint": ["warn"],
    "react-hooks/exhaustive-deps": ["warn"],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
