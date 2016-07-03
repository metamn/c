<aside class="x-intrinsic-ratio--flex-column">
  <h3 class="title">Intrinsic ratio with image in a flexbox, displayed in a column</h3>

  <div class="intrinsic-ratio-container">
    <div class="intrinsic-ratio-item">
      {% set image = images[0] %}
      {% include '../../../figure/figure.html.swig' %}
    </div>
  </div>

  <p>
    The image is not visible. It should have it's dimension set manually.
  </p>
</aside>
