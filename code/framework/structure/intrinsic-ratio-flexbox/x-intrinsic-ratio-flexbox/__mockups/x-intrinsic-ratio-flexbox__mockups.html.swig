<section class="x-intrinsic-ratio-flexbox__mockups">
  <h3>Mockups</h3>

  {% for image in devices.images %}
    <article class="article">
      <h3 class="article__title">{{ image.title }}</h3>

      <aside class="article__content">
        <div class="intrinsic-ratio-container">
          <div class="intrinsic-ratio-item">
            <div class="intrinsic-ratio-object">
              <img class="intrinsic-ratio-object" src="http://lorempixel.com/400/200">
            </div>
          </div>
        </div>
      </aside>

    </article>
  {% endfor %}
</section>
