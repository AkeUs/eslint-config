import tsLint from 'typescript-eslint'
import tsRules from '../rules/ts-rules.js'

const strict = tsLint.configs.strictTypeChecked
  .find(r => r.name === 'typescript-eslint/strict-type-checked')
const stylistic = tsLint.configs.stylisticTypeChecked
  .find(r => r.name === 'typescript-eslint/stylistic-type-checked')

export default tsLint.config(
  {
    ...tsLint.configs.base,
    ...tsLint.configs.eslintRecommended,
    rules: {
      ...tsLint.configs.eslintRecommended.rules,
      ...strict.rules,
      ...stylistic.rules,
      ...tsRules,
    },
  },
  {
    name: 'typescript-eslint/linting-with-type-information',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)
