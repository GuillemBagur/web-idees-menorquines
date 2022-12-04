$(document).ready(function () {
  $("#slider-1").owlCarousel({
    items: 1,
    touchDrag: true,
    nav: true,
    center: true,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    loop: true,
    responsive: {
      550: {
        items: 3,
        touchDrag: false,
      },
    },
  });
});
