{% extends '../../framework/templates/default/default.html.swig' %}
{% block content %}

  <div class="flip">
    {% set text = "flip" %}
    {% include '../../framework/behavior/flip/flip.html.swig' %}
  </div>

{% endblock %}
