const isElementInViewport = (els, errorMargin = 0) => {
  console.log(els.constructor);
  if(!els[0]) els = [els];
  // Iterating on all the els with the same data-id to make sure the viewport scroll adds up
  let results = [];
  for (let el of els) {
    var rect = el.getBoundingClientRect();

    results.push(
      rect.top >= 0-errorMargin &&
        rect.left >= 0-errorMargin &&
        rect.bottom <=
          (window.innerHeight ||
            document.documentElement
              .clientHeight) /* or $(window).height() */ &&
        rect.right <=
          (window.innerWidth ||
            document.documentElement.clientWidth) /* or $(window).width() */
    );
  }

  // Returns true if all elements are in the viewport
  console.log(results.filter((el) => el).length);
  return results.filter((el) => el).length === els.length;
};

const compareSides = (els, halfPage) => {
  let points = [];
  for (let el of els) {
    const elPos = el.getBoundingClientRect().right;
    points.push((elPos - halfPage) / Math.abs(elPos - halfPage));
  }

  const result = points.reduce((a, b) => a + b);
  // It'll return 1 if there are some els in each size of the halfPage
  // Returns 1 if element is on the right and 0 if it's on the left
  return +(result >= 0);
};

const scrollTo = async (els) => {
  const sensibility = 2;
  scrollbar.scrollTop = 0;
  while (!isElementInViewport(els)) {
    scrollbar.scrollTop += 3 * sensibility;
    await sleep(2);
  }

  checkContentisTotallyHorizontal();
};

// Event listener handle to local anchors clicks
document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.dataset.role !== "scroll-link") return;
  const scrollToID = el.dataset.scrollto;
  const scrollToObjs = document.querySelectorAll(`[data-id="${scrollToID}"]`);
  scrollTo(scrollToObjs);
});