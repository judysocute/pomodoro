module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true, // 有測試才要裝
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'flowtype',
    'jest',
  ],
};
