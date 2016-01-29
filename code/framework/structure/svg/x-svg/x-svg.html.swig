<section class="x-svg">
  <h3 class="x-svg__title">SVG examples</h3>

  {% for svg in svgs %}
    {% include '../svg.html.swig' %}
  {% endfor %}
</section>
