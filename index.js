import htmlLintConfig from './configs/html-config.js'
import tsLintConfig from './configs/ts-config.js'
import jslintConfig from './configs/js-config.js'
import stylisticLintConfig from './configs/stylistic-config.js'

export default [
  {
    name: 'eslint/globals/custom',
    languageOptions: {
      globals: {
        MyGlobal: true,
      },
    },
  },
  ...jslintConfig,
  ...tsLintConfig,
  ...stylisticLintConfig,
  ...htmlLintConfig,
]
