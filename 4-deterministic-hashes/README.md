# Manifest Caching

This is a simple addition: **deterministic hashes** that allow file caching
until file contents change.

## Installation

Run

```
yarn add chunk-manifest-webpack-plugin webpack-chunk-hash
```

Then add the following to `webpack.config.js`:

```
const webpack = require('webpack');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

/* Shared Dev & Production */

const config = {
  /* … our webpack config up until now */
};

/* Production */

if (process.env.NODE_ENV === 'production') {
  config.output.filename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins,
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
  ];
}

module.exports = config;
```
