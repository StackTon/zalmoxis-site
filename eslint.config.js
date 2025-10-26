const { FlatCompat } = require('@eslint/eslintrc')
const pluginPrettier = require('eslint-plugin-prettier')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ),
  {
    name: 'zalmoxis/prettier',
    plugins: {
      prettier: pluginPrettier,
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'no-extra-semi': 'error',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          jsxSingleQuote: true,
          useTabs: false,
          tabWidth: 2,
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'eslint.config.js',
    ],
  },
]

module.exports = eslintConfig
