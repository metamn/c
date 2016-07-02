<div class="mockup--laptop {{ mockup.klass }}">
  {% include '../__camera/mockup__camera.html.swig' %}

  {% if mockup.iframe %}
    {% include "../__iframe/mockup__iframe.html.swig" %}
  {% else %}
    {% include '../../../../structure/figure/figure.html.swig' %}
  {% endif %}

  <div class="mockup-laptop-bottom">
    {% include '../__opener/mockup__opener.html.swig' %}
  </div>
</div>
