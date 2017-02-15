---
layout: post
categories: jekyll bootstrap
---

サイトにBootstrap4を導入する事が出来たので、導入手順を書き出す。
軽く探した限り、Bootstrap4を導入するガイドが見当たらなくて少し苦労した。

### Bootstrapとは

<a href="https://v4-alpha.getbootstrap.com/">Bootstrap</a>とはTwitter社が開発したオープンソースのフレームワークである。
様々なCSSのテンプレートが用意されていて、自分で作る事無く良い感じでWebデザインが行える。
ブラウザのサイズを基準にして形が変わるレスポンシブデザインに対応していて、
一つのコードでスマホのブラウザからPCのブラウザのレイアウトまで幅広く提供する事が出来る。

また、公式サイトにて色々とサンプルコードが用意されてるのでそれをコピーして簡単に実装出来る。

今回は最新(2017/02/14現在)のBootstrap4 Alpha 6を導入する方法を記載する。

### Bootstrapのソースコードをダウンロード



### ソースコードをサイトのフォルダに入れる
`assets`フォルダに`main.scss`と言う名前のファイルを作成する。
```sass
---

---
@charset "utf-8";
@import "bootstrap";
```


### Sassファイルを参照するフォルダを設定する

jekyllのconfigで`sass_dir`を設定する事で、サイト生成時に、設定したフォルダを参照する用になる。

jekyllの`_config.yml`ファイルを開き、以下の文を追加する：
```yaml
sass:
 sass_dir: _sass
```


### 参考したサイト
[Jekyll公式ページ：Assets説明ページ][jekyll-documentation-assets]

[jekyll-documentation-assets]: https://jekyllrb.com/docs/assets/

