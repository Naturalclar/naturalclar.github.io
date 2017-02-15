---
layout: post
date: 2017-02-11 12:56:00 -0800
categories: jekyll cloud9
---

Chromebookからでもサイトを管理できる様にする為の忘備録

<h2>Cloud9の導入</h2>
<a href="https://c9.io">Cloud9</a>はCloud上で環境を構築し、ブラウザ上で利用できるサービス。
容量が少ないChromebookに取ってはうってつけのサービスだ。
アカウントは無料で作成する事ができる。

<h2></h2>
アカウントを作成したら、まずは作業する為のWorkspaceを作成する。
既にGithub pagesにJekyllを作成していれば、そのリポジトリを入力する。

そして、作成したWorkspaceのターミナル上でJekyllとBundlerをインストールする。

<blockquote>
gem install jekyll bundler
</blockquote>

通常の環境ならここで<code>jekyll serve</code>でローカルでサイトをホストできるのだが、
Cloud9でホストする場合は以下のコマンドを入力する。

<blockquote>jekyll serve --host [HOST Address] --port [PORT] --baseurl ''</blockquote>

IPアドレスはデフォルトでは0.0.0.0に設定されている。
ポートは8080を受け付けるのでそれを使用。

これでネットがある限りどこからでもサイトを見ながら編集できるようになったぞ。


