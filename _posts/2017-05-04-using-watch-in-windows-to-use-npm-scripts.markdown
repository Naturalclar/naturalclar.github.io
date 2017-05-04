---
layout: post
title: Windowsでnpm scriptからwatchを使う為の安易メモ
date: 2017-05-04 12:00:00 -0800
categories: node.js npm
---

### 目的

---

[この記事][reference]を読んで、gulp使わなくてもプロジェクト更新した時に自動で反映される！と感動したので自分でも使ってみようと思った所、watchを使う部分で少し詰まったので、Windowsでwatchを使える様にする為の簡易メモ。

### 問題点

---

```json
  "scripts": {
    "build:js": "webpack --display-error-details",
    "build:html": "pug src/html/index.pug -o public/",
    "build": "npm run build:js && npm run build:html",
    "build:watch": "watch 'npm run build' src/"
  }
```

上記の設定でsrcフォルダ内のhtmlとjsの状態を監視させようと`npm run build:watch`を走らせた所、以下の様なメッセージが出てエラーが出てしまう。

```sh
> watch 'npm run build' src/

> Watching run
> Watching build'
> Watching src/
...
```

どうやら `run`, `build'`, `src`の３つのフォルダを監視して`npm`コマンドを走らせる状態になってしまってる模様。

### 解決策

---

`npm run build`で１つのパラメータと認識出来れば良いのだが、どうやら`'`で囲っても認識してくれない模様。

下記のように`\"`で囲めば１つのパラメータとして認識する事が出来た。

```json
  "scripts": {
    "build:js": "webpack --display-error-details",
    "build:html": "pug src/html/index.pug -o public/",
    "build": "npm run build:js && npm run build:html",
    "build:watch": "watch \"npm run build\" src/"
  },
```

これで作業がかなり捗る。

### 参考サイト

---

[npmをbuildツールとして使用する][reference]

[reference]: https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

