module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier", "vue"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    // 'prettier/prettier': 'error',
  },
};

// "@vue/eslint-config-prettier": "^6.0.0",
// "eslint-plugin-prettier": "^3.1.4",
// "eslint-plugin-vue": "^6.2.2",
// "prettier": "^2.0.5"
