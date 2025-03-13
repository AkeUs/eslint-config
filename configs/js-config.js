import jsLint from '@eslint/js'

export default [
  {
    name: 'javascript-eslint/recommended',
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx'],
    ...jsLint.configs.recommended,
  },
]
