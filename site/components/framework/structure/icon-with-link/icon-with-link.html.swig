{% import "../../helpers/link/link.swig" as l  %}
<div class="icon-with-link">
  {% include '../icon/icon.html.swig' %}
  <span class="icon-with-link__link">{{ l.link(link) }}{{ link.title | safe }}</a></span>
</div>
