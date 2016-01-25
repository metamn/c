---
title: Include Javascripts
description: Include scripts into the source code
bug: async will be transfomed by | safe SWIG filter into async= so we will not use
---

{% macro includejs(scripts) -%}
  {% for script in scripts %}
    {% if script.type == "external" %}
      {# https://use.typekit.net/nvy7idl.js #}
      <script src="{{ script.file }}"></script>
    {% elseif script.type == "inline" %}
      {# try{Typekit.load({ async: true });}catch(e){}} #}
      <script>{{ script.content }}</script>
    {% else %}
      {# site/assets/scripts/picturefill.min.js #}
      <script src="{{ site.url }}assets/scripts/{{ script.file }}"></script>
    {% endif %}
  {% endfor %}
{%- endmacro %}
