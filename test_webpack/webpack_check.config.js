const path = require('path');

module.exports = {
  entry: './src/js/eslint.app.js',
  output: {
    filename: 'eslint.bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [{
      enforce: 'pre', // 他よりも早く実行(babelとかあるので念の為)
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }],
  }
}
