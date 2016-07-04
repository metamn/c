<div class="mockup__content">
  <div class="intrinsic-ratio-container">
    {% if mockup.iframe %}
      <div class="intrinsic-ratio-item">
        <iframe class="iframe intrinsic-ratio-object" src="{{ mockup.iframe }}"></iframe>
      </div>
    {% else %}
      {% set klass = "intrinsic-ratio-item" %}
      {% include '../../../../structure/figure/figure.html.swig' %}
    {% endif %}
  </div>
</div>
