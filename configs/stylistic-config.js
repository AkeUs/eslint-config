import stylistic from '@stylistic/eslint-plugin'
import stylisticRules from './../rules/stylistic-rules.js'

export default [
  {
    name: 'stylistic-eslint/recommended-with-override',
    files: [
      '**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx',
      '**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx',
    ],
    ...stylistic.configs.recommended,
    rules: {
      ...stylistic.configs.recommended.rules,
      ...stylisticRules,
    },
  },
]
