---
layout: post
title: "Node.jsで単純なTCPサーバとクライアントを作成する"
date: 2017-04-02 20:00:00 -0800
categories: node.js tcp
---

Node.jsでデータ送受信する為の個人用メモその2。

### 目的

---

`Node.js`で簡単なTCPサーバとクライアントを作成する。サーバはクライアントが投げたデータをそのまま返すだけのエコーサーバ。

### 説明

---

TCPを使ったデータのやり取りは標準で用意されている[net][netdoc]のモジュールを使えば良い。<br>
サーバ側は`net.createServer()`でサーバを建てる。クライアント側は`net.Socket()`でソケットを作成する。

### 使用したコード

---

#### サーバ側

```js
var net = require('net');

var port = 54321;
var host = '127.0.0.1';

var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(`Server: Received ${data}`);
        socket.write(data);
        socket.pipe(socket);
    });
    socket.on('end', () => {
        console.log('Server: Client Disconnected');
    });
});

server.on('connection', (socket) => {
    console.log(`Server: ${socket.remoteAddress}:${socket.remotePort} has connected`);
});

server.on('error', (err) => {
    throw err;
});

server.on('listening', () => {
    var address = server.address();
    console.log(`opened server on ${address.address}:${address.port}`);
});

server.listen(port,host);
```

#### クライアント側

```js
var net = require('net');

var port = 54321;
var host = '127.0.0.1';

var client = new net.Socket();

client.connect(port, host, () => {
    console.log('Client: Connected to Server');
    client.write("Hello TCP!");
});

client.on('data', (data) =>{
    console.log(`Client: Received ${data}`);
    client.end();
});

client.on('close', () => {
    console.log('Client: Disconnected from Server');
});
```

### 動作テスト

<a href="/images/blog-images/20170403-tcp-nodejs.png" data-fancybox="gallery">![tcp-nodejs](/images/blog-images/20170403-tcp-nodejs.png){:class="img-fluid"}</a><br>


### 参考したサイト

---

- [Node.js: netのドキュメント][netdoc]

[netdoc]:https://nodejs.org/api/net.html

