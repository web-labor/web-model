module.exports = {
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
],
  parserOptions: {
    "parser": "babel-eslint"
  },
  rules: {
    "space-before-function-paren": ["error", "always"],
    "space-before-blocks": ["error", "always"],
  },
  overrides: [
    {
      "files": [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      "env": {
        "mocha": true
      }
    }
  ]
}
