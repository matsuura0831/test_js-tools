# test_js-tools

## Initialize

テスト種別毎にサブフォルダ作って，その中で実行する．

```sh
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (webpack)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /home/matsuura/workspace/test_js-tools/webpack/package.json:

{
  "name": "webpack",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
}


Is this ok? (yes) yes

```

タスク実行するときにいちいち`&&`でつなぐのはしんどいので，`package.json`の`scripts`コマンドを直列/並列実行できるプラグイン入れる．

```sh
npm install -D npm-run-all
```

`-g`を付けるとグローバル領域にインストールされるが，npmで折角パッケージ管理している旨味が消えるので極力やらない．

`-D(--save-dev)`を付けるとpackage.jsonの`devDependencies`にパッケージ名が記述され，つけないと`dependencies`に記述される．
開発時のみに必要か，全体的に必要かの違い．


