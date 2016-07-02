<div class="mockup--browser {{ mockup.klass }}">
  {% include '../__buttons/mockup__buttons.html.swig' %}

  {% if mockup.iframe %}
    {% include "../__iframe/mockup__iframe.html.swig" %}
  {% else %}
    {% include '../../../../structure/figure/figure.html.swig' %}
  {% endif %}

</div>
