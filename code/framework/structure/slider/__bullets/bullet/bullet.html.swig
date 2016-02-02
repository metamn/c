{% import '../../../../helpers/button-local/button-local.swig' as b %}

{% set klass = 'bullet--inactive' %}
{% if loop.first %}
  {% set klass="bullet--active" %}
{% endif %}

{{ b.button_local('bullet bullet-' + loop.index + ' ' + klass) }}
  <span class="span inactive">O</span>
  <span class="span active">&bull;</span>
</button>
