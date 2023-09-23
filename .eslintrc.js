module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
