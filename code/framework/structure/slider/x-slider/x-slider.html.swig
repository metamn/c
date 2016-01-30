{% import '../../../helpers/slider/slider.swig' as s %}

<section class="x-slider">
  <h3 class='title'>Slider example</h3>

  {{ s.slider('Demo slider', 'demo-slider') }}
    {% for slide in slides %}
      {% include 'x-slide/x-slide.html.swig' %}
    {% endfor %}
    </div>
  </section>
</section>
