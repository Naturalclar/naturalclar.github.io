---
layout: post
date: 2017-02-22 11:00:00 -0800
title: "ローカルでIPアドレスを調べずにRaspberry PiにSSH接続する"
categories: raspberrypi
image: "/images/blog-images/raspberrypi-box.jpg"
---

Raspberry Pi 3を購入したので色々とモチベが上がってる。<br>
Bluetoothセンサーと接続してIoT的な事を試してみたい。<br>

Raspbian OSを入れたRaspberry piにssh接続する方法の忘備録。<br>
最新のraspbianだと標準でavahiが入ってる様なので特にIPアドレスにホスト名を紐付ける設定をする必要はなさそう。<br>
Raspberry Pi 3だと初期状態ではssh接続が許可されてないので、一度HDMIでモニターに接続して、`sudo raspi-config`で設定を開いてAdvanced OptionsからSSH接続を有効する必要がある。<br>
SSHが有効に出来たら、Raspberry piとPCを同じネットに繋いで、WindowsならWindows Power Shellで下記コマンドを入力する事でSSH接続が可能<br>

```
ssh pi@raspberrypi.local
```

初期状態のパスワードは`raspberry`だ。<br>
ホスト名の変更は`sudo raspi-config`でAdvanced Optionの設定から行える。<br>
パスワードの変更も`sudo raspi-config`から行える。<br>

![ssh-smashpi](/images/blog-images/ssh-smashpi.png){:class="img-fluid"}<br>

raspberrypi改めsmashpiで色々遊んでみようと思う。

