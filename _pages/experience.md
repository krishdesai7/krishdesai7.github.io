---
layout: archive
title: "Professional Experience"
permalink: /experience/
author_profile: false
---

{% assign sorted_experience = site.experience | sort: 'date' | reverse %}

{% for post in sorted_experience %}
  {% include archive-single.html %}
{% endfor %}