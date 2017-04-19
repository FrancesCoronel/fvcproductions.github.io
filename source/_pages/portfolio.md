---
layout: archive
title: "Portfolio 💼"
permalink: /portfolio/
---

{% include base_path %}

<div class="grid__wrapper">
	{% assign sorted_portfolio = (site.portfolio | sort: 'date') | reverse %}
    {% for post in sorted_portfolio %}
        {% include archive-item/single.html type="grid" %}
    {% endfor %}
</div>