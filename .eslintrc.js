module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 11,
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 2,
          allowFirstLine: true,
        },
      },
    ],
    // 'vue/html-indent': 'off',
    // 'no-console': 0,
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     semi: false,
    //     singleQuote: true,
    //     trailingComma: 'all',
    //     // bracketSpacing: true,
    //     // jsxBracketSameLine: true,
    //     // parser: 'flow',
    //   },
    // ],
  },
}
