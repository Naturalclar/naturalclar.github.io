---
layout: post
title: "Github Pagesに好きなDNSを設定する"
date: 2017-02-12 23:07:00 -0800
categories: Github CDN DNS
---

Github PagesにDNSを設定する事が出来たので、取った手順をメモ


<h2>DNSの取得</h2>
<a href="https://www.chenhuijing.com/blog/setting-up-custom-domain-github-pages/">こちら</a>のサイトを参考にして<a href="https://www.namesilo.com/">Namesilo</a>から年間$9でドメインを取得した。

<h2>CNAMEファイルの作成</h2>
自分のGithub Pagesのリポジトリに、先程取得したドメイン名のみが記載されている<code>CNAME</code>と言う名前のファイルを作成する。

<h2>Cloudflareに登録</h2>
<a href="https://www.cloudflare.com/">Cloudflare</a>はCDNサービスを提供しているサイトで、個人用のサイトの為なら無料でアカウントが作成可能。
Cloudflareを導入する事で、カスタムドメインでもHttpsで配信される様になる。
取得したドメインをCloudflareに追加する事でそのドメインに接続する為のネームサーバ情報を取得出来る。

先程Namesiloから取得したドメイン名を入力して、得たネームサーバ情報をNamesiloのネームサーバ設定に入力する。

<h2>参考したサイト</h2>
<a href="https://www.chenhuijing.com/blog/setting-up-custom-domain-github-pages/">https://www.chenhuijing.com/blog/setting-up-custom-domain-github-pages/</a>