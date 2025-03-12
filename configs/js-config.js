import jsLint from '@eslint/js'
import globals from 'globals'

export default [
  {
    name: 'eslint/globals/browser',
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    name: 'javascript-eslint/recommended',
    ...jsLint.configs.recommended,
  },
]
