export const htmlRules = {
    // Best Practice
    '@html-eslint/no-duplicate-attrs': 'error',
    '@html-eslint/no-duplicate-id': 'error',
    '@html-eslint/no-inline-styles': 'error',
    '@html-eslint/no-obsolete-tags': 'error',
    '@html-eslint/no-script-style-type': 'error',
    '@html-eslint/no-target-blank': 'error',
    '@html-eslint/require-meta-charset': 'error',
    // Accessibility
    '@html-eslint/no-abstract-roles': 'error',
    '@html-eslint/no-accesskey-attrs': 'error',
    '@html-eslint/no-aria-hidden-body': 'error',
    '@html-eslint/no-heading-inside-button': 'error',
    '@html-eslint/no-non-scalable-viewport': 'error',
    '@html-eslint/no-positive-tabindex': 'error',
    '@html-eslint/require-img-alt': 'error',
    '@html-eslint/require-meta-viewport': 'error',
    // Style
    '@html-eslint/attrs-newline': ['error', { 'closeStyle': 'newline', 'ifAttrsMoreThan': 3 }],
    '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
    '@html-eslint/indent': ['error', 2],
    '@html-eslint/no-extra-spacing-attrs': 'error',
    '@html-eslint/no-multiple-empty-lines': 'error',
    '@html-eslint/quotes': ['error', 'double'],
}
