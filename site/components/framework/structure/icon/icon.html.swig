<div class="icon">
  {% if icon.link != '' %}
    <a class="link" title="{{ link.title }}" href="{{ link.url }}">
      <img class="img" src="{{ site.url }}{{ site.images}}icon-{{ icon.name }}.svg" alt="{{ icon.title }}">
    </a>
  {% else %}
    <img class="img" src="{{ site.url }}{{ site.images}}icon-{{ icon.name }}.svg" alt="{{ icon.title }}">
  {% endif %}
</div>
