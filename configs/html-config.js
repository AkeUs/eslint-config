import htmlLint from '@html-eslint/eslint-plugin'
import htmlRules from './../rules/html-rules.js'

export default [
  {
    name: 'html-eslint/recommended-with-override',
    files: ['**/*.html'],
    ...htmlLint.configs['flat/recommended'],
    rules: {
      ...htmlLint.configs['flat/recommended'].rules,
      ...htmlRules,
    },
  },
]
