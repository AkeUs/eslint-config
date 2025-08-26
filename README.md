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
