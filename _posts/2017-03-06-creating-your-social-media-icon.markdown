---
layout: post
title: "JekyllにBootstrapとFont Awesomeを導入する"
date: 2017-03-06 16:00:00 -0800
categories: font-awesome jekyll css
---

このサイトは基本的にBootstrapを使って作成している。今更だけど導入した手順を記載する。<br>
ついでにFont awesomeの導入方法も記載する。基本的に他から持ってくるCSSテンプレートは同じ方法で導入可能。

### 目的

---

Jekyllで作成されたサイトにBootstrap、及びFont-awesomeを導入する。

### Bootstrapとは

---

[Bootstrap][bootstrap]はCSSのデザインテンプレートや、Javascriptのプラグインが用意されたWebサイト用のフレームワークである。<br>
レスポンシブデザインが搭載されているので、PCでも携帯でも違和感無くサイトを表示させる事が出来る。<br>
今回は最新のBootstrap v4のアルファ版、v4.0.0-alpha.6 (03/06/17現在)を導入する。

### Bootstrapの導入

---

Bootstrapを導入する方法は大きく分けて3つある。

- Max CDNから用意されているCDNをそのまま自分のサイトにコピペする
- 公式サイトからBootstrapのCSS、及びjsファイルをダウンロードしてきてサイトに置く
- 公式サイトからソースコードをダウンロードしてきて、sass等を使ってコンパイルする

今回紹介するのは二番目の方法。

まずは[公式サイト][bootstrap]にアクセスしてDownload bootstrapをクリックする。

少し下に行くとBootstrap CSS and JSの下にまたDownload bootstrapがあるのでクリックすればcssとjsファイルがダウンロード出来る。

落としてきたファイルを解凍すると中にcssファイルの`bootstrap.min.css`とjsファイルの`bootstrap.min.js`がある。


### jsファイルをJekyllのフォルダに入れる

---

jekyllではサイトが作成される時に、名前が"_"で始まっていないフォルダはそのままサイトに反映される。

なので`bootstrap.min.js`は自分のjekyllのフォルダに`js`等、任意の名前のフォルダを作成して、そのフォルダの中に放り込めば、サイト作成した時にそのまま反映される。

<a href="/images/blog-images/bootstrap_js.png" data-fancybox="gallery">![bootstrap_js](/images/blog-images/bootstrap_js.png){:class="img-fluid"}</a><br>

### cssファイルを導入する

---

cssもjsと同じ様に入れる事が出来るのだが、今後、他のCSSテンプレートや自作のCSSを導入するとなると、その度にCSSを導入するのが面倒になるので、複数のcssファイルを人るのcssにまとめる方法を記載する。<br>
Jekyll v3には、サイト作成する際にsassを使って一つのcssに纏める機能が導入されている。

まずは、`_config.yml`に以下の追加を行い、sass,scssのファイルを置く場所を設定する。

```yml
sass:
    sass_dir: _sass

```

そして、`_sass`フォルダ(無かったら新たに作成)に`bootstrap.min.css`を入れる。

この時、`bootstrap.min.css`のファイル名を`bootstrap.min.scss`に変更する。

そして、`assets`フォルダ(無かったら新たに作成)に、`main.scss`と言う名のファイルを作成し、内容を以下の様にする。

```css
---

---
@charset "utf-8";

@import "bootstrap.min";
```

そして、jekyllでサイトの生成をすると、`_site`に生成された`assets`フォルダの中に`main.css`というファイルが生成されている。

中身は`bootstrap.min.css`と同じ物である。




### 参考したサイト

---

-[BootstrapV4公式サイト][bootstrap]
-[Font-Awesome公式サイト][font-awesome]
-[Assets - Jekyll公式サイト][jekyll-assets]

[font-awesome]: http://fontawesome.io/
[bootstrap]: https://v4-alpha.getbootstrap.com/
[jekyll-assets]: #
