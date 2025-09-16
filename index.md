---
layout: single
permalink: "/"
title: "Krish Desai"
author_profile: false
classes: wide
excerpt: "Machine learning for physics — unfolding, inference, and practical statistics."
---

<div class="home-profile__image">
  <img src="{{ site.author.avatar | relative_url }}" alt="{{ site.author.name }}">
</div>

<div class="home-content-grid">
  <div class="primary-column">
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

  <div class="secondary-column">
    <h3>Recent Talks</h3>
    {% assign talks = site.talks | sort: 'date' | reverse %}
    {% for t in talks limit:3 %}
      <div class="archive__item">
        <h4 class="archive__item-title"><a href="{{ t.url | relative_url }}">{{ t.title | escape }}</a></h4>
        {% assign short_venue = t.venue %}
        {% if t.venue contains "Neural Information Processing Systems" %}
          {% assign short_venue = "NeurIPS" %}
        {% endif %}
        <p class="archive__item-meta">{% if short_venue %}{{ short_venue }}{% endif %}{% if t.date %}{% if short_venue %} | {% endif %}{{ t.date | date: "%B %Y" }}{% endif %}</p>
      </div>
    {% endfor %}
    <p><a href="{{ '/talks/' | relative_url }}">All talks ▶︎</a></p>
  </div>
</div>