@mixin figure--loading($placeholder-color) {
  background-position: center center;
  background-repeat: no-repeat;
  background-color: $placeholder-color;
  background-image: url("{{ site.url }}{{ site.images }}spinner.svg");

  &--loaded {
    background: transparent;
    background-image: none;
  }
}
