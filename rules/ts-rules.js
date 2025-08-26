export default {
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/no-extraneous-class': ['error', {
    allowStaticOnly: true,
    allowConstructorOnly: true,
    allowWithDecorator: true,
    allowEmpty: true,
  }],
  '@typescript-eslint/naming-convention': ['error',
    {
      selector: 'variableLike',
      format: ['camelCase'],
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    },
    {
      selector: 'typeParameter',
      format: ['PascalCase'],
      prefix: ['T'],
    },
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/member-ordering': ['error',
    {
      default: [
        'public-field',
        'protected-field',
        'private-field',
        'constructor',
        ['get', 'set'],
        'public-method',
        'protected-method',
        'private-method',
      ],
    },
  ],
}
