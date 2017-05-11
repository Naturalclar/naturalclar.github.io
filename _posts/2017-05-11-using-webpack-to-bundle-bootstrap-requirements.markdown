---
layout: post
title: Webpack Pluginを使ってbootstrapの依存関係をbundleする
date: 2017-05-11 12:00:00 -0800
categories: webpack bootstrap
---

ようやくWebpackを使うのに少し慣れてきた感する。今回はWebpackを使ってbootstrap4のcss,jsとその依存関係(jquery, tether)をまとめて一つの`.js`ファイルに纏める方法を記載。

### 説明

---

[bootstrap4][bootstrap]を使用するにはjqueryとtetherを一緒に入れる必要がある。

単純に3つの`js`ファイルをimportしても`jQuery is not defined`や`Tether is not defined`等のエラーメッセージが表示され機能しない。

そのため、webpackのPluginを使用してjQueryとTetherをwebpackで纏める全ての`.js`ファイルに適用する。

bootstrapのcssの部分は[style-loader][style-loader]を使用して`.js`ファイルに纏めてしまう。

### 必要なmoduleをインストール

---

npmを使って必要なmoduleをインストールする。

```sh
npm i -D webpack babel-core babel-loader babel-preset-es2015 style-loader css-loader
npm i -S jquery tether bootstrap@4.0.0-alpha.6
```

### Webpack configの作成

---

`webpack.config.js`を作成して下記内容を入れる

```js
var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/assets/js/main.js',
    output: {
	path: __dirname + '/public/',
	filename: 'bundle.js'
    },
    module: {
	loaders: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		query: {
		    presets: ['es2015']
		    }
        },
        {
            test: /\.css$/,
            use: [
             { loader: "style-loader" },
             { loader: "css-loader" }
            ]
        }
	]
    },
    plugins: [
	new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery",
	    Tether: "tether"
	})
    ]	
}
```

### main.jsの作成

---

上記のconfigでは`assets/main.js`を入力先としているので、`assets`フォルダを作成し、その中に`main.js`を作成する。

```js
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
```

### bundle.jsの生成

---

上記設定が終わったらコマンドラインで`webpack`を起動させる事で`bundle.js`が`public`フォルダ内に生成される。

```sh
webpack
Hash: 
Version: webpack 2.5.1
Time: 2254ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  645 kB       0  [emitted]  [big]  main
   [0] ./~/bootstrap/dist/js/bootstrap.js 99.8 kB {0} [built]
   [1] ./~/bootstrap/dist/css/bootstrap.css 980 bytes {0} [built]
   [2] ./assets/js/main.js 251 bytes {0} [built]
   [3] ./~/css-loader!./~/bootstrap/dist/css/bootstrap.css 201 kB {0} [built]
   [4] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built]
   [5] ./~/jquery/dist/jquery.js 268 kB {0} [built]
   [6] ./~/style-loader/addStyles.js 9.15 kB {0} [built]
   [7] ./~/style-loader/fixUrls.js 3.01 kB {0} [built]
   [8] ./~/tether/dist/js/tether.js 56.4 kB {0} [built]
```

動作確認
---

ちゃんと適用されているか確認する為にBootstrapのサイトから適当なサンプルを拾ってきて`bundle.js`を加えて、`index.html`として`public`フォルダに保存する。

```html
<!doctype html>
<html>
    <head>
        <title>Webpack + Bootstrap</title>
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
            </div>
            <script src="bundle.js"></script>
    </body>
</html>
```

`index.html`を開いてjumbotronが正常に表示されてる、また、Inspectでログを見てbootstrap.jsのエラーが起きていなかったら大丈夫。

<a href="/images/blog-images/20170511-webpack-jumbotron.png" data-fancybox="gallery">![webpack-jumbotron](/images/blog-images/20170511-webpack-jumbotron.png){:class="img-fluid"}</a><br>

---

### 参考サイト
---

- [style-loader: github][style-loader]: style-loaderのgithubページ。webpackに適用する事でcssをjsに纏める事が出来る。
- [webpack][webpack]
- [bootstrap 4][bootstrap]

[style-loader]:https://github.com/webpack-contrib/style-loader
[bootstrap]:https://v4-alpha.getbootstrap.com/
[webpack]:https://webpack.github.io/