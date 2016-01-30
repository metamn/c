<nav class="slider__bullets">
  <h3>Navigation bullets</h3>

  {% for slide in slides %}
    {% include 'bullet/bullet.html.swig' %}
  {% endfor %}
</nav>
