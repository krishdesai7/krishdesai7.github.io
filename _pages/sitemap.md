---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
---

<p class="sitemap-intro">
  <a href="{{ '/sitemap.xml' | relative_url }}" rel="alternate" target="_blank">
    Machine readable index.
  </a>
</p>

{% assign main_links = '/about/|/contact/|/experience/|/publications/|/sitemap/|/talks/|/teaching/' | split: '|' %}

<ul class="sitemap-list">
  {% for link in main_links %}
    {% assign page = site.pages | where: 'url', link | first %}
    {% assign page_title = page.title %}
    {% if page_title == nil or page_title == '' %}
      {% assign segments = link | split: '/' %}
      {% assign slug = segments[1] %}
      {% assign fallback = '' %}
      {% assign words = slug | split: '-' %}
      {% for w in words %}
        {% if fallback != '' %}
          {% assign fallback = fallback | append: ' ' %}
        {% endif %}
        {% assign fallback = fallback | append: w | capitalize %}
      {% endfor %}
      {% assign page_title = fallback %}
    {% endif %}

    {% if page_title %}
      <li>
        <a href="{{ link | relative_url }}">{{ page_title | escape }}</a>

        {% assign has_subitems = false %}
        {% assign subitems = nil %}
        {% assign subitem_type = '' %}

        {% if link == '/experience/' %}
          {% assign subitems = site.experience | sort: 'date' | reverse %}
          {% assign has_subitems = true %}
          {% assign subitem_type = 'experience' %}
        {% elsif link == '/publications/' %}
          {% assign subitems = site.publications | sort: 'date' | reverse %}
          {% assign has_subitems = true %}
          {% assign subitem_type = 'publications' %}
        {% elsif link == '/talks/' %}
          {% assign subitems = site.talks | sort: 'date' | reverse %}
          {% assign has_subitems = true %}
          {% assign subitem_type = 'talks' %}
        {% elsif link == '/teaching/' %}
          {% assign subitems = site.teaching | sort: 'year' | reverse %}
          {% assign has_subitems = true %}
          {% assign subitem_type = 'teaching' %}
        {% endif %}

        {% if has_subitems %}
          {% assign subitem_count = subitems | size %}
          {% if subitem_count > 0 %}
            <ul>
              {% for item in subitems %}
                {% assign item_title = item.title | default: item.name %}
                {% if item_title %}
                  {% assign item_url = item.url %}
                  {% if subitem_type == 'publications' %}
                    {% assign item_url = item.paperurl | default: item_url %}
                  {% endif %}
                  {% if item_url %}
                    <li>
                      <a href="{{ item_url | relative_url }}">{{ item_title | escape }}</a>
                    </li>
                  {% endif %}
                {% endif %}
              {% endfor %}
            </ul>
          {% endif %}
        {% endif %}
      </li>
    {% endif %}
  {% endfor %}
</ul>
