---
layout: post
title: React.jsでマウスオーバーのイベントを作成する
date: 2017-04-23 20:00:00 -0800
categories: react
---

Reactでスタイル切り替える為の個人用メモ

### 目的

---

ReactでCSSの`:hover`と同じ動作を再現する。

実装例は[Codepen][codepen]に記載したので良かったらどうぞ。

<p data-height="300" data-theme-id="29225" data-slug-hash="jmWWqG" data-default-tab="js,result" data-user="naturalclar" data-embed-version="2" data-pen-title="React hover demo" class="codepen">See the Pen <a href="https://codepen.io/naturalclar/pen/jmWWqG/">React hover demo</a> by Smashcat (<a href="http://codepen.io/naturalclar">@naturalclar</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### 説明

---

マウスオーバーのイベントを付与したいComponentの`state`にマウスオーバーしているか否かの値を設け、`onMouseEnter`、及び `onMouseLeave`が起きた際に`handleHover()`を呼び出してその値を切り替える。

Styleは`hover`している状態としていない状態の２つの値を設定する

```js
class Icon extends React.Component{
  constructor (props) {
    super(props);
    this.state= {
      hover: false
    };
  }
  
   handleHover() {
    this.setState({hover: !this.state.hover});
  }
  

  render() {
  //マウスオーバーでstyleを変更したい箇所はthis.state.hoverの値を確認する
    var iconStyle={
      transform: this.state.hover ? 'translateY(-5px)' : 'none',
      boxShadow: this.state.hover ? '3px 3px 5px #000' : 'none',
      color: this.state.hover? "#fff" : "#aaa",
      background: this.state.hover? '#55acee' :'#222',
      transition: "all .3s",
      borderRadius: '50%',
      height: 50,
      width: 50,
      textAlign:'center',
      lineHeight: '50px'
    }
    return (
      <a href={this.props.href}>
        <i 
        className={this.props.icon}
        style={iconStyle}
        onMouseEnter={()=>this.handleHover()} 
        onMouseLeave={()=>this.handleHover()}
        ></i></a>
    )
  };
  
}

class App extends React.Component {
  render() {
    return (
      <Icon href="#" icon="fa fa-2x fa-twitter" />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## 参考サイト

---

[React.js公式ドキュメント][reactref]


[reactref]:https://facebook.github.io/react/docs/events.html
[codepen]:https://codepen.io/naturalclar/pen/jmWWqG