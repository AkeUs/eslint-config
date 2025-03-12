import htmlLint from '@html-eslint/eslint-plugin'
import htmlRules from './../rules/html-rules.js'

export default [
  {
    name: 'html-eslint/recommended',
    ...htmlLint.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...htmlLint.configs['flat/recommended'].rules,
      ...htmlRules,
    },
  },
]
