{#
  title: SVG Inline
  description: Generate a container for inline SVG
#}

{% macro svginline(svg) -%}
  <aside class="svg-inline svg-inline--{{ svg.type }}">
    <h3 class="svg-inline__title">{{ svg.title }}</h3>
{%- endmacro %}
