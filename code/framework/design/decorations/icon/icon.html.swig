{% import "../../../helpers/svginline/svginline.swig" as s  %}
{% import "../../../helpers/link/link.swig" as l  %}

<div class="icon icon--{{ icon.name }}">
  {% if icon.link %}
    {{ l.link(link) }}
  {% endif %}

  {% set svg = { 'title': icon.title, 'klass': 'icon__glyph' } %}
  {{ s.svginline(svg) }}
    <svg class="svg">
      <use xlink:href="#icon-{{ icon.name }}"></use>
    </svg>
  </aside>

{% if icon.link %}</a>{% endif %}
</div>
