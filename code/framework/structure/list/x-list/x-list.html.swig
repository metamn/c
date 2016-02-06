<section class="x-list">
  <!-- can't have title in a grid !!!
  <h3 class="title">List example</h3>
  -->
  
  {% for item in articles %}
    {% include '../../list-item/list-item.html.swig' %}
  {% endfor %}
</section>
