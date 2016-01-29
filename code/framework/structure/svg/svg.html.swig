<aside class="svg svg--{{ svg.type }}">
  <h3 class="svg__title">{{ svg.title }}</h3>

  {% if (svg.type == 'responsive' ) %}
    {% include '{{ site.url }}{{ site.images }}{{ svg.name }}-portrait.svg' %}
    {% include '{{ site.url }}{{ site.images }}{{ svg.name }}-landscape.svg' %}
  {% else %}
    {% include '{{ site.url }}{{ site.images }}{{ svg.name }}.svg' %}
  {% endif %}
</aside>
