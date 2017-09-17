const path = require('path');

module.exports = {
  entry: './src/js/normal.app.js',
  output: {
    filename: 'normal.bundle.js',
    path: path.join(__dirname, 'public/js')
  }
}
