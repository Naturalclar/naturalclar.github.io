---
layout: post
title: "Node.jsで単純なUDPサーバとクライアントを作成する"
date: 2017-04-02 12:00:00 -0800
categories: node.js udp
---

最近様々なデバイスのデータを色んなプロトコルを使っての送受信を試してるので個人用メモ

### 目的

---

`Node.js`で簡単なUDPサーバとクライアントを作成する。

### 説明

---

UDPを使ったデータのやり取りは標準で用意されている[drgam][dgramdoc]のモジュールを使えば良い。<br>
`dgram.createSocket()`でソケットを作成できる。ipv4を使う場合は`udp4`, ipv6を使う場合は`udp6`を指定する。

### 使用したコード

---

#### サーバ側

```js
var dgram = require('dgram');

var port = 12345;
var host = '127.0.0.1';

//IPv4でソケット作成
var server = dgram.createSocket('udp4');

//エラー処理
server.on('error', (err) => {
    console.log(`Server Error:\n${err.stack}`);  
    server.close();
    });

//受け取ったメッセージを表示
server.on('message', (message, remote) => {
    console.log(`Received: ${message} from ${remote.address}:${remote.port}`);
});

//リスナーの情報を表示
server.on('listening', () => {
    var address = server.address();
    console.log(`Listening on: ${address.address}:${address.port}`) 
});

//指定したポート、アドレスからメッセージを聞く
server.bind(port,host);

```

#### クライアント側

```js
var dgram = require('dgram');

var port = 12345;
var host = '127.0.0.1';
var message = new Buffer('Hello UDP!');

//IPv4でソケット作成
var client = dgram.createSocket('udp4');

//クライアントからメッセージを送信する。メッセージはBuffer, string, arrayフォーマットを受け付ける
client.send(message, 0, message.length, port, host, (err, bytes) => {
    if (err){
        throw err;
    }
    console.log(`${bytes} bytes of message sent: ${message}`);  
   client.close(); 
});

```

### 動作テスト

<a href="/images/blog-images/20170403-udp-nodejs.png" data-fancybox="gallery">![udp-nodejs](/images/blog-images/20170403-udp-nodejs.png){:class="img-fluid"}</a><br>


### 参考したサイト

---

- [Node.js: dpgramのドキュメント][dpgramdoc]

[dpgramdoc]:https://nodejs.org/api/dgram.html

