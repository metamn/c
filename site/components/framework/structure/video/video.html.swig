<video class="video" {{ video.params }}>
  {% if video.webm %}
    <source src="{{ site.url }}{{ site.videos }}{{ video.webm }}.webm" type="video/webm">
  {% endif %}

  {% if video.mp4 %}
    <source src="{{ site.url }}{{ site.videos }}{{ video.mp4 }}.mp4" type="video/mp4">
  {% endif %}
</video>
