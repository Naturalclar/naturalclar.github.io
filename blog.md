---
layout: page
title: Blog
permalink: /blog/
---

<div class="home">
  {% for post in site.posts %}
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h4>
        <h6 class="card-subtitle mb-2 text-muted">{{ post.date | date: "%b %-d, %Y" }}</h6>
        </div>
    </div>
    <br>
  {% endfor %}
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
</div>

