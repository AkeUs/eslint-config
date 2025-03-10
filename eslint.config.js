import globals from 'globals';
import jsLint from '@eslint/js';
import tsLint from 'typescript-eslint';
import { htmlConfig } from './configs/html-config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  htmlConfig
];