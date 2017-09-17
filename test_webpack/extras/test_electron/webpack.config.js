const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    js: './src/main.js',
  },
  output: {
    path: path.join(__dirname, './app/build'),
    filename: 'app.js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    'electron',
    'fs'
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }),
    }, {
      test: /\.(jpg|png)$/,
      use: [{
        loader: 'file-loader',
        options: {},
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
  ],
  target: 'atom',
};
