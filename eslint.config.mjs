export default [
  {
    files: ['src/**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        setTimeout: 'readonly'
      }
    },

    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn'
    }
  }
];