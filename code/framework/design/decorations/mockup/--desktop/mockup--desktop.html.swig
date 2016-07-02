<div class="mockup--desktop {{ mockup.klass }}">
  {% include '../__camera/mockup__camera.html.swig' %}

  {% if mockup.iframe %}
    {% include "../__iframe/mockup__iframe.html.swig" %}
  {% else %}
    {% include '../../../../structure/figure/figure.html.swig' %}
  {% endif %}

  <div class="mockup-desktop-bottom"></div>
  {% include '../__stand/mockup__stand.html.swig' %}
</div>
