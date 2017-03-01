---
layout: post
title: "Rasberry Piを使ってMosquittoのMQTTテストテストブローカーにCC2650センサーのデータを投げ込む"
date: 2017-02-28 12:00:00 -0800
categories: IoT RaspberryPi CC2650 node.js MQTT 
---

IoT殴り書きその2。文章の使いまわしが多いのは気にしない。こちらも時間が出来た時に清書したい。

### 目的

---

[昨日][prev-post]使用したNode.jsのsensortagモジュールで今度はMQTTブローカーにセンサータグのデータを投げ込んでみる。<br>
今回は[Mosquitto][mosquitto]が無料で提供しているMQTTの[テストブローカー][test-mosquitto]を使用する。<br>

### Raspberry PiにNode.jsをインストールする

(*[前回][prev-post]と同じなので既に実行していない場合実施。)<br>
[こちら][install-nodejs]のサイトを参照してRaspberry pi3にNode.jsとnpmをインストール
    
### npmを使って必要なモジュールのインストール

---

以下のコマンドで今回使用するモジュールをインストール出来る。<br>

```bash
npm install async sensortag mqtt
```

### 使用したコード

---

[前回][prev-post]使ったコードを流用してnpm上の[MQTTのドキュメント][npm-mqtt]を参照しながらMQTTにセンサータグの温湿度と輝度を投げ込む様変更。(THE・手抜き)<br>
今回はSubsribeとPublishを同じRasberry pi上で行う。もしRasberry piが二つあれば一つをSubscriber,もう一つをPublisherにして、Publisherからデータが投げ込まれた時にSubscriberの方でデータを表示させた方が実用的かもしれない。

```js
var util = require('util')
var async = require('async')
var sensortag = require('sensortag')
var mqtt = require('mqtt')

sensortag.discover(function discovered(tag){
    console.log('discovered: ' + tag)

    tag.on('disconnect', function(){
	console.log('disconnected');
	process.exit(0);
    });

    var client = mqtt.connect('mqtt://test.mosquitto.org')

    client.on('connect', function () {
	client.subscribe('cc2650test')
    })

    var content = {}

    async.series([
	function(callback){
	    console.log('connectAndSetUp')
	    tag.connectAndSetUp(callback)
	},

	function(callback){
	    console.log('enableHumidity')
	    tag.enableHumidity(callback)
	},
	function(callback){
	    console.log('enableLuxometer')
	    tag.enableLuxometer(callback)
	},
	function(callback){
	    setTimeout(callback, 2000)
	},
	function(callback){
	    tag.on('humidityChange', function(temperature, humidity) {
		console.log('\ttemperature = %d C', temperature.toFixed(1))
		console.log('\thumidity = %d %', humidity.toFixed(1))
		content.temperature = Number(temperature.toFixed(1))
		content.humidity = Number(humidity.toFixed(1))
	    })
	    console.log('sensorHumidityPeriod')
	    tag.setHumidityPeriod(2000, function(error) {
		console.log('notifyHumidity')
		tag.notifyHumidity(function(error) {
		    callback()
			})
	    })
	}
	function(callback){
	    tag.on('luxometerChange', function(lux) {
		console.log('\tlux = %d', lux.toFixed(1))
		content.lux = Number(lux.toFixed(1))
	    })
	    console.log('setLuxometer')
	    tag.setLuxometerPeriod(2000, function(error) {
		console.log('notifyLuxometer')
		tag.notifyLuxometer(function(error) {
		    callback()
			})
	    })
	}
    ])
    
	//publish data every 3 seconds
    setInterval(function(){
	if( content.humidity && content.lux) {
	    client.publish('cc2650test', JSON.stringify(content))
	}	
    }, 3000)

    client.on('message', function (topic, message){
	console.log('Message: ' + message.toString())
    })
})

```

### Subscribeしたデータをコンソールで表示させる

---

このコードではブローカ上にデータが投げ込まれた時、コンソール上でそのデータを表示するようにしている。<br>
Message: の後に表示されるのがブローカ上で受け取ったメッセージ。<br>

![dweet-cc2650](/images/blog-images/mqtt-cc2650.png){:class="img-fluid"}<br>

### 参考したサイト

---

- [Nodejsのインストール][install-nodejs]
- [Node: node-sensortag][node-sensortag]
- [mqttパッケージのドキュメント][npm-mqtt]


[install-nodejs]: https://nodejs.org/en/download/package-manager/
[node-sensortag]: https://github.com/sandeepmistry/node-sensortag
[npm-mqtt]: https://www.npmjs.com/package/mqtt
[prev-post]: {{page.previous.url}}
