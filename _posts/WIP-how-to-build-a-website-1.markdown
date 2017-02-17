---
layout: post
categories: website
---

このサイトをどう立ち上げたかについて、回数に分けて説明して行く。

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

### リポジトリの作成

アカウントが作成できたら、まずは、[GitHub][github]にて新たなリポジトリ(ファイルを記録する場所)を作成する。<br>
リポジトリ名を(ユーザ名).github.ioにして作成。<br>
*(ユーザ名)が一致していないとうまくいかないので注意。

### ローカルのPCに作業場所を作成する

先程インストールしたGitを開き、以下のコマンドを入力する事によって自分のローカルPCにリポジトリのコピー(Clone)を作成する。<br>

```bash
$ git clone https://github.com/(ユーザ名)/(ユーザ名).github.io
```

### 更新した内容をGithubに反映する
以下のコマンドで、ローカルPCで更新した内容をGithubに反映(Push)する事が出来る。

```bash
$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master

```

### おしまい

### 参考にしたサイト

[github]: https://pages.github.com/
[git]: https://git-scm.com/
[git-win]: https://git-scm.com/download/win
[git-mac]: https://git-scm.com/download/mac
[git-linux]: https://git-scm.com/download/linux
[github-pages]: https://pages.github.com/