---
layout: single
permalink: "/"
title: "Krish Desai"
author_profile: false
classes: wide
excerpt: "Machine learning for physics — unfolding, inference, and practical statistics."
read_time: false
comments: false
share: false
related: false
---

{% include home-profile.html %}

<div class="grid__wrapper">
  <div class="grid__item one-half">
    <h3>Recent Publications</h3>
    {% assign pubs = site.publications | sort: 'date' | reverse %}
    {% for p in pubs limit:3 %}
      <div class="archive__item">
        <h4 class="archive__item-title"><a href="{{ p.paperurl | default: p.url | relative_url }}">{{ p.title | escape }}</a></h4>
        <p class="archive__item-meta">{% if p.venue %}{{ p.venue | escape }}{% endif %}{% if p.date %}{% if p.venue %}, {% endif %}{{ p.date | date: "%Y" }}{% endif %}</p>
      </div>
    {% endfor %}
    <p><a href="{{ '/publications/' | relative_url }}">See all publications ▶︎</a></p>
  </div>

  <div class="grid__item one-half">
    <h3>Recent Talks</h3>
    {% assign talks = site.talks | sort: 'date' | reverse %}
    {% for t in talks limit:3 %}
      <div class="archive__item">
        <h4 class="archive__item-title"><a href="{{ t.url | relative_url }}">{{ t.title | escape }}</a></h4>
        {% assign short_venue = t.venue %}
        {% if t.venue contains "Neural Information Processing Systems" %}
          {% assign short_venue = "NeurIPS" %}
        {% elsif t.venue contains "International Conference on Machine Learning" %}
          {% assign short_venue = "ICML" %}
        {% elsif t.venue contains "Conference on Computer Vision and Pattern Recognition" %}
          {% assign short_venue = "CVPR" %}
        {% elsif t.venue contains "International Conference on Learning Representations" %}
          {% assign short_venue = "ICLR" %}
        {% endif %}
        <p class="archive__item-meta">{% if short_venue %}{{ short_venue }}{% endif %}{% if t.date %}{% if short_venue %} | {% endif %}{{ t.date | date: "%B %Y" }}{% endif %}</p>
      </div>
    {% endfor %}
    <p><a href="{{ '/talks/' | relative_url }}">All talks ▶︎</a></p>
  </div>
</div>