var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
    }, {
      test: /\.(jpg|png)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new HtmlWebpackPlugin({
      title: 'jQuery UI Autocomplete demo, built with webpack'
    })
  ]
};
