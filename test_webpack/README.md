# webpack

## initialize
-----------------------------------------------------------

初回の場合．

```sh
npm init
npm install -D npm-run-all webpack
npm install -D babel-loader babel-core babel-preset-env
npm install -D eslint eslint-loader
npm install jquery
```

2回目以降の場合．

```sh
npm install
```

## webpack.config.js
-----------------------------------------------------------

### build

自作プラグインを読み込むテスト．

* `normal.bundle.js`: 自作プラグインを読み込む

```sh
npm run build

node public/js/normal.bundle.js
```

### watch

ファイル変更をキャッチして自動でビルドする．

```sh
npm run watch

vi src/js/normal.app.js
# 適当にいじる
```

### pack

ファイル出力する際に圧縮する．

```sh
npm run pack

cat public/js/normal.bundle.js
```

## webpack\_multi.config.js
-----------------------------------------------------------

複数のjsを生成するテスト，および外部プラグインを読み込むテスト．

* `normal.bundle.js`: 自作プラグインを読み込む(上のと同じ)
* `jquery.bundle.js`: 外部プラグインを読み込む

```sh
npm run build -- --config webpack_multi.config.js
```

`--`の後は末尾に追加され，`webpack --config webpack_multi.config.js`というように処理される．
`--config`は読み込む設定ファイルを指定するオプション．

```sh
node public/js/normal.bundle.js

# jqueryなのでブラウザで確認
firefox html/jquery_bundle.html
```

## webpack\_babel.config.js
-----------------------------------------------------------

以下を生成する．

* `babel.bundle.js`: normalの出力文字列の作成方法を変更．

```sh
npm run build -- --config webpack_babel.config.js
```

babelなしの場合．

```sh
$ grep console public/js/babel.bundle.js

console.log(`(${p1} + ${p2}) * ${tax} = ${price}`);
```

babelありの場合．

```sh
grep console public/js/babel.bundle.js
console.log('(' + p1 + ' + ' + p2 + ') * ' + tax + ' = ' + price);
```

## webpack\_check.config.js
-----------------------------------------------------------

以下を生成する．ただしeslintによるコード検証が発生する(.eslintrcは適当)．

* `eslint.bundle.js`

```sh
npm run build -- --config webpack_check.config.js
```

eslintがなかった場合．

```sh
$ npm run build -- --config webpack_check.config.js

> test_webpack@1.0.0 build /home/matsuura/workspace/test_js-tools/test_webpack
> webpack "--config" "webpack_check.config.js"

Hash: ce4a5f3f72072b51bb25
Version: webpack 3.6.0
Time: 314ms
           Asset     Size  Chunks             Chunk Names
eslint.bundle.js  2.53 kB       0  [emitted]  main
   [0] ./src/js/eslint.app.js 33 bytes {0} [built]
```

eslintがあった場合．

```sh
$ npm run build -- --config webpack_check.config.js

> test_webpack@1.0.0 build /home/matsuura/workspace/test_js-tools/test_webpack
> webpack "--config" "webpack_check.config.js"

Hash: 8a182196bc9982ff0127
Version: webpack 3.6.0
Time: 517ms
           Asset     Size  Chunks             Chunk Names
eslint.bundle.js  2.53 kB       0  [emitted]  main
   [0] ./src/js/eslint.app.js 33 bytes {0} [built] [1 error]

ERROR in ./src/js/eslint.app.js

/home/matsuura/workspace/test_js-tools/test_webpack/src/js/eslint.app.js
  1:1   error  Unexpected console statement  no-console
  1:13  error  'text' is not defined         no-undef

✖ 2 problems (2 errors, 0 warnings)
```

