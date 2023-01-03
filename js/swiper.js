document.addEventListener("DOMContentLoaded", () => {
  $("#slider-1").owlCarousel({
    items: 3,
    touchDrag: true,
    nav: true,
    center: true,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    loop: true,
  });
});
