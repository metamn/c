{% extends '../../framework/templates/default/default.html.swig' %}
{% block content %}

  {% include "../../framework/structure/intrinsic-ratio-flexbox/x-intrinsic/x-intrinsic.html.swig" %}
  {% include "../../framework/structure/intrinsic-ratio/x-intrinsic-ratio/x-intrinsic-ratio.html.swig" %}
  {% include '../../project/devices/devices.html.swig' %}

{% endblock %}
