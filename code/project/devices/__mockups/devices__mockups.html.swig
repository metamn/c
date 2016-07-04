<section class="devices__mockups">
  <h3>Device mockups</h3>

  {% set image = devices.images[0] %}
  {% set mockup = { type: 'morphing', image: image, klass: 'mockup--mobile' } %}
  {% include "../../../framework/design/decorations/mockup/mockup.html.swig" %}


  <span class="hidden-mockups">
    {% for image in devices.images %}
      {% set mockup = { type: image.mockup, image: image } %}
      {% include "../../../framework/design/decorations/mockup/mockup.html.swig" %}
    {% endfor %}
  </span>
</section>
