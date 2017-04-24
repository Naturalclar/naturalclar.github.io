---
layout: post
title: BabelとWebpackでReactの開発環境を作成する
date: 2017-04-23 19:30:00 -0800
categories: react
---

最近React.jsにハマってるので、その開発環境を作成する方法をまとめる。

## React.jsとは

---

React.jsはFacebookが作成したUIを作成する為のJavascriptライブラリ。

数々のComponentsを定義し、それを組み合わせてサイトの見た目部分を構築する事が出来る。

## 環境作成に必要なもの

---

- [npm][npm]: Javascript用のパッケージマネージャ。Node.jsをインストールすると一緒にインストールされる。

- [Babe][babel]l: React.jsはES6というJavascriptの作法で書かれており、これはまだ全てのブラウザに対応していない。BabelはそのES6をブラウザでも表示出来る様に変換する為のトランスパイラ。

- [Webpack][webpack]: Webpackは様々なCSSやJSを一つのファイルに纏める事が出来るツール。


##  Node.jsのインストール

---

開発環境を作成する為にnpmを使用するので、PCにnpmが入っていない場合は入れる必要がある。

[Node.js][nodejs]をインストールすれば自動的にnpmもインストールされる。

## 開発環境の作成

---

Reactで開発する為のフォルダを作成して、そのフォルダに移動する。

```sh
mkdir react-sample
cd react-sample
```

そして、新しくNode.jsのプロジェクトを作成する

```sh
npm init -y
```

## 必要なパッケージのインストール

- Babel関連のパッケージをインストール

```sh
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

- Webpack関連のパッケージをインストール

```sh
npm install --save-dev webpack webpack-dev-server
```

- React関連のパッケージをインストール

```
npm install --save react react-dom
```

これで一通りのパッケージはインストール出来る。

## webpack.config.jsの作成

---

Webpackの設定は`webpack.config.js`のファイルで行う。下記内容をコピペして`webpack.config.js`と言う名で保存する。

```js
module.exports = {
    entry: __dirname + '/src',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public/',
        port: 3000,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map',
}
```

### webpack.config.jsの各項目の説明

---

- entry: Reactで書いた.js,または.jsxファイルの場所
- output: webpackによって作成されたファイルの出力先
- devServer: webpack-dev-serverの設定、webpack-dev-serverを走らせた際に`/public`フォルダの中身を展開する
- loaders: Entryで対象としたファイルを変換する為のローダーの指定及び設定。
	- test: 変換するファイルの拡張子。今回は`.js`,または`.jsx`を対象とする。
	-  exclude: 対象外とするファイル名。`node_modules`は`npm`でインストールしたものが入ってるだけなので変換先からは除外
	- loader: 使用するローダーの指定。今回使うのは`babel-loader`
	- query: 使用するローダーに渡したいクエリ。reactで書くには`react`及び`es2015`のプリセットが必要となる。
- devtool: 追加したいWebpackのツールを指定。`source-map`を使えばブラウザ上で変換元のファイルが見れるのでデバッグ用に便利

## とりあえずHello Worldを書く

---

Webpackの設定が整ったら、とりあえずReactでHelloworldを書いてみる。

### HTMLの作成

---

`public`フォルダを作成して、中に下記内容の`index.html`を作成する。

```html
<!doctype html>
<html>  
    <head>
        <title>React Sample</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="/bundle.js"></script>
    </body>
</html>
```

### JSの作成

---

`src`フォルダを作成して、中に下記内容の`index.js`を作成する。

```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);
```

また、`npm init`をした時に作成された`package.json`の`script`部分に下記内容を追加する

```json
  "scripts": {
    "start": "webpack-dev-server", //ここを追加
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

これで`npm start`と入力すれば`localhost:3000`にページが作成される。

<a href="/images/blog-images/20170423-hello-react.png" data-fancybox="gallery">![hello-react](/images/blog-images/20170423-hello-react.png){:class="img-fluid"}</a><br>




[react]:https://facebook.github.io/react/
[babel]:https://babeljs.io/
[webpack]:https://webpack.github.io/
[nodejs]:https://nodejs.org/
[npm]:https://www.npmjs.com/