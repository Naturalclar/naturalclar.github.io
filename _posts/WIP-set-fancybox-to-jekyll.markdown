---
layout: post
title: "jekyllにfancyboxを導入してみた"
date: 2017-03-1 12:00:00 -0800
categories: jekyll css jquery
---

このサイトに[Fancybox][fancybox]を導入してみたので設置方法の忘備録。<br>

### FancyBoxとは

---

[Fanvybox][fancybox]はjQueryで作成されているプラグインで、設置すれば画像をクリックした時に拡大してくれる。<br>
例えばこんな感じ↓<br>
<a href="/images/smashcat.jpg" data-caption="Smashcat" data-fancybox="gallery">![smashcat](/images/smashcat.jpg){:class="img-fluid"}</a><br>
数日前にFancyBox3にアップグレードされた模様(2017/03/01現在)

### 導入方法

---

まずは[公式サイト][fancybox]のトップにあるDownloadをクリックして`fancybox-3.0.zip`をダウンロードする。<br>
落としてきたファイルを解凍すると、`dist`フォルダの中に`jquery.fancybox.js`,`jquery.fancybox.css`,`jquery.fancybox.min.js`,`jquery.fancybox.min.css`の四つのファイルがある。<br>
`min.css`と`.css`の違いはサイズのみ。`min.css`の方は必要無いスペースや改行等が取り除かれているのでファイルが小さい。自分でファイルを編集するつもりが無いなら`min`の方を使うと良いだろう。(`min.js`と`.js`も同じく。)

`js`ファイルはサイトの任意の場所に入れる。うちは`js`フォルダを作成していたのでそこにいれた。

cssファイルは


```yml
sass:
    sass_dir: _sass
```

### 参考したサイト

---

[FancyBox3公式サイト][fancybox]

[fancybox]: http://fancyapps.com/fancybox/3/