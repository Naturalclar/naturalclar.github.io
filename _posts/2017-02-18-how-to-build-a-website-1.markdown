---
layout: post
date:   2017-02-18 12:00:00 -0800
title: "自分のホームページを立ち上げる！ 第一回: Github Pagesの作成"
categories: website
---

このサイトをどう立ち上げたかについて、回数に分けて説明して行きます。

## 第一回：Github PagesでHPを公開する

### Github Pagesとは

[Github Pages][github-pages]は開発コード共有ウェブサービスである[Github][github]上でサイトを公開出来るサービス。<br>
自分のコードがオープンソースになってしまうが、無料でアカウントが作成出来る。

### 必要なツールのインストール

Githubから直接ファイルを弄って更新する事も出来るのだが、更新途中の物がそのまま公開されてしまうので、<br>
あるていど更新内容を纏めてから一気に更新出来る様に、バージョンコントロールシステムを導入する。<br>
<br>
[Git][git] - ターミナル上で管理出来るオープンソースのバージョンコントロールシステム。詳しい使い方については後日別の記事を書く。<br>
ここからダウンロード出来る→ [Windows版][git-win] [Mac版][git-mac] [Linux版][git-linux]


### Githubのアカウントの作成

まずは[Github][github]のアカウントを作成する。<br>
作成するのは無料アカウントで問題無い。<br>
無料アカウントと有料アカウントの違いは有料アカウントなら自分が作成しているプロジェクトを非公開にできる事。

### リポジトリの作成

アカウントが作成できたら、Start a new Projectをクリックして新たなリポジトリ(ファイルを記録する場所)を作成する。<br>
![new_repo](/images/building-website/new_repo.png)

リポジトリ名を`(ユーザ名).github.io`にしてCreate Repositoryをクリックして作成。<br>
*(ユーザ名)が一致していないとうまくいかないので注意。

### ローカルのPCに作業場所を作成する

先程インストールしたGitを開き、以下のコマンドを入力する事によって自分のローカルPCにリポジトリのコピー(Clone)を作成する。<br>

```bash
$ git clone https://github.com/(ユーザ名)/(ユーザ名).github.io
```

### ローカルPCにてHPの内容を更新する

更新すると言ってもそもそも何も入っていないので、適当な文字列が入ったファイルを作成する。<br>
先程使ったGitの画面から下記コマンドで"Hello World!"と言う文字列が入ったファイルを作成できる。<br>
直接`(ユーザ名).github.io`のフォルダに入って、好きな文字列を入れたメモ帳を`index.html`と言う名前で保存しても出来る。

```bash
$ cd ユーザ名.github.io
$ echo "Hello World!" > index.html
```

### 更新した内容をGithubに反映する
Gitから以下のコマンドを入力する事で、ローカルPCで更新した内容をGithubに反映(Push)する事が出来る。

```bash
$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master

```

### 実際に確認する
ブラウザを開いて、URLに(ユーザ名).github.ioと入力すると、先程入力した文字列が表示される。

![new_repo](/images/building-website/helloworld.png)


### 参考にしたサイト

[Github Pages公式サイト][github-pages]

[github]: https://pages.github.com/
[git]: https://git-scm.com/
[git-win]: https://git-scm.com/download/win
[git-mac]: https://git-scm.com/download/mac
[git-linux]: https://git-scm.com/download/linux
[github-pages]: https://pages.github.com/