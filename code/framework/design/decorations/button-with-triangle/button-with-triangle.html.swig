{% import '../../../helpers/button/button.swig' as b %}

{{ b.button('button-with-triangle ' + button.klass) }}
  <span class="button-with-triangle__text">{{ button.text }}</span>

  {% set direction = button.direction %}
  {% set klass = 'button-with-triangle__triangle ' + button.klass %}
  {% include '../triangle/triangle.html.swig' %}
</div>
