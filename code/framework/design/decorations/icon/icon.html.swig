<div class="icon">
  {% if icon.url %}
    <a class="link" href="{{ icon.url }}" title="{{ icon.title }}">
  {% endif %}

  <svg class="icon__glyph icon--{{ icon.name }}"><use xlink:href="#icon-{{ icon.name }}"></use></svg>
  <span class="icon__title">{{ icon.title }}</span>

  {% if icon.url %}</a>{% endif %}
</div>
