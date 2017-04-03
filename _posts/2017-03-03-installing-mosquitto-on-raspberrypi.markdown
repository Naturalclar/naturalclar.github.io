---
layout: post
title: "Raspberry Piに最新のmosquittoブローカーとクライアントを導入"
date: 2017-03-03 16:00:00 -0800
categories: raspberrypi mosquitto mqtt iot 
---

IoT殴り書きその4。[以前の記事][post-testmqtt]では[Mosquitto][mosquitto]がWebで提供しているテストブローカにデータを投げ込んでいただけだったが、今回はRaspberry Pi自体をMQTTブローカーにする。<br>
これでようやくIoTっぽくなってきた<br>

### 目的

---

Raspberry PiにオープンソースのMQTTブローカーである[Mosquitto][mosquitto]とそのクライアント導入する。


### Mosquittoのインストール

普通にapt-getからmosquittoをインストールしても、バージョンが少し古いため、awsのmqttブローカとのブリッジ接続等が出来ない。<br>
Mosquitto公式の[ブログ記事]にDebianOSで最新のリポジトリを取ってくる方法が記載されているのでそれを参考にした。

まずはMosquittoの最新のリポジトリキーを取ってきて、それを適用する。

```bash
wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
sudo apt-key add mosquitto-repo.gpg.key
```

そして、aptのリポジトリを追加する為にリポジトリ一覧のフォルダに移動する

```bash
cd /etc/apt/sources.list.d/
```

使用しているOSに合わせてレポジトリを取ってくる。Jessieの方が最新のOS(03/03/2017現在)

```bash
//Wheezyの場合:
sudo wget http://repo.mosquitto.org/debian/mosquitto-wheezy.list

//Jessieの場合:
sudo wget http://repo.mosquitto.org/debian/mosquitto-jessie.list
```

そしてaptの情報を更新する。

```bash
sudo apt-get update
```

そしてmosquittoとそのクライアントをインストール

```bash
sudo apt-get install mosquitto mosquitto-clients
```

これでmosquittoが導入出来た筈。mosquittoは自動で走ってる筈だけど、手動で起動させたい場合以下のコマンドで起動出来る

```bash
mosquitto
```

### 簡単な接続テスト

'test'トピックをsubscribeする: 以下のコマンドを使えば'test'トピックに何かがpublishされたらそれを吐き出す様になる。<br>
-v のオプションを付ける事で吐き出される内容が'トピック ペイロード'になる(通常はペイロードのみが表示される)

```bash
mosquitto_sub -v -t 'test' &
```

'test'トピックにpublishする: 以下のコマンドで'test'トピックにメッセージをpublishする。

```bash
mosquitto_pub -t 'test' -m 'hello world!'
```

上記２つのコマンドを入力してtest hello world!と表示されたら成功

また、以前紹介した[Mosquittoのテストブローカーにデータを投げ込む記事][post-testmqtt]で使用したコードの

```js
var client = mqtt.connect('mqtt://test.mosquitto.org')
```

の部分を

```js
var client = mqtt.connect('mqtt://localhost')
```

に変更すれば、CC2650のデータをPi内のMQTTブローカに投げ込んで、それが表示される事を確認出来る。<br>
ここからawsのMQTTブローカにブリッジ接続してaws IoTにデータを表示させる等して本格的にIoTっぽい事をしてみたい。<br>

### 参考したサイト

---

- [Mosquitto Debian repository][mosquitto-debian]
- [Mosquitto Documentation][mosquitto-docs]


[mosquitto]: https://mosquitto.org/
[mosquitto-debian]: https://mosquitto.org/2013/01/mosquitto-debian-repository/
[mosquitto-docs]: https://mosquitto.org/documentation/
[post-testmqtt]: /publish-data-to-mosquitto/