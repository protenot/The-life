module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],
        root: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["tsconfig.json"],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  //settings: {
  //  "import/ignore": [".css$", "node_modules/*"],
  //},
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
