const imagesCarousel = async () => {
  console.log(1);
  const workTypeOrder = texts; // texts is an array in morphism.js
  const slideDuration = (cooldownTime*1000)+10; // morphTime is a var in morphism.js
  const transitionDuration = morphTime*1000; // cooldownTime is a var in morphism.js
  const mainImg = document.getElementById("main-img");
  const transitionImg = document.getElementById("transition-img");

  const images = [
    {
      type: "Bordado",
      src: "imgs/logos/acquaroyal.jpg",
      alt: "Trabajo de bordado para",
    },
    {
      type: "Branding",
      src: "imgs/logos/makito.jpg",
      alt: "Trabajo de bordado para",
    },
    {
        type: "Ropa laboral",
        src: "imgs/logos/acquaroyal.jpg",
        alt: "Trabajo de bordado para",
      },
      {
        type: "Ropa publicitaria",
        src: "imgs/logos/makito.jpg",
        alt: "Trabajo de bordado para",
      },
      {
        type: "Impresión",
        src: "imgs/logos/acquaroyal.jpg",
        alt: "Trabajo de bordado para",
      },
      {
        type: "Serigrafía",
        src: "imgs/logos/makito.jpg",
        alt: "Trabajo de bordado para",
      },
  ];

  for (let i = 0; 1; i++) {
    const workType = workTypeOrder[i%workTypeOrder.length];
    const nextWorkType = workTypeOrder[(i+1)%workTypeOrder.length];
    console.log(workType);
    const filteredImages = images.filter(img => img.type === workType);
    const nextFilteredImages = images.filter(img => img.type === nextWorkType);
    const image = filteredImages[i % filteredImages.length];
    const nextImage = nextFilteredImages[(i+1) % nextFilteredImages.length];
    mainImg.src = image.src;
    mainImg.alt = image.alt;
    transitionImg.classList.remove("images-carousel__img--visible");
    transitionImg.src = nextImage.src;
    transitionImg.alt = nextImage.alt;
    await sleep(slideDuration);
    transitionImg.classList.add("images-carousel__img--visible");
    await sleep(transitionDuration);
  }
};

(async () => {
  imagesCarousel();
})();
