import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    name: 'stylistic-eslint/recommended',
    files: [
      '**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx',
      '**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx',
    ],
    ...stylistic.configs.recommended,
  },
]
