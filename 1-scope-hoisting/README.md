# Scope Hoisting

This takes advantage of webpack 3.x’s newest
[scope hoisting](https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b)
feature via the `webpack.optimize.ModuleConcatenationPlugin()`.

Though this example project differed in size by only 6 bytes, take this with
a grain of salt as this yields the greatest potential for large, legacy
projects with hundreds of modules.

| Bundles    | `webpack -p`, no scope hoist | `webpack -p` with scope hoist |
|------------|-----------------------------:|------------------------------:|
| `index.js` |       1050730 bytes (1.06MB) |        1050736 bytes (1.06MB) |
