---
layout: post
title: "nvmを使ってnode.jsを最新にする。"
date: 2017-03-03 12:00:00 -0800
categories: nvm npm node.js 
---

IoT殴り書きその3。node.jsの更新。順序が絶対おかしいのは気にしない。<br>
node.jsとnpmの最新版を入れる方法はいくつか試したが、これが一番便利だと思う。<br>

### 目的

---

nvmを使ってRaspberry Piに最新のNode.js、及びNode.js用のパッケージマネージャ、npmをインストールする。<br>
Raspberry Pi以外でもLinuxでも出来る筈。


### nvmとは

---

[nvm][nvm-repo]はnode.jsのバージョン管理ツールである。このツールを使えば最新のnode.jsがインストール出来るだけでなく、何らかの理由で古いバージョンのNode.jsが使いたい場合も簡単に変更出来る。

### nvmのインストール

---

nvmを導入するにはc++のコンパイラが必要。その為に必要なパッケージをインストールする。

```bash
sudo apt-get install build-essential libssl-dev
```

wgetでnvmをインストールする為のスクリプトを取ってくる。

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

インストール出来たらRaspberry Piを再起動するか、下記コマンドを入力する事でnvmが使える様になる。

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

### nvmを使ってnodeをインストールする

nvmが使える様になったら下記コマンドで最新のnode.jsをインストールする事が出来る。

```bash
nvm install node
```

下記コマンドでnodeのバージョンが表示されればnodeが正常にインストールされたかどうかが確認出来る。

```bash
node -v
```

また、インストールしたいnode.jsのバージョンを指定する事も出来る。

```bash
nvm install 4.0
```

使用するnodeのバージョンを変更したい場合、下記コマンドで変更出来る。

```bash
nvm use 4.0
```

インストールしたnodeのバージョン、及び現在使用しているnodeのバージョンが知りたい場合は下記コマンドを使う。

```bash
nvm ls
```

### npmを最新の物にする

nvmを使ってnode.jsをインストールした場合、最新のnpmも一緒にインストールされる。<br>
だが、npmの方がnode.jsより更新頻度が高い為、npmだけを更新したい場合は下記コマンドを使う。

```bash
npm install npm@latest -g
```


### 参考したサイト

---

- [nvmのgithubリポジトリ][nvm-repo]
- [Installing Node.js and updating npm][npm-update]
- [Managing Node.js Versions with nvm][nvm-blog]


[nvm-repo]: https://github.com/creationix/nvm
[npm-update]: https://docs.npmjs.com/getting-started/installing-node
[nvm-blog]: https://davidwalsh.name/nvm

