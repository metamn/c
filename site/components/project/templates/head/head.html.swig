{% import "../../../framework/helpers/classname/classname.swig" as c  %}
{% set classname = c.classname(title) %}

{% import "../../../framework/helpers/pagetitle/pagetitle.swig" as t  %}
{% set page_title = t.pagetitle(title, site.title) %}

{% import "../../../framework/helpers/includejs/includejs.swig" as j  %}
{% set scripts = j.includejs(site.javascripts.header) %}

<!doctype html>
<html lang="en" class="{{ classname }} {{ klass }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ page_title | safe }}</title>


    <link href="{{ site.url }}assets/styles/site.css" media="screen, projection" rel="stylesheet" type="text/css" />

    <script src="https://use.typekit.net/nvy7idl.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>

    {{ scripts | safe }}

    {% include '__favicon/head__favicon.html.swig' %}
  </head>

  <body>
