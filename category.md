---
layout: page
permalink: /category/
---

<div class="home">
  {% for category in site.categories %}
    {{ category | first }}
  {% endfor %}
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
</div>

