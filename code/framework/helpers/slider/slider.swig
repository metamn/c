{#
  title: Slider
  description: a pure Javascript slider
#}


{% macro slider(title, klass) -%}
  <section class="slider {{ klass }}">
    <h3 class="slider__title">{{ title }}</h3>

    <div class="slider__slides">
{%- endmacro %}
