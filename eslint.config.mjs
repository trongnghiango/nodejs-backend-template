// eslint.config.js
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint-define-config'
import eslintPluginImport from 'eslint-plugin-import'

export default defineConfig([
  // Include the Airbnb base config directly
  // airbnbBase, // old deo duoc
  // Include Prettier config to avoid conflicts with formatting
  prettier,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
      },
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.json'],
        },
      },
    },
    plugins: {
      import: eslintPluginImport, // Định nghĩa plugin import
    },
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      'comma-dangle': ['error', 'never'],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'prefer-const': 'error',
      'no-var': 'error',
      'nonblock-statement-body-position': 'error',
      // Thêm các quy tắc khác nếu cần
    },
  },
  {
    files: ['*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
      },
      env: {
        node: true,
        commonjs: true,
        jest: true,
      },
    },
    rules: {
      // Có thể thêm hoặc ghi đè các quy tắc nếu cần
    },
  },
])
