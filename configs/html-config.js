import htmlLint from '@html-eslint/eslint-plugin';
import { htmlRules } from './../rules/html-rules.js';

export const htmlConfig = {
    name: '@html-eslint/recommended',
    files: ['**/*.html'],
    ...htmlLint.configs['flat/recommended'],
    rules: {
        ...htmlLint.configs['flat/recommended'].rules,
        ...htmlRules
    },
}
