---
layout: post
title: "Node.jsで単純なHTTPサーバとクライアントを作成する"
date: 2017-04-05 16:00:00 -0900
categories: node.js http
---

個人用メモその3。もうほぼコピペだ。

### 目的

---

`Node.js`で簡単なHTTPサーバとクライアントを作成する。

サーバ側はPOSTリクエストを受けたらその受けた内容をそのまま返す。それ以外の場合はHello Worldのページを表示する。

クライアント側はhelloworldをPOSTでサーバに送りつける。

### 説明

---

httpのやり取りは標準で用意されている[http][httpdoc]モジュールを使う。

また、httpsを使用したい場合は[https][httpsdoc]のモジュールもある。

`http.createServer()`はTCPの時使った`net.createServer()`から継承された物で、同じ様に使える他、いくつか`Events`が追加されている。

### 使用したコード

---

#### サーバ側

```js
var http = require('http');

var port = 5555;

var server = http.createServer((req,res) => {
    //POSTの場合、その内容を返す
    if (req.method === 'POST'){
        var body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            console.log(`Received Message: ${body}`);

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.write(body);
            res.end();
        });
    } else {
    //POST以外の場合、Hello World!を表示する。
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<!doctype html>");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Hello World</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("Hello World!");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
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

server.listen(port);


```

#### クライアント側

```js
var http = require('http');

var options = {
    port: 5555,
    hostname: '127.0.0.1',
    method: 'POST',
    path: '/'
};

//httpにPOSTする内容
var postData = "helloworld!";

var req = http.request(options, (res) =>{
    var body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log(`BODY: ${body}`);
    });

});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();


```

### 動作テスト

httpClient.jsを起動した時はPOSTリクエストの内容がそのまま返される。

<a href="/images/blog-images/20170405-http-nodejs.png" data-fancybox="gallery">![http-nodejs](/images/blog-images/20170405-http-nodejs.png){:class="img-fluid"}</a><br>

ブラウザから直接開くとHello World!が表示される。

<a href="/images/blog-images/20170405-http-browser.png" data-fancybox="gallery">![http-browser](/images/blog-images/20170405-http-browser.png){:class="img-fluid"}</a><br>

### 参考したサイト

---

- [Node.js: httpのドキュメント][httpdoc]

[httpdoc]:https://nodejs.org/api/http.html
[httpsdoc]:https://nodejs.org/api/https.html

