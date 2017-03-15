---
layout: default
title: Blog
permalink: /blog/
menu: true
---

<div class="home">
  {% for post in site.posts %}
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">
          <a href="{{ post.url | relative_url }}" >{{ post.title | escape }}</a>
        </h4>
        <h6 class="card-subtitle mb-2 text-muted">{{ post.date | date: "%b %-d, %Y" }}</h6>
        <p>
          <span class="text-muted">Category:</span> 
          {% include post-categories.html %}
        </p>
        </div>
    </div>
    <br>
  {% endfor %}
</div>

