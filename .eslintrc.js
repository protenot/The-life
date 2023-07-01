module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
        "files": ['*.ts', '*.tsx'],
        "extends": [
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
          ], 
          "parserOptions": {
            "project": ['./tsconfig.json'],
          },
        }, 
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
       "project": ["tsconfig.json"]
    },
    "parser":'@typescript-eslint/parser',
    "plugins": ["@typescript-eslint"],

    "rules": {
        "import/no-unresolved": "off",
        "import/extensions": ["warn", "never"],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions":"off"
    }
}
