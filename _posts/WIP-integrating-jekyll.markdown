---
layout: post
date:   2017-02-11 05:50:12 -0800
categories: jekyll update
---

Github pagesを使うにあたってJekyllは導入して置こうと思った。
忘備録も兼ねて導入時の操作をメモ。

<h2>Jekyllとは</h2>
<a href="https://jekyllrb.com/">Jekyll</a>はGit-hub pagesで無料でホスト出来る静的ブログジェネレータ。
WordpressやWixは使わないでこれを使う理由が何だと言われたら、こっちの方が自分で作ってる感出るからと言う安直な発想である。

<h2>環境を導入</h2>
Linux環境があればrubyを導入してjekyllのサイトにも表示されてるコマンドを入力すればもう設定出来る。
<blockquote>$ gem install jekyll<br>
$ jekyll new my-awesome-site<br>
$ cd my-awesome-site<br>
$ jekyll serve<br>
# => Now browse to http://localhost:4000</blockquote>


今回はWindowsでもやりたいと言う人向けにうちが取った手順を1から記載

<h2>Chocolatyを使ってRubyの導入</h2>
まずはWindowsで使えるパッケージインストーラである<a href="https://chocolatey.org/">chocolaty</a>を導入する。

パッケージインストーラがあればWindowsでも数行コマンド入力するだけで環境が整えられる様になる。

要はWindowsだと色々環境揃えるのが面倒だから、WindowsでLinuxの様に出来る様にしちゃえ！って事。

Windows10に標準で導入されているWindows Power Shellを管理者権限で起動して、以下のコマンドを入力
<blockquote>iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex</blockquote>

Chocolatyが導入出来たら、再びPower shellを使ってRubyをインストール
<blockquote>choco install ruby -y</blockquote>

この際、ChocolatyからインストールされたRubyのバージョンが2.5.1と古い物だった(2017/02/11現在)。
jekyllをインストールするにはRubyの2.6以上の物を使わないといけないので、
<a href="http://guides.rubygems.org/ssl-certificate-update/#installing-using-update-packages">こちら</a>のサイトからRubyの2.6.7へのアップデート用のgemを入手し、Rubyをアップデートする。


<h2>Jekyllを導入</h2>
無事rubyが導入出来たら、後はPowershellから冒頭と同じコマンド

<blockquote>$ gem install jekyll<br>
$ jekyll new my-awesome-site<br>
$ cd my-awesome-site<br>
$ jekyll serve<br>
# => Now browse to http://localhost:4000</blockquote>

と入力するだけでWindows環境でもJekyllが建てれる。

後はゆっくり使い方を学んでいこう。