const getTranslateX = (el) => {
  const style = window.getComputedStyle(el);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

const slideScroll = btn => {
  const slider = btn.parentElement;
  const sliderDimensions = slider.getBoundingClientRect();
  const slides = slider.querySelector(".slider__slides-wrapper");
  const scrollDir = Number(btn.dataset.direction);
  const slidesDimensions = slides.getBoundingClientRect();
  const speed = 150 * slidesDimensions.width / 800;

  const currentTransform = getTranslateX(slides);
  const newTransform = currentTransform + speed * scrollDir;
  let translate = newTransform;

  //if(sliderDimensions.right > slidesDimensions.right && scrollDir < 0) translate = currentTransform ;
  //if(sliderDimensions.left < slidesDimensions.left && scrollDir > 0) translate = currentTransform ;


  slides.style.transform = `translateX(${translate}px)`;
}