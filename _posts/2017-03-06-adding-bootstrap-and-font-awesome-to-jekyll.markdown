---
layout: post
title: "JekyllにBootstrapとFont Awesomeを導入する"
date: 2017-03-06 16:00:00 -0800
categories: font-awesome jekyll css bootstrap
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

中身は`bootstrap.min.css`と同じ物である。これだけだとあまり意味ない様に思えるが、今後他のcssテンプレート(後述のfont-awesome等)を追加する時にこの方法を使えば、main.cssに全て追加されるので、各cssをhtmlに紐付ける手間が省ける。


### font-awesomeとは

----

bootstrapが無事導入出来たら、次はfont-awesomeを導入する。

[font-awesome][font-awesome]はtwitterやfacebook等のSNSアイコンやその他様々な汎用性のあるアイコンが含まれているCSSの無料のツールキットである。

これを導入するだけでこのようなアイコンが簡単に使える様になる→ <i class="fa fa-twitter"></i><i class="fa fa-heart"></i><i class="fa fa-facebook"></i><i class="fa fa-thumbs-up"></i>

サイトのフッターやヘッダー等に各SNSへのリンクを設置したい時や、メールフォームの送信ボタン等にわかりやすいアイコンをつけるのに使用出来る。

### font-awesomeの導入

---

Font Awesomeの[公式サイト][font-awesome]からfontファイル、及びcssファイルがダウンロード出来る。

トップページのダウンロードボタンをクリックすると、色々なアイコンや機能が追加された有料サービスであるFort Awesomeの催促が入るが、無料のFont awesomeを使いたい場合はNo Thanksを選ぼう。

<a href="/images/blog-images/font-awesome-dl.png" data-fancybox="gallery">![font-awesome-dl](/images/blog-images/font-awesome-dl.png){:class="img-fluid"}</a><br>

ダウンロードした物を解凍したら、cssフォルダにfont-awesome.min.cssファイルがあり、fontフォルダに実際に使うfontファイルが含まれている。

### fontファイルをJekyllのフォルダに入れる

---


先程bootstrapのjsファイルを入れた時の様にjekyllのフォルダ内に`font`フォルダを作成し、先程ダウンロードしたfont-awesomeのfontフォルダの中身を入れてしまおう。

<a href="/images/blog-images/font-folder.png" data-fancybox="gallery">![font-folder](/images/blog-images/font-folder.png){:class="img-fluid"}</a><br>

これでサイトが生成された時に、fontファイルが含まれる様になる。

### font-awesomeのcssファイルを導入する。

先程`bootstrap.min.css`でやった様に、`_sass_`フォルダに`font-awesome.min.css`を入れ、ファイル名を`font-awesome.min.scss`に変更する。

そして、`assets`フォルダ内の`main.scss`に以下の追記を行う。

```css
@import "font-awesome.min";
```

これでfont-awesomeが導入された。詳しい使い方はまた後日。

### 参考したサイト

---

- [BootstrapV4公式サイト][bootstrap]
- [Font Awesome公式サイト][font-awesome]
- [Assets - Jekyll公式サイト][jekyll-assets]

[font-awesome]: http://fontawesome.io/
[bootstrap]: https://v4-alpha.getbootstrap.com/
[jekyll-assets]: https://jekyllrb.com/docs/assets/
