{% import "../../../helpers/classname/classname.swig" as c  %}
{% set classname = c.classname(title) %}

{% import "../../../helpers/pagetitle/pagetitle.swig" as t  %}
{% set page_title = t.pagetitle(title, site.title) %}

{% import "../../../helpers/includejs/includejs.swig" as j  %}
{% set scripts = j.includejs(site.javascripts.header) %}

<!doctype html>
<html lang="en" class="{{ classname }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ page_title | safe }}</title>
    <link href="{{ site.url }}{{ site.styles }}site.css" media="screen, projection" rel="stylesheet" type="text/css" />
    {{ scripts | safe }}
  </head>

  <body>
