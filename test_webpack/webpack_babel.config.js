const path = require('path');

module.exports = {
  entry: './src/js/babel.app.js',
  output: {
    filename: 'babel.bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }],
    }],
  }
}
