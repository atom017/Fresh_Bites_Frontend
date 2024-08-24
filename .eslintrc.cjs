module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      
    ],

    'max-len': [
      'error',
      {
        code: 80,      // Maximum line length
        ignoreUrls: true, // Ignore URLs (to prevent excessive length for long URLs)
        ignoreComments: false, // Ignore comments
      },
    ],
  },
}
