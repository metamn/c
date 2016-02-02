{#
  title: Button local
  description: The header of local button. Button content can be added after this header
#}


{% macro button_local(klass) -%}
  <button class="button-local {{ klass }}">
{%- endmacro %}
