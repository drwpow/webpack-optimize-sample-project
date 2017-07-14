# Dynamic Import

Taking advantage of webpack’s
[dynamic `import()`](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
feature. Keep in mind there may be some duplication.

## Installation

Add the [Dynamic Import plugin](https://www.npmjs.com/package/babel-plugin-syntax-dynamic-import) for Babel:

```
yarn add babel-plugin-syntax-dynamic-import
```

Add to `.babelrc`:

```
{
  "presets": ["env"],
  "plugins": ["syntax-dynamic-import", "transform-react-jsx"]
}
```

And in your app, replace

```
import MyModule from './components/MyModule';
```

with

```
const MyModule = () => import('./components/MyModule');
```

_Note: if you’re using React, also consider
[React Code Splitting](https://github.com/didierfranc/react-code-splitting)
as it’s a big time-saver.

## Stats

| Chunks                | Uglified | Uglified, gzipped |
|-----------------------|---------:|------------------:|
| **`index.bundle.js`** |   229 kB |             70 kB |
| `0`                   |   250 kB |             64 kB |
| `1`                   |   533 kB |            133 kB |
| `2`                   |     1 kB |            0.5 kB |
