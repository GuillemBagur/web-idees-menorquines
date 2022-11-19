const hideLightEffects = () => {
    const lightEffectsWrapper = document.querySelector(".light-effect-wrapper");

    lightEffectsWrapper.classList.add("dissolve");
    
}

const awaitAnimation = setTimeout(hideLightEffects, 2600);
