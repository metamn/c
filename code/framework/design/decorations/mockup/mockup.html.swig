<div class="mockup">
  {% if mockup.type == 'mobile' %}
    {% include '--mobile/mockup--mobile.html.swig' %}
  {% elseif mockup.type == 'tablet' %}
    {% include '--tablet/mockup--tablet.html.swig' %}
  {% elseif mockup.type == 'tablet landscape' %}
    {% set klass = 'mockup--tablet-landscape' %}
    {% include '--tablet/mockup--tablet.html.swig' %}
  {% elseif mockup.type == 'laptop' %}
    {% include '--laptop/mockup--laptop.html.swig' %}
  {% elseif mockup.type == 'desktop' %}
    {% include '--desktop/mockup--desktop.html.swig' %}
  {% elseif mockup.type == 'browser' %}
    {% include '--browser/mockup--browser.html.swig' %}
  {% elseif mockup.type == 'morphing' %}
      {% include '--morphing/mockup--morphing.html.swig' %}
  {% endif %}
</div>
