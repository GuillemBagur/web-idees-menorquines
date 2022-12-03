/**
 * Checks if all of the elements of the given array are visible on ViewPort
 * @param {array} els - An array of elements to check if are all of them on vp or not
 * @param {number} errorMargin - A number to set any error margin
 *
 * @returns True (if all the elements are visible) and False if not
 */
const isElementInViewport = (els, errorMargin = 0) => {
  if (!els[0]) els = [els];
  // Iterating on all the els with the same data-id to make sure the viewport scroll adds up
  let results = [];
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const rect = el.getBoundingClientRect();

    results.push(
      rect.top >= 0 - errorMargin &&
        rect.left >= 0 - errorMargin &&
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

/**
 * Scrolls until all the "Scroll-to" elements passed by param
 * are visible
 *
 * @param {array} els - The array of "Scroll-to" elements
 */
const scrollTo = async (els) => {
  /* There always two "Scroll-to" elements per section. So, if there are more, there's an error
  that could make the website broke (infinite scrolling)
  */
  for(let el of els) {
    console.log(el.dataset.id);
  }
  if (els.length != 2) return;
  console.log(2);
  const sensibility = 2;
  scrollbar.scrollTop = 0;
  while (!isElementInViewport(els)) {
    scrollbar.scrollTop += 3 * sensibility;
    await sleep(2);
  }

  checkContentisTotallyHorizontal();
};

/**
 * Checks if there is a fragment identifier in the URL and
 * provokes a scroll intil have the fragment in vp
 */
const checkFragmentIdentifierInURL = () => {
  const hash = location.hash.substring(1);
  if (!hash.length) return;

  const scrollToEls = document.querySelectorAll(`[data-id="${hash}"]`);
  scrollTo(scrollToEls);
};

document.addEventListener("DOMContentLoaded", () => {
  checkFragmentIdentifierInURL();
});

window.addEventListener("hashchange", () => {
  checkFragmentIdentifierInURL();
});
