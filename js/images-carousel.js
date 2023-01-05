const imagesCarousel = async () => {
  const slideDuration = cooldownTime * 1000 + 20; // morphTime is a var in morphism.js
  const transitionDuration = morphTime * 1000; // cooldownTime is a var in morphism.js
  const mainImg = document.getElementById("main-img");
  const transitionImg = document.getElementById("transition-img");

  const keyType = [
    "Bordado",
    "Diseño gráfico",
    "Ropa laboral",
    "Ropa publicitaria",
    "Impresión",
    "Serigrafía",
  ];

  const images = [
    {
      type: "Bordado",
      src: "imgs/fotos/BRODAT.jpg",
      alt: "Trabajo de bordado para Puspaayu - Idees Menorquines",
    },
    {
      type: "Diseño gráfico",
      src: "imgs/fotos/SESVOLTES.jpg",
      alt: "Logotipo para Ses Voltes Espai Gastronòmic - Idees Menorquines",
    },
    {
      type: "Ropa laboral",
      src: "imgs/fotos/ROBA LABORAL.jpg",
      alt: "Ropa laboral para Joan Capella - Idees Menorquines",
    },
    {
      type: "Ropa publicitaria",
      src: "imgs/fotos/ROBA PUBLICITARIA 2.jpg",
      alt: "Ropa publicitaria para Artiem Half Menorca - Idees Menorquines",
    },
    {
      type: "Impresión",
      src: "imgs/fotos/IMPRESSIÓ DIGITAL 2.jpg",
      alt: "Trabajo de impresión digital para UD Mahón - Idees Menorquines",
    },
    {
      type: "Serigrafía",
      src: "imgs/fotos/SERIGRAFIA.jpg",
      alt: "Serigrafía para Per La Mar Viva - Idees Menorquines",
    },
  ];

  for (let i = 0; 1; i++) {
    const workType = keyType[i % keyType.length];
    const nextWorkType = keyType[(i + 1) % keyType.length];
    const filteredImages = images.filter((img) => img.type === workType);
    const nextFilteredImages = images.filter(
      (img) => img.type === nextWorkType
    );
    const image = filteredImages[i % filteredImages.length];
    const nextImage = nextFilteredImages[(i + 1) % nextFilteredImages.length];
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
