const path = require('path');

module.exports = {
  // エントリー: 各モジュールを読み込んで処理するmain関数がある場所
  entry: {
    normal: './src/js/normal.app.js',
    jquery: './src/js/jquery.app.js',
  },
  output: {
    // 出力ファイル名
    filename: '[name].bundle.js',
    // 出力パス
    path: path.join(__dirname, 'public/js')
  }
}
