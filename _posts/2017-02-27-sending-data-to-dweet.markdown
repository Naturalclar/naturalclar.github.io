---
layout: post
title: "Raspberry Piを通してCC2650センサーのデータをDweet.ioに表示させる"
date: 2017-02-27 12:00:00 -0800
categories: iot raspberrypi cc2650 node.js dweet.io
---

最近仕事で勉強しないといけない事が多くなってきたので、頭の中を整理する為にも書き出しておく。
殴り書きになるけど時間ある時に清書する。

### 目的

---

[前回][prev-post]Raspberry PiにGolangを入れてテンション上がってたけど、そんな事は無かったかの様にNode.jsを使ってデータを集める事にする。<br>
センサーとして使用するのはTI製のBluetoothセンサータグ(CC2650)を使用する。これ一つで気温、温湿度、気圧、加速度、輝度等を計測できる優れもの。<br>
このセンサータグはNode.jsで接続してデータを投げ込めるSDKが[既に存在する][node-sensortag]からUUIDを調べる等、色々な手間が省ける。<br>
今回はこのセンサーのデータをネット上に投げ込んで、無料で楽にデータを表示できるサイト、[dweet.io][dweet]に温湿度と輝度を表示させる事を目的とする。<br>

### Raspberry PiにNode.jsをインストールする

---

[こちら][install-nodejs]のサイトを参照してRaspberry pi3にNode.jsとnpmをインストール
    
*03/03/17追記：[こちら][post-nodejs]の記事に最新のnode.jsの導入方法を記載しました。    
    
### npmを使って必要なモジュールのインストール

---

以下のコマンドで今回使用するモジュールをインストール出来る。

```bash
npm install async sensortag node-dweetio
```

### 使用したコード

---

[sensortag][node-sensortag]モジュールに含まれているtest.jsや[このブログ記事][ref-blog]を参照してセンサータグの温湿度と輝度を3秒毎にdweet.ioに投げるコードを作成

```js
var util = require('util'),
async = require('async'),
sensortag = require('sensortag'),
dweetclient = require("node-dweetio");

var dweetio = new dweetclient();

sensortag.discover( (tag) => {
    console.log('discovered: ' + tag);

    tag.on('disconnect', ()=> {
	console.log('disconnected');
	process.exit(0);
    })

    var url = tag.type + "-testing";
    console.log("will be sending data to http://dweet.io/follow/" + url);
    
    var content = {};

    async.series([
	(callback) => {
	    console.log('connectAndSetUp');
	    tag.connectAndSetUp(callback);
	},

	(callback) => {
	    console.log('enableHumidity');
	    tag.enableHumidity(callback);
	},
	(callback) => {
	    console.log('enableLuxometer');
	    tag.enableLuxometer(callback);
	},
	(callback) => {
	    setTimeout(callback, 2000);
	},
	(callback) => {
	    tag.on('humidityChange', (temperature, humidity) => {
		console.log('\ttemperature = %d C', temperature.toFixed(1));
		console.log('\thumidity = %d %', humidity.toFixed(1));
		content.temperature = Number(temperature.toFixed(1));
		content.humidity = Number(humidity.toFixed(1));
	    })
	    console.log('sensorHumidityPeriod')
	    tag.setHumidityPeriod(2000, (error) => {
		console.log('notifyHumidity');
		tag.notifyHumidity((error) => {
		    callback()
		    })
	    })
	},
	(callback) => {
	    tag.on('luxometerChange', (lux) => {
		console.log('\tlux = %d', lux.toFixed(1));
		content.lux = Number(lux.toFixed(1));
	    });
	    console.log('setLuxometer');
	    tag.setLuxometerPeriod(2000, (error) => {
		console.log('notifyLuxometer');
		tag.notifyLuxometer((error) => {
		    callback();
		    })
	    })
	}
    ])

    //send data every 3 seconds
    setInterval(() => {
	if( content.humidity && content.lux) {
	    dweetio.dweet_for(url, content, (err, dweet) => {
		console.log(dweet.thing);
		console.log(dweet.content);
		console.log(dweet.created);
	    })
	}
    }, 3000);
})
```

### dweetにデータが表示される事を確認。

---

上記コードだとdweet.io/follow/センサー名-testingに投げたデータが表示される。今回使ったセンサー名はcc2650なので、[http://dweet.io/follow/cc2650-testing][dweet-db]にデータが表示される。<br>

<a href="/images/blog-images/dweet-cc2650.png" data-fancybox="gallery">![dweet-cc2650](/images/blog-images/dweet-cc2650.png){:class="img-fluid"}</a><br>

### TODO

---

Node.jsの代わりにGolangで出来る様にしたいから用研究<br>
Golang用のBLEライブラリは既に[存在してる][paypal-gatt]し、それを使ってセンサータグを接続する為のSDKとか作れないかな？

### 参考したサイト

---

- [Nodejsのインストール][install-nodejs]
- [Node: dweetio-client][node-dweet]
- [Node: node-sensortag][node-sensortag]
- [SensotTag のデータを dweet.io で超簡単に可視化してみました。][ref-blog]


[install-nodejs]: https://nodejs.org/en/download/package-manager/
[node-sensortag]: https://github.com/sandeepmistry/node-sensortag
[dweet]: http://dweet.io/
[node-dweet]: https://github.com/buglabs/dweetio-client
[prev-post]: {{page.previous.url}}
[paypal-gatt]: https://github.com/paypal/gatt
[ref-blog]: http://yagitsawa.github.io/2015/12/18/sensortag-bbb-dweetio/
[dweet-db]: http://dweet.io/follow/cc2650-testing
[post-nodejs]: /updating-nodejs-using-nvm/

