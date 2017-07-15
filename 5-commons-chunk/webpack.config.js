const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.js',
    vendor: ['react', 'react-dom', 'react-router'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[hash].[ext]' },
        },
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
    // Use 'vendor' bundle as global commons chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app-root',
      template: require('html-webpack-template'),
      title: '🌵🏜🌵 Welcome to Cactus World! 🌵🏜🌵',
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
