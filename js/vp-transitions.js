const onVPTransition = (el) => {
  console.log(isElementInViewport(el, 200));
  if (!isElementInViewport(el)) {
    el.classList.remove("fade-in")
    return;
  }

  console.log(2);
  el.classList.add("fade-in");
};

const execTransitions = () => {
  const allEls = document.querySelectorAll(`[data-transition="fadein"]`);
  for (let el of allEls) {
    onVPTransition(el);
  }
};
