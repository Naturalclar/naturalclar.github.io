---
layout: post
date: 2017-02-21 11:00:00 -0800
title: "Cloud9上でJekyllのサイトをローカルに立てる"
categories: jekyll cloud9
---

最近[Cloud9][cloud9]の事を知ってからサイト関連は殆ど全てCloud9でやってる。<br>
ネット環境さえあればGoogle Chromeを開いてアプリを開くだけでクラウド上に環境が出来るからものすごく便利だ。<br>
ネット閲覧とGoogle docs専用機だったChrome bookで開発が出来るようになったのがとても大きい。<br>
ただ、サイトを更新する前に内容を見たい時に、従来の`jekyll serve`だけじゃ動かないので、cloud9上で動かす為の忘備録。<br>
下記コマンドでもjekyllのサイトを一時的にホストする出来る。<br>


```
jekyll serve --host [HOST Address] --port [PORT] --baseurl ''
```

cloud9で作成した環境のIPアドレスは初期設定では0.0.0.0に設定されている。<br>
ポートは8080を受け付けるのでそれを使用。<br>

[cloud9]: https://ide.c9.io/





