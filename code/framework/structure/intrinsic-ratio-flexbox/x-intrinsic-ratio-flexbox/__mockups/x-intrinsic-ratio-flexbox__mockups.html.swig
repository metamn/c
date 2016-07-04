<section class="x-intrinsic-ratio-flexbox__mockups">
  <h3>Mockups</h3>

  {% for image in devices.images %}
    <article class="article">
      <h3 class="article__title">{{ image.title }}</h3>

      <div>Some content here</div>

      <aside class="article__content">
        <h3 class="title">and an image</h3>
        <div class="intrinsic-ratio-container">
          {% include "../../../figure/figure.html.swig" %}
        </div>
      </aside>

      <p>
        It's a footer !!!
      </p>
    </article>
  {% endfor %}
</section>
