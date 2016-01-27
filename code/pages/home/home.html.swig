{% extends '../../framework/templates/default/default.html.swig' %}
{% block content %}

  home

  {% set image = images[0] %}
  {% include '../../framework/structure/figure/figure.html.swig' %}

{% endblock %}
