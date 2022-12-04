const hideLightEffects = () => {
  const lightEffectsWrapper = document.querySelector(".light-effect-wrapper");

  lightEffectsWrapper.classList.add("dissolve");
};

const hide = (el) => {
  el.style.display = "none";
};

const awaitAnimation = setTimeout(hideLightEffects, 2600);
