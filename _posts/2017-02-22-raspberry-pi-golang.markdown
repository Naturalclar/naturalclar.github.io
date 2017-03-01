---
layout: post
date: 2017-02-22 21:50:00 -0800
title: "Raspberry Pi 3にGo1.8を導入する"
categories: raspberrypi golang
---

*2/23 コマンドに誤記があったので修正

Raspberry Pi 3に[Golang1.8][golang]を入れてみる。<br>
使用しているOSはRaspbianの4.4.34。<br>

Raspberry Pi 3はARMv7プロセッサで動いているのでARM版のビルドが必要。<br>
Golang 1.8は既にARMv6用にビルドされたパッケージを提供しているのでそれを取ってくる。<br>

```bash
wget https://storage.googleapis.com/golang/go1.8.linux-armv6l.tar.gz
```

`/usr/local/`に解凍する。<br>

```bash
sudo tar -C /usr/local -xzf go1.8.linux-armv6l.tar.gz
```

`PATH`に`/usr/local/go/bin`を追加する。<br>

```bash
export PATH="/usr/local/go/bin:$PATH"
```

`PATH`の設定は再起動したら戻ってしまうので、起動時に自動で上記PATHを追加したい場合、`/etc/profile`を編集して上記文を追加する。<br>

```bash
sudo nano /etc/profile
```

`go version`でgoがインストールされている事を確認出来る。<br>


<a href="/images/blog-images/go-version.png" data-fancybox="gallery">![go-version](/images/blog-images/go-version.png){:class="img-fluid"}</a><br>

試しにHello worldを起動してみる。<br>

```go
//hello.go

package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

<a href="/images/blog-images/go-helloworld.png" data-fancybox="gallery">![go-helloworld](/images/blog-images/go-helloworld.png){:class="img-fluid"}</a><br>

やったね。<br>

### 参考したページ

---

- [Golang公式ホームページ][golang]
- [Install golang 1.7 on raspberry pi][golang1.7]


[golang]: https://golang.org/
[golang1.7]: https://gist.github.com/konradko/a9468beb70f0fa47766f5ebf966f24e8