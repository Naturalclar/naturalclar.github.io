---
layout: post
title: "Node.jsで複数のcc2650センサーを接続する方法"
date: 2017-03-16 12:30:00 -0800
categories: iot cc2650 node.js
---

再びIoT殴り書き。今までRaspberry Piに一つのCC2650センサーしか接続して来なかったので、複数のセンサーを繋げてデータを飛ばす方法を記載

### 目的

---

`Node.js`の`sensor-tag`モジュールを使って、二つのCC2650センサーを接続し、それぞれの温湿度のデータを取得する。<br>

### 説明

---

各センサーをdiscoverした時に、その情報を配列に投げ込んで、foreachで各センサーを起動すれば良いっぽい。

また、sensortag.discoverByUuidで接続するデバイスのMACアドレスでフィルタ出来る。

asyncの仕様をうまく理解してなくて、順不同でfunctionが起動してしまう事があるので要修正。


### 必要なモジュールのインストール

---

今回はどこにもデータ投げないので必要最低限のみ記載。

`npm install async sensortag`

### 使用したコード

---

```js
var util = require('util')
var async = require('async')
var sensortag = require('sensortag')

var tags = [];
var contents = {};

async.series([
    function(callback){
    	// デバイスのMACアドレスを入力
        addDevice('xxxxxxxxxxxx')
        callback()
    },
    function(callback){
    	// デバイスのMACアドレスを入力
        addDevice('xxxxxxxxxxxx')
        callback()
    },
    function(callback){
        setTimeout(callback,5000)
    },
    function(callback){
        tags.forEach(function(tag){
            async.series([
                function(callback){
                    console.log(tag.id + ' connectAndSetUp')
                    tag.connectAndSetUp(callback)
                },
                function(callback){
                    console.log(tag.id + ' enableHumidity')
                    tag.enableHumidity(callback)
                },
                function(callback){
                    setTimeout(callback,2000)
                },
                function(callback){
                    tag.on('humidityChange', function(temperature, humidity){
                           console.log(tag.id + ' \ttemperature = %d C', temperature.toFixed(1))
                           console.log(tag.id + ' \thumidity = %d %', humidity.toFixed(1))
                           contents[tag.id].temperature = Number(temperature.toFixed(1))
                           contents[tag.id].humidity = Number(humidity.toFixed(1))
                    })
                    console.log(tag.id + ' sensorHumidityPeriod')
                    tag.setHumidityPeriod(3000, function(error) {
                        console.log('notifyHumidity')
                        tag.notifyHumidity(function(error){
                            callback()
                        })
                    })
                }
            ])
        })
    }
])

//5秒毎に現在のデータを表示させるだけ。
//データをどこかに投げたい場合はここにデータ投げ込み用のコードを記入する
setInterval(function(){
        console.log(JSON.stringify(contents))
},5000)

//MACアドレス毎にデバイスを識別して、検出したデバイスを配列に投げ込む
function addDevice(uuid){
    sensortag.discoverByUuid(uuid, function discovered(tag){
        console.log('discovered: ' + tag)
        tags.push(tag)
        contents[tag.id]= {}
    })
}
```

### 参考したサイト

---

- [Trying to connect to 2 tags at once #37][sensor-tag-issues]: sensor-tagモジュールの製作者に投げられたIssueスレを参照

[sensor-tag-issues]:https://github.com/sandeepmistry/node-sensortag/issues/37

