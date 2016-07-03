<section class="x-intrinsic-ratio-flexbox__mockups">
  <h3>Mockups</h3>

  {% for image in devices.images %}
    <article class="article">
      <h3 class="article__title">{{ image.title }}</h3>

      <aside class="article__content">
        <h3 class="title">Some content here and an image</h3>
        {% include "../../../figure/figure.html.swig" %}
      </aside>

      <p>
        It's a footer !!!
      </p>
    </article>
  {% endfor %}
</section>
