const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app-root',
      inlineManifestWebpackName: 'chunk-manifest.json',
      template: require('html-webpack-template'),
      title: '🌵🏜🌵 Welcome to Cactus World! 🌵🏜🌵',
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
