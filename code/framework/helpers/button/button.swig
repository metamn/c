{#
  title: Button
  description: The header of a button. Button content can be added after this header
#}


{% macro button(klass) -%}
  <button class="button {{ klass }}">
{%- endmacro %}
