{#
  title: SVG Inline
  description: Generate a container for inline SVG
#}

{% macro svginline(svg) -%}
  <aside class="svg-inline {% if (svg.type) %}svg-inline--{{ svg.type }}{% endif %} {{ svg.klass}}">
    <h3 class="svg-inline__title">{{ svg.title }}</h3>
{%- endmacro %}
