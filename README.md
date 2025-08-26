# ESLint Config

These are my personal eslint rules for frontend projects.  
They include rules for:  

- HTML with `@html-eslint`
- Javascript with `@eslint/js` and `@stylistic`
- Typescript with `typescript-eslint`

## Installation

```shell
npm i -D eslint @akeus/eslint-config
```

create a `eslint.config.js` file

```js
import config from '@akeus/eslint-config'

export default [
  ...config,
]
```

## Create a version

Update version in `package.json` with semver

```json
{
  "name": "@akeus/eslint-config",
  "version": "1.0.0"
}
```

next version will be

```json
{
  "name": "@akeus/eslint-config",
  "version": "1.0.1"
}
```