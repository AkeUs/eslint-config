import globals from 'globals'
import jslintConfig from './configs/js-config.js'
import tsLintConfig from './configs/ts-config.js'
import stylisticLintConfig from './configs/stylistic-config.js'
import htmlLintConfig from './configs/html-config.js'

export default [
  {
    name: 'eslint/globals/browser',
    languageOptions: {
      globals: {
        MyGlobal: true,
        ...globals.browser,
      },
    },
  },
  ...jslintConfig,
  ...tsLintConfig,
  ...stylisticLintConfig,
  ...htmlLintConfig,
]
