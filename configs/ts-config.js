import tsLint from 'typescript-eslint'
import tsRules from '../rules/ts-rules.js'

const strictTypeChecked = tsLint.configs.strictTypeChecked
  .find(r => r.name === 'typescript-eslint/strict-type-checked')
const stylisticTypeChecked = tsLint.configs.stylisticTypeChecked
  .find(r => r.name === 'typescript-eslint/stylistic-type-checked')

export default tsLint.config(
  {
    ...tsLint.configs.base,
    ...tsLint.configs.eslintRecommended,
    rules: {
      ...tsLint.configs.eslintRecommended.rules,
      ...strictTypeChecked.rules,
      ...stylisticTypeChecked.rules,
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
