---
layout: post
date:   2017-02-20 3:00:00 -0800
title: "自分のホームページを立ち上げる！ 第二回: Github PagesにJekyllの導入"
categories: website
---

- [第一回: Github Pagesの作成][how-to-build-a-website-1]
- [第二回: Github PagesにJekyllの導入][how-to-build-a-website-2]

## 第二回：Github PagesにJekyllの導入


第二回は、このサイトでも使用している静的サイトジェネレータ、Jekyllの導入方法を紹介する。


### Jekyllとは

---

[Jekyll][jekyll]とは、Rubyで作成されたブログの様な静的サイトを作成する無料のツールである。
ベースとなるフォルダのファイルを参照して自動でHTMLが生成されるので、慣れれば非常に楽にページを作る事が出来る。
各ページに使うテンプレート等を簡単に用意し、それを自動で適応する事が出来るので、わざわざ各ページにてメニューの内容をコピペしたりする手間が省ける。


### WindowsでのJekyllの導入

---

本来、JekyllはLinux, Mac用に作成されており、Windowsでは公式にサポートされていない。
だが、[公式サイト][jekyll-windows]にて、Windowsでも導入出来る方法が記載されているので、今回はその方法でJekyllを導入していく。
LinuxやMacでの導入方法は需要があれば書くかもしれない。([公式サイト][jekyll]に4行くらいの手順が書いてあるのでそれを参照した方が早い。)
<hr>
### Rubyの導入

---

なぜJekyllがWindowsでサポートされていないかと言うと早い話、Rubyが標準で導入されていないから。<br>
なのでRubyさえ入れしまえばあとはこっちのもんだ。

#### Ruby for Windowsのインストール

---

[Ruby Installer for Windows][ruby-windows]のページにいけば、Windows用にRubyをインストール出来る。<br>
左上の方に最新版のインストーラがあるので、迷った時はそれをダウンロードしておけば良い。<br>
![ruby-installer](/images/building-website/ruby-installer.png){:class="img-fluid"}<br>

インストーラを実行してRubyの実行ファイルへの環境変数PATHを設定する。にチェックを入れてインストールする。<br>
![ruby-setpath](/images/building-website/ruby-setpath.png){:class="img-fluid"}<br>

#### Ruby Dev Kitのインストール
次に、WindowsのコマンドプロンプトでRubyを動かせるようにするためにRubyDevKitをインストールする。<br>
[先程のRuby Installerのページ][ruby-windows]の下の方に、Ruby2.0以降用のダウンロードリンクがある。<br>
32bit版と64bit版が用意されているので、ご自分のPCに合わせた物をダウンロードする。<br>
![rubydev-installer](/images/building-website/rubydev-installer.png){:class="img-fluid"}<br>

インストーラを実行したら解凍先を求められるので、`C:\RubyDev\`等わかりやすい所にしておく。
![rubydev-setdir](/images/building-website/rubydev-setdir.png){:class="img-fluid"}<br>

#### RubyDevKitを使ってRubyのセットアップ

---

Ruby for WindowsとRubyDevKitがインストール出来たら、コマンドプロンプトを開き、先程解凍したRubyDevKitの場所に行く。<br>
コマンドプロンプトはWinキーでメニューを開いて`cmd`で検索すれば出て来る。<br>
コマンドプロンプト上で`cd C:\RubyDev\`と入力して先程RubyDevKitを解凍したフォルダに移動する(`C:\RubyDev\`の部分は先程解凍したフォルダ名を入れる)<br>
![cmd-cd-ruby-dev](/images/building-website/cmd-cd-ruby-dev.png){:class="img-fluid"}<br>

移動したら`ruby dk.rb init`と入力して先程インストールしたRubyを検出する。<br>
![cmd-ruby-init](/images/building-website/cmd-ruby-init.png){:class="img-fluid"}<br>
検出結果は`ruby dk.rb review`と入力すれば表示される。<br>
![cmd-ruby-review](/images/building-website/cmd-ruby-review.png){:class="img-fluid"}<br>
そして、`ruby dk.rb install`と入力してrubyを使えるようにする。<br>
![cmd-ruby-install](/images/building-website/cmd-ruby-install.png){:class="img-fluid"}<br>

これでWindowsでもRubyを使えるように出来た。<br>

### Rubyを使ってjekyllを導入

---

無事Rubyを導入することが出来たら、いよいよJekyllを導入する。<br>
また、Jekyllでサイトを作成する時、複数のRubyファイルを組み合わせるので、それをしてくれる`bundler`というツールも必要になる。<br>

先程のコマンドプロンプトの画面で`gem install jekyll bundler`と入力すれば`jekyll`と`bundler`がインストール出来る。<br>
その後、`jekyll new my-awesome-site`と入力する事でmy-awesome-siteと言うフォルダが作成され、そこにjekyllのサイトが作成される。(my-awesome-siteの部分は好きな文字列で良い)<br>
![cmd-jekyll-new](/images/building-website/cmd-jekyll-new.png){:class="img-fluid"}<br>
`cd my-awesome-site`のコマンドで作成されたフォルダの中に移動し、以下のコマンドを入力しよう。<br>
`bundle exec jekyll serve`<br>
![cmd-jekyll-serve](/images/building-website/cmd-jekyll-serve.png){:class="img-fluid"}<br>
そうすると、ローカルPCでjekyllのサイトが立ち上がる。<br>
ブラウザを開いて、URL欄に`http://localhost:4000`と入力してみよう。<br>

![hello-jekyll](/images/building-website/hello-jekyll.png){:class="img-fluid"}<br>

作成されたJekyllのページが開かれる筈。<br>

<hr>
### 作成したサイトをgithub pagesの場所に移す

[前回][how-to-build-a-website-1]作成したgithub pagesのリポジトリにjekyllを導入するために、先程作成した`my-awesome-site`フォルダの中身を全てコピーして、前回作った`(ユーザ名).github.io`のフォルダがある場所に貼り付けよう。<br>
前回作成した`index.html`はもう使わないので削除してしまって良い。<br>

<hr>
### 更新した内容をGithubに反映する
前回と同じようにGitを使ってGithub Pagesに更新内容を反映する。
Gitを起動して、`cd ユーザ名.github.io`でサイトのフォルダに入って下記コマンドを入力しよう。

```bash
$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master

```
<hr>
### 更新された内容を確認する
前回と同じく、ブラウザを開いて、URLに(ユーザ名).github.ioと入力して更新された事を確認しよう。

![jekyll-blank](/images/building-website/hello-jekyll-online.png){:class="img-fluid"}

<hr>
### 参考にしたサイト

- [Jekyll公式サイト][jekyll]
- [Jekyll公式ドキュメント - Windowsでの導入方法][jekyll-doc-windows]
- [Jekyll3 for Windows][jekyll3-for-windows]

[jekyll]: https://jekyllrb.com/
[jekyll-doc-windows]: https://jekyllrb.com/docs/windows/
[ruby-windows]: http://rubyinstaller.org/downloads/
[jekyll3-for-windows]: https://labs.sverrirs.com/jekyll/
[how-to-build-a-website-1]: /how-to-build-a-website-1
[how-to-build-a-website-2]: /how-to-build-a-website-2