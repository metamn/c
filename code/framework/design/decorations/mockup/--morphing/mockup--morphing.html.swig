<div class="mockup--morphing {{ mockup.klass }}">
  {% include '../__camera/mockup__camera.html.swig' %}
  {% include '../__sensor/mockup__sensor.html.swig' %}

  {% if mockup.iframe %}
    {% include "../__iframe/mockup__iframe.html.swig" %}
  {% else %}
    {% include '../../../../structure/figure/figure.html.swig' %}
  {% endif %}

  {% include '../__button/mockup__button.html.swig' %}

  <div class="mockup-laptop-bottom">
    {% include '../__opener/mockup__opener.html.swig' %}
  </div>
</div>
