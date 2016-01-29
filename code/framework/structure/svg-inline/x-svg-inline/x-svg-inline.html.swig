{% import "../../../helpers/svginline/svginline.swig" as s  %}

<section class="x-svg-inline">
  <h3 class="x-svg-inline__title">SVG inline examples</h3>

  {% set svg = { 'title': 'Fluid SVG' } %}
  {{ s.svginline(svg) }}
    <svg viewBox="0 0 700 700">
      <rect x="100" y="100" width="500.00000000000017" height="500.0000000000006"  fill="rgba(95, 205, 167, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1"/>
    </svg>
  </aside>

  {% set svg = { 'title': 'Fullscreen SVG', 'type': 'fullscreen' } %}
  {{ s.svginline(svg) }}
    <svg viewBox="0 0 700 700">
      <rect x="100" y="100" width="500.00000000000017" height="500.0000000000006"  fill="rgba(95, 205, 167, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1"/>
    </svg>
  </aside>


  {% set svg = { 'title': 'Responsive SVG', 'type': 'responsive' } %}
  {{ s.svginline(svg) }}
    <svg class="portrait" viewBox="0 0 768 1024" preserveAspectRatio="xMinYMin slice">
      <rect x="0" y="0" width="768" height="1024"  fill="rgba(95, 205, 167, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1"/>
    </svg>

    <svg class="landscape" viewBox="0 0 1366 768" preserveAspectRatio="xMinYMin slice">
      <rect x="0" y="0" width="1366" height="768"  fill="rgba(95, 205, 167, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1"/>
    </svg>
  </aside>

</section>
