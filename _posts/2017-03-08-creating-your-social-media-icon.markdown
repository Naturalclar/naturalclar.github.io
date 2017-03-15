---
layout: post
title: "Font-AwesomeとCSSを使ってサイトで使う各SNSアイコンを作成する"
date: 2017-03-08 12:00:00 -0800
categories: font-awesome css html
---

サイトの下の方にマウスを乗っけたら色の変わるSNSアイコンを作ってみたのでその手順を記載。

凄い基本的なCSSしか使ってないです。作成した物はうちの[Code Pen][codepen-fa-icons]に記載したので使いたければご自由に。

### 目的

---

Font-awesomeとCSSの`:hover`を使って、各SNSアイコンを作成する。

### Font-awesomeの簡単な使い方

----

Font-awesomeを導入できたら、`<i>`タグを使う事で簡単にアイコンを使う事が出来る。<br>
以下はその一例。

```html
<i class="fa fa-twitter fa-2x"></i>
```
このタグでTwitterのアイコンが以下のように表示される。

<i class="fa fa-twitter fa-2x"></i>

クラスに`fa`と使いたいアイコン名`fa-xxxx`を入れればそのアイコンが表示される。<br>
`fa-2x`クラスはサイズの指定。他に`fa-lg`, `fa-3x`, `fa-4x`, `fa-5x`が使える。

クラスに`fa-spin`を追加する事でアイコンを回転させる事も出来る。

```html
<i class="fa fa-twitter fa-2x fa-spin"></i>
```

<i class="fa fa-twitter fa-2x fa-spin"></i>

Font awesomeの[公式ページ][fa-examples]にその他様々な使用例が記載されている。


### アイコンの作成

---

今回作成したのはこんな感じのアイコン。マウスを乗せるとそれぞれ色が変わる。<br>
これら以外のアイコンも作成してみたので良かったら[こちら][codepen-fa-icons]もどうぞ。

<ul class="social-media">
  <li><i class="fa fa-twitter fa-2x"></i></li>
  <li><i class="fa fa-facebook fa-2x"></i></li>
  <li><i class="fa fa-linkedin fa-2x"></i></li>
  <li><i class="fa fa-google-plus fa-2x"></i></li>
</ul>

とりあえず使用したコードを貼って順を追って説明していく。

#### HTML:

```html
<ul class="social-media">
  <li><i class="fa fa-twitter fa-2x"></i></li>
  <li><i class="fa fa-facebook fa-2x"></i></li>
  <li><i class="fa fa-linkedin fa-2x"></i></li>
  <li><i class="fa fa-google-plus fa-2x"></i></li>
</ul>

```

#### CSS:

```css
.social-media{
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.social-media li{
  display: inline-block;
}

.social-media li .fa{ 
  background: #5d5d5d;
  color: #262626;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align:center;
  line-height:50px;
}

.social-media .fa.fa-twitter:hover{
  background:#55acee;
  color:#fff;
}

.social-media .fa.fa-facebook:hover{
  background:#3b5998;
  color:#fff;
}

.social-media .fa.fa-linkedin:hover{
  background:#0083be;
  color:#fff;
}

.social-media .fa.fa-google-plus:hover{
  background:#dd4b39;
  color:#fff;
}
```



### HTMLの説明

---

```html
<ul class="social-media">
  <li><i class="fa fa-twitter fa-2x"></i></li>
  <li><i class="fa fa-facebook fa-2x"></i></li>
  <li><i class="fa fa-linkedin fa-2x"></i></li>
  <li><i class="fa fa-google-plus fa-2x"></i></li>
</ul>

```

先程の紹介したアイコンを`ul`でリスト表示しているだけ。

`ul`に後述の`social-media`のクラスを与えている。

### CSSの説明

---

```css
.social-media{
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
```

`ul`に与えている`social-media`クラスの中身。

`list-style-type: none;`で普段リストの横に表示される点(・)を取り除く。


```css
.social-media li{
  display: inline-block;
}
```

`social-media`クラス内の`li`タグを`display: inline-block`で横に並べる様設定。

```css
.social-media li .fa{ 
  background: #5d5d5d;
  color: #262626;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align:center;
  line-height:50px;
}
```

`li`タグ内の`.fa`クラスに丸いグレーの背景を与え、アイコンの色をさらに暗いグレーにしてる。アイコンは丸の真ん中に表示される様設定。


```css
.social-media .fa.fa-twitter:hover{
  background:#55acee;
  color:#fff;
}

.social-media .fa.fa-facebook:hover{
  background:#3b5998;
  color:#fff;
}

.social-media .fa.fa-linkedin:hover{
  background:#0083be;
  color:#fff;
}

.social-media .fa.fa-google-plus:hover{
  background:#dd4b39;
  color:#fff;
}
```

各アイコンのクラスに`:hover`を与え、マウスを乗せた時にcssを適用する設定。それぞれアイコンに合わせた色を背景に設定し、アイコンを白く変更してる。<br>
他のアイコンもfont-awesomeから持ってきて、`:hover`した時の色を決めるだけで簡単に作成できる。

### 参考したサイト

---

- [Font Awesome公式サイト：使用例][fa-examples]

[codepen-fa-icons]: https://codepen.io/naturalclar/pen/qraozE
[fa-examples]: http://fontawesome.io/examples/