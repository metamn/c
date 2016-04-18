<section class="x-fixed-scroll">
  <h3>Fixed scroll example</h3>

  {% set to_display = ['title', 'thumb'] %}
  {% set collection = 'articles' %}

  {% for slide in slides %}
    <section class="slide">
      <h3 class="slide__title">{{ slide.title }}</h3>

      <div class="slide__content">
        {% for item in articles %}
          {% include '../../list-item/list-item.html.swig' %}
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</section>
